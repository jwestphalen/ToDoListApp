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
};
function process() {
    if (isValid()) {
        var item_1 = getToDoItem();
        displayToDoItem(item_1);
    }
}
function isValid() {
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
}
