$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grabbing new todo text from input
		let todotext = $(this).val();
		//create a new li to and ad to ul with append()
		$('ul').append('<li><span>X</span> ' + todotext + '</li>');
	}
});

//OLD CODE
// //if li is gray
// if ($(this).css('color') === 'rgb(128, 128, 128)') {
// 	//make it black
// 	$(this).css({
// 		color: 'black',
// 		textDecoration: 'none'
// 	});
// } else {
// 	//else make it gray
// 	$(this).css({
// 		color: 'gray',
// 		textDecoration: 'line-through'
// 	});
// }
