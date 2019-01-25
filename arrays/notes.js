const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise, Eating better'
}, {
  title: 'Office modification',
  body: 'Get new chair'
}];

const getNote = function (notes, noteTitle) {
  //const index = notes.find(function(note,index){
  const noter = notes.find(function (note, index) {
    // console.log(index);

    return note.title === noteTitle;
  });
  return noter;
  // return notes[index];
};
const findNote = function(notes, noteTitle){
  return notes.findIndex(function(note,index){
    return note.title === noteTitle;
  });
  // return notes[index];
};

const findNotes  = function(notes,query){
  return notes.filter(function(note, index){
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isBodyMatch || isTitleMatch;
    // title.inclues
    // return true;// returns the list of notes
    // return false;// returns empty array 
  });
  // return filterNotes;
};


const sortNotes = function(notes){
  notes.sort(function(a,b){
    if(a.title.toLowerCase() < b.title.toLowerCase()){
      return -1; 
    }else if(b.title.toLowerCase() < a.title.toLowerCase()){
      return 1;
    }else{
      return 0;
    }
  });
};
console.log(notes)
let fg = [1,2,4,3,2,1,5,6,0];
fg.sort();
console.log(fg);
// console.log(findNotes(notes, 'work'));


sortNotes(notes);
console.log(notes);
// const noter = findNote(notes, 'Office modification');
// console.log(noter);
// const note = getNote(notes, 'Office modification');

// console.log('here');
// console.log(note);
// const index = notes.findIndex(function(note, index){
//   console.log(note);
//   return note.title === 'Habbits to work on';
// });
// console.log(index);