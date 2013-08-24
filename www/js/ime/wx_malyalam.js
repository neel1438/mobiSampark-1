function getWxMalUnicode(unicode){

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
	unicodeValue["_"] = '\u0D4D';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0964';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0D66';	//0
	unicodeValue["1"] = '\u0D67';	//1
	unicodeValue["2"] = '\u0D68';	//2
	unicodeValue["3"] = '\u0D69';	//3
	unicodeValue["4"] = '\u0D6A';	//4
	unicodeValue["5"] = '\u0D6B';	//5
	unicodeValue["6"] = '\u0D6C';	//6
	unicodeValue["7"] = '\u0D6D';	//7
	unicodeValue["8"] = '\u0D6E';	//8
	unicodeValue["9"] = '\u0D6F';	//9
	unicodeValue["10"] = '\u0D70';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0D05';	//a
	unicodeValue["b"] = '\u0D2C';	//b
	unicodeValue["c"] = '\u0D1A';	//c
	unicodeValue["d"] = '\u0D21';	//d
	unicodeValue["e"] = '\u0D47';	//e
	unicodeValue["f"] = '\u0D19';	//f
	unicodeValue["g"] = '\u0D17';	//g
	unicodeValue["h"] = '\u0D39';	//h
	unicodeValue["i"] = '\u0D3F';	//i
	unicodeValue["j"] = '\u0D1C';	//j
	unicodeValue["k"] = '\u0D15';	//k
	unicodeValue["l"] = '\u0D32';	//l
	unicodeValue["m"] = '\u0D2E';	//m
	unicodeValue["n"] = '\u0D28';	//n
	unicodeValue["o"] = '\u0D4B';	//o
	unicodeValue["p"] = '\u0D2A';	//p
	unicodeValue["q"] = '\u0943';	//q
	unicodeValue["r"] = '\u0D30';	//r
	unicodeValue["s"] = '\u0D38';	//s
	unicodeValue["t"] = '\u0D1F';	//t
	unicodeValue["u"] = '\u0D41';	//u
	unicodeValue["v"] = '\u0D35';	//v
	unicodeValue["w"] = '\u0D24';	//w
	unicodeValue["x"] = '\u0D26';	//x
	unicodeValue["y"] = '\u0D2F';	//y
	unicodeValue["z"] = '\u0901';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0D3E';	//A
	unicodeValue["B"] = '\u0D2D';	//B
	unicodeValue["C"] = '\u0D1B';	//C
	unicodeValue["D"] = '\u0D22';	//D
	unicodeValue["E"] = '\u0D48';	//E
	unicodeValue["F"] = '\u0D1E';	//F
	unicodeValue["G"] = '\u0D18';	//G
	unicodeValue["H"] = '\u0D03';	//H
	unicodeValue["I"] = '\u0D40';	//I
	unicodeValue["J"] = '\u0D1D';	//J
	unicodeValue["K"] = '\u0D16';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0D02';	//M
	unicodeValue["N"] = '\u0D23';	//N
	unicodeValue["O"] = '\u0D4C';	//O
	unicodeValue["P"] = '\u0D2B';	//P
	unicodeValue["Q"] = '\u0944';	//Q
	unicodeValue["R"] = '\u0D37';	//R
	unicodeValue["S"] = '\u0D36';	//S
	unicodeValue["T"] = '\u0D20';	//T
	unicodeValue["U"] = '\u0D42';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0D25';	//W
	unicodeValue["X"] = '\u0D27';	//X
	//unicodeValue["Y"] = '\u093D';	//Y
	//unicodeValue["Y"] = 'Y';	//Y
//	unicodeValue["Z"] = '\u093C';	//Z
	//unicodeValue["Z"] = 'Z';	//Z
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

	/**************Two Character length words************/

	unicodeValue["aA"]='\u0D06';
	unicodeValue["ai"]='\u0D07';
	unicodeValue["aI"]='\u0D08';
	unicodeValue["au"]='\u0D09';
	unicodeValue["aU"]='\u0D0A';
	unicodeValue["aq"]='\u0D0B';
	unicodeValue["lq"]='\u0D0C';
	unicodeValue["ae"]='\u0D0F';
	unicodeValue["aE"]='\u0D10';
	unicodeValue["ao"]='\u0D13';
	unicodeValue["aO"]='\u0D14';
	unicodeValue["lY"]='\u0D33';
	//unicodeValue["EY"]='\u0945';
	unicodeValue["eV"]='\u0D46';
	//unicodeValue["OY"]='\u0949';
	unicodeValue["oV"]='\u0D4A';

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

