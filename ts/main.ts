const picker = datepicker("#dueDate");
picker.setMin(new Date()); //Today's date

class ToDoItem{
    title:string;
    dueDate:Date;
    isCompleted:boolean;

    /*constructor(desiredTitle:string){
        this.title = desiredTitle;
    }*/
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
    /*if(item.title == null){
        return false;
    }*/
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

}

// Task: Allow user to mark a ToDoItem as completed
// Task: Store ToDoItems in web storage