function getWxBenUnicode(unicode){

	var unicodeValue = new Array();

	/**************symbol mappings***********************/

	unicodeValue[";"] = ';';	//;
	unicodeValue[":"] = ':';	//:
	unicodeValue["\""] = '34';	//
	unicodeValue["'"] = '39';	//'
	unicodeValue[","] = '44';	//,
	unicodeValue["."] = '46';	//.
	unicodeValue["/"] = '47';	///.
	unicodeValue["?"] = '63';	//?
	unicodeValue["<"] = '<';	//<
	unicodeValue[">"] = '>';	//>
	unicodeValue["["] = '91';	//[
	unicodeValue["]"] = '93';	//]
	unicodeValue["{"] = '123';	//{
	unicodeValue["}"] = '125';	//}
	//unicodeValue["92"] = '92';	//}
	//unicodeValue["124"] = '124';	//}
	unicodeValue["("] = '40';	//(
	unicodeValue[")"] = '41';	//)
	unicodeValue["@"] = '64';	//@
	unicodeValue["#"] = '35';	//#
	//unicodeValue["94"] = '94';	//#
	unicodeValue["^"] = '^';	//^
	unicodeValue["*"] = '42';	//*
	unicodeValue["_"] = '\u09CD';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u09E4';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u09E6';	//0
	unicodeValue["1"] = '\u09E7';	//1
	unicodeValue["2"] = '\u09E8';	//2
	unicodeValue["3"] = '\u09E9';	//3
	unicodeValue["4"] = '\u09EA';	//4
	unicodeValue["5"] = '\u09EB';	//5
	unicodeValue["6"] = '\u09EC';	//6
	unicodeValue["7"] = '\u09ED';	//7
	unicodeValue["8"] = '\u09EE';	//8
	unicodeValue["9"] = '\u09EF';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0985';	//a
	unicodeValue["b"] = '\u09AC';	//b
	unicodeValue["c"] = '\u099A';	//c
	unicodeValue["d"] = '\u09A1';	//d
	unicodeValue["e"] = '\u09C7';	//e
	unicodeValue["f"] = '\u0999';	//f
	unicodeValue["g"] = '\u0997';	//g
	unicodeValue["h"] = '\u09B9';	//h
	unicodeValue["i"] = '\u09BF';	//i
	unicodeValue["j"] = '\u099C';	//j
	unicodeValue["k"] = '\u0995';	//k
	unicodeValue["l"] = '\u09B2';	//l
	unicodeValue["m"] = '\u09AE';	//m
	unicodeValue["n"] = '\u09A8';	//n
	unicodeValue["o"] = '\u09CB';	//o
	unicodeValue["p"] = '\u09AA';	//p
	unicodeValue["q"] = '\u09C3';	//q
	unicodeValue["r"] = '\u09B0';	//r
	unicodeValue["s"] = '\u09B8';	//s
	unicodeValue["t"] = '\u099F';	//t
	unicodeValue["u"] = '\u09C1';	//u
	//unicodeValue["v"] = 'v';	//v
	unicodeValue["w"] = '\u09A4';	//w
	unicodeValue["x"] = '\u09A6';	//x
	unicodeValue["y"] = '\u09AF';	//y
	unicodeValue["z"] = '\u0981';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u09BE';	//A
	unicodeValue["B"] = '\u09AD';	//B
	unicodeValue["C"] = '\u099B';	//C
	unicodeValue["D"] = '\u09A2';	//D
	unicodeValue["E"] = '\u09C8';	//E
	unicodeValue["F"] = '\u099E';	//F
	unicodeValue["G"] = '\u0998';	//G
	unicodeValue["H"] = '\u0983';	//H
	unicodeValue["I"] = '\u09C0';	//I
	unicodeValue["J"] = '\u099D';	//J
	unicodeValue["K"] = '\u0996';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0982';	//M
	unicodeValue["N"] = '\u09A3';	//N
	unicodeValue["O"] = '\u09CC';	//O
	unicodeValue["P"] = '\u09AB';	//P
	unicodeValue["Q"] = '\u09C4';	//Q
	unicodeValue["R"] = '\u09B7';	//R
	unicodeValue["S"] = '\u09B6';	//S
	unicodeValue["T"] = '\u09A0';	//T
	unicodeValue["U"] = '\u09C2';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u09A5';	//W
	unicodeValue["X"] = '\u09A7';	//X
	//unicodeValue["Y"] = 'Y';	//Y
	unicodeValue["Z"] = '\u09BC';	//Z
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

	/**************Two Character length words************/

	unicodeValue["aA"]='\u0986';
	unicodeValue["ai"]='\u0987';
	unicodeValue["aI"]='\u0988';
	unicodeValue["au"]='\u0989';
	unicodeValue["aU"]='\u098A';
	unicodeValue["aq"]='\u098B';
	unicodeValue["lq"]='\u098C';
	unicodeValue["ae"]='\u098F';
	unicodeValue["aE"]='\u0990';
	unicodeValue["ao"]='\u0993';
	unicodeValue["aO"]='\u0994';
// 	unicodeValue["lY"]='\u0933';
// 	unicodeValue["EY"]='\u0945';
// 	unicodeValue["eV"]='\u0946';
// 	unicodeValue["OY"]='\u0949';
// 	unicodeValue["oV"]='\u094A';

	/***********Three Character length words**************/
// 	unicodeValue["aEY"]='\u090D';
// 	unicodeValue["aeV"]='\u090E';
// 	
// 	unicodeValue["aOY"]='\u0911';
// 	unicodeValue["aoV"]='\u0912';
	if(unicodeValue[unicode]!=null){
		textUnicode = unicodeValue[unicode];
	}
	else{
		textUnicode = "";
	}
	return textUnicode;
}

