var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add 1 to 1', function () {
    calculator.previousTotal = 1;
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 2);
  });

  it('can subtract 1 from 2', function () {
    calculator.previousTotal = 2;
    calculator.subtract(1);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 1);
  });

  it('can multiply 2 by 2', function () {
    calculator.previousTotal = 2;
    calculator.multiply(2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 4);
  });

  it('can divide 10 by 5', function () {
    calculator.previousTotal = 10;
    calculator.divide(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 2);
  });


   it('concatenate multiple number button clicks', function() {
    calculator.numberClick(1); 
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.strictEqual(123, calculator.runningTotal);
   });

   it('chain multiple operations together', function() {
    calculator.numberClick(1); 
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("-");
    calculator.numberClick(1);
    calculator.operatorClick("=");
    assert.strictEqual(2, calculator.runningTotal);
   });

   it('clear the running total without affecting the calculation', function() {
    calculator.numberClick(1); 
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(1);
    calculator.operatorClick("clr");
    calculator.operatorClick("=");
    assert.strictEqual(true, calculator.newTotal);
   });



});
