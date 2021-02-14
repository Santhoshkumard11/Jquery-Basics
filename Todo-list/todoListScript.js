window.onload = function () {
  document.getElementById("add-task").addEventListener("click", function () {
    
    let inputText = $("#input-task").val();

    if (inputText.length == 0) {
      alert("Enter task details!!");
      return;
    }

    $("#task-list").append($("<br>"),inputText);

  });
};
