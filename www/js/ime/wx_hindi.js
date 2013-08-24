function getWxHinUnicode(unicode){

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
	unicodeValue["_"] = '\u094D';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0964';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0966';	//0
	unicodeValue["1"] = '\u0967';	//1
	unicodeValue["2"] = '\u0968';	//2
	unicodeValue["3"] = '\u0969';	//3
	unicodeValue["4"] = '\u096A';	//4
	unicodeValue["5"] = '\u096B';	//5
	unicodeValue["6"] = '\u096C';	//6
	unicodeValue["7"] = '\u096D';	//7
	unicodeValue["8"] = '\u096E';	//8
	unicodeValue["9"] = '\u096F';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0905';	//a
	unicodeValue["b"] = '\u092C';	//b
	unicodeValue["c"] = '\u091A';	//c
	unicodeValue["d"] = '\u0921';	//d
	unicodeValue["e"] = '\u0947';	//e
	unicodeValue["f"] = '\u0919';	//f
	unicodeValue["g"] = '\u0917';	//g
	unicodeValue["h"] = '\u0939';	//h
	unicodeValue["i"] = '\u093F';	//i
	unicodeValue["j"] = '\u091C';	//j
	unicodeValue["k"] = '\u0915';	//k
	unicodeValue["l"] = '\u0932';	//l
	unicodeValue["m"] = '\u092E';	//m
	unicodeValue["n"] = '\u0928';	//n
	unicodeValue["o"] = '\u094B';	//o
	unicodeValue["p"] = '\u092A';	//p
	unicodeValue["q"] = '\u0943';	//q
	unicodeValue["r"] = '\u0930';	//r
	unicodeValue["s"] = '\u0938';	//s
	unicodeValue["t"] = '\u091F';	//t
	unicodeValue["u"] = '\u0941';	//u
	unicodeValue["v"] = '\u0935';	//v
	unicodeValue["w"] = '\u0924';	//w
	unicodeValue["x"] = '\u0926';	//x
	unicodeValue["y"] = '\u092F';	//y
	unicodeValue["z"] = '\u0901';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u093E';	//A
	unicodeValue["B"] = '\u092D';	//B
	unicodeValue["C"] = '\u091B';	//C
	unicodeValue["D"] = '\u0922';	//D
	unicodeValue["E"] = '\u0948';	//E
	unicodeValue["F"] = '\u091E';	//F
	unicodeValue["G"] = '\u0918';	//G
	unicodeValue["H"] = '\u0903';	//H
	unicodeValue["I"] = '\u0940';	//I
	unicodeValue["J"] = '\u091D';	//J
	unicodeValue["K"] = '\u0916';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0902';	//M
	unicodeValue["N"] = '\u0923';	//N
	unicodeValue["O"] = '\u094C';	//O
	unicodeValue["P"] = '\u092B';	//P
	unicodeValue["Q"] = '\u0944';	//Q
	unicodeValue["R"] = '\u0937';	//R
	unicodeValue["S"] = '\u0936';	//S
	unicodeValue["T"] = '\u0920';	//T
	unicodeValue["U"] = '\u0942';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0925';	//W
	unicodeValue["X"] = '\u0927';	//X
	unicodeValue["Y"] = '\u093D';	//Y
	unicodeValue["Z"] = '\u093C';	//Z
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

	/**************Two Character length words************/

	unicodeValue["aA"]='\u0906';
	unicodeValue["ai"]='\u0907';
	unicodeValue["aI"]='\u0908';
	unicodeValue["au"]='\u0909';
	unicodeValue["aU"]='\u090A';
	unicodeValue["aq"]='\u090B';
	unicodeValue["lq"]='\u090C';
	unicodeValue["ae"]='\u090F';
	unicodeValue["aE"]='\u0910';
	unicodeValue["ao"]='\u0913';
	unicodeValue["aO"]='\u0914';
	unicodeValue["lY"]='\u0933';
	unicodeValue["EY"]='\u0945';
	unicodeValue["eV"]='\u0946';
	unicodeValue["OY"]='\u0949';
	unicodeValue["oV"]='\u094A';

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

