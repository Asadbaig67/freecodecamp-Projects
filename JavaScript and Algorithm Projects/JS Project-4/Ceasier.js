
function rot13(str) {
    let temp = 0;
    let finalstr = "";
    for (let i = 0; i < str.length; i++) {
        temp = str.charCodeAt(i); // Returns the ascii value
        if (temp >= 65 && temp <= 90) {
            if (temp === 32) { //
                finalstr += String.fromCharCode(temp);
                continue;
            }
            temp = temp + 13;
            if (temp > 90) {
                let rem = temp - 90;
                rem = 64 + rem;
                finalstr += String.fromCharCode(rem);
            }
            else {
                finalstr += String.fromCharCode(temp);
            }
        }
        else {
            finalstr += String.fromCharCode(temp);
            continue;
        }


    }
    return finalstr;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));