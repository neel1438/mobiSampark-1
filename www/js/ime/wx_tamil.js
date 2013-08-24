function getWxTamUnicode(unicode){

	var unicodeValue = new Array();

	/**************symbol mappings***********************/

	unicodeValue[";"] =  ';';	//;
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
	//unicodeValue["_"] = '\u094D';	//_
unicodeValue["_"] = '\u0BCD';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0BE4';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0BE6';	//0
	unicodeValue["1"] = '\u0BE7';	//1
	unicodeValue["2"] = '\u0BE8';	//2
	unicodeValue["3"] = '\u0BE9';	//3
	unicodeValue["4"] = '\u0BEA';	//4
	unicodeValue["5"] = '\u0BEB';	//5
	unicodeValue["6"] = '\u0BEC';	//6
	unicodeValue["7"] = '\u0BED';	//7
	unicodeValue["8"] = '\u0BEE';	//8
	unicodeValue["9"] = '\u0BEF';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0B85';	//a
	//unicodeValue["b"] = 'b';	//b
	unicodeValue["c"] = '\u0B9A';	//c
	//unicodeValue["d"] = 'd';	//d
	unicodeValue["e"] = '\u0BC7';	//e
	unicodeValue["f"] = '\u0B99';	//f
	//unicodeValue["g"] = 'g';	//g
	unicodeValue["h"] = '\u0BB9';	//h
	unicodeValue["i"] = '\u0BBF';	//i
	unicodeValue["j"] = '\u0B9C';	//j
	unicodeValue["k"] = '\u0B95';	//k
	unicodeValue["l"] = '\u0BB2';	//l
	unicodeValue["m"] = '\u0BAE';	//m
	unicodeValue["n"] = '\u0BA8';	//n
	unicodeValue["o"] = '\u0BCB';	//o
	unicodeValue["p"] = '\u0BAA';	//p
	//unicodeValue["q"] = 'q';	//q
	unicodeValue["r"] = '\u0BB0';	//r
	unicodeValue["s"] = '\u0BB8';	//s
	unicodeValue["t"] = '\u0B9F';	//t
	unicodeValue["u"] = '\u0BC1';	//u
	unicodeValue["v"] = '\u0BB5';	//v
	unicodeValue["w"] = '\u0BA4';	//w
	//unicodeValue["x"] = 'x';	//x
	unicodeValue["y"] = '\u0BAF';	//y
	//unicodeValue["z"] = 'z';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0BBE';	//A
	//unicodeValue["B"] = 'B';	//B
	//unicodeValue["C"] = 'C';	//C
	//unicodeValue["D"] = 'D';	//D
	unicodeValue["E"] = '\u0BC8';	//E
	unicodeValue["F"] = '\u0B9E';	//F
	//unicodeValue["G"] = 'G';	//G
	unicodeValue["H"] = '\u0B83';	//H
	unicodeValue["I"] = '\u0BC0';	//I
	//unicodeValue["J"] = 'J';	//J
	//unicodeValue["K"] = 'K';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0B82';	//M
	unicodeValue["N"] = '\u0BA3';	//N
	unicodeValue["O"] = '\u0BCC';	//O
	//unicodeValue["P"] = 'P';	//P
	//unicodeValue["Q"] = 'Q';	//Q
	unicodeValue["R"] = '\u0BB7';	//R
	unicodeValue["S"] = '\u0BB6';	//S
	//unicodeValue["T"] = 'T';	//T
	unicodeValue["U"] = '\u0BC2';	//U
	//unicodeValue["V"] = 'V';	//V
	//unicodeValue["W"] = 'W';	//W
	//unicodeValue["X"] = 'X';	//X
	//unicodeValue["Y"] = 'Y';	//Y
	//unicodeValue["Z"] = 'Z';	//Z
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

	/**************Two Character length words************/

	unicodeValue["aA"]='\u0B86';
	unicodeValue["ai"]='\u0B87';
	unicodeValue["aI"]='\u0B88';
	unicodeValue["au"]='\u0B89';
	unicodeValue["aU"]='\u0B8A';
	//unicodeValue["aq"]='aq';
	//unicodeValue["lq"]='lq';
	unicodeValue["ae"]='\u0B8F';
	unicodeValue["aE"]='\u0B90';
	unicodeValue["ao"]='\u0B93';
	unicodeValue["aO"]='\u0B94';
	unicodeValue["lY"]='\u0BB3';
	//unicodeValue["EY"]='EY';
	unicodeValue["eV"]='\u0BC6';
	//unicodeValue["OY"]='OY';
	unicodeValue["oV"]='\u0BCA';

	/***********Three Character length words**************/
	//unicodeValue["aEY"]='aEY';
	//unicodeValue["aeV"]='\u0B8E';
	
	//unicodeValue["aOY"]='aOY';
	//unicodeValue["aoV"]='\u0B92';
	if(unicodeValue[unicode]!=null){
		textUnicode = unicodeValue[unicode];
	}
	else{
		textUnicode = "";
	}
	
	return textUnicode;
}

