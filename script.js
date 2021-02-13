function add_two_numbers() {
    let numb1 = $("#first_number").val();
  let numb2 = $("#second_number").val();

  if (numb1 == "" || numb2 == "") {
      $("#title").text("Pls. Enter the Values").css({ color: "red" });
    } else {
        let result = parseInt(numb1) + parseInt(numb2);
        $("#title").text(result).css({ color: "green" });
        $("#answer").val(result);
    }
}

window.onload=function(){
    document.getElementById("btnSubmit").addEventListener("click", function () {
        add_two_numbers();
    });
}