"use strict";

/**
 * The view of a GameDie
 * Created by kurmasz on 2/11/15.
 */


GameDie.View = (function () {

    /**
     * Constructor
     * @param container_in  The DOM element that will contain this Die.
     * @returns {{update: update}}
     */

    var cwidth = 400;
    var cheight = 300;
    var dicex = 50;
    var dicey = 50;
    var dicewidth = 100;
    var diceheight = 100;
    var dotrad = 6;
    var ctx;
    /*var init = function () {
        //TODO:  Add any necessary instance variables and instance methods
        // Note:  There are a number of ways you can implement the view of a GameDie.  For example:
        // * Draw pips on an HTML5 Canvas
        // * Show and hide different images.
        // 
        var ch = 1 + Math.floor(Math.random() * 6);
        drawface(ch);


    } ;*/
    var init = function(ch){
        
        drawface(ch);
    };
    var drawface = function(n){// end init
    
        ctx = document.getElementById('dieCanvas').getContext('2d');
        ctx.lineWidth = 5;
        ctx.clearRect(dicex, dicey, dicewidth, diceheight);
        ctx.strokeRect(dicex, dicey, dicewidth, diceheight);
        ctx.fillStyle = "#009966";

        switch (n) {
            case 1:
                draw1();
                break;
            case 2:
                draw2();
                break;
            case 3:
                draw2();
                draw1();
                break;
            case 4:
                draw4();
                break;
            case 5:
                draw4();
                draw1();
                break;
            case 6:
                draw4();
                draw2mid();
                break;
        }
    };

    function draw1() {
        ctx.beginPath();
        var dotx = dicex + .5 * dicewidth;
        var doty = dicey + .5 * diceheight;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

    }
    function draw2() {
        ctx.beginPath();
        var dotx = dicex + 3 * dotrad;
        var doty = dicey + 3 * dotrad;
        ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
        dotx = dicex + dicewidth - 3 * dotrad;

        doty = dicey + diceheight - 3 * dotrad;
         ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

    }
    function draw4(){
        ctx.beginPath();
        var dotx = dicex+ 3*dotrad;
        var doty = dicey+3*dotrad;
        ctx.arc(dotx, doty,dotrad,0,Math.PI*2,true);
        
        dotx = dicex+dicewidth-3*dotrad;
        doty= dicey+diceheight-3*dotrad;
        ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        dotx= dicex + 3*dotrad;
        doty=dicey + diceheight-3*dotrad;
        ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
        
        dotx = dicex+dicewidth-3*dotrad;
        doty = dicey + 3*dotrad;
        ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
        
    }
    function draw2mid(){
        ctx.beginPath();
        var dotx = dicex+3*dotrad;
        var doty = dicey + .5*diceheight;
        ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
        dotx = dicex+dicewidth-3*dotrad;
        doty = dicey+.5*diceheight;
        ctx.arc(dotx,doty,dotrad,0,Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }




    return {
        drawface: drawface,
        init: init
    };
})();
