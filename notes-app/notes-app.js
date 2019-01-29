// 2019-01-25 16:39:07 
// DOM - Document Object Model
// import uuidv4 from 'uuid/v4';
// import uuidv4 from 'uuid/v4';
// console.log(uuidv4());
// import uuid from 'uuid/[v1|v3|v4|v5]';
// localStorage.clear()
let notes = getSavedNotes();
// const notes = getSavedNotes();

// uuidv4(); // ⇨ '10ba038e-48da-487b-96e8-8d3b99b6d18a'
// console.log(uuidv4());

const filters = {
  searchText: '',
  sortBy: 'byEdit'
};

// 2019-01-26 22:43:42

/**
 *
 *
 * @param {*} notes - brings in existing notes from the above notes object
 * @param {*} filters - filters out text that does not match searchText
 *                      
 */
// below add all the current notes to the html
renderNotes(notes,filters);
/////////////////////////////////////////////////////


// ON click
/**
 *  
 *CREATE NOTE 
 *  
 * user will be able to add a new note to the list
 */ 
// document.getElementById('create-note').addEventListener('click',function(e){
document.getElementById('note-text').addEventListener('submit',function(e){
  e.preventDefault();
  noteTime = new Date().getTime();
  notes.push({
    
    id: u,
    title:'',//e.tartget.elements.getNote.value,
    body:'',
    timeCreated: noteTime,
    timeUpdated: noteTime
  });
  console.log(notes);
  // e.target.elements.getNote.value='';
  // renderNotes(notes,filters);
  location.assign(`/note-edit.html#${u}`);
  saveNotes(notes);
});


/**
 * SEARCH TEXT
 *  -> search input for the list of notes. 
 *  -> allows user to find a specific note
 */
document.getElementById('search-text').addEventListener('input', function(e){
  filters.searchText = e.target.value;
  renderNotes(notes,filters);
  console.log(e.target.value);
});

document.getElementById('filter-by').addEventListener('change', function(e){
  filters.sortBy = e.target.value;
  renderNotes(notes,filters);
});

window.addEventListener('storage',function(e){
  if(e.key ==='notes'){
    notes= JSON.parse(e.newValue);
    renderNotes(notes,filters);
  }
});

// document.getElementById('filter-by').addEventListener('op')
// documen
// if(note.time){
// }
const now= new Date();
console.log(now.toString());
const newNow = moment();
console.log(newNow);
// document.getElementById('delete-all').addEventListener('click', function(){
//   deleteAllNotes(notes,filters);
// });
// document.querySelector('.button').addEventListener('click', function(e){
//   console.log(e.target.elements);
//   renderNotes(notes,filters);
// })







/**    
 * notes below
*/
// 2019-01-26 22:31:23
// localStorage.setItem('location','Philadelphia');
// console.log(localStorage.getItem('location'));
// localStorage.removeItem('location');
// localStorage.clear();//deletes everything. 
// const user = {
//   name: 'kyle',
//   age: 29
// }
// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem("user", userJSON);
// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`);
//////////////////////////////not in final version
// let notes = [{
//   title: 'My next trip',
//   body: 'I would like to go to Spain'
// }, {
//   title: 'Habbits to work on',
//   body: 'Exercise, Eating better'
// }, {
//   title: 'Office modification',
//   body: 'Get new chair'
// }];
  // document.getElementById('for-fun').addEventListener('change', function(e){
  //   console.log(e.target.checked);
  // });
  // document.getElementById('name-form').addEventListener('submit',function(e){
  //   e.preventDefault();
  //   console.log(e.target.elements.firstName.value);
  //   e.target.elements.firstName.value = ''; // clears the first name form 
  // });
// const p = document.querySelector('p');
// p.remove()
// const ps = document.querySelectorAll('p');
// ps.forEach(p => {
//   //replaces all text content of <p>
//   p.textContent = '*******';
//   // console.log(p.textContent);
//   // p.remove();
//   // this removes them all 
// });
// add a new element
// const newPar= document.createElement('p');
// newPar.textContent = 'this is a new element from js';
// document.querySelector('body').appendChild(newPar);
/**
 * REMOVE ALL
 * removes all notes from the list on the html 
 * when a user clicks remove all the user will delete all notes from the list
 */
// use # for id and . for class
// document.getElementById('remove-all').addEventListener('click', function(e){
//   console.log('remove all is clicked');
//   document.querySelectorAll(".note").forEach(function(note){
//     note.remove();
  
//   });
// });
