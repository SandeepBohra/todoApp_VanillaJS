var ul = document.getElementById('taskList');
var addBtn = document.getElementById('addBtn');
var removeAll = document.getElementById('removeAllBtn');

addBtn.addEventListener('click', function(){ addTask(ul);})

function addTask(targetElement){
    var text = document.getElementById('addTaskInput').value;
    if(text != ""){
        var newLi = document.createElement('li');
        var textNode = document.createTextNode(text);
        var deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'deleteBtn');
        deleteButton.innerHTML = 'X';
        
        newLi.appendChild(textNode);
        newLi.appendChild(deleteButton);
        deleteButton.addEventListener('click', function(){
            deleteTasks(this.parentElement);
        })
        ul.appendChild(newLi);
        document.getElementById('addTaskInput').value = "";
    }
}

function deleteTasks(comingLi){
    comingLi.parentElement.removeChild(comingLi);
}

removeAll.addEventListener('click', function removeAll(){
    ul.innerHTML = "" ;
})
