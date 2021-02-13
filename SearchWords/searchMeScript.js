window.onload = function () {
  document
    .getElementById("search-word")
    .addEventListener("mouseover", function () {
      $("#search-word").addClass("bg-hovered");
      console.log(this);
    });
};
