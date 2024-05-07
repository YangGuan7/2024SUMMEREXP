// 題目一：成年計算機
// function checkAdult(num) {
//   if (num > 18) {
//     console.log("成年");
//   } else {
//     console.log("未成年");
//   }
// }
// console.log("第1題↓：成年/未成年/成年/未成年");
// checkAdult(20);
// checkAdult(12);
// checkAdult(33);
// checkAdult(18);

// 題目二：法定性行為年紀計算機(16歲)
// function canSex(num, sex) {
//   if (num >= 16) {
//     console.log("可以色色");
//   } else {
//     console.log("你還不行哦~");
//   }
// }
// console.log("第2題↓：可以色色/你還不行哦~/可以色色");
// canSex(16, "male");
// canSex(14, "female");
// canSex(20, "female");
// 題目三：滿 300 即可符合優惠條件，能使用 50 元折價券
function buy(buyNum) {
  if (buyNum > 300) {
    console.log(`符合優惠券資格，費用是 ${buyNum - 50}`);
  } else if (buyNum == 300) {
    console.log(`剛好符合資格，費用是 ${buyNum - 50}`);
  } else if (1 < buyNum < 300) {
    console.log(`不優惠券資格，費用是 ${buyNum}`);
  } else if (buyNum == 0) {
    console.log("...你來亂的嗎？");
  } else if (buyNum < 0) {
    console.log("再鬧我就生氣了哦~");
  }
}
console.log("第3題↓：");
buy(450);
buy(299);
buy(0);
buy(-30);
buy(300);
buy(1000);
