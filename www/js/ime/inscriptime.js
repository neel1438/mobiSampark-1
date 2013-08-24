// document.write('<script type="text/javascript" src="./in_hindi.js"></script>');
// document.write('<script type="text/javascript" src="./in_telugu.js"></script>');
// document.write('<script type="text/javascript" src="./in_bengali.js"></script>');
// document.write('<script type="text/javascript" src="./in_punjabi.js"></script>');

// document.write('<script type="text/javascript" src="./in_tamil.js"></script>');
// document.write('<script type="text/javascript" src="./in_kannada.js"></script>');
// document.write('<script type="text/javascript" src="./in_malayalam.js"></script>');

var prevKey = new String();
var targetKeyCode=new String();
var selectLanguage =new String();
var txtbox;
var combFlag = false;
var combMaxLength;

var convertFlag = true;
var browser=navigator.appName;
var agent = navigator.userAgent;

var b_version=navigator.appVersion;
var version=parseFloat(b_version);

function inscriptIme(lang,tbox){
if(lang == "" || lang == null ){
    selectLanguage="en";
}
else
{
    selectLanguage=lang;
}
//tbox.value=" ";
setCaretPosition(tbox,tbox.value.length);
txtbox=tbox;

if(selectLanguage=="urd"){
txtbox.style.textAlign="right";
}
else{
	txtbox.style.textAlign="left";
	}
if(browser=="Netscape"){

	document.removeEventListener('keypress',inImeEventCaptured,false);
	document.removeEventListener('keypress',wxImeEventCaptured,false);

	document.addEventListener('keypress',inImeEventCaptured, false);
}
else if(browser=="Microsoft Internet Explorer"){
	document.detachEvent('onkeypress',inImeEventCaptured);
	document.detachEvent('onkeypress',wxImeEventCaptured);

	document.attachEvent('onkeypress',inImeEventCaptured);
	

	}
	

}

function inImeEventCaptured(evt) 
{
	
    if (convertFlag && !(evt.ctrlKey || evt.altKey))
    {

        inHandleCharacter(evt,selectLanguage,txtbox);
    }

}
	
/*
* Captures the keyCode and the characterCode of the key pressed.
* If the keyCode or characterCode is in the ASCII range, fetch
* the mapping for the key if exists dispatch new event with the
* character fetched from the map. If it does not exist, then
* return the key pressed.
*/

function inHandleCharacter(event,lang,txtArea) 
{
	combMaxLength = 3;
        // this line is add for forcefully autoscrolling
	txtArea.scrollTop = txtArea.scrollHeight;	

	var keyCode="";
	if(browser=="Netscape"){
	keyCode=  event.charCode ? event.charCode :	event.which ? event.which : void 0; 
	}
	else if(browser=="Microsoft Internet Explorer"){
	keyCode = event.keyCode ? event.keyCode: void 0;
	}
	//var keyCode = event.keyCode ? event.keyCode :	event.charCode ? event.charCode :	event.which ? event.which : void 0;
	//alert(alert(event.which));
	if (keyCode < 2304 && keyCode != 8 && keyCode!=32 && keyCode!=10 && keyCode!=9 && keyCode!=20 && keyCode!=36 && keyCode!=45 && keyCode!=33 && keyCode!=46 && keyCode!=145 && keyCode!=19 && keyCode!=144 && keyCode!=37 && keyCode!=38 && keyCode!=40 && keyCode!=35)
	{
		var key = String.fromCharCode(keyCode);
		
		if (keyCode !=8 )
		{
			prevKey = prevKey + key;
			initvar = getStartString(txtArea,0,keyCode);
			targetKeyCode = getInUnicodeChar(prevKey, key,lang);
		
		}
		if (prevKey.length >1 )	{
		
			prevKey = prevKey.substring(0, prevKey.length);
			
		
		}
		
		if(browser=="Netscape"){
						
		if (targetKeyCode != keyCode)
		{
			
			if(combFlag)
			{
				combFlag = false;
				var new_event = document.createEvent("UIEvents");
				new_event.initUIEvent("keypress", true, true, event.view,false, false, false, false,0, 8);
				insertString(txtArea,"");
			}
			if(keyCode == 13){
			initvar = getStartString(txtArea,0,keyCode);
			targetKeyCode = "\u000A";
			var new_event2 = document.createEvent("UIEvents");
			new_event2.initUIEvent("keypress", true, true, event.view,false, false, false, false,0, targetKeyCode);
			insertString(txtArea,targetKeyCode,initvar);
			event.target.dispatchEvent(new_event2); 
			event.preventDefault();
			event.stopPropagation();
			}
			var new_event1 = document.createEvent("UIEvents");
			new_event1.initUIEvent("keypress", true, true, event.view,false, false, false, false,0, targetKeyCode);
			insertString(txtArea,targetKeyCode,initvar,endvar);
			event.target.dispatchEvent(new_event1); 
			event.preventDefault();
			event.stopPropagation();
			}
		}
		
		else if(browser=="Microsoft Internet Explorer"){
		if (targetKeyCode != keyCode)
		{	
			
			if(keyCode == 13){
			initvar = getStartString(txtArea,0,keyCode);
			targetKeyCode = "\u000A\u0020";
			event2 = document.createEventObject();
			txtbox.fireEvent("onkeypress", event2, true, true, event.view,false, false, false, false,0, targetKeyCode);

			var endvar = getEndString(txtArea);
					//alert(endvar);
					insertString(txtArea,targetKeyCode,initvar,endvar);
					event.returnValue = false;
					window.event.cancelBubble = true;
			}
					event2 = document.createEventObject();
					txtbox.fireEvent("onkeypress", event2, true, true, event.view,false, false, false, false,0, targetKeyCode);
					var endvar = getEndString(txtArea);
					//alert(endvar);
					insertString(txtArea,targetKeyCode,initvar,endvar);
					event.returnValue = false;
					window.event.cancelBubble = true;
			 }
		}
	}
	

}

/*
* Returns the mapping for the key passed if exists, otherwise
* return the key.
*/ 
function getInUnicodeChar(keys, curKey,lang)
{
	
	var unicodeCharCode;
	var unicode1;
	var key = new String(keys);
	var tt=null;
	var unicodeChar = null;
	switch (lang){
	case 'hin':
		
			unicodeCharCode = getInHinUnicode(curKey);
			
		
	break;
	case 'tel':
					unicodeCharCode = getInTelUnicode(curKey);
		
	break;
	case 'pan':
		
					unicodeCharCode = getInPanUnicode(curKey);
		
	break;
	case 'ben':
		
			unicodeCharCode = getInBenUnicode(curKey);
		
	break;
	case 'kan':
		
			unicodeCharCode = getInKanUnicode(curKey);
		
	break;
	case 'urd':
			unicodeCharCode = getInUrdUnicode(curKey);
		
	break;
	case 'mal':
		
			unicodeCharCode = getInMalUnicode(curKey);
		
	break;
	case 'tam':
		
			unicodeCharCode = getInTamUnicode(curKey);
		
	break;
        default:
		
			unicodeCharCode = getWxEngUnicode(curKey);
		
       }
		
		
		
return unicodeCharCode;
}
function getCursorPosition(textarea)
{
	var txt = textarea.value;
	var len = txt.length;
	var erg = txt.split("\n");
	var pos = -1;
	if(typeof document.selection != "undefined")
	{ // FOR MSIE
	range_sel = document.selection.createRange();
	range_obj = textarea.createTextRange();
	range_obj.moveToBookmark(range_sel.getBookmark());
	range_obj.moveEnd('character',textarea.value.length);
	pos = len - range_obj.text.length;
	}
	else if(typeof textarea.selectionStart != "undefined")
	{ // FOR MOZILLA
	pos = textarea.selectionStart;
	}
	if(pos != -1)
	{
		for(ind = 0;ind<erg.length;ind++)
		{
			len = erg[ind].length + 1;
			if(pos < len)
				break;
			pos -= len;
		}
		ind++; pos++;
		return [ind, pos]; // ind = LINE, pos = COLUMN
	}
}
function setCaretPosition(ctrl, pos)
{
	if(ctrl.setSelectionRange)
	{
		ctrl.focus();
		ctrl.setSelectionRange(pos,pos);
	}
	else if (ctrl.createTextRange) {
		ctrl.focus();
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();

	}

}
function getLang(prv, txt, sP)
{
	var sPos = sP;
		retTxt = prv+txt;
		sPos ++;
	return retTxt;
}
function getEndString(myField)
{
	var val;
	
	if( document.selection ){
				myField.focus();
				var range = document.selection.createRange();
				var stored_range = range.duplicate();
				stored_range.moveToElementText( myField );
				stored_range.setEndPoint( 'EndToEnd', range );
				myField.selectionStart = stored_range.text.length - range.text.length;
			    myField.selectionEnd = myField.selectionStart + range.text.length;
				val = myField.value.substring(myField.selectionEnd, myField.value.length );
				
		}
	else if (myField.selectionStart||myField.selectionStart == '0') {
	
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		val = myField.value.substring(endPos, myField.value.length);
	} else {
		val += myValue;
	}
	return val;
}

function insertString(myField,myValue,initvar,endvar)
{
	if (document.selection) {
	
		
		var finalValue = getLang(initvar,myValue, 0);
		myField.value =  finalValue+endvar;
		
		setCaretPosition(myField,finalValue.length);
			
	}
	else if (myField.selectionStart||myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		myField.value = initvar+myValue+ myField.value.substring(endPos, myField.value.length);
		setCaretPosition(myField,(initvar+myValue).length);
	}
}


function getStartString(myField,loc) {
			//IE support
			var myValue = myField.value;
			if( document.selection ){
				myField.focus();
				var range = document.selection.createRange();
				var stored_range = range.duplicate();
				stored_range.moveToElementText( myField );
				stored_range.setEndPoint( 'EndToEnd', range );
				myField.selectionStart = stored_range.text.length - range.text.length;
			    myField.selectionEnd = myField.selectionStart + range.text.length;
				val = myValue.substring(0, myField.selectionStart - loc);
				
				
		}

		
		//MOZILLA/NETSCAPE support
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			val = myField.value.substring(0, startPos - loc);
			} else {
			val += myValue;
		}
		return val;
	}
	

	
