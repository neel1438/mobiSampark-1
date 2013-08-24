function getInBenUnicode(unicode){

	var unicodeValue = new Array();
	
	/**************Mapping Starts************************/
	/**************symbol mappings***********************/

	unicodeValue[","] = ',';	// ,
	unicodeValue[":"] = '\u099B';	// chha
	unicodeValue["{"] = '\u09A2';	// da
	unicodeValue["}"] = '\u099E';	// aiya
	unicodeValue["_"] = '\u0983';	// nothing
	unicodeValue["."] = '.';	// .
	unicodeValue["?"] = '\u09AF';	// ya
	unicodeValue["("] = '(';	// (
	unicodeValue[")"] = ')';	// )
	unicodeValue["#"] = '#';	// #
	//unicodeValue["^"] = '\u0C24\u0C4D\u0C30';	//^
	//unicodeValue["%"] = '\u091C\u0C4D\u0C1E';	//^
	//unicodeValue["&"] = '\\u0C15\u0C4D\u0C37';	//*
	unicodeValue["^"] = '^';	// ^
	unicodeValue["%"] = '%';	// ^
	unicodeValue["&"] = '&';	// *
	unicodeValue[">"] = '\u0964';	// nothing
	unicodeValue[";"] = '\u099A';	// cha
	unicodeValue["["] = '\u09A1';	// dha
	unicodeValue["]"] = '\u09BC';	// nukta
	unicodeValue["="] = '\u09C3';	// q
	unicodeValue["'"] = '\u099F';	// ta
	unicodeValue["/"] = '\u09DF';	// ya
	unicodeValue["<"] = '\u09B7';	// shha
//	unicodeValue["\""] = '\';	// nothing
	unicodeValue["+"] = '\u098B';
	unicodeValue["@"] = '@';        //nothing
	unicodeValue["\\"] = '\\';      //nothing
	unicodeValue["`"] = '`';
	unicodeValue["!"] = '!';        //nothing
	unicodeValue["~"] = '~';
	unicodeValue["|"] = '|';       //nothing


	/***************numbers mapping***********************/

	unicodeValue["0"] = '\u09E6';	// 0
	unicodeValue["1"] = '\u09E7';	// 1
	unicodeValue["2"] = '\u09E8';	// 2
	unicodeValue["3"] = '\u09E9';	// 3
	unicodeValue["4"] = '\u09EA';	// 4
	unicodeValue["5"] = '\u09EB';	// 5
	unicodeValue["6"] = '\u09EC';	// 6
	unicodeValue["7"] = '\u09ED';	// 7
	unicodeValue["8"] = '\u09EE';	// 8
	unicodeValue["9"] = '\u09EF';	// 9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u09CB';	// o vowel
	unicodeValue["b"] = '\u09AC';	// va
	unicodeValue["c"] = '\u09AE';	// ma
	unicodeValue["d"] = '\u09CD';	// halant
	unicodeValue["e"] = '\u09BE';	// AA
	unicodeValue["f"] = '\u09BF';	// e vowel
	unicodeValue["g"] = '\u09C1';	// u vowel
	unicodeValue["h"] = '\u09AA';	// pa
	unicodeValue["i"] = '\u0997';	// ga 
	unicodeValue["j"] = '\u09B0';	// ra
	unicodeValue["k"] = '\u0995';	// ka
	unicodeValue["l"] = '\u09A4';	// ta
	unicodeValue["m"] = '\u09B8';	// sa
	unicodeValue["n"] = '\u09B2';	// la
	unicodeValue["o"] = '\u09A6';	// da
	unicodeValue["p"] = '\u099C';	// ja
	unicodeValue["q"] = '\u09CC';	// ao vowel
	unicodeValue["r"] = '\u09C0';	// ee vowel
	unicodeValue["s"] = '\u09C7';	// ai vowel
	unicodeValue["t"] = '\u09C2';	// oo vowel
	unicodeValue["u"] = '\u09B9';	// ha
	unicodeValue["v"] = '\u09A8';	// na
	unicodeValue["w"] = '\u09C8';	// ae vowel
	unicodeValue["x"] = '\u0982';	// ank vowel
	unicodeValue["y"] = '\u09AC';	// ba
	unicodeValue["z"] = 'z';	// nothing

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0993'; 	// ao
	unicodeValue["B"] = 'B'; 	// nothing
	unicodeValue["C"] = '\u09A3';	// ana
	unicodeValue["D"] = '\u0985';	// a
	unicodeValue["E"] = '\u0986';	// aA
	unicodeValue["F"] = '\u0987';	// i
	unicodeValue["G"] = '\u0989';	// o
	unicodeValue["H"] = '\u09AB';	// fa
	unicodeValue["I"] = '\u0998';	// gha
	unicodeValue["J"] = 'J';	// nothing
	unicodeValue["K"] = '\u0996';	// kha
	unicodeValue["L"] = '\u09A5';	// tha
	unicodeValue["M"] = '\u09B6';	// sha
	unicodeValue["N"] = 'N';	// nothing
	unicodeValue["O"] = '\u09A7';	// dha
	unicodeValue["P"] = '\u099D';	// jha
	unicodeValue["Q"] = '\u0994';	// au
	unicodeValue["R"] = '\u0988';	// ee
	unicodeValue["S"] = '\u098F';	// ai
	unicodeValue["T"] = '\u098A';	// oo
	unicodeValue["U"] = '\u0999';	// ana
	unicodeValue["V"] = 'V';	// nothing
	unicodeValue["W"] = '\u0990';	// ae
	unicodeValue["X"] = '\u0981';	// chandrabindu
	unicodeValue["Y"] = '\u09AD';	// bha
	unicodeValue["Z"] = 'Z';	// nothing

	/*********************Mapping Complete*************************/

	if(unicodeValue[unicode]!=null){
	textUnicode = unicodeValue[unicode];
	}
	else{
		textUnicode = "";
	}
	
	return textUnicode;
}

