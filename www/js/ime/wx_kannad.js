function getWxKanUnicode(unicode){

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
	unicodeValue["_"] = '\u0CCD';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0964';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0CE6';	//0
	unicodeValue["1"] = '\u0CE7';	//1
	unicodeValue["2"] = '\u0CE8';	//2
	unicodeValue["3"] = '\u0CE9';	//3
	unicodeValue["4"] = '\u0CEA';	//4
	unicodeValue["5"] = '\u0CEB';	//5
	unicodeValue["6"] = '\u0CEC';	//6
	unicodeValue["7"] = '\u0CED';	//7
	unicodeValue["8"] = '\u0CEE';	//8
	unicodeValue["9"] = '\u0CEF';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0C85';	//a
	unicodeValue["b"] = '\u0CAC';	//b
	unicodeValue["c"] = '\u0C9A';	//c
	unicodeValue["d"] = '\u0CA1';	//d
	unicodeValue["e"] = '\u0CC7';	//e
	unicodeValue["f"] = '\u0C99';	//f
	unicodeValue["g"] = '\u0C97';	//g
	unicodeValue["h"] = '\u0CB9';	//h
	unicodeValue["i"] = '\u0CBF';	//i
	unicodeValue["j"] = '\u0C9C';	//j
	unicodeValue["k"] = '\u0C95';	//k
	unicodeValue["l"] = '\u0CB2';	//l
	unicodeValue["m"] = '\u0CAE';	//m
	unicodeValue["n"] = '\u0CA8';	//n
	unicodeValue["o"] = '\u0CCB';	//o
	unicodeValue["p"] = '\u0CAA';	//p
	unicodeValue["q"] = '\u0CC3';	//q
	unicodeValue["r"] = '\u0CB0';	//r
	unicodeValue["s"] = '\u0CB8';	//s
	unicodeValue["t"] = '\u0C9F';	//t
	unicodeValue["u"] = '\u0CC1';	//u
	unicodeValue["v"] = '\u0CB5';	//v
	unicodeValue["w"] = '\u0CA4';	//w
	unicodeValue["x"] = '\u0CA6';	//x
	unicodeValue["y"] = '\u0CAF';	//y
	//unicodeValue["z"] = '\u0901';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0CBE';	//A
	unicodeValue["B"] = '\u0CAD';	//B
	unicodeValue["C"] = '\u0C9B';	//C
	unicodeValue["D"] = '\u0CA2';	//D
	unicodeValue["E"] = '\u0CC8';	//E
	unicodeValue["F"] = '\u0C9E';	//F
	unicodeValue["G"] = '\u0C98';	//G
	unicodeValue["H"] = '\u0C83';	//H
	unicodeValue["I"] = '\u0CC0';	//I
	unicodeValue["J"] = '\u0C9D';	//J
	unicodeValue["K"] = '\u0C96';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0C82';	//M
	unicodeValue["N"] = '\u0CA3';	//N
	unicodeValue["O"] = '\u0CCC';	//O
	unicodeValue["P"] = '\u0CAB';	//P
	unicodeValue["Q"] = '\u0CC4';	//Q
	unicodeValue["R"] = '\u0CB7';	//R
	unicodeValue["S"] = '\u0CB6';	//S
	unicodeValue["T"] = '\u0CA0';	//T
	unicodeValue["U"] = '\u0CC2';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0CA5';	//W
	unicodeValue["X"] = '\u0CA7';	//X
	//unicodeValue["Y"] = '\u093D';	//Y
	unicodeValue["Z"] = '\u0CBC';	//Z
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

	/**************Two Character length words************/

	unicodeValue["aA"]='\u0C86';
	unicodeValue["ai"]='\u0C87';
	unicodeValue["aI"]='\u0C88';
	unicodeValue["au"]='\u0C89';
	unicodeValue["aU"]='\u0C8A';
	unicodeValue["aq"]='\u0C8B';
	unicodeValue["lq"]='\u0C8C';
	unicodeValue["ae"]='\u0C8F';
	unicodeValue["aE"]='\u0C90';
	unicodeValue["ao"]='\u0C93';
	unicodeValue["aO"]='\u0C94';
	unicodeValue["lY"]='\u0CB3';
	//unicodeValue["EY"]='\u0945';
	unicodeValue["eV"]='\u0CC6';
	//unicodeValue["OY"]='\u0949';
	unicodeValue["oV"]='\u0CCA';

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

