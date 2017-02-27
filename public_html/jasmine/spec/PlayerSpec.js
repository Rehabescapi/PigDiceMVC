"use strict";

describe("Player", function () {

    var player1;
    beforeEach(function() {
        player1 = Player.init("George");
    });
    
    
    describe("::init", function () {
        it("initializes the name", function () {
            expect(player1.getName()).toBe("George");
        });

        it("initializes the score to 0", function () {
            expect(player1.getScore()).toBe(0);
        });
    });


    describe("#add", function () {
        it("increases the score", function () {
            player1.add(15);
            expect(player1.getScore()).toBe(15);
            player1.add(19);
            expect(player1.getScore()).toBe(34);
        });


        it("increases the score again", function () {
            player1.add(15);
            expect(player1.getScore()).toBe(15);
            player1.add(19);
            expect(player1.getScore()).toBe(34);
        });
    });

});