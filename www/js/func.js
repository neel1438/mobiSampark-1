$(document).ready(function(){
	$("#source_language").change(function(){
		$("#INPUT").val("");
		updateOptions();
		optionChangeHelper();
	});

	updateOptions();
	optionChangeHelper();

	$("#TRANSLATE").click(function(){
	
		//Disable all option
		toggleLoader();
		toggleInputState();

		//Submit Translation Job
		var current_translation_id = null;
		// curl -d "srcLang=hin&tgtLang=pan&text=SOMETHINGSOMETHINGSOMETHING" http://10.4.8.55/samparkapi/web/restapi.php/query/translate
		var baseURL_post = "http://10.4.8.55/samparkapi/web/restapi.php/query/translate";
		var baseURL_get = "http://10.4.8.55/samparkapi/web/restapi.php/query/translation";
		var waitString = "Please wait while we translate the sentence for you.........";

		var count=0;
		var intervalVariable;
		function checkResult(){
			console.log("Sending GET request to :: "+baseURL_get+"?transId="+current_translation_id);
			$.get(baseURL_get+"?transId="+current_translation_id, function(data){
				console.log("Received GET request now");
				console.log(data);

				//Update Input Box by data
				$("#INPUT").val(data.translation.tgtText==""?waitString:data.translation.tgtText);

				if(data.translation.status=="complete"){
				//Remove the periodic GET request
				window.clearInterval(intervalVariable);

				//Enable controls
				toggleLoader();
				toggleInputState();

				//Make the target language as source language
				$("#source_language").val($("#target_language").val());
				$("#source_language").selectmenu("refresh",true);
				updateOptions();
				optionChangeHelper();

				}
			});
		}

		$.post(baseURL_post, {
			srcLang:$("#source_language").val(), 
			tgtLang:$("#target_language").val(),
			text : $("#INPUT").val()
			},function(data){
				//Call back function after POST success
				current_translation_id = data.translation.id;
				console.log(current_translation_id);

				//Start the timer event which checks for result every 1.5 second
				intervalVariable = window.setInterval(checkResult, 2000);
				$("#INPUT").val(waitString);
			});

		//Keep Querying the server till status complete
		
		//on Status complete
		//	**Enable controls
		//	Replace INPUT with the translated text
		//	select source_language as previous target language

	});

	toggleLoader();
});