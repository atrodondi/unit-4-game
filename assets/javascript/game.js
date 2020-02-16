var luke = {
  Name: "Luke",
  Attack: 8,
  BaseAttack: 8,
  Health: 110,
  counterAttack: 10
};
var emperor = {
  name: "Emperor",
  Attack: 7,
  BaseAttack: 7,
  Health: 100,
  counterAttack: 16
};
var obiwan = {
  name: "Obiwan",
  Attack: 5,
  BaseAttack: 5,
  Health: 105,
  counterAttack: 18
};
var vader = {
  name: "Vader",
  Attack: 6,
  BaseAttack: 6,
  Health: 120,
  counterAttack: 15
};
var myHero;
var myDefender;
// updates all the HP of all heroes, clunky but it works.
function updateHP() {
  $("#lukeHP").text(luke.Health);
  $("#obiwanHP").text(obiwan.Health);
  $("#emperorHP").text(emperor.Health);
  $("#vaderHP").text(vader.Health);
}

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
        .toggleClass("enemy");
      $("#emperorBox")
        .appendTo("#enemies")
        .toggleClass("enemy");
      $("#vaderBox")
        .appendTo("#enemies")
        .toggleClass("enemy");
    }
    // this else asks if the hero is in the enemy div
    else if ($("#lukeBox", "#enemies").length == 1) {
      // this if asks if the defender div is "empty". set to 1 b/c of <h1> containing title
      if ($("#defender").children().length == 1) {
        $("#lukeBox").appendTo("#defender");
        $("#lukeBox").toggleClass("defense");
        myDefender = luke;
        $("#lukeHP").text(myDefender.Health);
      }
      return myHero;
    }
  });

  // if Obiwan is chosen, sends others to enemy etc.
  $("#obiwanBox").on("click", function() {
    if ($("#obiwanBox", "#start").length == 1) {
      $("#obiwanBox").appendTo("#yourHero");
      myHero = obiwan;
      $("#lukeBox")
        .appendTo("#enemies")
        .toggleClass("enemy");
      $("#emperorBox")
        .appendTo("#enemies")
        .toggleClass("enemy");
      $("#vaderBox")
        .appendTo("#enemies")
        .toggleClass("enemy");
    } else if ($("#obiwanBox", "#enemies").length == 1) {
      // ok figured it out, the title Defender, Duh! so set the check to 1 since that will always be there ,
      // then append the hero to it, it will stay til dead and gone
      if ($("#defender").children().length == 1) {
        $("#obiwanBox").appendTo("#defender");
        $("#obiwanBox").toggleClass("defense");
        myDefender = obiwan;
        $("#obiwanHP").text(myDefender.Health);
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
        .toggleClass("enemy");
      $("#vaderBox")
        .appendTo("#enemies")
        .toggleClass("enemy");
      $("#obiwanBox")
        .appendTo("#enemies")
        .toggleClass("enemy");
    } else if ($("#emperorBox", "#enemies").length == 1) {
      if ($("#defender").children().length == 1) {
        $("#emperorBox").appendTo("#defender");
        $("#emperorBox").toggleClass("defense");
        myDefender = emperor;
        $("#emperorHP").text(myDefender.Health);
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
        .toggleClass("enemy");
      $("#obiwanBox")
        .appendTo("#enemies")
        .toggleClass("enemy");
      $("#emperorBox")
        .appendTo("#enemies")
        .toggleClass("enemy");
    } else if ($("#vaderBox", "#enemies").length == 1) {
      if ($("#defender").children().length == 1) {
        $("#vaderBox").appendTo("#defender");
        $("#vaderBox").toggleClass("defense");
        myDefender = vader;
        $("#vaderHP").text(vader.Health);
      }
    }
  });

  // if Attack button is pressed.
  $("#attack").on("click", function() {
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
  });
});
