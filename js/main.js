var picker = datepicker("#dueDate");
picker.setMin(new Date());
var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
var item = new ToDoItem();
item.title = "testing";
item.dueDate = new Date(2020, 6, 1);
item.isCompleted = false;
window.onload = function () {
    var addItem = document.getElementById("add");
    addItem.onclick = process;
    loadSavedItem();
};
function loadSavedItem() {
    var item = getToDo();
    displayToDoItem(item);
}
function process() {
    if (isValid()) {
        var item_1 = getToDoItem();
        displayToDoItem(item_1);
        saveToDo(item_1);
    }
}
function isValid() {
    if (item.title == null) {
        return false;
    }
    return true;
}
function getToDoItem() {
    var newItem = new ToDoItem();
    var titleInput = getInput("title");
    newItem.title = titleInput.value;
    var dueDateInput = getInput("dueDate");
    newItem.dueDate = new Date(dueDateInput.value);
    var isCompleted = getInput("checkbox");
    newItem.isCompleted = isCompleted.checked;
    return newItem;
}
function getInput(id) {
    return document.getElementById(id);
}
function displayToDoItem(item) {
    var itemText = document.createElement("h3");
    itemText.innerText = item.title;
    var itemDate = document.createElement("p");
    console.log(item);
    console.log("Due Date");
    console.log(item.dueDate);
    var dueDate = new Date(item.dueDate.toString());
    itemDate.innerText = dueDate.toDateString();
    var itemDiv = document.createElement("div");
    itemDiv.onclick = markAsComplete;
    itemDiv.classList.add("todo");
    if (item.isCompleted) {
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);
    if (item.isCompleted) {
        var completedToDos = document.getElementById("completeItems");
        completedToDos.appendChild(itemDiv);
    }
    else {
        var incompleteToDos = document.getElementById("incompleteItems");
        incompleteToDos.appendChild(itemDiv);
    }
}
function markAsComplete() {
    var itemDiv = this;
    itemDiv.classList.add("completed");
    itemDiv.style.color = "green";
    var completedItems = document.getElementById("completeItems");
    completedItems.appendChild(itemDiv);
}
function saveToDo(item) {
    var itemString = JSON.stringify(item);
    localStorage.setItem(todokey, itemString);
}
var todokey = "todo";
function getToDo() {
    var itemString = localStorage.getItem(todokey);
    var item = JSON.parse(itemString);
    return item;
}
