"use strict";
/**
 *
 * Controller for the PigGame MVC triad.
 *
 * Created by kurmasz on 3/23/15.
 */


PigGame.Controller = (function () {

    /**
     * Constructor
     * @param playerNames  An array containing the names of the players
     *
     * @param targetScore  The score at which the game is over.
     */
    var init = function (playerNames, targetScore) {


        var passButton = function (event) {
            event.preventDefault();
            // console.log("hi mom");
            newTurn();


        };
        var rollButton = function (event) {
            event.preventDefault();
            model.roll();

            //  var taco = model.currentDieValue();
            view.updateDie(model.currentDieValue());

            if (model.currentDieValue() == 1)
            {
                newTurn();
            } else {
//todo is muching up on first roll
                var cv = model.getCurrentPoint();
                var vc = model.getCurrentPlayer().getPScore();
                //winning score passed 
                if ((cv + vc) >= model.getTargetScore()) {
                    var x = model.getCurrentPlayer();
                    view.winCondition(x);
                    console.log("You Win");
                } else {
                    view.updateCurrentPoint(model.getCurrentPoint());
                }
            }
        };

        var newTurn = function () {
            model.pass();


            // TODO : ViewupdatePlayerScores

            view.updatePlayerScores(model.getPlayerScores());
            
            view.updateCurrentPlayer(model.getCurrentPlayer().getPName());
        };

        var assignNames = function ()
        {
            //  view.initScoreList();
        };



        console.log("ON TO PIG GAME");
        var view = PigGame.View.init();
        var model = PigGame.Model.init(playerNames, targetScore);

        //var Pvar = model.initializePlayers();
        view.showBoard(model.initializePlayers());

        view.setRollHandler(rollButton);
        view.setPassHandler(passButton);
        view.updatePlayerScores(model.getPlayerScores);
        view.updateWinningScore(targetScore);

    };

    return {
        init: init
    };


})();