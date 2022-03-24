function getTodoListItems() {
    var todoListItems = localStorage.getItem('todoListItems');
    var todoListItemsArray = JSON.parse(todoListItems);
    if(todoListItemsArray == null) return;

    var uls = document.querySelector('.list__ul');
    uls.innerHTML='';

    for (var i = 0; i < todoListItemsArray.length; i++){
        var todoItem = document.createElement("li");
        todoItem.textContent = todoListItemsArray[i];
        todoItem.setAttribute("data-num",  i);
        todoItem.setAttribute("class", "list__li");
        var el = document.querySelector('.list__ul');
        el.appendChild(todoItem);

        // var delBtn = document.createElement("a");
        // delBtn.setAttribute("class", "list__delete");
        // var el2 = document.querySelector('.list__li');
        // el2.appendChild(delBtn);

        var delIcon= document.createElement("i");
        delIcon.setAttribute("class", "fa-solid fa-trash-can delete");
        delIcon.setAttribute("data-delnum",  i);
        var el3 = document.querySelector(`[data-num="${i}"]`);
        el3.appendChild(delIcon);
    }
    
}

function add() {
    // get input text data
    var inputText = document.querySelector('.list__text');
    var inputTextValue = inputText.value;
    if (inputTextValue == '') { return }
    
    var todoItems = localStorage.getItem('todoListItems');
    var todoItemsArray = (todoItems == null) ? [] : JSON.parse(todoItems);
    todoItemsArray.push(inputTextValue);
    inputText.value = "";
    // add data to localstorage
    localStorage.setItem('todoListItems', JSON.stringify(todoItemsArray))
    getTodoListItems();
    
}

getTodoListItems();

function deleteItem(e){
    var num = e.target.dataset.delnum;
    if (e.target.nodeName !== "I") return;
    todoListItems = localStorage.getItem('todoListItems');
    console.log(todoListItems);
    todoListArray = JSON.parse(todoListItems);
    console.log(todoListArray);
    todoListArray.splice(num,1);
    localStorage.setItem('todoListItems', JSON.stringify(todoListArray));
    getTodoListItems();
}

var ulList = document.querySelector('.list__ul');
ulList.addEventListener('click', deleteItem);

var todoBtn = document.querySelector('.list__addBtn');
todoBtn.addEventListener('click', add);

// var num = 2;
//     function numChanged(e) {
//         var num = 3;
//     }
//     numChanged();
//     console.log(num);