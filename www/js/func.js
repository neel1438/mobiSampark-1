$(document).ready(function(){
	$("#source_language").change(function(){
		$("#INPUT").val("");
		updateOptions();
		optionChangeHelper();
	});

	updateOptions();
	optionChangeHelper();
});