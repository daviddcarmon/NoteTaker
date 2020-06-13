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

// Display notes page
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Displays all characters
app.get("/api/characters", function (req, res) {
  return res.json(characters);
});

// Displays a single note, or returns false
app.get("/api/notes/:note", function (req, res) {
  var chosen = req.params.note;

  console.log(chosen);

  for (var i = 0; i < notes.length; i++) {
    if (chosen === notes[i].routeName) {
      return res.json(notes[i]);
    }
  }

  return res.json(false);
});

// Create NEW Note - takes in JSON input
app.post("/api/notes", function (req, res) {
  var noteTaken = req.body;

  // Using a RegEx Pattern to remove spaces from noteTaken
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  noteTaken.routeName = noteTaken.name.replace(/\s+/g, "").toLowerCase();

  console.log(noteTaken);

  characters.push(noteTaken);

  res.json(noteTaken);
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log(`App listening on PORT http://localhost:${PORT}`);
});
