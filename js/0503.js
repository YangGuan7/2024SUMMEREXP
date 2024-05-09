// 題目一：日幣計算機 (1:0.32)
function TWDtoJPY(num) {
  if (num < 0) {
    console.log("...沒錢別來亂");
  } else if (typeof num === "string") {
    console.log("當我看不懂字串？？");
  } else if (num > 0) {
    const JPY = num / 0.32;
    console.log(`你換到的日幣有： ${JPY}`);
  }
}
console.log(
  "第1題↓：...沒錢別來亂/當我看不懂字串？？/你換到的日幣有：6250/你換到的日幣有：1000"
);
TWDtoJPY(-1);
TWDtoJPY("hi~");
TWDtoJPY(2000);
TWDtoJPY(320);

// 題目二：匯率計算機
function TWDtoAnother(toAnum, str) {
  if (str === "USD") {
    console.log(toAnum * 29);
  } else if (str === "HKD") {
    console.log(toAnum * 3);
  } else if (str === "GBP") {
    console.log(toAnum * 35);
  } else {
    console.log("...");
  }
}
TWDtoAnother(100, "USD");
TWDtoAnother(100, "Sword Art Online");
TWDtoAnother(100, "HKD");
TWDtoAnother(100, "GBP");
// 題目三：BMI 計算機
function BMI(CM, KG) {
  const BMI = KG / (CM / 100) ** 2;
  if (BMI < 18.5) {
    console.log("過輕");
  } else if (24 > BMI && BMI >= 18.5) {
    console.log("正常");
  } else if (BMI < 27 && BMI >= 24) {
    console.log("過重");
  } else if (BMI < 30 && BMI >= 27) {
    console.log("輕度肥胖");
  } else if (BMI < 35 && BMI >= 30) {
    console.log("中度肥胖");
  } else {
    console.log("重度肥胖");
  }
}

BMI(170, 50);
BMI(170, 60);
BMI(170, 75);
BMI(170, 85);
BMI(170, 95);
BMI(170, 105);
