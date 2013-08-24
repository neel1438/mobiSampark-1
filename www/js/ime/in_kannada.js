function getInKanUnicode(unicode){

	var unicodeValue = new Array();
	
	/**************Mapping Starts************************/
	/**************symbol mappings***********************/

	unicodeValue[","] = ',';	// ,
	unicodeValue[":"] = '\u0C9B';	// chha
	unicodeValue["{"] = '\u0C22';	// da
	unicodeValue["}"] = '\u0C9E';	// aiya
	unicodeValue["_"] = '\u0C83';	// nothing
	unicodeValue["."] = '.';	// .
	unicodeValue["?"] = '?';	// ?
	unicodeValue["("] = '(';	// (
	unicodeValue[")"] = ')';	// )  NOT UNDERSTAND
	unicodeValue["#"] = '#';	// # NOT UNDERSTAND
	//unicodeValue["^"] = '\u0C24\u0C4D\u0C30';	//^
	//unicodeValue["%"] = '\u091C\u0C4D\u0C1E';	//^
	//unicodeValue["&"] = '\\u0C15\u0C4D\u0C37';	//*
	unicodeValue["^"] = '^';	// ^ NOT UNDESRSTAND
	unicodeValue["%"] = '%';	// ^ NOT UNDERSTAND
	unicodeValue["&"] = '&';	// * NOTR UNDERSTAND
	unicodeValue[">"] = '>';	// nothing
	unicodeValue[";"] = '\u0C9A';	// cha
	unicodeValue["["] = '\u0CA1';	// dha
	unicodeValue["]"] = ']';	// nothing
	unicodeValue["="] = '\u0CC3';	// q
	unicodeValue["'"] = '\u0C9F';	// ta
	unicodeValue["/"] = '\u0CAF';	// ya
	unicodeValue["<"] = '\u0CB7';	// shha
	unicodeValue["\""] = '\u0CA0';	// nothing
	unicodeValue["+"] = '\u0C8B';
	unicodeValue["@"] = '@';        //nothing
	unicodeValue["\\"] = '\\';      //nothing
	unicodeValue["`"] = '\u0CCA';
	unicodeValue["!"] = '!';        //nothing
	unicodeValue["~"] = '\u0CA2';
	unicodeValue["|"] = '|';       //nothing


	/***************numbers mapping***********************/

	unicodeValue["0"] = '\u0CE6';	// 0
	unicodeValue["1"] = '\u0CE7';	// 1
	unicodeValue["2"] = '\u0CE8';	// 2
	unicodeValue["3"] = '\u0CE9';	// 3
	unicodeValue["4"] = '\u0CEA';	// 4
	unicodeValue["5"] = '\u0CEB';	// 5
	unicodeValue["6"] = '\u0CEC';	// 6
	unicodeValue["7"] = '\u0CED';	// 7
	unicodeValue["8"] = '\u0CEE';	// 8
	unicodeValue["9"] = '\u0CEF';	// 9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0CCB';	// o vowel
	unicodeValue["b"] = '\u0CB5';	// va
	unicodeValue["c"] = '\u0CAE';	// ma
	unicodeValue["d"] = '\u0CCD';	// halant
	unicodeValue["e"] = '\u0CBE';	// AA
	unicodeValue["f"] = '\u0CBF';	// e vowel
	unicodeValue["g"] = '\u0CC1';	// u vowel
	unicodeValue["h"] = '\u0CAA';	// pa
	unicodeValue["i"] = '\u0C97';	// ga 
	unicodeValue["j"] = '\u0CB0';	// ra
	unicodeValue["k"] = '\u0C95';	// ka
	unicodeValue["l"] = '\u0CA4';	// ta
	unicodeValue["m"] = '\u0CB8';	// sa
	unicodeValue["n"] = '\u0CB2';	// la
	unicodeValue["o"] = '\u0CA6';	// da
	unicodeValue["p"] = '\u0C9C';	// ja
	unicodeValue["q"] = '\u0CCC';	// ao vowel
	unicodeValue["r"] = '\u0CC0';	// ee vowel
	unicodeValue["s"] = '\u0CC7';	// ai vowel
	unicodeValue["t"] = '\u0CC2';	// oo vowel
	unicodeValue["u"] = '\u0CB9';	// ha
	unicodeValue["v"] = '\u0CA8';	// na
	unicodeValue["w"] = '\u0CC8';	// ae vowel
	unicodeValue["x"] = '\u0C82';	// ank vowel
	unicodeValue["y"] = '\u0CAC';	// ba
	unicodeValue["z"] = '\u0CC6';	// aie vowel

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0C93'; 	// ao
	unicodeValue["B"] = 'B'; 	// nothing
	unicodeValue["C"] = '\u0CA3';	// ana
	unicodeValue["D"] = '\u0C85';	// a
	unicodeValue["E"] = '\u0C86';	// aA
	unicodeValue["F"] = '\u0C87';	// i
	unicodeValue["G"] = '\u0C89';	// o
	unicodeValue["H"] = '\u0CAB';	// fa
	unicodeValue["I"] = '\u0C98';	// gha
	unicodeValue["J"] = '\J';	// NOTHING
	unicodeValue["K"] = '\u0C96';	// kha
	unicodeValue["L"] = '\u0CA5';	// tha
	unicodeValue["M"] = '\u0CB6';	// sha
	unicodeValue["N"] = '\u0CB3';	// la with nukta
	unicodeValue["O"] = '\u0CA7';	// dha
	unicodeValue["P"] = '\u0C9D';	// jha
	unicodeValue["Q"] = '\u0C94';	// au
	unicodeValue["R"] = '\u0C88';	// ee
	unicodeValue["S"] = '\u0C8F';	// ai
	unicodeValue["T"] = '\u0C8A';	// oo
	unicodeValue["U"] = '\u0C99';	// ana
	unicodeValue["V"] = 'V';	// nothing
	unicodeValue["W"] = '\u0C90';	// ae
	unicodeValue["X"] = 'X';	// nothing
	unicodeValue["Y"] = '\u0CAD';	// bha
	unicodeValue["Z"] = '\u0C8E';	// aie

	/*********************Mapping Complete*************************/

	if(unicodeValue[unicode]!=null){
	textUnicode = unicodeValue[unicode];
	}
	else{
		textUnicode = "";
	}
	
	return textUnicode;
}

