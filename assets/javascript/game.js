var luke = {
  Attack: 8,
  Health: 110,
  counterAttack: 10
};
var emperor = {
  Attack: 7,
  Health: 100,
  counterAttack: 16
};
var obiwan = {
  Attack: 5,
  Health: 105,
  counterAttack: 18
};
var vader = {
  Attack: 6,
  Health: 120,
  counterAttack: 15
};

$(document).ready(function() {
  // this displays all heroes HP to their "card"
  $("#lukeHP").text(luke.Health);
  $("#obiwanHP").text(obiwan.Health);
  $("#emperorHP").text(emperor.Health);
  $("#vaderHP").text(vader.Health);

  // if Luke gets picked as hero, moves him to your hero div and
  // moves other chars to enemy div and alters CSS
  $("#lukeBox").on("click", function() {
    $("#lukeBox").appendTo("#yourHero");
    $("#obiwanBox").appendTo("#enemies");
    $("#obiwanBox").toggleClass("enemy");
    $("#emperorBox").appendTo("#enemies");
    $("#emperorBox").toggleClass("enemy");
    $("#vaderBox").appendTo("#enemies");
    $("#vaderBox").toggleClass("enemy");
  });

  // if Obiwan is chosen, sends others to enemy etc.
  $("#obiwanBox").on("click", function() {
    $("#obiwanBox").appendTo("#yourHero");
    $("#lukeBox").appendTo("#enemies");
    $("#lukeBox").toggleClass("enemy");
    $("#emperorBox").appendTo("#enemies");
    $("#emperorBox").toggleClass("enemy");
    $("#vaderBox").appendTo("#enemies");
    $("#vaderBox").toggleClass("enemy");
  });

  // if Emperor is chosen, etc.
  $("#emperorBox").on("click", function() {
    $("#emperorBox").appendTo("#yourHero");
    $("#lukeBox").appendTo("#enemies");
    $("#lukeBox").toggleClass("enemy");
    $("#vaderBox").appendTo("#enemies");
    $("#vaderBox").toggleClass("enemy");
    $("#obiwanBox").appendTo("#enemies");
    $("#obiwanBox").toggleClass("enemy");
  });

  // if Vader is chosen
  $("#vaderBox").on("click", function() {
    $("#vaderBox").appendTo("#yourHero");
    $("#lukeBox").appendTo("#enemies");
    $("#lukeBox").toggleClass("enemy");
    $("#obiwanBox").appendTo("#enemies");
    $("#obiwanBox").toggleClass("enemy");
    $("#emperorBox").appendTo("#enemies");
    $("#emperorBox").toggleClass("enemy");
  });
});
