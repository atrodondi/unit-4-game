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
  $("#lukeHP").text(luke.Health);
  $("#obiwanHP").text(obiwan.Health);
  $("#emperorHP").text(emperor.Health);
  $("#vaderHP").text(vader.Health);
});
