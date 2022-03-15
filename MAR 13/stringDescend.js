//Sort the string composed of only [a-z] chars in descending order in Linear Time.

var s = "rounak chakraborty";
function sortDescend(s) {
    s.sort().reverse();
    str1 = s.join("");
    console.log(str1);
  }
  s = s.split("");
  sortDescend(s)