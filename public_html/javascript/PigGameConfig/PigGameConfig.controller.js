/**
 *  The controller for the input configuration for PigDice
 *
 * Created by kurmasz on 5/22/15.
 * Implemented by Jason Lehmann in summer 2015 updated Feb 2017
 */
PigGameConfig.Controller = (function () {

    /**
     * Constructor.  (This is also where the instance data and instance methods are defined.)
     */
    var init = function () {

        // This is a private method.
        // This is the method called when the form is submitted.
        var formSubmitted = function (event) {
            event.preventDefault();

           
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

        var rollout = function(event)
        {
             event.preventDefault();

            view.rollout();
        }

    
       
        var view = PigGameConfig.View.init();
        view.rollout();
        view.setPNames();
        view.setPHandler(rollout);
        view.setFormHandler(formSubmitted);
        
    };

    // This sets up the class/static methods.  In this case, the constructor is the only class method.
    return {
        init: init
    }

})();

