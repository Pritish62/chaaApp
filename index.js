const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatApp');

}

let chat1 = new Chat({
    from: "pritish",
    to:"ratindra",
    msg: "hey there how are you?",
    created_at: new Date()
})

chat1.save().then((res) => {
    console.log(res);
});

app.get("/" , (req, res) => {
    res.send("all set");
});

app.listen(3000, () => {
    console.log("server is started");
});