function getWxUrdUnicode(unicode){

	var unicodeValue = new Array();

	/**************symbol mappings***********************/

	unicodeValue[";"] = '\u0621';	//;!
	unicodeValue[":"] = ':';	//:!
	unicodeValue["\""] = '\u0657';	//!
	unicodeValue["'"] = '\u066C';	//'!
	unicodeValue[","] = '\u0679';	//,!
	unicodeValue["\."] = '\u0688';	//.!
	unicodeValue["/"] = '\u060C';	//!
	unicodeValue["?"] = '\u061F';	//?!
	unicodeValue["<"] = '\u0640';	//<!
	unicodeValue[">"] = '\u061B';	//>!
	unicodeValue["["] = '\u06BE';	//[!
	unicodeValue["]"] = '\u0637';	//]!
	unicodeValue["{"] = '\u0654';	//{!
	unicodeValue["}"] = '\u0638';	//}!
	unicodeValue["("] = '40';	//(
	unicodeValue[")"] = '41';	//)
	unicodeValue["@"] = '\u0601';	//@!
	unicodeValue["#"] = '\u0614';	//#!
	unicodeValue["92"] = '\u0612';	//&! NOT working
	unicodeValue["124"] = '\u0674';	//%! NOT working
	unicodeValue["^"] = '\u0611';	//^!
	unicodeValue["*"] = '\u064C';	//*!
	unicodeValue["_"] = '\u065D';	//_!
	unicodeValue["="] = '\u0670';	//=!
	unicodeValue["+"] = '\u0656';	//+!
	unicodeValue["-"] = '\u06D4';	//-!
	unicodeValue["|"] = '\u060E';	//|!
	unicodeValue["~"] = '\u0602';	//~!
	unicodeValue["`"] = '\u0603';	//`!
	unicodeValue["\\"] = '\u060F';	//|!


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0660';	//0
	unicodeValue["1"] = '\u0661';	//1
	unicodeValue["2"] = '\u0662';	//2
	unicodeValue["3"] = '\u0663';	//3
	unicodeValue["4"] = '\u0664';	//4
	unicodeValue["5"] = '\u0665';	//5
	unicodeValue["6"] = '\u0666';	//6
	unicodeValue["7"] = '\u0667';	//7
	unicodeValue["8"] = '\u0668';	//8
	unicodeValue["9"] = '\u0669';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0633';	//a!
	unicodeValue["b"] = '\u0628';	//b!
	unicodeValue["c"] = '\u0686';	//c!
	unicodeValue["d"] = '\u062F';	//d!
	unicodeValue["e"] = '\u0639';	//e!
	unicodeValue["f"] = '\u0641';	//f!
	unicodeValue["g"] = '\u06AF';	//g!
	unicodeValue["h"] = '\u0627';	//h!
	unicodeValue["i"] = '\u06D2';	//i!
	unicodeValue["j"] = '\u062C';	//j!
	unicodeValue["k"] = '\u06A9';	//k!
	unicodeValue["l"] = '\u0644';	//l!
	unicodeValue["m"] = '\u0645';	//m!
	unicodeValue["n"] = '\u0646';	//n!
	unicodeValue["o"] = '\u06C1';	//o!
	unicodeValue["p"] = '\u067E';	//p!
	unicodeValue["q"] = '\u0642';	//q!
	unicodeValue["r"] = '\u0631';	//r!
	unicodeValue["s"] = '\u0634';	//s!
	unicodeValue["t"] = '\u062A';	//t!
	unicodeValue["u"] = '\u062D';	//u!
	unicodeValue["v"] = '\u0648';	//v!
	unicodeValue["w"] = '\u0610';	//w!
	unicodeValue["x"] = '\u0635';	//x!
	unicodeValue["y"] = '\u06CC';	//y!
	unicodeValue["z"] = '\u06BA';	//z!

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0651';	//A!
	unicodeValue["B"] = '\u064D';	//B!
	unicodeValue["C"] = '\u062B';	//C!
	unicodeValue["D"] = '\u0630';	//D!
	unicodeValue["E"] = '\u063A';	//E!
	unicodeValue["F"] = '\u064E';	//F!
	unicodeValue["G"] = '\u0653';	//G!
	unicodeValue["H"] = '\u0622';	//H!
	unicodeValue["I"] = '\u06D3';	//I!
	unicodeValue["J"] = '\u0652';	//J!
	unicodeValue["K"] = '\u0625';	//K!
	unicodeValue["L"] = '\u0619';	//L!
	unicodeValue["M"] = '\u0632';	//M!
	unicodeValue["N"] = '\u064B';	//N!
	unicodeValue["O"] = '\u0655';	//O!
	unicodeValue["P"] = '\u064F';	//P!
	unicodeValue["Q"] = '\u0613';	//Q!
	unicodeValue["R"] = '\u0691';	//R!
	unicodeValue["S"] = '\u0650';	//S!
	unicodeValue["T"] = '\u0629';	//T!
	unicodeValue["U"] = '\u062E';	//U!
	unicodeValue["V"] = '\u0624';	//V!
	unicodeValue["W"] = '\u0FDFA';	//W!
	unicodeValue["X"] = '\u0636';	//X!
	unicodeValue["Y"] = '\u0626';	//Y!
	unicodeValue["Z"] = '\u0698';	//Z!
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

	/**************Two Character length words************/

	/*unicodeValue["aA"]='\u0906';
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
	unicodeValue["oV"]='\u094A';*/

	/***********Three Character length words**************/
	//unicodeValue["aEY"]='\u090D';
	//unicodeValue["aeV"]='\u090E';
	
	//unicodeValue["aOY"]='\u0911';
	//unicodeValue["aoV"]='\u0912';
	if(unicodeValue[unicode]!=null){
		textUnicode = unicodeValue[unicode];
	}
	else{

	}
	//alert(textUnicode);
	return textUnicode;
}

