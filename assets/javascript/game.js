var wins;
var loses;
// * There will be four crystals displayed as buttons on the page.
// Mine will be rebel ships against the deathstar just to be different.
var ship1, ship2, ship3, ship4;
var ship1val, ship2val, ship3val,ship4val;
// * The player will be shown a random number at the start of the game.
// Score card layout will be on various areas of the page rather than a central location as in the past.
var defense;
// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// This should be educational and so I do not intend to show players the value after they click on one of the ships.
// It will take just some simple math for them to figure out what the value of that ship is, and simple math to know what they need to win.
// If I have to do math and logic for this darn thing again then there is no reason they can't either. ;-)
var gameStarted;
var pScore;

var scoreKeeper;

$("#ship1").on("click", function () {
    if (gameStarted === true) {
        scoreKeeper += ship1val;
        $("#pScore").text(scoreKeeper);
        results();
    }
    else {
        return;
    }
});
$("#ship2").on("click", function () {
    if (gameStarted === true) {
        scoreKeeper += ship2val;
        $("#pScore").text(scoreKeeper);
        results();
    }
    else {
        return;
    }
});
$("#ship3").on("click", function () {
    if (gameStarted === true) {
        scoreKeeper += ship3val;
        $("#pScore").text(scoreKeeper);
        results();
    }
    else {
        return;
    }
});
$("#ship4").on("click", function () {
    if (gameStarted === true) {
        scoreKeeper += ship4val;
        $("#pScore").text(scoreKeeper);
        results();
    }
    else {
        return;
    }
});
//   * Your game will hide this amount until the player clicks a crystal.
//   * When they do click one, update the player's score counter.

var addScore;


// * The player wins if their total score matches the random number from the beginning of the game.
// * The player loses if their score goes above the random number.

function results() {
    if (scoreKeeper === random) {
        $.alert({
            title: 'BOOM BOOM BOOM',
            content: 'You Destroied The Deathstar! MEOW!<a href="/assets/images/boom.jpg">',
        });
        wins ++ ;
        gameStarted = false;
        return;
    }
    else if (scoreKeeper > random) {
        $.alert({
            title: 'SIZZLE THWAP',
            content: 'TOO MUCH! TOO MUCH! Kitty claws scratch! REWAWR!<img src="/assets/images/game over.jpg">',
        });
        loses ++ ;
        gameStarted = false;
        return;
    }
    else (scoreKeeper < random);{
        return;
    }
}
// * The game restarts whenever the player XXXwins or losesXXX. -- clicks on start.
//   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. 
//  Of course, the user's score (and score counter) will reset to zero.
// * The random number shown at the start of the game should be between 19 - 120.
// * Each crystal should have a random hidden value between 1 - 12.

var gameStarted = false;

function startNew() {
    gameStarted = true;
    random = Math.floor(Math.random() * 102 + 19);
    $("#defense").text(random);
    ship1val = Math.floor(Math.random() * 12 + 1);
    ship2val = Math.floor(Math.random() * 12 + 1);
    ship3val = Math.floor(Math.random() * 12 + 1);
    ship4val = Math.floor(Math.random() * 12 + 1);
    scoreKeeper = "0";
    $("#pScore").text(scoreKeeper);
    }

// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

