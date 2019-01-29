const titleElement= document.getElementById('note-title');
const bodyElement = document.getElementById('note-body');
const removeElement =document.getElementById('remove-note');
const saveButton = document.getElementById('save-note');
const lastEdited = document.getElementById('last-edit');
const noteId = location.hash.substring(1);
console.log(noteId.valueOf()+ "hello");
let notes = getSavedNotes();
let note = notes.find(function(note){
  console.log(`${note.id} note.id === noteID ${noteId}`);
  return `${note.id}` === `${noteId}`;
});
if ( note === undefined){
  location.assign('/index.html');
}

titleElement.value= note.title;
bodyElement.value = note.body;
lastEdited.textContent = genLastEdited(note.timeUpdated);
// document.getElementById('note-title').value = note.title;
// document.getElementById('note-body').value= note.body;
// renderNotes(notes,filters);
titleElement.addEventListener('input', function(e){
  console.log(e.target.value);
  note.title = e.target.value;
  note.timeUpdated = new Date().getTime();
  titleElement.value = note.title;
  lastEdited.textContent = genLastEdited(note.timeUpdated);

  saveNotes(notes);
});
bodyElement.addEventListener('input', function(e){
  console.log(e.target.value);
  note.body = e.target.value;
  note.timeUpdated= new Date().getTime();
  bodyElement.value = note.body;
  lastEdited.textContent = genLastEdited(note.timeUpdated);

  saveNotes(notes);
});
removeElement.addEventListener('click', function(e){
  // remove note by id in local storage
  console.log(notes);
  notes.splice(noteId,1);
  console.log(notes);
  saveNotes(notes);
  location.assign('/index.html');
});
saveButton.addEventListener('click',function(e){
  // renderNotes(notes,filters)
  location.assign('/index.html');  
  console.log(notes);
});
window.addEventListener('storage',function(e){
  if(e.key ==='notes'){
    notes= JSON.parse(e.newValue);
    note = notes.find(function(note){
      console.log(`IN STORAGE ${note.id} note.id === noteID ${noteId}`);
      return `${note.id}` === `${noteId}`;
    });
    if ( note === undefined){
      location.assign('/index.html');
    }
    document.getElementById('note-title').value = note.title;
    document.getElementById('note-body').value= note.body;
    lastEdited.textContent = genLastEdited(note.timeUpdated);

  }
  
});