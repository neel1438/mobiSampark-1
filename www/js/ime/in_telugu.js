function getInTelUnicode(unicode){

	var unicodeValue = new Array();
	
	/**************Mapping Starts************************/
	/**************symbol mappings***********************/

	unicodeValue[","] = ',';	// ,
	unicodeValue[":"] = '\u0C1B';	// chha
	unicodeValue["{"] = '\u0C22';	// da
	unicodeValue["}"] = '\u0C1E';	// aiya
	unicodeValue["_"] = '_';	// nothing
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
	unicodeValue[";"] = '\u0C1A';	// cha
	unicodeValue["["] = '\u0C21';	// dha
	unicodeValue["]"] = ']';	// nothing
	unicodeValue["="] = '\u0C43';	// q
	unicodeValue["'"] = '\u0C1F';	// ta
	unicodeValue["/"] = '\u0C2F';	// ya
	unicodeValue["<"] = '\u0C37';	// shha
	unicodeValue["\""] = '\u0C20C';	// nothing
	unicodeValue["+"] = '\u0C0B';
	unicodeValue["@"] = '@';        //nothing
	unicodeValue["\\"] = '\\';      //nothing
	unicodeValue["`"] = '\u0C4A';
	unicodeValue["!"] = '!';        //nothing
	unicodeValue["~"] = '\u0C12';
	unicodeValue["|"] = '|';       //nothing


	/***************numbers mapping***********************/

	unicodeValue["0"] = '\u0C66';	// 0
	unicodeValue["1"] = '\u0C67';	// 1
	unicodeValue["2"] = '\u0C68';	// 2
	unicodeValue["3"] = '\u0C69';	// 3
	unicodeValue["4"] = '\u0C6A';	// 4
	unicodeValue["5"] = '\u0C6B';	// 5
	unicodeValue["6"] = '\u0C6C';	// 6
	unicodeValue["7"] = '\u0C6D';	// 7
	unicodeValue["8"] = '\u0C6E';	// 8
	unicodeValue["9"] = '\u0C6F';	// 9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0C4B';	// o vowel
	unicodeValue["b"] = '\u0C35';	// va
	unicodeValue["c"] = '\u0C2E';	// ma
	unicodeValue["d"] = '\u0C4D';	// halant
	unicodeValue["e"] = '\u0C3E';	// AA
	unicodeValue["f"] = '\u0C3F';	// e vowel
	unicodeValue["g"] = '\u0C41';	// u vowel
	unicodeValue["h"] = '\u0C2A';	// pa
	unicodeValue["i"] = '\u0C17';	// ga 
	unicodeValue["j"] = '\u0C30';	// ra
	unicodeValue["k"] = '\u0C15';	// ka
	unicodeValue["l"] = '\u0C24';	// ta
	unicodeValue["m"] = '\u0C38';	// sa
	unicodeValue["n"] = '\u0C32';	// la
	unicodeValue["o"] = '\u0C26';	// da
	unicodeValue["p"] = '\u0C1C';	// ja
	unicodeValue["q"] = '\u0C4C';	// ao vowel
	unicodeValue["r"] = '\u0C40';	// ee vowel
	unicodeValue["s"] = '\u0C47';	// ai vowel
	unicodeValue["t"] = '\u0C42';	// oo vowel
	unicodeValue["u"] = '\u0C39';	// ha
	unicodeValue["v"] = '\u0C28';	// na
	unicodeValue["w"] = '\u0C48';	// ae vowel
	unicodeValue["x"] = '\u0C02';	// ank vowel
	unicodeValue["y"] = '\u0C2C';	// ba
	unicodeValue["z"] = '\u0C46';	// aie vowel

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0C13'; 	// ao
	unicodeValue["B"] = 'B'; 	// nothing
	unicodeValue["C"] = '\u0C23';	// ana
	unicodeValue["D"] = '\u0C05';	// a
	unicodeValue["E"] = '\u0C06';	// aA
	unicodeValue["F"] = '\u0C07';	// i
	unicodeValue["G"] = '\u0C09';	// o
	unicodeValue["H"] = '\u0C2B';	// fa
	unicodeValue["I"] = '\u0C18';	// gha
	unicodeValue["J"] = '\u0C31';	// ra with nukta
	unicodeValue["K"] = '\u0C16';	// kha
	unicodeValue["L"] = '\u0C25';	// tha
	unicodeValue["M"] = '\u0C36';	// sha
	unicodeValue["N"] = '\u0C33';	// la with nukta
	unicodeValue["O"] = '\u0C27';	// dha
	unicodeValue["P"] = '\u0C1D';	// jha
	unicodeValue["Q"] = '\u0C14';	// au
	unicodeValue["R"] = '\u0C08';	// ee
	unicodeValue["S"] = '\u0C0F';	// ai
	unicodeValue["T"] = '\u0C0A';	// oo
	unicodeValue["U"] = '\u0C19';	// ana
	unicodeValue["V"] = 'V';	// nothing
	unicodeValue["W"] = '\u0C10';	// ae
	unicodeValue["X"] = 'X';	// nothing
	unicodeValue["Y"] = '\u0C2D';	// bha
	unicodeValue["Z"] = '\u0C0E';	// aie

	/*********************Mapping Complete*************************/

	if(unicodeValue[unicode]!=null){
	textUnicode = unicodeValue[unicode];
	}
	else{
		textUnicode = "";
	}
	
	return textUnicode;
}

