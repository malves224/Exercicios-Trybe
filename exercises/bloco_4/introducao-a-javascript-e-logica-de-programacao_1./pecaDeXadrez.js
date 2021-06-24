let pecaDeXadrez = "CAVALO".toLocaleLowerCase();

switch(pecaDeXadrez) {
	case "cavalo":
		console.log ("movimento em L");
		break;
	case "torre":
		console.log ("movimento em linha reta, sem limite de casas desde que haja espaço livre");
		break;	
	case "bispo":
		console.log ("Movimento sempre em diagonal");
		break;
	case "peão":
		console.log ("movimento para frente, e captura em diagonal");
		break;
	case "rei": 
		console.log ("movimeto para todos lados, limitado a uma casa");
	case "rainha":
		console.log ("movimento para todos os lados, sem limites de casa");
		break;
	}	