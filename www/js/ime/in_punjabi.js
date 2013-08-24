function getInPanUnicode(unicode){

	var unicodeValue = new Array();
	
	/**************Mapping Starts************************/
	/**************symbol mappings***********************/

	unicodeValue[","] = ',';	// ,
	unicodeValue[":"] = '\u0A1B';	// chha
	unicodeValue["{"] = '\u0A22';	// da
	unicodeValue["}"] = '\u0A1E';	// aiya
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
	unicodeValue[";"] = '\u0A1A';	// cha
	unicodeValue["["] = '\u0A21';	// dha
	unicodeValue["]"] = '\U0A3C';	// NUTKA
	unicodeValue["="] = '=';	// q
	unicodeValue["'"] = '\u0A1F';	// ta
	unicodeValue["/"] = '\u0A2F';	// ya
	unicodeValue["<"] = '<';	// shha
	unicodeValue["\""] = '\u0A20';	// nothing
	unicodeValue["+"] = '+';
	unicodeValue["@"] = '@';        //nothing
	unicodeValue["\\"] = '\\';      //nothing
	unicodeValue["`"] = '`';
	unicodeValue["!"] = '!';        //nothing
	unicodeValue["~"] = '~';
	unicodeValue["|"] = '|';       //nothing


	/***************numbers mapping***********************/

	unicodeValue["0"] = '\u0A66';	// 0
	unicodeValue["1"] = '\u0A67';	// 1
	unicodeValue["2"] = '\u0A68';	// 2
	unicodeValue["3"] = '\u0A69';	// 3
	unicodeValue["4"] = '\u0A6A';	// 4
	unicodeValue["5"] = '\u0A6B';	// 5
	unicodeValue["6"] = '\u0A6C';	// 6
	unicodeValue["7"] = '\u0A6D';	// 7
	unicodeValue["8"] = '\u0A6E';	// 8
	unicodeValue["9"] = '\u0A6F';	// 9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0A4B';	// o vowel
	unicodeValue["b"] = '\u0A35';	// va
	unicodeValue["c"] = '\u0A2E';	// ma
	unicodeValue["d"] = '\u0A4D';	// halant
	unicodeValue["e"] = '\u0A3E';	// AA
	unicodeValue["f"] = '\u0A3F';	// e vowel
	unicodeValue["g"] = '\u0A41';	// u vowel
	unicodeValue["h"] = '\u0A2A';	// pa
	unicodeValue["i"] = '\u0A17';	// ga 
	unicodeValue["j"] = '\u0A30';	// ra
	unicodeValue["k"] = '\u0A15';	// ka
	unicodeValue["l"] = '\u0A24';	// ta
	unicodeValue["m"] = '\u0A38';	// sa
	unicodeValue["n"] = '\u0A32';	// la
	unicodeValue["o"] = '\u0A26';	// da
	unicodeValue["p"] = '\u0A1C';	// ja
	unicodeValue["q"] = '\u0A4C';	// ao vowel
	unicodeValue["r"] = '\u0A40';	// ee vowel
	unicodeValue["s"] = '\u0A47';	// ai vowel
	unicodeValue["t"] = '\u0A42';	// oo vowel
	unicodeValue["u"] = '\u0A39';	// ha
	unicodeValue["v"] = '\u0A28';	// na
	unicodeValue["w"] = '\u0A48';	// ae vowel
	unicodeValue["x"] = '\u0A02';	// ank vowel
	unicodeValue["y"] = '\u0A2C';	// ba
	unicodeValue["z"] = '\z';	// aie vowel

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0A13'; 	// ao
	unicodeValue["B"] = 'B'; 	// nothing
	unicodeValue["C"] = '\u0A23';	// ana
	unicodeValue["D"] = '\u0A05';	// a
	unicodeValue["E"] = '\u0A06';	// aA
	unicodeValue["F"] = '\u0A07';	// i
	unicodeValue["G"] = '\u0A09';	// o
	unicodeValue["H"] = '\u0A2B';	// fa
	unicodeValue["I"] = '\u0A18';	// gha
	unicodeValue["J"] = '\J';	// NOTHING
	unicodeValue["K"] = '\u0A16';	// kha
	unicodeValue["L"] = '\u0A25';	// tha
	unicodeValue["M"] = '\u0A36';	// sha
	unicodeValue["N"] = '\u0A33';	// la with nukta
	unicodeValue["O"] = '\u0A27';	// dha
	unicodeValue["P"] = '\u0A1D';	// jha
	unicodeValue["Q"] = '\u0A14';	// au
	unicodeValue["R"] = '\u0A08';	// ee
	unicodeValue["S"] = '\u0A0F';	// ai
	unicodeValue["T"] = '\u0A0A';	// oo
	unicodeValue["U"] = '\u0A19';	// ana
	unicodeValue["V"] = 'V';	// nothing
	unicodeValue["W"] = '\u0A10';	// ae
	unicodeValue["X"] = 'X';	// nothing
	unicodeValue["Y"] = '\u0A2D';	// bha
	unicodeValue["Z"] = '\Z';	// aie

	/*********************Mapping Complete*************************/

	textUnicode = unicodeValue[unicode];
	
	return textUnicode;
}

