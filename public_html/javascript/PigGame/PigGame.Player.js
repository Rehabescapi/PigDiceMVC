"use strict";

/**
 * Represents a Pig Dice player.
 *
 * Created by kurmasz on 2/11/15.
 */
PigGame.Player = (function () {

// Notice that this is just one class.  It is not an MVC triad.  That is because the Player object is 
// for data only (i.e., it is effectively just a model.)


    var init = function (name_in) {
        //TODO:  Add any necessary instance variables and instance methods 

        var pname = name_in;
        var score = 0;

       
        var upDateScore = function (woot)
        {
            score += woot;
        };
        var getPScore = function ()
        {
            return score;
        };
        var getPName = function ()
        {
            return pname;
        };

        return {
            getPScore: getPScore,
            upDateScore: upDateScore,
            getPName: getPName
        };
    };
    return {
        init: init
    };
})();