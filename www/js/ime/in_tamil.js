function getInTamUnicode(unicode){

	var unicodeValue = new Array();
	
	/**************Mapping Starts************************/
	/**************symbol mappings***********************/

	unicodeValue[","] = ',';	// ,
	unicodeValue[":"] = ':';	// chha
	unicodeValue["{"] = '{';	// da
	unicodeValue["}"] = '\u0B9E';	// aiya
	unicodeValue["_"] = '\u0B83';	// nothing
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
	unicodeValue[";"] = '\u0B9A';	// cha
	unicodeValue["["] = '[';	// dha
	unicodeValue["]"] = ']';	// nothing
	unicodeValue["="] = '=';	// q
	unicodeValue["'"] = '\u0B9F';	// ta
	unicodeValue["/"] = '\u0BAF';	// ya
	unicodeValue["<"] = '\u0BB7';	// shha
	unicodeValue["\""] = '"';	// nothing
	unicodeValue["+"] = '+';
	unicodeValue["@"] = '@';        //nothing
	unicodeValue["\\"] = '\\';      //nothing
	unicodeValue["`"] = '\u0BCA';
	unicodeValue["!"] = '!';        //nothing
	unicodeValue["~"] = '\u0B92';
	unicodeValue["|"] = '|';       //nothing


	/***************numbers mapping***********************/

	unicodeValue["0"] = '\u0BE6';	// 0
	unicodeValue["1"] = '\u0BE7';	// 1
	unicodeValue["2"] = '\u0BE8';	// 2
	unicodeValue["3"] = '\u0BE9';	// 3
	unicodeValue["4"] = '\u0BEA';	// 4
	unicodeValue["5"] = '\u0BEB';	// 5
	unicodeValue["6"] = '\u0BEC';	// 6
	unicodeValue["7"] = '\u0BED';	// 7
	unicodeValue["8"] = '\u0BEE';	// 8
	unicodeValue["9"] = '\u0BEF';	// 9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0BCB';	// o vowel
	unicodeValue["b"] = '\u0BB5';	// va
	unicodeValue["c"] = '\u0BAE';	// ma
	unicodeValue["d"] = '\u0BCD';	// halant
	unicodeValue["e"] = '\u0BBE';	// AA
	unicodeValue["f"] = '\u0BBF';	// e vowel
	unicodeValue["g"] = '\u0BC1';	// u vowel DOUBT
	unicodeValue["h"] = '\u0BAA';	// pa
	unicodeValue["i"] = '\i';	// NOTHING 
	unicodeValue["j"] = '\u0BB0';	// ra
	unicodeValue["k"] = '\u0B95';	// ka
	unicodeValue["l"] = '\u0BA4';	// ta
	unicodeValue["m"] = '\u0BB8';	// sa
	unicodeValue["n"] = '\u0BB2';	// la
	unicodeValue["o"] = '\o';	// NOTHING
	unicodeValue["p"] = '\u0B9C';	// ja
	unicodeValue["q"] = '\u0BCC';	// ao vowel
	unicodeValue["r"] = '\u0BC0';	// ee vowel
	unicodeValue["s"] = '\u0BC7';	// ai vowel
	unicodeValue["t"] = '\u0BC2';	// oo vowel DOUBT
	unicodeValue["u"] = '\u0BB9';	// ha
	unicodeValue["v"] = '\u0BA8';	// na
	unicodeValue["w"] = '\u0BC8';	// ae vowel
	unicodeValue["x"] = 'x';	// NOTHING
	unicodeValue["y"] = 'y';	// NOTHING
	unicodeValue["z"] = '\u0BC6';	// aie vowel

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0B93'; 	// ao
	unicodeValue["B"] = '\u0BB4'; 	// LLLA
	unicodeValue["C"] = '\u0BA3';	// ana
	unicodeValue["D"] = '\u0B85';	// a
	unicodeValue["E"] = '\u0B86';	// aA
	unicodeValue["F"] = '\u0B87';	// i
	unicodeValue["G"] = '\u0B89';	// o
	unicodeValue["H"] = 'H';	// NOTHING
	unicodeValue["I"] = 'I';	// NOTHING
	unicodeValue["J"] = '\u0BB1';	// ra with nukta
	unicodeValue["K"] = 'K';	// NOTHING
	unicodeValue["L"] = 'L';	// NOTHING
	unicodeValue["M"] = 'M';	// NOTHING
	unicodeValue["N"] = '\u0BB3';	// la with nukta
	unicodeValue["O"] = 'O';	// NOTHING
	unicodeValue["P"] = 'P';	// NOTHING
	unicodeValue["Q"] = '\u0B94';	// au
	unicodeValue["R"] = '\u0B88';	// ee
	unicodeValue["S"] = '\u0B8F';	// ai
	unicodeValue["T"] = '\u0B8A';	// oo
	unicodeValue["U"] = '\u0B99';	// ana  DOUBT
	unicodeValue["V"] = '\u0BA9';	// nothing
	unicodeValue["W"] = '\u0B90';	// ae
	unicodeValue["X"] = 'X';	// nothing
	unicodeValue["Y"] = 'Y';	// NOTHING
	unicodeValue["Z"] = '\u0B8E';	// aie

	/*********************Mapping Complete*************************/

	textUnicode = unicodeValue[unicode];
	
	return textUnicode;
}

