
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 100000, years:30, rate:5})).toBe('536.82');
  expect(calculateMonthlyPayment({amount: 250000, years:15, rate:3.5})).toBe('1787.21');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 120076, years:12, rate:10})).toBe('1435.00');
  expect(calculateMonthlyPayment({amount: 200001, years:40, rate:5})).toBe('964.40');
});

/// etc
