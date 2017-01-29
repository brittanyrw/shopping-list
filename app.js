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

	// delete item from list when delete button is clicked
	$(".shopping-item-delete").click(function(event){

		deleteItem();
	});

	// cross out item when check button is clicked
	$("shopping-item-toggle").click(function(event){
		checkItem();
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

function deleteItem() {
	$(this).closest("li").remove();
}

function checkItem () {
	$(this).siblings(".shopping-item").toggleClass("shopping-item__checked");
}


