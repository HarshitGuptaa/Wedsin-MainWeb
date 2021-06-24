const express = require("express");
const path = require("path");
const viewRouter = require("./Router/viewRouter");

const app = express();
app.use( express.json());
app.use(express.static("public"));
// app.set("view engine", "html");

app.set("views", path.join(__dirname,"View") );

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use("/", viewRouter);



let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("server started at port 3000");
});