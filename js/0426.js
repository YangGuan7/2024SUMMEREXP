// 題目一：平方計算
function square(num) {
  // Math.pow(base, exponent)
  //第一個值=數字,第二個值=要幾次方
  const square = Math.pow(num, 2);
  return square;
}

// 題目二：數學邏輯題
function calculate(num1, num2, num3) {
  const cal = num1 + num2 - num3;
  return cal;
}

// 題目三：四捨五入題
function rounding(num) {
  // [參考資料] https://www.delftstack.com/zh-tw/howto/javascript/javascript-round-to-2-decimal-places/
  //  Math.round()　只會取整數
  // .toFixed() 四捨五入小數點後兩位
  const round = num.toFixed(2);
  return round;
}

// 題目四：字串轉數字
function parseNumber(string) {
  const parse = Number(string);
  return parse;
}

// 題目五：被二整除
function divisible(num) {
  // %取餘數，除2後0=偶數，1=基數
  const div = Math.round(num % 2);
  return div;
}
