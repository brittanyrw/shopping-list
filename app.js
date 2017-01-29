$(document).ready(function() {

	//add item to list when 'add item' button is clicked
	$(".submit").click(function(event) { 

		event.preventDefault();
		addItem();
	});

	// add item to list when enter is pressed
	$("#shopping-list-entry").keydown(function(event) {
  	if ( event.which == 13 ) {
     	event.preventDefault();
     	addItem();
  		}
  });

	// cross out item when check button is pressed
	$(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    })

	//delete item when delete button is pressed
	$(".shopping-list").on("click", ".shopping-item-delete", function (event) {
    $(this).closest("li").remove();
    });

});

     function addItem() {
		var newItem = $('#shopping-list-entry').val();
    	$('.shopping-list').val();
    	$('.shopping-list').append('<li>' +
      	'<span class="shopping-item js-shopping-item">' + newItem + '</span>' +
      	'<div class="shopping-item-controls">' +
        '<button class="js-shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="js-shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
        '</button>' +
      	'</div>' +
    	'</li>');
	}