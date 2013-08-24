// document.write('<script type="text/javascript" src="wx_hindi.js"></script>');
// document.write('<script type="text/javascript" src="wx_telugu.js"></script>');
// document.write('<script type="text/javascript" src="wx_panjabi.js"></script>');
// document.write('<script type="text/javascript" src="wx_bengali.js"></script>');
// document.write('<script type="text/javascript" src="wx_tamil.js"></script>');
// document.write('<script type="text/javascript" src="wx_kannad.js"></script>');
// document.write('<script type="text/javascript" src="wx_urdu.js"></script>');
// document.write('<script type="text/javascript" src="wx_malyalam.js"></script>');
// document.write('<script type="text/javascript" src="wx_english.js"></script>');

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

function wxIme(lang,tbox){
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

	document.removeEventListener('keypress',wxImeEventCaptured,false);
	document.removeEventListener('keypress',inImeEventCaptured,false);

	document.addEventListener('keypress',wxImeEventCaptured, false);
}
else if(browser=="Microsoft Internet Explorer"){
	document.detachEvent('onkeypress',wxImeEventCaptured);
	document.detachEvent('onkeypress',inImeEventCaptured);

	document.attachEvent('onkeypress',wxImeEventCaptured);
	

	}

}

function wxImeEventCaptured(evt) 
{
	
    if (convertFlag && !(evt.ctrlKey || evt.altKey))
    {

        wxHandleCharacter(evt,selectLanguage,txtbox);
    }

}
	
/*
* Captures the keyCode and the characterCode of the key pressed.
* If the keyCode or characterCode is in the ASCII range, fetch
* the mapping for the key if exists dispatch new event with the
* character fetched from the map. If it does not exist, then
* return the key pressed.
*/

function wxHandleCharacter(event,lang,txtArea) 
{
//alert("2 "+lang);

	combMaxlength=3;
        // this line is add for forcefully autoscrolling
	txtArea.scrollTop = txtArea.scrollHeight;	
	var keyCode = event.keyCode ? event.keyCode :
	event.charCode ? event.charCode :
	event.which ? event.which : void 0;
	//alert(keyCode);
	if(keyCode < 2304 && keyCode != 8 && keyCode!=32 && keyCode!=10 && keyCode!=9 && keyCode!=20 && keyCode!=36 && keyCode!=45 && keyCode!=33 && 
	   //keyCode!=46 &&  //line is comment for urdu sentence stop
	   keyCode!=145 && keyCode!=19 && keyCode!=144 && keyCode!=37 && keyCode!=38 && keyCode!=39 && keyCode!=40)
	{
		var key = String.fromCharCode(keyCode);
		
		if (keyCode !=8 )
		{
			prevKey = prevKey + key;
			initvar = getStartString(txtArea,0,keyCode);
			targetKeyCode = getWxUnicodeChar(prevKey, key,lang);
		
		}
		if (prevKey.length >1 )	{
		
			prevKey = prevKey.substring(0, prevKey.length);
			
			if(prevKey=='aA' || prevKey=='ai' || prevKey=='aI' || prevKey=='au' || prevKey=='aU' || prevKey=='aq' 
			   || prevKey=='lq' || prevKey=='ae' || prevKey=='aE' || prevKey=='ao' || prevKey=='aO' || prevKey=='lY' 
			   || prevKey=='EY' || prevKey=='eV' || prevKey=='OY' || prevKey=='oV'){
	
				initvar = getStartString(txtArea,1);
				targetKeyCode = getWxUnicodeChar(prevKey, key,lang);
	
			}
		}
		if (prevKey.length >2 )	{
		
			prevKey = prevKey.substring(1, prevKey.length);
			
			if(prevKey=='aA' || prevKey=='ai' || prevKey=='aI' || prevKey=='au' || prevKey=='aU' || prevKey=='aq' || prevKey=='lq' || prevKey=='ae' || prevKey=='aE' || prevKey=='ao' || prevKey=='aO' || prevKey=='lY' || prevKey=='EY' || prevKey=='eV' || prevKey=='OY' || prevKey=='oV'){
	
				initvar = getStartString(txtArea,1);
				targetKeyCode = getWxUnicodeChar(prevKey, key,lang);
				
			}
		}
		if (prevKey.length > 3 )
		{
			prevKey = prevKey.substring(1, prevKey.length);
			if(prevKey=='aOY' || prevKey=='aeV' || prevKey=='aoV'|| prevKey=='aEY'){
	
				initvar = getStartString(txtArea,2);
								
				targetKeyCode = getWxUnicodeChar(prevKey, key,lang);
			}
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
function getWxUnicodeChar(keys, curKey,lang)
{
	var unicodeCharCode;
	var unicode1;
	var key = new String(keys);
	var tt=null;
	var unicodeChar = null;
	switch (lang){
	case 'hin':
		if(key=='aA' || key=='ai' || key=='aI' || key=='au' || key=='aU' || key=='aq' || key=='lq' || key=='ae' || key=='aE' || key=='ao' || key=='aO' || key=='ly' || key=='EY' || key=='eV' || key=='OY' || key=='oV' || key=='aEY' || key=='aOY' || key=='aeV' || key=='aoV'){
			//var unicodeCharCode = curKey.charCodeAt(0);
			unicodeCharCode = getWxHinUnicode(key);
			//combFlag=true;
		}
		else{
			unicodeCharCode = getWxHinUnicode(curKey);
			//unicodeCharCode = unicode1+'\u094D'
		}
	break;
	case 'tel':
		if(key=='aA' || key=='ai' || key=='aI' || key=='au' || key=='aU' || key=='aq' || key=='lq' || key=='ae' || key=='aE' || key=='ao' || key=='aO' || key=='ly' || key=='EY' || key=='eV' || key=='OY' || key=='oV' || key=='aEY' || key=='aOY' || key=='aeV' || key=='aoV'){
			//var unicodeCharCode = curKey.charCodeAt(0);
			unicodeCharCode = getWxTelUnicode(key);
		}
		else{
			unicodeCharCode = getWxTelUnicode(curKey);
		}
	break;
	case 'pan':
		if(key=='aA' || key=='ai' || key=='aI' || key=='au' || key=='aU' || key=='aq' || key=='lq' || key=='ae' || key=='aE' || key=='ao' || key=='aO' || key=='ly' || key=='EY' || key=='eV' || key=='OY' || key=='oV' || key=='aEY' || key=='aOY' || key=='aeV' || key=='aoV'){
			//var unicodeCharCode = curKey.charCodeAt(0);
			unicodeCharCode = getWxPanUnicode(key);
		}
		else{
			unicodeCharCode = getWxPanUnicode(curKey);
		}
	break;
	case 'ben':
		if(key=='aA' || key=='ai' || key=='aI' || key=='au' || key=='aU' || key=='aq' || key=='lq' || key=='ae' || key=='aE' || key=='ao' || key=='aO' || key=='ly' || key=='EY' || key=='eV' || key=='OY' || key=='oV' || key=='aEY' || key=='aOY' || key=='aeV' || key=='aoV'){
			//var unicodeCharCode = curKey.charCodeAt(0);
			unicodeCharCode = getWxBenUnicode(key);
		}
		else{
			unicodeCharCode = getWxBenUnicode(curKey);
		}
	break;
	case 'kan':
		if(key=='aA' || key=='ai' || key=='aI' || key=='au' || key=='aU' || key=='aq' || key=='lq' || key=='ae' || key=='aE' || key=='ao' || key=='aO' || key=='ly' || key=='EY' || key=='eV' || key=='OY' || key=='oV' || key=='aEY' || key=='aOY' || key=='aeV' || key=='aoV'){
			//var unicodeCharCode = curKey.charCodeAt(0);
			unicodeCharCode = getWxKanUnicode(key);
		}
		else{
			unicodeCharCode = getWxKanUnicode(curKey);
		}
	break;
	case 'urd':
		if(key=='aA' || key=='ai' || key=='aI' || key=='au' || key=='aU' || key=='aq' || key=='lq' || key=='ae' || key=='aE' || key=='ao' || key=='aO' || key=='ly' || key=='EY' || key=='eV' || key=='OY' || key=='oV' || key=='aEY' || key=='aOY' || key=='aeV' || key=='aoV'){
			//var unicodeCharCode = curKey.charCodeAt(0);
			unicodeCharCode = getWxUrdUnicode(key);
		}
		else{
			unicodeCharCode = getWxUrdUnicode(curKey);
		}
	break;
	case 'mal':
		if(key=='aA' || key=='ai' || key=='aI' || key=='au' || key=='aU' || key=='aq' || key=='lq' || key=='ae' || key=='aE' || key=='ao' || key=='aO' || key=='ly' || key=='EY' || key=='eV' || key=='OY' || key=='oV' || key=='aEY' || key=='aOY' || key=='aeV' || key=='aoV'){
			//var unicodeCharCode = curKey.charCodeAt(0);
			unicodeCharCode = getWxMalUnicode(key);
		}
		else{
			unicodeCharCode = getWxMalUnicode(curKey);
		}
	break;
	case 'tam':
		if(key=='aA' || key=='ai' || key=='aI' || key=='au' || key=='aU' || key=='aq' || key=='lq' || key=='ae' || key=='aE' || key=='ao' || key=='aO' || key=='ly' || key=='EY' || key=='eV' || key=='OY' || key=='oV' || key=='aEY' || key=='aOY' || key=='aeV' || key=='aoV'){
			//var unicodeCharCode = curKey.charCodeAt(0);
			unicodeCharCode = getWxTamUnicode(key);
		}
		else{
			unicodeCharCode = getWxTamUnicode(curKey);
		}
	break;
        default:
		if(key=='aA' || key=='ai' || key=='aI' || key=='au' || key=='aU' || key=='aq' || key=='lq' || key=='ae' || key=='aE' || key=='ao' || key=='aO' || key=='ly' || key=='EY' || key=='eV' || key=='OY' || key=='oV' || key=='aEY' || key=='aOY' || key=='aeV' || key=='aoV'){

	
			unicodeCharCode = getWxEngUnicode(key);
		}
		else{
			unicodeCharCode = getWxEngUnicode(curKey);
		}
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
	

	
