function addTask() {
    var inputElement = document.getElementById("taskInput");
    var taskText = inputElement.value.trim();

    if (taskText !== "") {
        var tasksList = document.getElementById("tasksList");
        var li = document.createElement("li");
        var textNode = document.createTextNode(taskText);

        li.appendChild(textNode);
        tasksList.appendChild(li);

        // Clear the input field
        inputElement.value = "";
    }
}