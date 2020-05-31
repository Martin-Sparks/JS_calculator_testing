var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add numbers', function() {
   calculator.numberClick(1); 
   calculator.operatorClick("+");
   calculator.numberClick(4);
   calculator.operatorClick("=");
   assert.strictEqual(5, calculator.runningTotal);
  });

  it('should subtract numbers', function() {
    calculator.numberClick(7); 
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.strictEqual(3, calculator.runningTotal);
   });

   it('should multiply numbers', function() {
    calculator.numberClick(3); 
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.strictEqual(15, calculator.runningTotal);
   });

   it('should divide numbers', function() {
    calculator.numberClick(21); 
    calculator.operatorClick("/");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.strictEqual(3, calculator.runningTotal);
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
