function checkifml(i) { //check if it should be displayed as mL or L
  switch (i) {
    case 0: // Ink ammount
      if (ink < 1) {
        document.getElementById("INK").innerHTML = math.round(ink * 1000, 2) + "mL";
      } else if (ink >= 1) {
        document.getElementById("INK").innerHTML = math.round(ink, 2) + "L";
      }
      break;
    case 1: // IPS ammount
      if (ips < 1) {
        document.getElementById("IPS").innerHTML = math.round(ips * 1000, 2) + "mL";
      } else if (ips >= 1) {
        document.getElementById("IPS").innerHTML = math.round(ips, 2) + "L";
      }
      break;
    case 2: // Cartridge ammount
      if (totalsize < 1) {
        document.getElementById("INKLIMIT").innerHTML = math.round(totalsize * 1000, 2) + "mL";
      } else if (totalsize >= 1) {
        document.getElementById("INKLIMIT").innerHTML = math.round(totalsize, 2) + "L";
      }
      break;
    default:
      break;
  }
  document.getElementById("MONEY").innerHTML = math.round(money,2) + "$";
  document.getElementById("INKMACHINEPRICE").innerHTML = math.round(inkmachineprice, 2) + "$";
  document.getElementById("CARTRIDGEPRICE").innerHTML = math.round(cartridgeprice, 2) + "$";
}