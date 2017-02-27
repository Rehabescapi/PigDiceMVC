/**
 * The view for the input form of a game of Pig Dice.
 * *
 * Created by kurmasz on 5/22/15.
 * Implemented by Jason Lehmann Summer 2015 and updated Feb 2017
 */
 //

PigGameConfig.View = (function () {
 var NameHolder = ["Jim ", " Tom " , "Dick" , "Larry"];
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
         var setPHandler = function (handler)
         {
              //document.getElementById("selectPnum").setAttribute("oninput", handler);
             document.getElementById("selectPnum").addEventListener("change",handler);
             
            // document.getElementById()
         };
        var getPlayerNames = function () {
            // TODO:  Retrieve the player names from the form.  Ignore empty fields.  
            
            var Pnames = document.getElementById("playerNames").getElementsByTagName("INPUT");
           
            var NameValues = [];
            for (var i = 0; i < Pnames.length; i++)
            {
               
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
    var updateNames = function()
    
    {
    var PnameHolder = document.getElementById("playerNames").childNodes;
    var k = 0; 
    for(child in PnameHolder){
     
k++ 
     }
 
    };

        var rolloutPlayers = function ()
        {
           
            var PnameHolder = document.getElementById("playerNames");
            var counter = 0;
            while (PnameHolder.hasChildNodes())
            {
                /**
                 * Attempted to update the possible names in case a player went from 2-> 4 -> 2
                 * and then back to 4
                 * 
                 * 
                 */

                 /*
                if(PnameHolder.childNodes[0].nodeType == 3  )
                {
                    alert();
                    if(PnameHolder.childNodes[0].value != "undefined")
                {    NameHolder[counter] = PnameHolder.childNodes[0].value;
                    counter ++;
                }

            }
            */
                PnameHolder.removeChild(PnameHolder.childNodes[0]);
            }


            var playerNum = document.getElementById("selectPnum").value;
            for (var i = 0; i < playerNum; i++)
            {
              //  var k = i + 1;
                var x = document.createElement("INPUT");
                x.setAttribute("type", "text");
                x.setAttribute("value", NameHolder[i]);
               // x.setAttribute("oninput","UpdateNames()")
                PnameHolder.appendChild(x);
                PnameHolder.appendChild(document.createElement("br"));
                PnameHolder.appendChild(document.createElement("br"));
            }

        }

        // Set up the object to have instance methods.        
        return {
            setFormHandler: setFormHandler,
            getPlayerNames: getPlayerNames,
            getTargetScore: getTargetScore,
            hideConfiguration: hide,
            setPNames: updateNames,
            setPHandler: setPHandler,
            rollout: rolloutPlayers
        }
    }; // end init

    // This sets up the class/static methods.  In this case, the constructor is the only class method.
    return {
        init: init
    };
})();
