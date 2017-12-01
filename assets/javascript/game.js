// game object
var game = {
    wins: 0,
    losses: 0,
    goal: 0,
    scoreCount: 0,
    buttonValues: [],
    images: [],
    imageOptions: ["img0.png", "img1.png", "img2.png", "img3.png"],
    // generates and returns random number
    rng: function () {
        return Math.floor(Math.random() * 12) + 1;
    },

    // resets game and adds one to wins
    win: function () {
        $("#score-count").text(game.scoreCount);
        alert("you win");
        setTimeout(game.reset, 1000);
        game.wins++;
        $("#win-count").text(game.wins);
    },

    // resets game and adds one to losses
    lose: function () {
        $("#score-count").text(game.scoreCount);
        alert("you lose");
        setTimeout(game.reset, 1000);
        game.losses++;
        $("#loss-count").text(game.losses);
    },

    // resets button images
    winLossReset: function () {

        // resets win and loss counter
        game.wins = 0;
        game.losses = 0;
        $("#win-count").text(game.wins);
        $("#loss-count").text(game.losses);

    },

    // reset game
    reset: function () {

        // resets all game parameters

        // resets button images
        $(".btn-default").html("<img src='assets/images/img0.png'>");

        // sets a new goal
        game.goal = Math.floor(Math.random() * (49 - 19) + 19);

        // pushes goal to html
        $("#goal-count").text(game.goal);

        // resets score
        game.scoreCount = 0;
        $("#score-count").text(game.scoreCount);

        // creates new button values 
        game.buttonValues = [];
        for (i = 0; i < 4; i++) {
            game.buttonValues.push(game.rng());
        }
        //    

        

        // assigns values to buttons while checking for, and eliminating, redundancy

        // ==================== assigns value to button 0 ====================
        $("#button1").attr("value", game.buttonValues[0]);

        // ==================== assigns value to button 1 ====================
        $("#button2").attr("value", game.buttonValues[1]);

        // checks if the new value of button 1 is the same as the value of button 0
        if (game.buttonValues[1] == game.buttonValues[0]) {

            // reassigns values until redundancy is eliminated
            game.buttonValues[1] = (game.rng());
            $("#button2").attr("value", game.buttonValues[1]);

        }

        // ==================== assigns value to button 2 ====================
        $("#button3").attr("value", game.buttonValues[2]);

        // checks if the new value of button 2 is the same as the value of button 1 or button 0
        if (game.buttonValues[2] == game.buttonValues[1] || game.buttonValues[2] == game.buttonValues[0]) {

            // reassigns values until redundancy is eliminated
            game.buttonValues[2] = (game.rng());
            $("#button3").attr("value", game.buttonValues[2]);

        }

        // ==================== assigns value to button 3 ====================
        $("#button4").attr("value", game.buttonValues[3]);

        // checks if the new value of button 3 is the same as the value of button 2, button 1, or button 0
        if (game.buttonValues[3] == game.buttonValues[2] || game.buttonValues[3] == game.buttonValues[1] || game.buttonValues[3] == game.buttonValues[0]) {

            // reassigns values until redundancy is eliminated
            game.buttonValues[3] = (game.rng());
            $("#button4").attr("value", game.buttonValues[3]);

        }

        // dev console.log
        console.log(game.buttonValues);
        // 

    },
}

// initialize game on load
game.reset();

// when a button is clicked
$("button").click(function () {

    // get the buttons value 
    let value = $(this).val();

    // add the value to score 
    game.scoreCount = (parseInt(value)) + (parseInt(game.scoreCount))

    // update the score 
    $("#score-count").text(game.scoreCount);

    if ($(this).val()) {
        $(this).text($(this).val());
    }

    // check if the score equals the goal (win condition)
    if (game.scoreCount == game.goal) {

        // win game
        game.win();


    } else {
        // check if score exceeds goal (loss condition)
        if (game.scoreCount > game.goal) {

            // lose game
            game.lose();
        }
    }
});

// when reset button is clicked
$("#reset-btn").click(function () {

    // reset game
    game.reset();
    game.winLossReset();
});