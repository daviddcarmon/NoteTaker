let noteList = [{}];
// let storedList = JSON.parse();
$(document).ready(function () {
  // btnSave
  /// POST request from database \\\
  $(".btnSave").on("click", () => {
    event.preventDefault();
    if ($(".noteTitle").val().trim() === "") {
      return;
    }
    let inputNote = {
      title: $(".noteTitle").val(),
      text: $(".noteText").val(),
    };
    if (!storedList.includes(inputNote)) {
      noteList.push(inputNote);
      let note = $("<button>").text(inputNote.title);
      $(".noteList").append(note);
    }
    $.post("/api/notes", inputNote).then((data) => {
      console.log(`notes.html ${data}`);
    });
    console.log(`save btn clicked!`);
  });

  // btnNew
  $(".btnNew").on("click", () => {
    let noteInput = $(".noteTitle").val().trim().empty();
    console.log(`save btnNew clicked!`);
  });

  ///// Show note from noteList \\\\
  //// GET request from database \\\\
  $(".noteList").on("click", () => {
    // this.text() should be the inputNote.title
    $.get("/api/notes" + inputNote.title, function (data) {
      if (data) {
        $(".showNote").show();
        $(".showTitle").text(data.title);
        $(".showText").text(data.text);
      }
    });
  });
});
