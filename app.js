var itemCount = 0

$("body").append("<h1>Todo App</h1>");
$("body").append("<input type='text' placeholder='what do you need to learn?'>");
$("body").append("<ul></ul>");
$("body").append("<p>" + itemCount + " items left</p>");
$("p").attr("id", "itemsLeft");
$("body").append("<button>Delete completed</button>");
$("button").attr("type", "button");
$("button").attr("id", "deleteAll");

// add li
$('input').keydown(function(e) {
  var key = e.which;
  if (key == 13) {
    var value = $(this).val();
    $("ul").append("<li>" + value + "<span class='delete'>Delete</span></li>");
    // make placeholder reappear / value clear out?
    itemCount += 1;
    $("#itemsLeft").html(itemCount + " items left");
  }
});

// delete individual li
$('ul').on('click', 'span', function() {
  if ($(this).parent().hasClass("completed")) {
    itemCount += 1;
  }
  $(this).closest('li').remove();
  $("#itemsLeft").html(itemCount + " items left");
});

// cross out li
$('ul').on('click', 'li', function() {
  $(this).attr('class', 'completed');
  itemCount -= 1;
  $("#itemsLeft").html(itemCount + " items left");
});

// delete completed button
$('button').click(function(e) {
  $(".completed").remove();
});
