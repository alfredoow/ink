//INK MACHINES - produces ink
function addInkMachine() { // add more ink machines
  if (money >= inkmachineprice) {
    inkmachineamount++;
    ips += inkmachinerate;
    money -= inkmachineprice;
    inkmachineprice *= 1.01;
  }
}

//CARTRIDGES - increase the size of ink storage
function addCartridge() { //add more cartridges
  if (money >= cartridgeprice) {
    cartridgeammount ++;
    money -= cartridgeprice;
    cartridgeprice *= 1.25;
  }
}

function upgradeCartridge() { //upgrade cartridges
  if (money >= cartridgeupgrade) {
    cartridgesize *= 2;
    money -= cartridgeupgrade;
    cartridgeupgrade *= 10;
  }
}