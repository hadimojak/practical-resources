const PersianDate = require("persian-date");

// console.log(new PersianDate().toLocale('en').format('D')<=3)

date = (20220312161612).toString();
// console.log(`${date.slice(0,4)}-${date.slice(4,6)}-${date.slice(6,8)}T${date.slice(8,10)}:${date.slice(10,12)}:${date.slice(12,14)}`);

const st = "2021-12-02 15:48:21";

// console.log(st.split(' ').join('T').concat('.000Z'))

const num = "12345678912345";

// console.log(/^d{14}$/.test(num))

// console.log(/^01|^0201|^0202/.test(num))

// console.log(/[0-9-Fa-f]{14}/.test(num))

const binary = ((`${(parseInt(num, 16)).toString(2)}`));
const tap2payKey = 'hsdf896sd9f8sduhsdhfjsdf987';

const crypto = require("crypto");
const iv = "1010101010101010";
let key = '3131313131313131313131313131313131313131313131313131313131313131';

function encrypt(str) {
const cipher = crypto.createCipheriv('aes-256-ecb', tap2payKey, null);
return cipher;
}



console.log(encrypt(binary))
