/**
 * The view for the input form of a game of Pig Dice.
 * *
 * Created by kurmasz on 5/22/15.
 */


PigGameConfig.View = (function () {

    /**
     *
     * * Constructor.  (This is also where the instance data and instance methods are defined.)
     *
     * @returns {{setFormHandler: setFormHandler, getPlayerNames: getPlayerNames, getTargetScore: getTargetScore, hideConfiguration: hide}}
     */
    var init = function () {

        // There is no instance data for this object, just instance methods.

        var setFormHandler = function (handler) {
            // TODO:  Add handler as a submit listener on the for 
            document.getElementById("tScore").addEventListener("submit", handler);


        };

        var getPlayerNames = function () {
            // TODO:  Retrieve the player names from the form.  Ignore empty fields.  
            // var holder = document.getElementById("playerNames");
            //console.log("Hi Mom");
            var Pnames = document.getElementById("playerNames").getElementsByTagName("INPUT");
           console.log(Pnames);
            var NameValues = [];
            for (var i = 0; i < Pnames.length; i++)
            {
                // console.log(i);
                if (Pnames[i].getAttribute("value"))
                    NameValues.push(Pnames[i].value);
            }
            if (NameValues.length > 1)
                return NameValues;
            else
                return null;
        };

        var getTargetScore = function () {
            // TODO:  Retrieve the target score from the form. 
            return document.getElementById("MaxScore").value;
        };

        var hide = function () {
            // TODO:  Hide the input configuration part of the page.
            var config = document.getElementById("configuration");
            config.style.display = "none";
            // # end m4 marco => ')
        };
        var rolloutPlayers = function ()
        {
            var PnameHolder = document.getElementById("playerNames");
            while (PnameHolder.hasChildNodes())
            {
                PnameHolder.removeChild(PnameHolder.childNodes[0]);
            }


            var playerNum = document.getElementById("selectPnum").value;
            for (var i = 0; i < playerNum; i++)
            {
                var k = i + 1;
                var x = document.createElement("INPUT");
                x.setAttribute("type", "text");
                x.setAttribute("value", "Hi player" + k + " !");
                PnameHolder.appendChild(x);
                PnameHolder.appendChild(document.createElement("br"));
            }

        }

        // Set up the object to have instance methods.        
        return {
            setFormHandler: setFormHandler,
            getPlayerNames: getPlayerNames,
            getTargetScore: getTargetScore,
            hideConfiguration: hide,
            rollout: rolloutPlayers
        }
    }; // end init

    // This sets up the class/static methods.  In this case, the constructor is the only class method.
    return {
        init: init
    };
})();
