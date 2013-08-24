function getWxTelUnicode(unicode){
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
	unicodeValue["_"] = '\u0C4D';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '|';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0C66';	//0
	unicodeValue["1"] = '\u0C67';	//1
	unicodeValue["2"] = '\u0C68';	//2
	unicodeValue["3"] = '\u0C69';	//3
	unicodeValue["4"] = '\u0C6A';	//4
	unicodeValue["5"] = '\u0C6B';	//5
	unicodeValue["6"] = '\u0C6C';	//6
	unicodeValue["7"] = '\u0C6D';	//7
	unicodeValue["8"] = '\u0C6E';	//8
	unicodeValue["9"] = '\u0C6F';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0C05';	//a
	unicodeValue["b"] = '\u0C2C';	//b
	unicodeValue["c"] = '\u0C1A';	//c
	unicodeValue["d"] = '\u0C21';	//d
	unicodeValue["e"] = '\u0C47';	//e
	unicodeValue["f"] = '\u0C91';	//f
	unicodeValue["g"] = '\u0C17';	//g
	unicodeValue["h"] = '\u0C39';	//h
	unicodeValue["i"] = '\u0C3F';	//i
	unicodeValue["j"] = '\u0C1C';	//j
	unicodeValue["k"] = '\u0C15';	//k
	unicodeValue["l"] = '\u0C32';	//l
	unicodeValue["m"] = '\u0C2E';	//m
	unicodeValue["n"] = '\u0C28';	//n
	unicodeValue["o"] = '\u0C4B';	//o
	unicodeValue["p"] = '\u0C2A';	//p
	unicodeValue["q"] = '\u0C43';	//q
	unicodeValue["r"] = '\u0C30';	//r
	unicodeValue["s"] = '\u0C38';	//s
	unicodeValue["t"] = '\u0C1F';	//t
	unicodeValue["u"] = '\u0C41';	//u
	unicodeValue["v"] = '\u0C35';	//v
	unicodeValue["w"] = '\u0C24';	//w
	unicodeValue["x"] = '\u0C26';	//x
	unicodeValue["y"] = '\u0C2F';	//y
	unicodeValue["z"] = '\u0C01';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0C3E';	//A
	unicodeValue["B"] = '\u0C2D';	//B
	unicodeValue["C"] = '\u0C1D';	//C
	unicodeValue["D"] = '\u0C22';	//D
	unicodeValue["E"] = '\u0C48';	//E
	unicodeValue["F"] = '\u0C1E';	//F
	unicodeValue["G"] = '\u0C18';	//G
	unicodeValue["H"] = '\u0C03';	//H
	unicodeValue["I"] = '\u0C40';	//I
	unicodeValue["J"] = '\u0C1D';	//J
	unicodeValue["K"] = '\u0C16';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0C02';	//M
	unicodeValue["N"] = '\u0C23';	//N
	unicodeValue["O"] = '\u0C4C';	//O
	unicodeValue["P"] = '\u0C2B';	//P
	unicodeValue["Q"] = '\u0C44';	//Q
	unicodeValue["R"] = '\u0C37';	//R
	unicodeValue["S"] = '\u0C36';	//S
	unicodeValue["T"] = '\u0C20';	//T
	unicodeValue["U"] = '\u0C42';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0C25';	//W
	unicodeValue["X"] = '\u0C27';	//X
	//unicodeValue["Y"] = 'Y';	//Y
	//unicodeValue["Z"] = 'Z';	//Z
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

	/**************Two Character length words************/

	unicodeValue["aA"]='\u0C06';
	unicodeValue["ai"]='\u0C07';
	unicodeValue["aI"]='\u0C08';
	unicodeValue["au"]='\u0C09';
	unicodeValue["aU"]='\u0C0A';
	unicodeValue["aq"]='\u0C0B';
	unicodeValue["lq"]='\u0C0C';
	unicodeValue["ae"]='\u0C0F';
	unicodeValue["aE"]='\u0C10';
	unicodeValue["ao"]='\u0C13';
	unicodeValue["aO"]='\u0C14';
	//unicodeValue["lY"]='\u0933';
//	unicodeValue["EY"]='\u0C01';
	unicodeValue["eV"]='\u0C46';
	//unicodeValue["OY"]='\u0949';
	unicodeValue["oV"]='\u0C4A';

	/***********Three Character length words**************/
	//unicodeValue["aEY"]='\u090D';
//	unicodeValue["aeV"]='\u090E';
	
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

