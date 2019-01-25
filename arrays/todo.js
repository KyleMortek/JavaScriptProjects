/**
 * 
 *  **Challenge**
 *  make a todo list with arrays
 *  1- create an array with five todos
 *  2- Print the first and second to last items -> Todo: walk the dog 
 */

const todos = [{
  text: 'Order cat food',
  completed: true
},{ 
  text: 'Clean kitchen',
  completed: true
},{ 
  text:'Buy food',
  completed:false
},{ 
  text:'Do Work',
  completed: false
},{ 
  text:'Exercise',
  completed: true
}];

const removeTodo = function(todos, todoTitle){
  const idx = todos.findIndex(function(getTodo){//}, idx){
      //console.log(idx);

      return getTodo.text.toLowerCase() === todoTitle.toLowerCase();// im assuming this only works if true
  });
  // console.log(idx)
  if(idx >-1){
    todos.splice(idx,1);
    // console.log(todo);
  }
  // console.log(todos);
};


/**
 * 
 * @param {*} todos 
 * todos that have yet to be completed
 */
const getThingsTodo = function(todos){
  return todos.filter(function(todos){
    return !todos.completed;//todos.completed === false;
  });
};

const completedTodos = function(todos){
  todos.sort(function(a,b){
    // if( a.completed > b.completed){
    //   return 1;
    // }else if(b.completed >a.completed){
    //   return -1;
    // }else{
    //   return 0;
    // }//////// OR YOU CAN DO THIS BELOW 
    // if(!a.completed && b.completed){
    //   return -1;
    // }else if(!b.completed && a.completed){
    //   return 1;
    // }else{
    //   return 0;
    // }OR you can just return this below. MUCH EASIER.
    /**
     * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort>
    */
    return a.completed - b.completed;
  });
};
// removeTodo(todos,'Buy foOd');
completedTodos(todos);
console.log(todos);
console.log(getThingsTodo(todos));



// console.log(`Todo: ${todos[todos.length-2]}`);
// console.log(`Todo: ${todos[todos.length-1]}`);

