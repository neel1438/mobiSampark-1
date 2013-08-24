function getWxEngUnicode(unicode){

	var unicodeValue = new Array();

	/**************symbol mappings***********************/

	unicodeValue[";"] = '58';	//;
	unicodeValue[":"] = '59';	//:
	unicodeValue["\""] = '34';	//
	unicodeValue["'"] = '39';	//'
	unicodeValue[","] = '44';	//,
	unicodeValue["."] = '46';	//.
	unicodeValue["/"] = '47';	///.
	unicodeValue["?"] = '63';	//?
	unicodeValue["<"] = '60';	//<
	unicodeValue["<"] = '62';	//>
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
	unicodeValue["_"] = '_';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '|';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '0';	//0
	unicodeValue["1"] = '1';	//1
	unicodeValue["2"] = '2';	//2
	unicodeValue["3"] = '3';	//3
	unicodeValue["4"] = '4';	//4
	unicodeValue["5"] = '5';	//5
	unicodeValue["6"] = '6';	//6
	unicodeValue["7"] = '7';	//7
	unicodeValue["8"] = '8';	//8
	unicodeValue["9"] = '9';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = 'a';	//a
	unicodeValue["b"] = 'b';	//b
	unicodeValue["c"] = 'c';	//c
	unicodeValue["d"] = 'd';	//d
	unicodeValue["e"] = 'e';	//e
	unicodeValue["f"] = 'f';	//f
	unicodeValue["g"] = 'g';	//g
	unicodeValue["h"] = 'h';	//h
	unicodeValue["i"] = 'i';	//i
	unicodeValue["j"] = 'j';	//j
	unicodeValue["k"] = 'k';	//k
	unicodeValue["l"] = 'l';	//l
	unicodeValue["m"] = 'm';	//m
	unicodeValue["n"] = 'n';	//n
	unicodeValue["o"] = 'o';	//o
	unicodeValue["p"] = 'p';	//p
	unicodeValue["q"] = 'q';	//q
	unicodeValue["r"] = 'r';	//r
	unicodeValue["s"] = 's';	//s
	unicodeValue["t"] = 't';	//t
	unicodeValue["u"] = 'u';	//u
	unicodeValue["v"] = 'v';	//v
	unicodeValue["w"] = 'w';	//w
	unicodeValue["x"] = 'x';	//x
	unicodeValue["y"] = 'y';	//y
	unicodeValue["z"] = 'z';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = 'A';	//A
	unicodeValue["B"] = 'B';	//B
	unicodeValue["C"] = 'C';	//C
	unicodeValue["D"] = 'D';	//D
	unicodeValue["E"] = 'E';	//E
	unicodeValue["F"] = 'F';	//F
	unicodeValue["G"] = 'G';	//G
	unicodeValue["H"] = 'H';	//H
	unicodeValue["I"] = 'I';	//I
	unicodeValue["J"] = 'J';	//J
	unicodeValue["K"] = 'K';	//K
	unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = 'M';	//M
	unicodeValue["N"] = 'N';	//N
	unicodeValue["O"] = '0';	//O
	unicodeValue["P"] = 'P';	//P
	unicodeValue["Q"] = 'Q';	//Q
	unicodeValue["R"] = 'R';	//R
	unicodeValue["S"] = 'S';	//S
	unicodeValue["T"] = 'T';	//T
	unicodeValue["U"] = 'U';	//U
	unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = 'W';	//W
	unicodeValue["X"] = 'X';	//X
	unicodeValue["Y"] = 'Y';	//Y
	unicodeValue["Z"] = 'Z';	//Z
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

	/**************Two Character length words************/

	unicodeValue["aA"]='aA';
	unicodeValue["ai"]='ai';
	unicodeValue["aI"]='aI';
	unicodeValue["au"]='au';
	unicodeValue["aU"]='aU';
	unicodeValue["aq"]='aq';
	unicodeValue["lq"]='lq';
	unicodeValue["ae"]='rq';
	unicodeValue["aE"]='aE';
	unicodeValue["ao"]='ao';
	unicodeValue["aO"]='aO';
	unicodeValue["lY"]='lY';
	unicodeValue["EY"]='EY';
	unicodeValue["eV"]='eV';
	unicodeValue["OY"]='OY';
	unicodeValue["oV"]='oV';

	/***********Three Character length words**************/
	//unicodeValue["aEY"]='\u090D';
	//unicodeValue["aeV"]='\u090E';
	
	//unicodeValue["aOY"]='\u0911';
	//unicodeValue["aoV"]='\u0912';
	if(unicodeValue[unicode]!=null){
		textUnicode = unicodeValue[unicode];
	}
	else{
		textUnicode = "";
	}
	
	return textUnicode;
}

