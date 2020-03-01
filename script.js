// $('li').click(
// 	function(event){
// 		$(this).css("background-color", "red");
// 	})


//$('li').hover(
//	function(event){
//		$('li').css('background-color', 'yellow')
//		$(this).css("background-color", "red");
//		$(this).next().css("background-color", "blue")
//		$(this).prev().css("background-color", "blue")
//	}
//);


$(function(){
	let index = 0
	$('#add').click(function(){
		let value=$('#input_glav').val();
		let elem=$('<li><label for="lbl'+index+'"></label>').text(value)

		$(elem).prepend('<input type="checkbox"class="checkbox" id="lbl' +index+'">');
		$(elem).append('<button class="rem">Удалить</button');
		$(elem).append('<br>')
		$('#myList').append(elem);
		value = "";
		$('#input_glav').val("");
		index++;

		$(".rem").click(function(){
			$(this).parent().remove();
		})
			
	});
})

