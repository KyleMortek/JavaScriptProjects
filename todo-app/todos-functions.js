// todo functions
let u= 0;
function getSavedTodos() {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
}

function saveTodos(todos){
  localStorage.setItem('todos', JSON.stringify(todos));
}

function genDomTodos(elem){
  const xfilteredList = document.createElement('div');
  const filteredList = document.createElement('span');
  const cb = document.createElement('input');
  const cbLabel = document.createElement('label');
  const removeButton = document.createElement('button');

  removeButton.textContent= 'X';
  cb.type= 'checkbox';
  xfilteredList.id = u;
  cbLabel.id= u;
  removeButton.id= u;
  filteredList.id = u;
  elem.id = u;
  cb.id = u++;
  cb.checked = elem.completed;1
  cbLabel.appendChild(cb);
  xfilteredList.appendChild(cbLabel);
  if (elem.completed === true){
    
  }
  cb.addEventListener('change', function(e){
    elem.completed = e.target.checked;
    saveTodos(todos);

    // if(e.target.checked===true){
    //   elem.completed = e.target.checked;

    // }else{
    //   elem.completed = !e.target.checked;

    // }
    // console.log(e.target.checked);
    // saveTodos(todos);
     renderTodos(todos,filters);
  });
  removeButton.addEventListener('click', function(e){
    // console.log(elem.id);
    removeTodo(elem.id);
    saveTodos(todos);
    renderTodos(todos,filters);
  });
    if(elem.text.length >0){
      // filteredList.id = 'todo';
      filteredList.textContent = elem.text;
    }else{
      filteredList.textContent = 'Unnamed Text';
    }
    xfilteredList.appendChild(removeButton)
    xfilteredList.appendChild(filteredList);
  return xfilteredList;
}
function remainingTodos(notComplete){
  const newPr= document.createElement('h2');
  newPr.textContent = `You have ${notComplete.length} todos left`;
  return newPr;
}
const renderTodos = function (todos, filters) {
  u=0;
  const filterTodos = todos.filter(todo=>{
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase()); 
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });
  const notComplete = filterTodos.filter(function(todos){
    return !todos.completed;//where todos.completed equals false
  });
  
  document.getElementById('list-todos').innerHTML= '';
  document.getElementById('num-of-todos').innerHTML= '';
  const newPr = remainingTodos(notComplete);
  document.getElementById('num-of-todos').appendChild(newPr);

  // console.log(filterTodos);
  filterTodos.forEach(elem=>{
    console.log(elem.completed);
    const filteredList = genDomTodos(elem);
    document.getElementById('list-todos').appendChild(filteredList);
    return filteredList;
  });
};

function removeTodo(elemId){
  console.log(elemId);
  todos.splice(elemId,1);
  // remove by index
}