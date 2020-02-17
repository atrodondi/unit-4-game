var luke = {
  name: "luke",
  Attack: 8,
  BaseAttack: 8,
  Health: 110,
  BaseHealth: 110,
  counterAttack: 10
};
var emperor = {
  name: "emperor",
  Attack: 7,
  BaseAttack: 7,
  Health: 100,
  BaseHealth: 100,
  counterAttack: 16
};
var obiwan = {
  name: "obiwan",
  Attack: 5,
  BaseAttack: 5,
  Health: 105,
  BaseHealth: 105,
  counterAttack: 18
};
var vader = {
  name: "vader",
  Attack: 6,
  BaseAttack: 6,
  Health: 120,
  BaseHealth: 120,
  counterAttack: 15
};
//needed to declare these globally, couldnt figure out how to make it work otherwise
var myHero;
var myDefender;
// updates all the HP of all heroes, clunky but it works.
function updateHP() {
  $("#lukeHP").text(luke.Health);
  $("#obiwanHP").text(obiwan.Health);
  $("#emperorHP").text(emperor.Health);
  $("#vaderHP").text(vader.Health);
}
// reset hp
function resetHP() {
  luke.Health = luke.BaseHealth;
  obiwan.Health = obiwan.BaseHealth;
  emperor.Health = emperor.BaseHealth;
  vader.Health = vader.BaseHealth;
}

//reset to starting class
function resetClass() {
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
}

// function if enemies die in defender zone. works, but i need to make it listen so i dont need to click.
function defenderDead() {
  var DIV = "#" + myDefender.name + "Box";
  $(DIV)
    .css("visibility", "hidden")
    .appendTo("#graveyard");
  $("#fightText").html(
    "<p> You have defeated " +
      myDefender.name +
      ". You can now select another hero to fight!"
  );
  $("#fightText2").html("");
}
// reset attacks
function resetAttack() {
  luke.Attack = luke.BaseAttack;
  obiwan.Attack = obiwan.BaseAttack;
  emperor.Attack = emperor.BaseAttack;
  vader.Attack = vader.BaseAttack;
}
//restart function
function restart() {
  resetHP();
  clearFightText();
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
  resetClass();
  updateHP();
  resetAttack();
  $("#attack").attr("disabled", false);
}

// myhero is dead function
function myHeroDead() {
  clearFightText();
  $("#fightText").html("<p> You been defeated...GAME OVER!!! </p>");
  $("#restart").css("visibility", "visible");
  $("#attack").attr("disabled", true);
}

// clearing the text in fight zone
function clearFightText() {
  $("#fightText").html("");
  $("#fightText2").html("");
}

// checking to see if any defender or hero is dead
function checkDead() {
  if (myHero.Health <= 0 && myDefender.Health <= 0) {
    myHeroDead();
  } else if (myHero.Health <= 0) {
    myHeroDead();
  } else if (myDefender.Health <= 0) {
    defenderDead();
  }
}

//when the site load
$(document).ready(function() {
  // this displays all heroes HP to their "card"
  updateHP();

  // if Luke gets picked as hero, moves him to your hero div and
  // moves other chars to enemy div and alters CSS
  $("#lukeBox").on("click", function() {
    // checks to see if the hero is in the starting zone and only then, does it execute the code
    if ($("#lukeBox", "#start").length == 1) {
      // this is sending the clicked hero to chosen place and other guys to enemies
      $("#lukeBox").appendTo("#yourHero");
      myHero = luke;
      console.log(myHero);
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
        $("#lukeHP").text(myDefender.Health);
        clearFightText();
      }
    }
  });

  // if Obiwan is chosen, sends others to enemy etc.
  $("#obiwanBox").on("click", function() {
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
        clearFightText();
      }
    }
  });

  // if Emperor is chosen, etc.p
  $("#emperorBox").on("click", function() {
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
        clearFightText();
      }
    }
  });

  // if Vader is chosen
  $("#vaderBox").on("click", function() {
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
        clearFightText();
      }
    }
  });

  // if Attack button is pressed.
  $("#attack").on("click", function() {
    if (myDefender.Health <= 0) {
      defenderDead();
    } else {
      console.log(myHero.Attack);
      myDefender.Health -= myHero.Attack;
      myHero.Attack += myHero.BaseAttack;
      myHero.Health -= myDefender.counterAttack;
      console.log(myDefender.Health);
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
      updateHP();
      checkDead();
    }
  });

  //restart button function call
  $("#restart").on("click", function() {
    restart();
  });
});
