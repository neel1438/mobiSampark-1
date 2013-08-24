$(document).ready(function(){
	$("#source_language").change(function(){
		updateOptions();

		//Set the keybord to the type of source language
		if($("#notation").val()=="wx"){
			wxIme($("#source_language").val(),document.getElementById("INPUT"));
		}else{
			inscriptIme($("#source_language").val(),document.getElementById("INPUT"));
		}
	});
});