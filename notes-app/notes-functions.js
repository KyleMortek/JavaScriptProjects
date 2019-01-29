// 2019-01-27 08:32:40
// read exisiting notes from local storage
// function getSavedNotes() {
// import uuidv4 from 'uuid/v4';
// console.log(uuidv4());

// const uuid = require('uuid');
let u = 0;

function getSavedNotes() {
  const notesJSON = localStorage.getItem('notes');
  if (notesJSON != null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function deleteAllNotes(notes, filters) {
  localStorage.clear();
  renderNotes(notes, filters);
}

function genNoteDom(elem, u) {
  const newPar = document.createElement('div');
  const textEl = document.createElement('a'); // so the x is next to text
  const button = document.createElement('button');
  // const editNote = document.createElement('a');
  textEl.href = `/note-edit.html#${u}`;
  elem.id = u; newPar.id = u;textEl.id = u;button.id= u;
  button.className= 'button';
  // editNote.innerHTML = '[Edit Note]';
  //remove button addition
  button.textContent = 'x';
  newPar.appendChild(button);
  button.addEventListener('click',function(){
    // console.log(elem.id);
    removeNote(elem.id);
    saveNotes(notes);
    renderNotes(notes,filters);
  });
  // add text input next to remove button
  if (elem.title.length > 0) {
    textEl.className = 'note';
    textEl.textContent = elem.title;
  } else {
    textEl.textContent = 'Unamed Note';
  }
  newPar.appendChild(textEl);
  // newPar.appendChild(editNote);
  return newPar;
}
function sortNotes(notes,sortBy){
  
  if(sortBy==='byEdit'){
    return  notes.sort(function(a,b){
      return b.timeUpdated-a.timeUpdated;
    });
  }else if(sortBy==='alphabetically' ){
    return notes.sort(function(a,b){
      console.log(`${b.title} and ${a.title} === ${b.title<a.title}`);
      if (b.title<a.title){
        return 1;
      }else if (b.title>a.title){
        return -1;
      }else {
        return 0; 
      }
    });
  }else if(sortBy === 'byCreate'){

  }
  return notes;
}
function renderNotes(notes, filters) {
  u = 0;
  console.log(filters.sortBy);
  notes=  sortNotes(notes,filters.sortBy);
  // saveNotes(notes);
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  // removes the filtered notes 
  document.getElementById('notes').innerHTML = '';
  //renders the filtered notes back into the html page 
  filteredNotes.forEach(elem => {
    // console.log(elem)
    const newPar = genNoteDom(elem, u);
    u++;
    document.getElementById('notes').appendChild(newPar);
  });

  console.log(filteredNotes);
}
function removeNote(elemId){
  // elem id = elem index in notes array woot.
  notes.splice(elemId,1);
}
function genLastEdited( timestamp){
  return `Last edited ${moment(timestamp).fromNow()}`;
}

// }