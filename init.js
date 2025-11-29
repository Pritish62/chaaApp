const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/FakechatApp');

}


let allChat = [
    {
    from: "navo",
    to:"bichitra",
    msg: "I am the best player in cricket",
    created_at: new Date()
    },
      {
    from: "sukumar",
    to:"nihar",
    msg: "what happend bro, you are not replying",
    created_at: new Date()
    },
      {
    from: "abhijit",
    to:"mohit",
    msg: "will you go collage tomorrow?",
    created_at: new Date()
    },
      {
    from: "aniket",
    to:"adarsh",
    msg: "nop i am not intersted bro",
    created_at: new Date()
    },
      {
    from: "mihir",
    to:"rohit",
    msg: "brother plz provide notes of math ",
    created_at: new Date()
    },
      {
    from: "nikhil",
    to:"vishal",
    msg: "have you done you homework?",
    created_at: new Date()
    },
];

Chat.insertMany(allChat);
