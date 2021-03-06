//needed to declare these globally, couldnt figure out how to make it work otherwise
var myHero;
var myDefender;

//each "HERO" has its own set of properties along with a function that controls what happens whenever that hero is clicked on, no matter where it is
var luke = {
  name: "luke",
  Attack: 8,
  BaseAttack: 8,
  Health: 120,
  BaseHealth: 120,
  counterAttack: 16,
  lukeClick: function() {
    // checks to see if the hero is in the starting zone and only then, does it execute the code
    if ($("#lukeBox", "#start").length == 1) {
      // this is sending the clicked hero to chosen place and other guys to enemies
      $("#lukeBox").appendTo("#yourHero");
      myHero = luke;
      $("#obiwanBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
      $("#emperorBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
      $("#vaderBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
    }
    // this else asks if the hero is in the enemy div
    else if ($("#lukeBox", "#enemies").length == 1) {
      // this if asks if the defender div is "empty". set to 1 b/c of <h1> containing title
      if ($("#defender").children().length == 1) {
        $("#lukeBox").appendTo("#defender");
        $("#lukeBox")
          .toggleClass("defense")
          .removeClass("enemy");
        myDefender = luke;
        myDefender.Health = luke.Health;
        $("#lukeHP").text(myDefender.Health);
        game.clearFightText();
        $("#attack").attr("disabled", false);
      }
    }
  }
};
var emperor = {
  name: "emperor",
  Attack: 6,
  BaseAttack: 6,
  Health: 120,
  BaseHealth: 120,
  counterAttack: 14,
  emperorClick: function() {
    if ($("#emperorBox", "#start").length == 1) {
      $("#emperorBox").appendTo("#yourHero");
      myHero = emperor;
      $("#lukeBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
      $("#vaderBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
      $("#obiwanBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
    } else if ($("#emperorBox", "#enemies").length == 1) {
      if ($("#defender").children().length == 1) {
        $("#emperorBox").appendTo("#defender");
        $("#emperorBox")
          .toggleClass("defense")
          .removeClass("enemy");
        myDefender = emperor;
        $("#emperorHP").text(myDefender.Health);
        game.clearFightText();
        $("#attack").attr("disabled", false);
      }
    }
  }
};
var obiwan = {
  name: "obiwan",
  Attack: 6,
  BaseAttack: 6,
  Health: 130,
  BaseHealth: 130,
  counterAttack: 15,
  obiwanClick: function() {
    if ($("#obiwanBox", "#start").length == 1) {
      $("#obiwanBox").appendTo("#yourHero");
      myHero = obiwan;
      $("#lukeBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
      $("#emperorBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
      $("#vaderBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
    } else if ($("#obiwanBox", "#enemies").length == 1) {
      // ok figured it out, the title Defender, Duh! so set the check to 1 since that will always be there ,
      // then append the hero to it, it will stay til dead and gone
      if ($("#defender").children().length == 1) {
        $("#obiwanBox").appendTo("#defender");
        $("#obiwanBox")
          .toggleClass("defense")
          .removeClass("enemy");
        myDefender = obiwan;
        $("#obiwanHP").text(myDefender.Health);
        game.clearFightText();
        $("#attack").attr("disabled", false);
      }
    }
  }
};
var vader = {
  name: "vader",
  Attack: 7,
  BaseAttack: 7,
  Health: 125,
  BaseHealth: 125,
  counterAttack: 14,
  vaderClick: function() {
    if ($("#vaderBox", "#start").length == 1) {
      $("#vaderBox").appendTo("#yourHero");
      myHero = vader;
      $("#lukeBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
      $("#obiwanBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
      $("#emperorBox")
        .appendTo("#enemies")
        .toggleClass("enemy")
        .removeClass("box");
    } else if ($("#vaderBox", "#enemies").length == 1) {
      if ($("#defender").children().length == 1) {
        $("#vaderBox").appendTo("#defender");
        $("#vaderBox")
          .toggleClass("defense")
          .removeClass("enemy");
        myDefender = vader;
        $("#vaderHP").text(vader.Health);
        game.clearFightText();
        $("#attack").attr("disabled", false);
      }
    }
  }
};
// put most of the game functions into its own object, just getting used to it all
var game = {
  //what happens when attack buttons is clicked
  attack: function() {
    if (myDefender.Health <= 0) {
      game.defenderDead();
    } else {
      myDefender.Health -= myHero.Attack;
      myHero.Attack += myHero.BaseAttack;
      // here i thought it made more sense that if the hero attacked and  killed the defender, the hero
      // shouldnt take damage, right? before i had it as they both took damage at the same time
      // and the tie would go to the defender as i just set the hero to being dead.
      // made more sense this way to me, but had to rebalance some values in attack and counter attack
      game.checkDead();
      if (myDefender.Health <= 0) {
        game.defenderDead();
      } else {
        myHero.Health -= myDefender.counterAttack;
      }
      $("#fightText").html(
        "<p>You attacked " +
          myDefender.name +
          " for " +
          myHero.Attack +
          " damage.</p>"
      );
      $("#fightText2").html(
        myDefender.name +
          " attacked you back for " +
          myDefender.counterAttack +
          " damage.</p>"
      );
      game.updateHP();
      game.checkDead();
      game.win();
    }
  },
  // updates all the HP of all heroes, clunky but it works.
  updateHP: function() {
    $("#lukeHP").text(luke.Health);
    $("#obiwanHP").text(obiwan.Health);
    $("#emperorHP").text(emperor.Health);
    $("#vaderHP").text(vader.Health);
  },
  //reset hp
  resetHP: function() {
    luke.Health = luke.BaseHealth;
    obiwan.Health = obiwan.BaseHealth;
    emperor.Health = emperor.BaseHealth;
    vader.Health = vader.BaseHealth;
  },
  //reset to starting class
  resetClass: function() {
    $("#lukeBox")
      .removeClass("box enemy defense")
      .toggleClass("box");
    $("#obiwanBox")
      .removeClass("box enemy defense")
      .toggleClass("box");
    $("#emperorBox")
      .removeClass("box enemy defense")
      .toggleClass("box");
    $("#vaderBox")
      .removeClass("box enemy defense")
      .toggleClass("box");
  },
  // function to control what to do if enemies die in defender zone.
  defenderDead: function() {
    var DIV = "#" + myDefender.name + "Box";
    $(DIV)
      .css("visibility", "hidden")
      .appendTo("#graveyard");
    $("#fightText").html(
      "<p> You have defeated " +
        myDefender.name +
        " with an attack of " +
        myHero.Attack +
        ". You can now select another hero to fight!"
    );
    $("#fightText2").html("");
    $("#attack").attr("disabled", true);
  },

  //what happens if myHero is dead
  myHeroDead: function() {
    game.clearFightText();
    $("#fightText").html("<p> You been defeated...GAME OVER!!! </p>");
    $("#restart").css("visibility", "visible");
    $("#attack").attr("disabled", true);
  },

  //clearing the text in fight zone
  clearFightText: function() {
    $("#fightText").html("");
    $("#fightText2").html("");
  },

  //check to see if any heroes are dead, check after each attack so dont have to check upon click
  checkDead: function() {
    if (myHero.Health <= 0 && myDefender.Health <= 0) {
      game.defenderDead();
    } else if (myHero.Health <= 0) {
      game.myHeroDead();
    } else if (myDefender.Health <= 0) {
      game.defenderDead();
    }
  },
  //reset attack values
  resetAttack: function() {
    luke.Attack = luke.BaseAttack;
    obiwan.Attack = obiwan.BaseAttack;
    emperor.Attack = emperor.BaseAttack;
    vader.Attack = vader.BaseAttack;
  },
  //function listening for win? check after each attack?
  win: function() {
    if ($("#graveyard").children().length == 3) {
      $("#attack").attr("disabled", true);
      game.clearFightText();
      $("#fightText").html("<p> YOU WIN!!! GAME OVER!!!</p>");
      $("#restart").css("visibility", "visible");
    }
  },
  //function that resets the game without reloading page. resets values and locations and classes
  restart: function() {
    game.resetHP();
    game.clearFightText();
    $("#lukeBox")
      .css("visibility", "visible")
      .appendTo($("#start"));
    $("#obiwanBox")
      .css("visibility", "visible")
      .appendTo($("#start"));
    $("#emperorBox")
      .css("visibility", "visible")
      .appendTo($("#start"));
    $("#vaderBox")
      .css("visibility", "visible")
      .appendTo($("#start"));
    game.resetClass();
    game.updateHP();
    game.resetAttack();
    $("#attack").attr("disabled", true);
    $("#restart").css("visibility", "hidden");
    myDefender = "";
    myHero = "";
  }
};

//when the site loads...the calls/listeners?
$(document).ready(function() {
  // this displays all heroes HP to their "card"
  game.updateHP();

  // each hero has a call if chosen as players hero
  $("#lukeBox").on("click", function() {
    luke.lukeClick();
  });

  // if Obiwan is chosen,
  $("#obiwanBox").on("click", function() {
    obiwan.obiwanClick();
  });

  // if Emperor is chosen, etc.p
  $("#emperorBox").on("click", function() {
    emperor.emperorClick();
  });

  // if Vader is chosen
  $("#vaderBox").on("click", function() {
    vader.vaderClick();
  });

  // if Attack button is pressed.
  $("#attack").on("click", function() {
    game.attack();
  });

  //restart button function call
  $("#restart").on("click", function() {
    game.restart();
  });
});
