function getWxPanUnicode(unicode){

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
	unicodeValue["_"] = '\u0A4D';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0964';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0A66';	//0
	unicodeValue["1"] = '\u0A67';	//1
	unicodeValue["2"] = '\u0A68';	//2
	unicodeValue["3"] = '\u0A69';	//3
	unicodeValue["4"] = '\u0A6A';	//4
	unicodeValue["5"] = '\u0A6B';	//5
	unicodeValue["6"] = '\u0A6C';	//6
	unicodeValue["7"] = '\u0A6D';	//7
	unicodeValue["8"] = '\u0A6E';	//8
	unicodeValue["9"] = '\u0A6F';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0A05';	//a
	unicodeValue["b"] = '\u0A2C';	//b
	unicodeValue["c"] = '\u0A1A';	//c
	unicodeValue["d"] = '\u0A21';	//d
	unicodeValue["e"] = '\u0A47';	//e
	unicodeValue["f"] = '\u0A19';	//f
	unicodeValue["g"] = '\u0A17';	//g
	unicodeValue["h"] = '\u0A39';	//h
	unicodeValue["i"] = '\u0A3F';	//i
	unicodeValue["j"] = '\u0A1C';	//j
	unicodeValue["k"] = '\u0A15';	//k
	unicodeValue["l"] = '\u0A32';	//l
	unicodeValue["m"] = '\u0A2E';	//m
	unicodeValue["n"] = '\u0A28';	//n
	unicodeValue["o"] = '\u0A4B';	//o
	unicodeValue["p"] = '\u0A2A';	//p
	//unicodeValue["q"] = 'q';	//q
	unicodeValue["r"] = '\u0A30';	//r
	unicodeValue["s"] = '\u0A38';	//s
	unicodeValue["t"] = '\u0A1F';	//t
	unicodeValue["u"] = '\u0A41';	//u
	unicodeValue["v"] = '\u0A35';	//v
	unicodeValue["w"] = '\u0A24';	//w
	unicodeValue["x"] = '\u0A26';	//x
	unicodeValue["y"] = '\u0A2F';	//y
	unicodeValue["z"] = '\u0A01';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0A3E';	//A
	unicodeValue["B"] = '\u0A2D';	//B
	unicodeValue["C"] = '\u0A1B';	//C
	unicodeValue["D"] = '\u0A22';	//D
	unicodeValue["E"] = '\u0A48';	//E
	unicodeValue["F"] = '\u0A1E';	//F
	unicodeValue["G"] = '\u0A18';	//G
	unicodeValue["H"] = '\u0A03';	//H
	unicodeValue["I"] = '\u0A40';	//I
	unicodeValue["J"] = '\u0A1D';	//J
	unicodeValue["K"] = '\u0A16';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0A02';	//M
	unicodeValue["N"] = '\u0A23';	//N
	unicodeValue["O"] = '\u0A4C';	//O
	unicodeValue["P"] = '\u0A2B';	//P
	//unicodeValue["Q"] = 'Q';	//Q
	//unicodeValue["R"] = 'R';	//R
	unicodeValue["S"] = '\u0A36';	//S
	unicodeValue["T"] = '\u0A20';	//T
	unicodeValue["U"] = '\u0A42';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0A25';	//W
	unicodeValue["X"] = '\u0A27';	//X
	//unicodeValue["Y"] = 'Y';	//Y
	unicodeValue["Z"] = '\u0A3C';	//Z
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

	/**************Two Character length words************/

	unicodeValue["aA"]='\u0A06';
	unicodeValue["ai"]='\u0A07';
	unicodeValue["aI"]='\u0A08';
	unicodeValue["au"]='\u0A09';
	unicodeValue["aU"]='\u0A0A';
	//unicodeValue["aq"]='\u090B';
	//unicodeValue["lq"]='\u090C';
	unicodeValue["ae"]='\u0A0F';
	unicodeValue["aE"]='\u0A10';
	unicodeValue["ao"]='\u0A13';
	unicodeValue["aO"]='\u0A14';
	unicodeValue["lY"]='\u0A33';
	//unicodeValue["EY"]='\u0945';
	//unicodeValue["eV"]='\u0946';
	//unicodeValue["OY"]='\u0949';
	//unicodeValue["oV"]='\u094A';

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

