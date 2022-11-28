 //Adding values to an array named "todos"
 let todos = [
    {
      title: "Get Groceries",
      dueDate: "12-12-2022",
      id: "id1",
    },
    {
      title: "Wash Car",
      dueDate: "12-12-2022",
      id: "id2",
    },
    {
      title: "Make Dinner",
      dueDate: "12-12-2022",
      id: "id3",
    },
  ];
  let newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  console.log(todos);
  render();

  //Function for adding a todo after button click.
  function addTodo() {
    let textBoxValue = document.getElementById("textBox");
    let dateValue = document.getElementById("dueDate");
    //adding another value to the array using push
    let title = textBoxValue.value;
    let dueDate = dateValue.value;

    //Creating an id for every new todo task using Date().getTime()
    const id = new Date().getTime();

    todos.push({
      title: title,
      dueDate: dueDate,
      id: " " + id, // We make the id to a string so that the deleteButtonAction works.
      //Refer  https://youtu.be/DqaTKBU9TZk?t=4464 .To avoid "TypeError"
    });
    console.log(todos);

    render();
  }

  function render() {
    //for clearing the task list.
    document.getElementById("taskList").innerHTML = "";

    //Using loop to get value from an array
    todos.forEach(function (todos) {
      let newElement = document.createElement("div");
      newElement.innerText = todos.title + " " + todos.dueDate;
      newElement.classList.add("newTask");

      //Adding Check box
      let newCheckBox = document.createElement("input");
      newCheckBox.type = "checkbox";
      newElement.appendChild(newCheckBox);
      newCheckBox.classList.add("checkBoxes");

      //Adding Delete button
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteButton");
      deleteButton.setAttribute("class", "btn btn-danger");

      deleteButton.innerText = "Delete";

      deleteButton.style = "margin-left: 12px";
      deleteButton.style = "float: right";
      deleteButton.onclick = deleteButtonAction;
      deleteButton.id = todos.id;
      newElement.appendChild(deleteButton);

      taskList.appendChild(newElement);
    });
  }

  function deleteButtonAction(event) {
    console.log("Delete button clicked");
    console.log(event);
    let deleteButton = event.target;
    let idToDelete = deleteButton.id;

    //The filter function creates a copy of the function it has. In this case it creates a copy of the array "todos".
    //The arrayName.filter function will loop through the array, keep items if the inner functions returns true., and removes items if the inner functions returns false.
    todos = todos.filter(function (todos) {
      // If the id of this todo matches idToDelete, return false
      // For everything else, return true

      if (todos.id === idToDelete) {
        //When a return function is called, it will not allow any following code to be executed inside the function.
        return false;
        console.log(todos);
      } else {
        return true;
      }
    });
    render();
  }