function reverse(num) {
  let reverse;
  let sign;
  if (num === 0) return 0;
  if (num < 0) sign = -1;
  if (num > 0) sign = 1;
  if (num >= Math.pow(2, 31) - 1 || num <= Math.pow(-2, 31))
    return (reverse = 0);

  reverse = Math.abs(num).toString().split("").reverse();
  const firstPos = reverse.findIndex((val) => +val > 0);
  if (firstPos === 0) reverse = reverse.join("");
  if (firstPos > 0) reverse = reverse.slice(firstPos).join("");

  reverse = sign * reverse;
  if (reverse >= Math.pow(2, 31) - 1 || reverse <= Math.pow(-2, 31))
    return (reverse = 0);
  else return reverse;
}

// console.log(reverse(12780000999));

// console.log(Math.pow(2,31))

var reverse1 = function(x) {
    const sign = Math.sign(x); // 獲取x的符號
  let reversed = 0;
  x = Math.abs(x); // 轉換為正整數

  while (x > 0) {
    console.log(x,'x')
    // 取出x的最後一位數字
    const digit = x % 10;
    console.log(digit,'digit')
    // 將最後一位數字添加到翻轉後的整數中
    reversed = reversed * 10 + digit;
    console.log(reversed,'reserved')
    // 去掉x的最後一位數字
    x = Math.floor(x / 10);
  }

  const result = sign * reversed;
  // 檢查結果是否超出範圍
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return result;
  }  
};

console.log(reverse1(45000))