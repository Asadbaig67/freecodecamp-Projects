$(document).ready(() => {

    let palindrome = (Pstr) => {

        Pstr.trim();
        Pstr = Pstr.toLowerCase();
        let newstr = Pstr.replace(/[^a-z0-9]/gi, '');
        let newstr1 = newstr;
        let i = 0;
        let j;
        for (j = newstr.length - 1; j >= 0; j--) {
            if (newstr[j] === newstr1[i]) {
                i++;
            }
            else {
                return false;
            }
        }
        if (j == -1) {
            return true;
        }
    }
    if (palindrome("_eye")) {
        console.log("true");
    }
    else {
        console.log("false");

    }


});




// LeetCode Problem No-1

    // let rarr = [0, 0];
    // var twoSum = function (nums, target) {

    //     for (var i = 0; i < nums.length; i++) {
    //         for (var j = 1; j < nums.length; j++) {
    //             if (nums[i] + nums[j] === target) {
    //                 rarr[0] = i;
    //                 rarr[1] = j
    //                 return rarr;
    //             }
    //         }
    //     }
    // };
    // let arry = [5, 7, 3, 2, 9, 1];
    // let tget = 9;
    // let newarray = twoSum(arry, tget);
    // console.log(arry);
    // console.log(arry[newarray[0]] + " + " + arry[newarray[1]] + " = " + tget);