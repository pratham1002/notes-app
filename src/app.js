const path = require("path");
const express = require("express");
const hbs = require("hbs");
const notes = require("./notes");

const app = express(); 
const port = process.env.PORT || 3000;

// Define path for express config
//const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup hadlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
//app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index", {
        title: "Notes App",
        name: "Pratham"
    });
});

app.get("/AddNote", (req, res) => {
    res.render("index", {
        title: "Notes App",
        name: "Pratham",
        message: notes.addNote(req.query.title, req.query.body)
    });
});

app.get("/RemoveNote", (req, res) => {
    res.render("index", {
        title: "Notes App",
        name: "Pratham",
        message: notes.removeNote(req.query.title)
    });
});

app.get("/ListNotes", (req, res) => {
    res.render("index", {
        title: "Notes App",
        name: "Pratham",
        notes: notes.listNotes()
    });
});

app.get("/ReadNote", (req, res) => {
    res.render("index", {
        title: "Notes App",
        name: "Pratham",
        note: notes.readNote(req.query.title)
    });
});


app.get("*", (req, res) => {
    res.render("404", {
        title: "Notes App",
        name: "Pratham",
        message: "Page not found"
    });
});

app.listen(port, () => {
    console.log("Server is up on port 3000");
});
