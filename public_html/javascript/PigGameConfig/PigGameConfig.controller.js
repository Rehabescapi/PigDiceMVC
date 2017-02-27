/**
 *  The controller for the input configuration for PigDice
 *
 * Created by kurmasz on 5/22/15.
 */
PigGameConfig.Controller = (function () {

    /**
     * Constructor.  (This is also where the instance data and instance methods are defined.)
     */
    var init = function () {

        // This is a private method.
        // This is the method called when the form is submitted.
        var formSubmitted = function (event) {
           // alert("Boo!");
            event.preventDefault();

            //console.log("Hi Mom");
            //getPlayerNames
            var names = view.getPlayerNames();
            var targetScore = view.getTargetScore();
            
            // Optional:  Validate input here.


            // After submitting the configuration form, then we can 
            // create the MVC triad that actually plays the game.
            PigGame.Controller.init(names, targetScore);
 
            // We are now done with the configuration form, so hide it.
            view.hideConfiguration();
        };

        // This is where the "constructor code" goes.
        // (This is analogous to the code you would put in a Java constructor.)
        
        var view = PigGameConfig.View.init();
        view.rollout();
        view.setFormHandler(formSubmitted);
        
    };

    // This sets up the class/static methods.  In this case, the constructor is the only class method.
    return {
        init: init
    }

})();

