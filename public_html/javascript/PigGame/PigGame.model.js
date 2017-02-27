"use strict";
/**
 * Created by kurmasz on 2/11/15.
 */


PigGame.Model = (function () {

    var init = function (playerNames, targetScore_in) {
        console.log(playerNames);
        // This shows you the instance variables I used when I implemented PigDice.
        // Feel free to change this list as you see fit.
        var gameDizzle;
        var players = [];
        var currentPlayer;
        var c = 0;
        var currentPoint = 0;
        var targetScore = targetScore_in;
        var initializePlayers = function ()
        {

            for (var i = 0; i < playerNames.length; i++)
            {


                players.push(PigGame.Player.init(playerNames[i]));



            }
            //currentPlayer = players[0];

            return players;
        };


        var currentDieValue = function () {

            return gameDizzle;
        };

        //get
        var getTargetScore = function () {
            return targetScore;
        };
        var getPlayerScores = function ()
        {
            //return players;
            var holder = [];
            console.log(players.length);
            for (var i = 0; i < players.length; i++)
            {
              //  console.log(players[i].getPScore());


                holder.push(players[i].getPScore());
            }

            return holder;
        };
        var getCurrentPoint = function ()
        {

            return currentPoint;
        };

        var getCurrentPlayer = function ()
        {
            return players[c];
        };

        var setBustedHandler = function ()
        {
            currentPoint = 0;
            pass();
        };

        var roll = function () {

            gameDizzle = 1 + Math.floor(Math.random() * 6);
            // console.log(gameDizzle);
            GameDie.View.init(gameDizzle);
            if (gameDizzle > 1)
            {
                currentPoint += gameDizzle;
            } else
            {
               
               currentPoint = 0;
                
            }
            //check if current die + cached score is winning

        };

        var pass = function ()
        {
            // save score in player 
            //set new player
            // alert("Boo Pass");
            
            players[c].upDateScore(currentPoint);

            currentPoint = 0;
            if (c == (players.length - 1))
            {
                c = 0;

               // console.log("this happens");
            } else
            {
                c++;
            }
            currentPlayer = players[c];
        };

        //initializePlayers();

        //TODO:  Add any other necessary instance variables and instance methods 

        // This shows you the list of instance methods I created for my view.
        // Feel free to change this list as you see fit.

        return {
            currentDieValue: currentDieValue,
            getTargetScore: getTargetScore,
            getPlayerScores: getPlayerScores,
            getCurrentPoint: getCurrentPoint,
            getCurrentPlayer: getCurrentPlayer,
            setBustedHandler: setBustedHandler,
            initializePlayers: initializePlayers,
            roll: roll,
            pass: pass
        };
    };

    // If you want your model to have static methods, they would go here.
    return {
        init: init
    };
})();