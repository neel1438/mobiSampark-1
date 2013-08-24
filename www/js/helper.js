var langPairs = {
    "hin" : ["pan"],
    "pan" : ["hin"],
    "urd" : ["hin"],
    "tel" : ["tam", "hin"],
    "tam" : ["tel", "hin"],

}
var nameOfLang = {
    "hin" : "Hindi",
    "pan" : "Punjabi",
    "tel" : "Telugu",
    "tam" : "Tamil",
    "urd" : "Urdu"
}

function optionChangeHelper(){

        //Set the keybord to the type of source language
        if($("#notation").val()=="wx"){
            wxIme($("#source_language").val(),document.getElementById("INPUT"));
        }else{
            inscriptIme($("#source_language").val(),document.getElementById("INPUT"));
        }

        //Remove old language classes
        for(var key in nameOfLang){$("#INPUT").removeClass(key);}
        //Add class to use the correct font
        $("#INPUT").addClass($("#source_language").val());
}

function updateOptions(){
    var currentSelection = $("#source_language").val();
    
    if(langPairs.hasOwnProperty(currentSelection)){
        //Create options for target_language
        $("#target_language").html("");
        for(var k=0; k<langPairs[currentSelection].length; k++){
            $("#target_language").append("<option value='"+langPairs[currentSelection][k]+"'>"+nameOfLang[langPairs[currentSelection][k]]+"</option>");
        }
        $("#target_language").val(langPairs[currentSelection][0]).attr('selected', true).siblings('option').removeAttr('selected');
        $("#target_language").selectmenu("refresh",true); //jQM refresh
    }        
}

