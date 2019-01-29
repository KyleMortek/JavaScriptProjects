// 2019-01-25 18:42:37
// localStorage.clear()
// let u = 0;
const todos = getSavedTodos();
// you have 2 todos left p elem
// add a p for each todo above (use text value)
const filters = {
  searchText: '',
  hideCompleted:''
};
// reference todos-functions.js
renderTodos(todos,filters);

document.getElementById('filter-todo').addEventListener('input', function(e){
  filters.searchText = e.target.value;
  renderTodos(todos,filters);
  // console.log(e.target.value);
});
// renderTodos(todos,filters);
document.getElementById('todo-text').addEventListener('submit',function (e) {
  e.preventDefault();
  // e targets the elements in form and get todo is the name of the input
  // we are gettting the value of the input after submission. 
  // debugger;
   todos.push({
    text: e.target.elements.getTodo.value,
    completed:false
  });
  e.target.elements.getTodo.value = '';
  saveTodos(todos);
  renderTodos(todos,filters);
});

document.getElementById('hide-completed').addEventListener('change', function(e){
  console.log(e.target.checked);
  filters.hideCompleted= e.target.checked;
  renderTodos(todos,filters);

});
// document.getElementById('cb').addEventListener('change', function(e){
//   console.log(e.target.checked);
//   // renderTodos(todos,filters);
// });









//notes for website
const pic = document.createElement('img');
pic.src = "BMW1.jpg";
document.querySelector('body').appendChild(pic);

// old stuff
// const todos = [{
//   text: 'Order cat food',
//   completed: true
// },{ 
//   text: 'Clean kitchen',
//   completed: true
// },{ 
//   text:'Buy food',
//   completed:false
// },{ 
//   text:'Do Work',
//   completed: false
// },{ 
//   text:'Exercise',
//   completed: true
// }];
// document.getElementById('add-todo').addEventListener('click', function(){
  //   document.getElementById('new-todo').addEventListener('form', function(e){
  //   //  console.log(e.target.value)
  //     todos.push({
  //       text: e.target.value,
  //       completed: false
  //     });
      
  //   });
  //   console.log(todos);
  //   // console.log('im adding a new todo');
  // });

  // listens to change in the input 
  // document.getElementById('new-todo').addEventListener('input', function(e){
  //   console.log(e.target.value);
  //   // document.querySelectorAll('')
  // });