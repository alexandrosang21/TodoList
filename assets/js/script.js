$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(800, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on('keypress', function(event) {
	if (event.which === 13) {
		//grabbing new todo text from input
		let todotext = $(this).val();
		//check if input is blank
		if (!todotext == '') {
			if (todotext === 'skoupidi') {
				alert('ESU EISAI SKOUPIDI');
				location.replace('https://www.google.com/search?q=trash&tbm=isch');
			}
			//create a new li to and ad to ul with append()
			$('ul').append('<li><span><i class="fas fa-trash"></i> </span> ' + todotext + '</li>');
		}
		event.currentTarget.value = '';
	}
});

$('h1').on('click', 'i', function() {
	$('input').fadeToggle();
	$('input').focus();
});
