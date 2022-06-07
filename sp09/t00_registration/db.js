const mysql = require('mysql2');
const config = require('./config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/user');

exports.register = async (req, res) => {
    if (req.method === 'GET') {
        res.sendFile(__dirname + '/public/index.html');
    } 
    else {
        console.log(req.body);  
        valid = await validate(req.body);
        console.log(valid);

        if (valid.status) {
            let user = new User();
            let hashedPassword = await bcrypt.hash(req.body.password, 8);
            let result = user.save({
                login: req.body.login,
                password: hashedPassword,
                name: req.body.name,
                email: req.body.email            
            });
            
            if (result) {
                if (bcrypt.compare(req.body.password, req.body.confirmPass)) {
                    res.sendFile(__dirname + '/public/registerDone.html'); 
                }
            }
        } 
        else {
            res.send(render());
        }
    }
}

async function validate(data) {
    let user = new User();
    let status = true;
    let error = '';

    let result = await user.getList({login: data.login});
    if (result.length > 0) {
        status = false;
        error += "Login already used, choose another";
    }

    let result1 = await user.getList({email: data.email});
    if (result1.length > 0) {
        status = false;
        error += "Email already used, choose another";
    }

    return {status: !(result.length + result1.length), error: error};
}   

function render() {
    let result = '';
    result += `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Register Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" 
            rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <meta name="description" content="t00. Register">
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <div class="card container mt-4">
            <div class="card-body">
                <form action="/user/registration" method="POST">
                    <div class="mb-3">
                        <label for="login" class="form-label">Login</label>
                        <input type="text" class="form-control" id="login" name="login" minlength="6" required>
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password" minlength="6" required>
                    </div>

                    <div class="mb-3">
                        <label for="confirmPass" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="confirmPass" name="confirmPass" minlength="6" required>
                    </div>

                    <div class="mb-3">
                        <label for="name" class="form-label">Full name</label>
                        <input type="text" class="form-control" id="name" name="name" minlength="6" required>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>

                    <button type="submit" class="btn btn-primary">Register User</button>
                </form>
            </div>
            <h4 class="alert alert-danger mt-4">${valid.error}</h4>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" 
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous">
        </script>
    </body>
    </html>`;
    return result;
}