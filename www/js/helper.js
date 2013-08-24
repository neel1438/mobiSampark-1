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
