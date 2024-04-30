// 題目一：比大小
function higher(num1, num2) {
  const h1 = num1 > num2;
  return h1;
}
console.log("第1題↓：true/false/true");
console.log(higher(3, 2));
console.log(higher(100, 299));
console.log(higher(8, 2.5));
// 題目二：布林反轉
function booleanToggle(boolean) {
  const bool = !boolean;
  return bool;
}
console.log("第2題↓：false/true");
console.log(booleanToggle(true));
console.log(booleanToggle(false));
// 題目三：型別判斷
// [參考網址] https://www.delftstack.com/zh-tw/howto/javascript/javascript-get-type/#%E5%9C%A8%E6%A2%9D%E4%BB%B6%E6%AA%A2%E6%9F%A5%E4%B8%AD%E4%BD%BF%E7%94%A8-typeof-%E9%81%8B%E7%AE%97%E5%AD%90
function checkType(str) {
  const type = typeof str;
  return type;
}
console.log("第3題↓：number/string/boolean/objece");
console.log(checkType(3.33));
console.log(checkType("Hello"));
console.log(checkType(true));
console.log(checkType([1, 2, 3]));
// 題目四：打八折後，是否總價大於 100 元
function onSale(num) {
  const sale = num * 0.8 > 100;
  return sale;
}
console.log("第4題↓：true/true/false/false");
console.log(onSale(200));
console.log(onSale(150));
console.log(onSale(125));
console.log(onSale(100));
// 題目五：是否大於 200，且符合會員條件
function checkVIP(num, boolean) {
  const vip = num > 200 && boolean == true;
  return vip;
}
console.log("第4題↓：true/false/false/true");
console.log(checkVIP(300, true));
console.log(checkVIP(0, true));
console.log(checkVIP(30000, false));
console.log(checkVIP(888, true));
