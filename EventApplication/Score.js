window.onload = function () {
  document
    .querySelectorAll("input")
    .forEach((elem) => elem.addEventListener("keyup", calculateSum));
};

function calculateSum() {
  var sum = 0;
  document.querySelectorAll("input").forEach(function (elem) {
    let value = elem.value;
    if (value != "") {
      
      sum += parseInt(elem.value);
    }
  });

  $("#sum").text(parseFloat(sum).toFixed(2));
}
