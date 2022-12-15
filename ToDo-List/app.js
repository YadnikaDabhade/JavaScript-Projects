 const express = require("express");   //  it provide the express in js
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");  // it provide the date

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));  //it uses the bodyParser 
app.use(express.static("public"));  //it uses exoress.static

let tasks = [];   // it sets the task
let works = [];   //it sets the work

app.get("/", function (req, res) {
    let currentDay = date.getDate();  //it provide the currentday
    res.render("index", { title: currentDay, task: tasks });
});

app.post("/", function (req, res) {
    let newTask = req.body.newTask;   //it is for newtask
    let buttonPressed = req.body.button; //it is used to press the button
    if (buttonPressed === "Work") {
        works.push(newTask);
        res.redirect("/work");
    }
    else {
        tasks.push(newTask);  //it is used to push the task
        res.redirect("/");  // it is used to redirect 
    }
});


app.get("/work", function (req, res) {     //it is used for get function
    res.render("index", { title: "Work", task: works });
});


app.listen(5000, function (req, res) {
    console.log("server started at port : 5000");
});
