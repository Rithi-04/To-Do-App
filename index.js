document.getElementById("add-task-btn").addEventListener("click", addTask);
function addTask() {
  var task = document.getElementById("task-input").value;
  let newTask = document.createElement("li");
  newTask.textContent = task;
  let taskList = document.getElementById("task-list");
  taskList.appendChild(newTask);
  document.getElementById("task-input").value="";
  console.log(taskList);
  newTask.addEventListener("click",markComplete);
  newTask.addEventListener("dblclick",deleteTask);
}
function markComplete(){
  this.classList.toggle("completed");
}
function deleteTask(){
  this.remove();
}
