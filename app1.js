 addbtn=document.getElementById("add-task")
var taskInput=document.getElementById("task")
var tasklist=document.getElementById("tasks")
addbtn.addEventListener("click",function(){
    var task=taskInput.value
     addTask(task)
     taskInput.value=""
})
function addTask(task){
    var li=document.createElement("li")
    li.innerHTML=task
    tasklist.appendChild(li)
}