📌 ChatApp – CRUD Chat Application

A simple, clean, full-stack Chat Application built using Node.js, Express, MongoDB, and EJS.
This project was created while practicing backend concepts, RESTful routing, and MongoDB fundamentals.
-------------------------------------------------------------------------------------------------------------
🚀 Features

Create a new chat
Read all chats on the home page
Update (edit) any chat message
Delete a chat
Styled using custom CSS
Fully responsive layout
Clean and simple UI
RESTful routing
MongoDB as the database (Mongoose ODM)
---------------------------------------------------------------------------------------------------------------
🛠 Tech Stack

Backend:
Node.js
Express.js
MongoDB
mongoose
Method-Override

Frontend:
HTML
EJS templating
CSS (custom designed)
-----------------------------------------------------------------------------------------------------------------
📁 Project Structure
/models
    chat.js
/views
    index.ejs
    new.ejs
    edit.ejs
/public
    style.css
index.js
package.json
-----------------------------------------------------------------------------------------------------------------
📌 Routes Overview
| Method | Route          | Description     |
| ------ | -------------- | --------------- |
| GET    | /chat          | Show all chats  |
| GET    | /chat/new      | New chat form   |
| POST   | /chat          | Create new chat |
| GET    | /chat/:id/edit | Edit chat form  |
| PUT    | /chat/:id      | Update chat     |
| DELETE | /chat/:id      | Delete chat     |
--------------------------------------------------------------------------------------------------------------------
🧠 Learning Outcomes

This project helped in understanding:

CRUD operations in Express

How to use Mongoose models

Method-override for PUT/DELETE

Debugging server-side issues

Building structured backend projects

Designing a clean frontend layout using basic CSS
--------------------------------------------------------------------------------------------------------------------
🙌 Contributing

Feel free to open issues or submit pull requests to improve the project.
---------------------------------------------------------------------------------------------------------------------
📄 License

This project is for educational purposes.
