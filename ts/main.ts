const picker = datepicker("#dueDate");
picker.setMin(new Date()); //Today's date

class ToDoItem{
    title:string;
    dueDate:Date;
    isCompleted:boolean;
}

let item = new ToDoItem();
item.title = "testing";
item.dueDate = new Date(2020, 6, 1);
item.isCompleted = false;

window.onload = function(){
    let addItem = document.getElementById("add");
    addItem.onclick = process;
}

function process(){
    if(isValid()){
        let item = getToDoItem();
        displayToDoItem(item);
    }
}

function isValid():boolean{
    if(item.title == null){
        return false;
    }
    return true;
}

/**
 * Get all input off form and wrap in
 * a ToDoItem object
 */
function getToDoItem():ToDoItem{
    let newItem = new ToDoItem();

    let titleInput = getInput("title");
    newItem.title = titleInput.value;

    let dueDateInput = getInput("dueDate");
    newItem.dueDate = new Date(dueDateInput.value);

    let isCompleted = getInput("checkbox");
    newItem.isCompleted = isCompleted.checked;


    return newItem;
}

function getInput(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

/**
 * Display given ToDoItem on the webpage
 * @param item item containing title, Date, 
 * and completion status
 */
function displayToDoItem(item:ToDoItem):void{
    let itemText = document.createElement("h3");
    itemText.innerText = item.title;

    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toString();
    
    let itemDiv = document.createElement("div");

    itemDiv.onclick = markAsComplete;

    itemDiv.classList.add("todo");
    if(item.isCompleted){
        itemDiv.classList.add("completed");
    }


    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);

    if(item.isCompleted){
        let completedToDos = document.getElementById("completeItems");
        completedToDos.appendChild(itemDiv);
    }
    else{
        let incompleteToDos = document.getElementById("incompleteItems");
        incompleteToDos.appendChild(itemDiv);
    }
}


function markAsComplete(){
    let itemDiv = <HTMLElement>this;
    itemDiv.classList.add("completed");
    itemDiv.style.color = "green";

    let completedItems = document.getElementById("completeItems");
    completedItems.appendChild(itemDiv);
}
// Task: Store ToDoItems in web storage