"use strict";
/**
 * Created by kurmasz on 2/16/15.
 */

PigGame.View = (function () {

    /**
     * Constructor
     * @returns {{setRollHandler: setRollHandler, setPassHandler: setPassHandler, showBoard: showBoard, initScoreList: initScoreList, updateDie: updateDie, updateWinningScore: updateWinningScore, updatePlayerScores: updatePlayerScores, updateCurrentPoint: updateCurrentPoint, updateCurrentPlayer: updateCurrentPlayer, displayBustedMessage: displayBustedMessage}}
     */
    var init = function () {


        var setRollHandler = function (handler) {
            document.getElementById("gamble").addEventListener("submit", handler);

        };

        var setPassHandler = function (handler)
        {
            document.getElementById("pass").addEventListener("click", handler);

        };
        //TODO:  Add any other necessary instance variables and instance methods 

        var showBoard = function (pDizzle)
        {
            console.log(pDizzle[0].getPName() + "to set up");

            document.getElementById("board").style.display = "block";
            var row = document.getElementById("game");
            for (var i = 0; i < pDizzle.length; i++)
            {
                //creating the playername List
                var para = document.createElement("P");
                var t = document.createTextNode(pDizzle[i].getPName() + " total points : ");
                var d = document.createElement("SPAN");
                d.setAttribute("class", "pRow");
                //d.innerHTML = Pdizzle[i].getPScore();

                para.appendChild(t);
                para.appendChild(d);

                //
                row.appendChild(para);

            }
            initScoreList(pDizzle);
            updateCurrentPlayer(pDizzle[0].getPName());
        };

        var initScoreList = function (pDizzle)
        {
            var row = document.getElementsByClassName("pRow");
            console.log(row);
            for (var i = 0; i < pDizzle.length; i++)
            {
                row[i].innerHTML = pDizzle[i].getPScore();
            }
        };
        
        var winCondition = function(cPlayer)
        {
            alert(cPlayer.getPName()  + "Wins " );
            document.getElementById("rollBtn").setAttribute("disabled",true);
            document.getElementById("holdBtn").setAttribute("disabled",true);
            document.getElementById("newGameBtn").removeAttribute("hidden");
        };
        
        var updateDie = function (n) {
            document.getElementById("current-roll").innerHTML = n;
        };

        var updateWinningScore = function (score)
        {
            document.getElementById("winningScore").innerHTML = score;

        };
        var updatePlayerScores = function (pDizzle)
        {
            var row = document.getElementsByClassName("pRow");
           
            for (var i = 0; i < pDizzle.length; i++)
            {
                row[i].innerHTML = pDizzle[i];
            }
            document.getElementById("current-turn-score").innerHTML = 0;
        };
        var updateCurrentPoint = function (n)
        {
            document.getElementById("current-turn-score").innerHTML = n;
        };
        var updateCurrentPlayer = function (cPlayer)
        {
           console.log(cPlayer);
           var k =  document.getElementById("current-player");
               k.innerHTML = cPlayer;
        };
        var displayBustedMessage = function ()
        {
            alert("Busted");
        };


        setRollHandler();
        setPassHandler();
        // This shows you the list of instance methods I created for my view.
        // Feel free to change this list as you see fit.
        return {
            setRollHandler: setRollHandler,
            setPassHandler: setPassHandler,
            showBoard: showBoard,
            initScoreList: initScoreList,
            updateDie: updateDie,
            updateWinningScore: updateWinningScore,
            updatePlayerScores: updatePlayerScores,
            updateCurrentPoint: updateCurrentPoint,
            updateCurrentPlayer: updateCurrentPlayer,
            displayBustedMessage: displayBustedMessage,
            winCondition: winCondition
        };
    };


    return {
        init: init
    }
})();