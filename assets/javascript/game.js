
            //so images need to generate a number 
            // based off their image value between 1-12 with 
            // a click function 


            // the random number at the start of the game
            // needs to be between 19-120

            // the wins and losses need to accumilate 
            // my score needs to be displayed at the bottom based
            // off the crystal I click

$(document).ready(function() {


            var myScore = 0;
            var wins = 0;
            var losses = 0;
            var randomComputerNumber = Math.floor(Math.random() * 102 + 19);
            var crystal1 = Math.floor(Math.random() * 12 + 1);
            var crystal2 = Math.floor(Math.random() * 12 + 1);
            var crystal3 = Math.floor(Math.random() * 12 + 1);
           	var crystal4 = Math.floor(Math.random() * 12 + 1);

             function gameStart() {
            
            randomComputerNumber = Math.floor(Math.random() * 102 + 19);
            crystal1 = Math.floor(Math.random() * 12 + 1);
            crystal2 = Math.floor(Math.random() * 12 + 1);
            crystal3 = Math.floor(Math.random() * 12 + 1);
           	crystal4 = Math.floor(Math.random() * 12 + 1);

            	$("#winsTotal").text("Wins: " + wins);
				$("#lossesTotal").text("Losses: " + losses);
				$("#randomNumber").text(randomComputerNumber);
				$("#myScore").text(myScore);

				console.log(crystal1);
        }


	

		// gameStart();
		// $(".image").on("click", function() {
						
		// var crystalPressed = $(this).attr("value");
		gameStart();
		$("crystal1").on("click", function(){
			myScore = myScore + crystal1;
		})

        // if (crystalPressed == "crystal1") {
        // 	myScore += crystal1;
        // } else if (crystalPressed == "crystal2") {
        // 	myScore += crystal2;
        // } else if (crystalPressed == "crystal3") {
        // 	myScore += crystal3;
        // } else if (crystalPressed == "crystal4") {
        // 	myScore += crystal4;
        // } 
        });

					function endResult() {
		if (myScore > randomComputerNumber) {
			losses++;
			alert("Whomp Whomp")		
			gameStart();
		}

		if (myScore == randomComputerNumber) {
			wins++;
			alert("You won huzzah!");
			gameStart();
		}

        $("#myScore").html(myScore);
        endResult();
    };

	

		









		
           



	

