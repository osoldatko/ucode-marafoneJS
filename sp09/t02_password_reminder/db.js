const User = require('./models/user');
const _conf = require('./config.json');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const nodemailer = require("nodemailer");

exports.addUser = async function (req, res) {
    if (req.method === 'GET') {
        res.send(render('register'));
    } 
    else {
        console.log(req.body);
        let valid = await validate(req.body);
        console.log(valid);

        if (valid.status) {
            let hashedPassword = await bcrypt.hash(req.body.password, 8);
            let user = new User();
            user.save({
                login: req.body.login,
                password: req.body.password,
                name: req.body.name,
                email: req.body.email            
            });
            
            if (user) {
                if (bcrypt.compare(req.body.password, req.body.confirm)) {
                    res.send(render('registerDone'));
                }
            }   
        } 
        else {
            res.send(render('register', {text: `<div class="container mt-4"><h4 class="alert alert-danger mt-4">${valid.error}</h4></div>`}))
        }
    }
}

exports.index = function(req, res) {
    if(req.session.user) {
        res.send(render("loginDone"));
    }
    else {
        res.send(render('index'));
    }
}

exports.done = function(req, res) {
    res.redirect("/registerDone.html");
}

exports.register = function(req, res) {
    res.send(render('register'));
}

exports.home = function(req, res) {
    if (req.session.user) {
        console.log(req.session.user);
        res.send(render('loginDone', {text: `User status:${req.session.user.status}</br>`}));
    }
    else {
        res.redirect('/login');
    }
}

exports.reminder = async function(req, res) {
    if(req.method === 'GET') {
        res.send(render('reminder'));
    }
    else {
        let user = new User();
        let result = await user.getList({
            email: req.body.email
        });
        let message = "";

        if (result.length > 0) {
            sendEmail(result[0].email, result[0].password);
            message = "<div class='success-box'>Password was sent to your email</div>";
        }
        else {
            message = "<div class='error-box'>User with such email doesnt exists</div>";
        }

        res.send(render(
            'reminder',
            {text: message})
        );
    }
}

exports.login = async function(req, res) {
    console.log(req.method);
    if (req.method === 'GET') {
        if (req.session.user) {
            res.redirect('/user/home');
        } 
        else {
            res.send(render('login'));
        }
    } 
    else {
        let sess = req.session;
        if (sess.user) {
            res.redirect('/user/home');
        } 
        else {
            let user = new User();
            let result = await user.getList({
                login: req.body.login
            });
            console.log(result);

            if (result.length > 0 && req.body.password === result[0].password) {
                sess.user = result[0];
                console.log("----" + result[0]);
                res.redirect('/user/home');
            } 
            else {
                res.send(render('login', {text: '<div class="error-box">Error!! Password and login not valid</div>'}));
            }
        }
    }
}

exports.logout = async function(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/login');
    });
}

async function validate(data) {
    let user = new User();
    let status = true;
    let error = '';

    let result = await user.getList({login: data.login});
    if (result.length > 0) {
        status = false;
        error += "Login already used, please change it";
    }

    let result1 = await user.getList({email: data.email});
    if(result1.length > 0) {
        status = false;
        error += "Email already used, please change it";
    }

    return {status: !(result.length + result1.length), error: error};
}

function render(file, insert = {}) {
    try {
        let data = fs.readFileSync(__dirname + `/${_conf.view}/${file}.html`, 'utf-8');

        for (let key in insert) {
            data = data.replaceAll(`{#${key.toUpperCase()}#}`, insert[key]);
        }

        while (data.indexOf("{#") > 0) {
            data = data.replaceAll(data.slice(data.indexOf("{#"), data.indexOf("#}") + 2), "");
        }

        return data;
    } 
    catch (err) {
        console.error(err);
    }
    return false;
}

async function sendEmail(email, pass) {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
            user: testAccount.user,
            pass: testAccount.pass, 
        },
    });

    let info = await transporter.sendMail({
        from: '"Sprint09 - Y. Myros" <yura.myros@ukr.net>',
        to: email, 
        subject: "Important! Password reminder.", 
        text: "Your password is: <b>" + pass + "</b>",
        html: "Your password is: <b>" + pass + "</b>",
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
