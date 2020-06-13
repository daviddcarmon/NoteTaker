let noteList = [{}];
// let storedList = JSON.parse();
$(document).ready(function () {
  // push note @ id="noteList"

  // btnSave
  $(".btnSave").on("click", () => {
    if ($(".noteTitle").val().trim() === "") {
      return;
    }
    let inputNote = {
      title: $(".noteTitle").val().trim(),
      body: $(".noteText").val(),
    };
    if (!storedList.includes(inputNote)) {
      noteList.push(inputNote);
      let newNote = $("<button>").text(inputNote.title);
    }

    //   console.log(`save btn clicked!`);
  });

  // btnNew
  $(".btnNew").on("click", () => {
    //   console.log(`save btnNew clicked!`);
  });
});
