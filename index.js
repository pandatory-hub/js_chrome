const calculator = {
  plus: function(a, b) {
    return a + b;
  },

  minus: function(a, b) {
    return a - b;
  },

  multi: function(a, b) {
    return a * b;
  },

  divi: function(a, b) {
    return a / b;
  }, 

  remain: function(a, b) {
    return a % b;
  }
}

const pplus = calculator.plus(5, 5);
const mminus = calculator.minus(5, 2);
const mmulti = calculator.multi(5, 2);
const ddivi = calculator.divi(6, 2);
const rremain = calculator.remain(5, 2);

console.log(pplus);
console.log(mminus);
console.log(mmulti);
console.log(ddivi);
console.log(rremain);
