
function ReturnInFourDigit(num) {
    let romstr = "";
    if (num === 0) {
        return romstr;
    }
    else if (num === 1) {
        romstr = "M";
        return romstr;
    }
    else if (num === 2) {
        romstr = "MM";
        return romstr;

    }
    else if (num === 3) {
        romstr = "MMM";
        return romstr;

    }
    else if (num === 4) {
        romstr = "MV̅";
        return romstr;

    }
    else if (num === 5) {
        romstr = "V̅";
        return romstr;

    }
    else if (num === 6) {
        romstr = "V̅I̅";
        return romstr;

    }
    else if (num === 7) {
        romstr = "V̅I̅I̅";
        return romstr;

    }
    else if (num === 8) {
        romstr = " V̅I̅I̅I̅";
        return romstr;

    }
    else {
        romstr = "I̅X̅";
        return romstr;
    }
}
function ReturnInThreeDigit(num) {
    let romstr = "";
    if (num === 0) {
        return romstr;
    }
    else if (num === 1) {
        romstr = "C";
        return romstr;
    }
    else if (num === 2) {
        romstr = "CC";
        return romstr;

    }
    else if (num === 3) {
        romstr = "CCC";
        return romstr;

    }
    else if (num === 4) {
        romstr = "CD";
        return romstr;

    }
    else if (num === 5) {
        romstr = "D";
        return romstr;

    }
    else if (num === 6) {
        romstr = "DC";
        return romstr;

    }
    else if (num === 7) {
        romstr = "DCC";
        return romstr;

    }
    else if (num === 8) {
        romstr = "DCCC";
        return romstr;

    }
    else {
        romstr = "CM";
        return romstr;
    }
}
function ReturnInTwoDigit(num) {
    let romstr = "";
    if (num === 0) {
        return romstr;
    }
    else if (num === 1) {
        romstr = "X";
        return romstr;
    }
    else if (num === 2) {
        romstr = "XX";
        return romstr;

    }
    else if (num === 3) {
        romstr = "XXX";
        return romstr;

    }
    else if (num === 4) {
        romstr = "XL";
        return romstr;

    }
    else if (num === 5) {
        romstr = "L";
        return romstr;

    }
    else if (num === 6) {
        romstr = "LX";
        return romstr;

    }
    else if (num === 7) {
        romstr = "LXX";
        return romstr;

    }
    else if (num === 8) {
        romstr = "LXXX";
        return romstr;

    }
    else {
        romstr = "XC";
        return romstr;
    }
}
function ReturnInOneDigit(num) {
    let romstr = "";
    if (num === 0) {
        return romstr;
    }
    else if (num === 1) {
        romstr = "I";
        return romstr;
    }
    else if (num === 2) {
        romstr = "II";
        return romstr;
    }
    else if (num === 3) {
        romstr = "III";
        return romstr;
    }
    else if (num === 4) {
        romstr = "IV";
        return romstr;
    }
    else if (num === 5) {
        romstr = "V";
        return romstr;
    }
    else if (num === 6) {
        romstr = "VI";
        return romstr;
    }
    else if (num === 7) {
        romstr = "VII";
        return romstr;
    }
    else if (num === 8) {
        romstr = "VIII";
        return romstr;
    }
    else {
        romstr = "IX";
        return romstr;
    }
}

function digits_count(n) {
    var count = 0;
    while (n >= 1) {
        n = n / 10;
        count++;

    }
    return count;
}
function ReturnTheDigits(num) {
    let digitarray = [0, 0];
    let digit = Math.floor(num % 10);
    num = Math.floor(num / 10);
    digitarray[0] = num;
    digitarray[1] = digit;
    return digitarray;
}

function convertToRoman(number) {

    let len = digits_count(number);

    if (len === 4) {

        let array = ReturnTheDigits(number);
        let FourthRomanNum = ReturnInOneDigit(array[1]);
        array = ReturnTheDigits(array[0]);
        let ThirdRomanNum = ReturnInTwoDigit(array[1]);
        array = ReturnTheDigits(array[0]);
        let SeondRomanNumber = ReturnInThreeDigit(array[1]);
        array = ReturnTheDigits(array[0]);
        let FirstRomanNumber = ReturnInFourDigit(array[1]);
        let finalstr = FirstRomanNumber + SeondRomanNumber + ThirdRomanNum + FourthRomanNum;
        return finalstr;
    }
    else if (len === 3) {
        let array = ReturnTheDigits(number);
        let ThirdRomanNum = ReturnInOneDigit(array[1]);
        array = ReturnTheDigits(array[0]);
        let SeondRomanNumber = ReturnInTwoDigit(array[1]);
        array = ReturnTheDigits(array[0]);
        let FirstRomanNumber = ReturnInThreeDigit(array[1]);
        let finalstr = FirstRomanNumber + SeondRomanNumber + ThirdRomanNum;
        return finalstr;


    }
    else if (len === 2) {

        let array = ReturnTheDigits(number);
        let SecondDigit = ReturnInOneDigit(array[1]);
        array = ReturnTheDigits(array[0]);
        let FirstDigit = ReturnInTwoDigit(array[1]);
        let finalstr = FirstDigit + SecondDigit;
        return finalstr;
    }
    else if (len === 1) {
        let RomanNum = ReturnInOneDigit(number);
        return RomanNum;

    }
    else {
        console.log("0 cannot be converted");
        return;
    }

}
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));