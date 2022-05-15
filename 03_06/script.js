/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};




console.log("The backpack object:", backpack);
console.log("the pocketNum value:", backpack.pocketNum);
console.log("Strap length:", backpack.strapLength.left);
console.log("the pocketNum value:", backpack["pocketNum"]);
var query = "pocketNum";
console.log("the pocketNum value:", backpack[query]);


console.log("Left before:", backpack.strapLength.left);
backpack.newStrapLength(10,15);
console.log("Left after:", backpack.strapLength.left);
