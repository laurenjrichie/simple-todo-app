var itemCount = 0

function init() {
  $("body").append("<h1>Todo App</h1>");
  $("body").append("<input type='text' placeholder='what do you need to learn?'>");
  $("body").append("<ul></ul>");
  $("body").append("<p>" + itemCount + " items left</p>");
  $("p").attr("id", "itemsLeft");
  $("body").append("<button>Delete completed</button>");
  $("button").attr("type", "button");
  $("button").attr("id", "deleteAll");
  $('input').keydown(pressEnter);
  $('ul').on('click', 'span', deleteLi);
  $('ul').on('click', 'li', completeLi);
  $('button').click(deleteCompleted);
}

function pressEnter(key) {
  if (key.which == 13) {appendLi(this)};
}

function appendLi(element) {
  var value = $(element).val();
  $("ul").append("<li>" + value + "<span class='delete'>Delete</span></li>");  // make placeholder reappear / value clear out?
  countItems("up");
}

function deleteLi() {
  if ($(this).parent().hasClass("completed")) {countItems("up")}
  $(this).closest('li').remove();
}

function completeLi() {
  $(this).attr('class', 'completed');
  countItems("down");
}

function deleteCompleted() {
  $(".completed").remove();
}

function countItems(operator) {
  if (operator === "down") {itemCount -= 1}
  else {itemCount += 1}
  $("#itemsLeft").html(itemCount + " items left");
}

window.onLoad = init();
