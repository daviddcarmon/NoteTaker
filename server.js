// Dependencies
let express = require("express");
let path = require("path");

// Sets up the Express App
let app = express();
let PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let notes = [{}];

// Routes
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Display notes page thats takes and displays our NOTES
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Displays all notes
app.get("/api/notes", function (req, res) {
  return res.json(notes);
});

// Displays a single note, or returns false
app.get("/api/notes/:note", function (req, res) {
  let chosen = req.params.note;

  console.log(chosen);

  for (let i = 0; i < notes.length; i++) {
    if (chosen === notes[i].routeName) {
      return res.json(notes[i]);
    }
  }

  return res.json(false);
});

// Create NEW Note - takes in JSON input
app.post("/api/notes", function (req, res) {
  let noteTaken = req.body;
  noteTaken.routeName = noteTaken.title.replace(/\s+/g, "").toLowerCase();

  console.log(noteTaken);

  characters.push(noteTaken);

  res.json(noteTaken);
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log(`App listening on PORT http://localhost:${PORT}`);
});
