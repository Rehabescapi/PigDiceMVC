"use strict";
/**
 *
 * Controller for the PigGame MVC triad.
 *
 *
 * Implemented by Jason Lehmann 
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
            newTurn();


        };
        var rollButton = function (event) {
            event.preventDefault();
            model.roll();
            model.iterateTurn();
            view.updateDie(model.currentDieValue(),model.getCurrentTurn());


            if (model.currentDieValue() == 1)
            {
                view.displayBustedMessage();
                newTurn();
             return;
            } else {
                
//todo is muching up on first roll
                var cv = model.getCurrentPoint();
                var vc = model.getCurrentPlayer().getPScore();
                //winning score passed 
                if ((cv + vc) >= model.getTargetScore()) {
                    var x = model.getCurrentPlayer();
                    view.winCondition(x);
                    alert("You Win");
                } else {
                    view.updateCurrentPoint(model.getCurrentPoint());
                }
            }
        };

        var newTurn = function () {
            

         
            view.updatePlayerScores(model.getPlayerScores());
            
            view.updateCurrentPlayer(model.getCurrentPlayer().getPName());

            model.pass();

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

      //For some reason Gaame wont catch the first busted unless this the first new turn has happened. 
            newTurn();
        

    };

    return {
        init: init
    };


})();