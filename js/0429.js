// 題目一：字串長度計算
// [參考網址] https://www.fooish.com/javascript/string/length.html
function checkStringLength(str){
    const string=str.length
    return string;
}

// 題目二：英文強制小寫
// [參考網址] https://www.fooish.com/javascript/string/toLowerCase.html
function lowerCase(str){
    const string=str.toLowerCase()
return string;
}

// 題目三：去除掉段落的左右空白
// [參考網址] https://medium.com/@martina.says/javascript%E7%AD%86%E8%A8%98-%E5%A6%82%E4%BD%95%E5%BE%9E%E5%AD%97%E4%B8%B2%E4%B8%AD%E7%A7%BB%E9%99%A4%E6%89%80%E6%9C%89%E7%A9%BA%E6%A0%BC-eb8f026ff70
function trimString(str){
    const string=str.trim()
    return string;
}

// 題目四：字串依照條件轉陣列
// [參考網址] https://ithelp.ithome.com.tw/m/articles/10212010
function splitString(str){
    const ar=str.split(',');
    return ar;
}

// 題目五：切割市區字串
// [參考網址] https://www.freecodecamp.org/chinese/news/javascript-split-how-to-split-a-string-into-an-array-in-js/
function getArea(str){
    // const ar=str.split(',');
    const ar=new String(str);
    const Area=ar[3]+ar[4]+ar[5];
    return Area;
  console.log();
}