function getInMalUnicode(unicode){

	var unicodeValue = new Array();
	
	/**************Mapping Starts************************/
	/**************symbol mappings***********************/

	unicodeValue[","] = ',';	// ,
	unicodeValue[":"] = '\u0D1B';	// chha
	unicodeValue["{"] = '\u0CD22';	// da
	unicodeValue["}"] = '\u0D1E';	// aiya
	unicodeValue["_"] = '\u0D03';	// 
	unicodeValue["."] = '.';	// .
	unicodeValue["?"] = '?';	// ?
	unicodeValue["("] = '(';	// (
	unicodeValue[")"] = ')';	// )
	unicodeValue["#"] = '#';	// #
	//unicodeValue["^"] = '\u0C24\u0C4D\u0C30';	//^
	//unicodeValue["%"] = '\u091C\u0C4D\u0C1E';	//^
	//unicodeValue["&"] = '\\u0C15\u0C4D\u0C37';	//*
	unicodeValue["^"] = '^';	// ^
	unicodeValue["%"] = '%';	// ^
	unicodeValue["&"] = '&';	// *
	unicodeValue[">"] = '>';	// nothing
	unicodeValue[";"] = '\u0D1A';	// cha
	unicodeValue["["] = '\u0D21';	// dha
	unicodeValue["]"] = ']';	// DOUBT. CANT FIND THE LETTER
	unicodeValue["="] = '\u0D43';	// q
	unicodeValue["'"] = '\u0D1F';	// ta
	unicodeValue["/"] = '\u0D2F';	// ya
	unicodeValue["<"] = '\u0D37';	// shha
	unicodeValue["\""] = '\u0D20';	// nothing
	unicodeValue["+"] = '\u0C0B';
	unicodeValue["@"] = '@';        //nothing
	unicodeValue["\\"] = '\\';      //nothing
	unicodeValue["`"] = '\u0D4A';
	unicodeValue["!"] = '!';        //nothing
	unicodeValue["~"] = '\u0D12';
	unicodeValue["|"] = '|';       //nothing


	/***************numbers mapping***********************/

	unicodeValue["0"] = '\u0D66';	// 0
	unicodeValue["1"] = '\u0D67';	// 1
	unicodeValue["2"] = '\u0D68';	// 2
	unicodeValue["3"] = '\u0D69';	// 3
	unicodeValue["4"] = '\u0D6A';	// 4
	unicodeValue["5"] = '\u0D6B';	// 5
	unicodeValue["6"] = '\u0D6C';	// 6
	unicodeValue["7"] = '\u0D6D';	// 7
	unicodeValue["8"] = '\u0D6E';	// 8
	unicodeValue["9"] = '\u0D6F';	// 9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0D4B';	// o vowel
	unicodeValue["b"] = '\u0D35';	// va
	unicodeValue["c"] = '\u0D2E';	// ma
	unicodeValue["d"] = '\u0D4D';	// halant
	unicodeValue["e"] = '\u0D3E';	// AA
	unicodeValue["f"] = '\u0D3F';	// e vowel
	unicodeValue["g"] = '\u0D41';	// u vowel
	unicodeValue["h"] = '\u0D2A';	// pa
	unicodeValue["i"] = '\u0D17';	// ga 
	unicodeValue["j"] = '\u0D30';	// ra
	unicodeValue["k"] = '\u0D15';	// ka
	unicodeValue["l"] = '\u0D24';	// ta
	unicodeValue["m"] = '\u0D38';	// sa
	unicodeValue["n"] = '\u0D32';	// la
	unicodeValue["o"] = '\u0D26';	// da
	unicodeValue["p"] = '\u0D1C';	// ja
	unicodeValue["q"] = '\u0D4C';	// ao vowel
	unicodeValue["r"] = '\u0D40';	// ee vowel
	unicodeValue["s"] = '\u0D47';	// ai vowel
	unicodeValue["t"] = '\u0D42';	// oo vowel
	unicodeValue["u"] = '\u0D39';	// ha
	unicodeValue["v"] = '\u0D28';	// na
	unicodeValue["w"] = '\u0D48';	// ae vowel
	unicodeValue["x"] = '\u0D02';	// ank vowel
	unicodeValue["y"] = '\u0D2C';	// ba
	unicodeValue["z"] = '\u0D46';	// aie vowel

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0D13'; 	// ao
	unicodeValue["B"] = '\u0D34'; 	// nothing
	unicodeValue["C"] = '\u0D23';	// ana
	unicodeValue["D"] = '\u0D05';	// a
	unicodeValue["E"] = '\u0D06';	// aA
	unicodeValue["F"] = '\u0D07';	// i
	unicodeValue["G"] = '\u0D09';	// o
	unicodeValue["H"] = '\u0D2B';	// fa
	unicodeValue["I"] = '\u0D18';	// gha
	unicodeValue["J"] = '\u0D31';	// ra with nukta
	unicodeValue["K"] = '\u0D16';	// kha
	unicodeValue["L"] = '\u0D25';	// tha
	unicodeValue["M"] = '\u0D36';	// sha
	unicodeValue["N"] = '\u0D33';	// la with nukta
	unicodeValue["O"] = '\u0D27';	// dha
	unicodeValue["P"] = '\u0D1D';	// jha
	unicodeValue["Q"] = '\u0D14';	// au
	unicodeValue["R"] = '\u0D08';	// ee
	unicodeValue["S"] = '\u0D0F';	// ai
	unicodeValue["T"] = '\u0D0A';	// oo
	unicodeValue["U"] = '\u0D19';	// ana
	unicodeValue["V"] = 'V';	// nothing
	unicodeValue["W"] = '\u0D10';	// ae
	unicodeValue["X"] = 'X';	// nothing
	unicodeValue["Y"] = '\u0D2D';	// bha
	unicodeValue["Z"] = '\u0D0E';	// aie

	/*********************Mapping Complete*************************/

	if(unicodeValue[unicode]!=null){
	textUnicode = unicodeValue[unicode];
	}
	else{
		textUnicode = "";
	}
	
	return textUnicode;
	
}	

