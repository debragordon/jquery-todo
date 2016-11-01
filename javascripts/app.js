// "use strict";

// console.log("test in js connection");

// /////// grab user input text
// let $needToDo = $("#need-to-do");
// let $addToDoListMain = $("#add-task-main");
// let toDoListMain = [];
// let $mainToDoListDOM = $("#todo-list-main-div");
// let $completedTasks = $("#todo-list-done");
// let uniqueId = 0;

// //// get val from input field on add button click event
// $addToDoListMain.on("click", function() {
//   console.log("test this click");
// //// add input text to todo list array
//   var userText = $needToDo.val();
//   console.log("toDoListMain", toDoListMain);
// //// display that line item in the dom with an edit, delete, complete button
//   createObject(userText);
// });

// function createObject (userInput) {
//   uniqueId++;
//   var userObject = {
//     "userTextToDo": userInput,
//     "id": "task-no-" + (uniqueId-1)
//   };
//   toDoListMain.push(userObject);
//   toDoListMaker();
// }

// function toDoListMaker() {
//   console.log("testing function");
//   $mainToDoListDOM.html("");
//   $mainToDoListDOM.html(`<h3 class="text-center">Things to Do</h3>`);
//   for (var i = 0; i < toDoListMain.length; i++) {
//     let newTask = $(`<div id='task-no-${i}'>
//       <p id='task-${i}' class='task'>${toDoListMain[i].userTextToDo}</p>
//       <button type='button' class='btn btn-default btn-xs editTodo' id='edit-button-${i}'>edit</button>
//       <button type='button' class='btn btn-default btn-xs deleteTodo' id='delete-button-${i}'>delete</button>
//       <button type='button' class='btn btn-default btn-xs completeTodo' id='complete-button-${i}'>complete</button>
//       <button type='button' class='btn btn-default btn-xs restoreTodo hidden' id='complete-button-${i}'>restore</button>
//       </div>`);
//   $mainToDoListDOM.append(newTask);
//   $needToDo.val("");
//   }
// }

// /////// edit button in todo list

// //// takes string and makes it live editable text
// $(document).on("click", ".editTodo", function() {
//   console.log("testing click", $(this));
//   let pTag = $(this).siblings("p");
//   let textToFix = pTag.text();
//   console.log("texttofix", textToFix);
//   let newText = window.prompt("Change Your Task", textToFix);
//   console.log("newText", newText);
//   if (newText !== null) {
//     pTag.text(newText);
//   }
// });

// ////// delete button in todo list
// //// deletes the item (and all its buttons) from the dom
// $(document).on("click", ".deleteTodo", function() {
//   console.log("testing click", $(this));
//   let divDelete = $(this).parent("div");
//   console.log("divDelete", divDelete);
//   divDelete.remove();
//   ///////// remove from toDoListMain array /////////
//   for (var i = 0; i < toDoListMain.length; i++) {
//     if (toDoListMain[i].id === divDelete.attr("id")) {
//       var index = toDoListMain.indexOf(toDoListMain[i]);
//       toDoListMain.splice(index, 1);
//       console.log("new array", toDoListMain);
//     }
//   }
// });

// ////// complete button in todo list
// //// removes from the todo array
// //// adds to the completed array
// //// displays in the completed section along with a delete button and a restore button
// $(document).on("click", ".completeTodo", function() {
//   console.log("testing click", $(this));
//   let divMove = $(this).parent("div");
//   console.log("divMove", divMove);
//   $completedTasks.append(divMove);
//   for (var i = 0; i < toDoListMain.length; i++) {
//     if (toDoListMain[i].id === divMove.attr("id")) {
//       var index = toDoListMain.indexOf(toDoListMain[i]);
//       toDoListMain.splice(index, 1);
//       console.log("new array", toDoListMain);
//     }
//   }
//   divMove.children(".editTodo").addClass("hidden");
//   divMove.children(".deleteTodo").addClass("hidden");
//   divMove.children(".completeTodo").addClass("hidden");
//   divMove.children(".restoreTodo").removeClass("hidden");
// });

// ////// restore button in the compeleted list
// //// removes from the completed array
// //// adds text to todo list array
// //// display that line item in the dom with an edit, delete, complete button
// $(document).on("click", ".restoreTodo", function() {
//   console.log("testing click", $(this));
//   let divRestore = $(this).parent("div");
//   console.log("divRestore", divRestore);
//   $mainToDoListDOM.append(divRestore);
//   divRestore.children(".editTodo").removeClass("hidden");
//   divRestore.children(".deleteTodo").removeClass("hidden");
//   divRestore.children(".completeTodo").removeClass("hidden");
//   divRestore.children(".restoreTodo").addClass("hidden");
// });
