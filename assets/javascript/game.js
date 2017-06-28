
            //so images need to generate a number 
            // based off their image value between 1-12 with 
            // a click function 


            // the random number at the start of the game
            // needs to be between 19-120

            // the wins and losses need to accumilate 
            // my score needs to be displayed at the bottom based
            // off the crystal I click

var myScore = 0;
var wins = 0;
var losses = 0;
var randomComputerNumber;

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gameStart() {
    randomComputerNumber = getRandomNum(19, 120);
    
    $('.crystals div').each(function() {
        var crystal = $(this);

        crystal.attr('data-number', getRandomNum(1, 12));
    });

    $("#winsTotal").text("Wins: " + wins);
    $("#lossesTotal").text("Losses: " + losses);
    $("#randomNumber").text(randomComputerNumber);
    $("#myScore").text(myScore);
}



function addToScore() {
    var crystal = $(this);
    var value = Number(crystal.attr('data-number'));

    myScore += value;
    if (myScore > randomComputerNumber) {
        alert("What have you done!?!");
        losses++;
    $("#lossesTotal").text("Losses: " + losses);

    gameStart();
    myScore =0;

        if (myScore == randomComputerNumber){
            alert("Champion!")
            wins++;
            $("#winsTotal").text("Wins: " + wins);
            gameStart();
            myScore =0;

        }

    }

    $('#myScore').text(myScore);
}

$('.crystals div').on('click', addToScore);


gameStart();




	

	

		









		
           



	

