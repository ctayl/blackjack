// game object
var game = {
    wins: 0,
    losses: 0,
    dealerHand: 0,
    cardOne: 0,
    cardTwo: 0,
    playerHand: 0,
    buttonValues: [],
    images: [],
    imageOptions: ["img0.png", "img1.png", "img2.png", "img3.png"],
    // generates and returns random number
    rng: function () {
        return Math.floor(Math.random() * 13) + 1;
    },

    // resets game and adds one to wins
    win: function () {
        $("#score-count").text(game.playerHand);
        // alert("you win");
        setTimeout(game.reset, 1000);
        game.wins++;
        $("#win-count").text(game.wins);
    },

    // resets game and adds one to losses
    lose: function () {
        $("#score-count").text(game.playerHand);
        // alert("you lose");
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

    // draws random card
    draw: function () {
        return (Math.floor(Math.random() * (13 - 1) + 1));
    },

    // reset game
    reset: function () {

        // resets score
        game.playerHand = 0;

        $("#dealerHand-total").text("");

        // deals new hand
        game.dealHand();
        $("#score-count").text(game.playerHand);

        // deals dealer hand 
        game.dealerDeal();

    },

    dealHand: function () {
        var playerCardOne = game.draw();
        var playerCardTwo = game.draw();
        game.playerHand = playerCardOne + playerCardTwo;
        if (game.playerHand > 21) {
            game.dealHand();
        }
    },

    dealerDeal: function () {
        // sets dealers hand

        // draws first card
        game.cardOne = game.draw();

        // draws second card
        game.cardTwo = game.draw();

        // deals a new dealer hand if dealerhand is over 21
        game.dealerHand = game.cardOne + game.cardTwo;
        console.log(game.cardOne, game.cardTwo);
        if (game.dealerHand > 21) {
            game.dealerHand = 0;
            console.log("ovr");
            game.dealerDeal();
        } else if (game.dealerHand < 17) {

            // var newCard = game.draw();
            // game.dealerHand = game.dealerHand + newCard;
            console.log("draw again");
            game.dealerHand = game.dealerHand + game.draw();
            if (game.dealerHand > 21) {
                game.dealerHand = 0;
                console.log("ovr");
                game.dealerDeal();
            } else if (game.dealerHand < 17) {

                // var newCard = game.draw();
                // game.dealerHand = game.dealerHand + newCard;
                console.log("draw second");
                game.dealerHand = game.dealerHand + game.draw();
                if (game.dealerHand > 21) {
                    game.dealerHand = 0;
                    console.log("ovr");
                    game.dealerDeal();
                } else if (game.dealerHand < 17) {

                    // var newCard = game.draw();
                    // game.dealerHand = game.dealerHand + newCard;
                    console.log("draw third");
                    game.dealerHand = game.dealerHand + game.draw();
                    if (game.dealerHand > 21) {
                        game.dealerHand = 0;
                        console.log("ovr");
                        game.dealerDeal();
                    }
                }
            }

        }

        // pushes dealerHand to html
        console.log(game.dealerHand);
        $("dealerHand-total").text(game.dealerHand);
    },

    // hit me ;)
    hitMe: function () {
        // var card = game.draw();
        console.log("test");
        var hitCard = game.draw();
        console.log(hitCard);
        game.playerHand = game.playerHand + hitCard;
        $("#score-count").text(game.playerHand);
        $("#dealerHand-total").text(game.dealerHand);
        if (game.playerHand > 21) {

            // lose game
            game.lose();
        } else if (game.playerHand > game.dealerHand) {

            // win game
            game.win();


        }
    },
}

// initialize game on load
game.reset();

// when a button is clicked
// $("button").click(function () {

//     // get the buttons value 
//     let value = $(this).val();

//     // add the value to score 
//     game.playerHand = (parseInt(value)) + (parseInt(game.playerHand));

//     // update the score 
//     $("#score-count").text(game.playerHand);

//     if ($(this).val()) {
//         $(this).text($(this).val());
//     }

//     if (game.playerHand > 21) {

//         // lose game
//         game.lose();

//     }
// });

// when reset button is clicked
$("#reset-btn").click(function () {
    // check if score exceeds 21 (loss condition one)

        game.lose();

});

$("#stay-btn").click(function () {
    // check if score exceeds 21 (loss condition one)

    if (game.playerHand <= game.dealerHand) {

        // lose game
        game.lose();

        // check if the score equals the dealerHand (win condition)
    } else if (game.playerHand > game.dealerHand) {

        // win game
        game.win();


    }
});

$("#hit-me").click(function () {

    game.hitMe();
});