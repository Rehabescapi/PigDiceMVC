"use strict";

/**
 * A model of a game die.
 *
 * Created by kurmasz on 2/11/15.
 */


GameDie.Model = (function () {

    var init = function () {

        //TODO:  Add any necessary instance variables and instance methods 
       return Math.floor(Math.random() * 5 + 1); 
    }; // end init

    return {
        init: init
    }

})();