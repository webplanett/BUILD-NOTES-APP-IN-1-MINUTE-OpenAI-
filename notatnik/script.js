const addButton = document.querySelector("#addButton");
const noteInput = document.querySelector("#noteInput");
const notesContainer = document.querySelector("#notes");

addButton.addEventListener("click", function() {
  const note = document.createElement("div");
  note.classList.add("note");

  const noteHeader = document.createElement("h2");
  noteHeader.innerText = noteInput.value;
  note.appendChild(noteHeader);

  const editButton = document.createElement("button");
  editButton.innerText = "Edytuj";
  editButton.addEventListener("click", function() {
    const newNoteText = prompt("Wprowadź nową treść notatki");
    noteHeader.innerText = newNoteText;
  });
  note.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Usuń";
  deleteButton.addEventListener("click", function() {
    note.remove();
  });
  note.appendChild(deleteButton);

  notesContainer.appendChild(note);
  noteInput.value = "";
});
