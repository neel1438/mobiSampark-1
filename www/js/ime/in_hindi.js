function getInHinUnicode(unicode){

	var unicodeValue = new Array();
	
	/**************Mapping Starts************************/
	/**************symbol mappings***********************/

	unicodeValue[","] = ',';	// ,
	unicodeValue[":"] = '\u091B';	// chha
	unicodeValue["{"] = '\u0922';	// da
	unicodeValue["}"] = '\u091E';	// aiya
	unicodeValue["_"] = '\u0903';	// visarg
	unicodeValue["."] = '.';	// .
	unicodeValue["?"] = '\u095F';	// ?
	unicodeValue["("] = '40';	// (
	unicodeValue[")"] = '41';	// )
	unicodeValue["#"] = '#';	// #
	//unicodeValue["^"] = '\u0924\u094D\u0930';	//^
	//unicodeValue["%"] = '\u091C\u094ED\u091E';	//^
	//unicodeValue["&"] = '\\u0915\u094D\u0937';	//*
	unicodeValue["^"] = '^';	// ^
	unicodeValue["%"] = '%';	// ^
	unicodeValue["&"] = '&';	// *
	unicodeValue[">"] = '\u0964';	// purna viram(|)
	unicodeValue[";"] = '\u091A';	// cha
	unicodeValue["["] = '\u0921';	// dha
	unicodeValue["]"] = '\u093C';	// nukta
	unicodeValue["="] = '\u0943';	// q
	unicodeValue['\''] = '\u091F';	// ta
	unicodeValue['/'] = '\u092F';	// ya
	unicodeValue["<"] = '\u0937';	// shha
	unicodeValue["\""] = '\u0920';	// ttha
	unicodeValue["+"] = '\u090B';
	unicodeValue["@"] = '\u0945';
	unicodeValue["\\"] = '\u0949';
	unicodeValue["`"] = '\u094A';
	unicodeValue["!"] = '\u090D';
	unicodeValue["~"] = '\u0912';
	unicodeValue["|"] = '\u0911';


	/***************numbers mapping***********************/

	unicodeValue["0"] = '\u0966';	// 0
	unicodeValue["1"] = '\u0967';	// 1
	unicodeValue["2"] = '\u0968';	// 2
	unicodeValue["3"] = '\u0969';	// 3
	unicodeValue["4"] = '\u096A';	// 4
	unicodeValue["5"] = '\u096B';	// 5
	unicodeValue["6"] = '\u096C';	// 6
	unicodeValue["7"] = '\u096D';	// 7
	unicodeValue["8"] = '\u096E';	// 8
	unicodeValue["9"] = '\u096F';	// 9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u094B';	// o vowel
	unicodeValue["b"] = '\u0935';	// va
	unicodeValue["c"] = '\u092E';	// ma
	unicodeValue["d"] = '\u094D';	// halant
	unicodeValue["e"] = '\u093E';	// AA
	unicodeValue["f"] = '\u093F';	// e vowel
	unicodeValue["g"] = '\u0941';	// u vowel
	unicodeValue["h"] = '\u092A';	// pa
	unicodeValue["i"] = '\u0917';	// ga 
	unicodeValue["j"] = '\u0930';	// ra
	unicodeValue["k"] = '\u0915';	// ka
	unicodeValue["l"] = '\u0924';	// ta
	unicodeValue["m"] = '\u0938';	// sa
	unicodeValue["n"] = '\u0932';	// la
	unicodeValue["o"] = '\u0926';	// da
	unicodeValue["p"] = '\u091C';	// ja
	unicodeValue["q"] = '\u094C';	// ao vowel
	unicodeValue["r"] = '\u0940';	// ee vowel
	unicodeValue["s"] = '\u0947';	// ai vowel
	unicodeValue["t"] = '\u0942';	// oo vowel
	unicodeValue["u"] = '\u0939';	// ha
	unicodeValue["v"] = '\u0928';	// na
	unicodeValue["w"] = '\u0948';	// ae vowel
	unicodeValue["x"] = '\u0902';	// ank vowel
	unicodeValue["y"] = '\u092C';	// ba
	unicodeValue["z"] = '\u0946';	// aie vowel

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0913'; 	// ao
	unicodeValue["B"] = '\u0934'; 	// lra
	unicodeValue["C"] = '\u0923';	// ana
	unicodeValue["D"] = '\u0905';	// a
	unicodeValue["E"] = '\u0906';	// aA
	unicodeValue["F"] = '\u0907';	// i
	unicodeValue["G"] = '\u0909';	// o
	unicodeValue["H"] = '\u091D';	// fa
	unicodeValue["I"] = '\u0918';	// gha
	unicodeValue["J"] = '\u0931';	// ra with nukta
	unicodeValue["K"] = '\u0916';	// kha
	unicodeValue["L"] = '\u0925';	// tha
	unicodeValue["M"] = '\u0936';	// sha
	unicodeValue["N"] = '\u0933';	// la with nukta
	unicodeValue["O"] = '\u0927';	// dha
	unicodeValue["P"] = '\u092B';	// jha
	unicodeValue["Q"] = '\u0914';	// au
	unicodeValue["R"] = '\u0908';	// ee
	unicodeValue["S"] = '\u090F';	// ai
	unicodeValue["T"] = '\u090A';	// oo
	unicodeValue["U"] = '\u0919';	// ana
	unicodeValue["V"] = '\u0929';	// na with nukta
	unicodeValue["W"] = '\u0910';	// ae
	unicodeValue["X"] = '\u0901';	// chandra bindu
	unicodeValue["Y"] = '\u092D';	// bha
	unicodeValue["Z"] = '\u090E';	// aie

	/*********************Mapping Complete*************************/
if(unicodeValue[unicode]!=null){
	textUnicode = unicodeValue[unicode];
	}
	else{
		textUnicode = "";
	}
	
	return textUnicode;
}

