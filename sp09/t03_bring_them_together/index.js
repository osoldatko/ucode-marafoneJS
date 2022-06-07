const express = require('express');
const session = require('express-session');
const path = require("path");
const cookieParser = require("cookie-parser");

const userRouter = express.Router();
const controller = require("./db");

const app = express();

const port = 3000;
const host = "127.0.0.1";

const publicDirectory = path.join(__dirname, "/public");
app.use(session({secret: 'dfhfdjhhk', saveUninitialized: true, resave: true, user: {}}));
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use('/', express.static(__dirname + '/public'));

userRouter.post("/create", controller.addUser);
userRouter.post("/validate", controller.addUser);
userRouter.use("/home", controller.home);
app.use("/user", userRouter);
app.use("/done", controller.done);
app.get("/logout", controller.logout);
app.get("/register", controller.register);
app.use("/reminder", controller.reminder);
app.use("/login", controller.login);
app.use("/", controller.index);

app.listen(port, host, function() {
    console.log(`App Started on PORT ${port} \nhttp://${host}:${port} \nClick Ctrl + C for stop server`);
});



