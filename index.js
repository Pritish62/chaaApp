const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatApp');

}

//index route
app.get("/chat", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
})

//new route-  serve form
app.get("/chat/new", (req, res) => {
    res.render("new.ejs");
})

//new route - insert new data in db
app.post("/chat", async (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = await Chat.create({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })
    res.redirect("/chat");
})


//Edit Route

app.get("/chat/:id/edit", async (req, res)=> {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

app.put("/chat/:id", async (req, res)=> {
    const {id} = req.params;
   const  { msg: newMsg} = req.body;
    const updateChat = await Chat.findOneAndUpdate({_id: id}, {msg:newMsg}, {runValidators: true, new:true});
        console.log(updateChat);
        res.redirect("/chat");
});

app.delete("/chat/:id", async (req, res)=> {
    const {id} = req.params;
    const deletedMsg = await Chat.findByIdAndDelete(id);
        console.log(deletedMsg);
        res.redirect("/chat");
}
);

app.get("/", (req, res) => {
    res.send("all set");
});

app.listen(3000, () => {
    console.log("server is started");
});