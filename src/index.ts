let money=40000;
let limit=500000;
let riches=600000;
if (riches >= limit) {
    console.log("亁爹");
} else {
    console.log("魯蛇");
}

//由後往前算字串planet在第幾個位置
let str = "Hello planet earth, you are a great planet.";
let n=str.lastIndexOf("planet");
console.log(n);

//將字串中的某一個字更換另一個字(Microsoft更換Intel)
let mic = "Hello Microsoft!";
let int = mic.replace("Microsoft", "Intel");
console.log(int);

//顯示數字的精確度包含小數點後2位
let num = 13.3714;
let m = num.toPrecision(4);
console.log(m);

//固定小數點後幾碼欄位
let numb = 5.56789;
let k = numb.toFixed(2);
console.log(k);
