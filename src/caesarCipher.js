const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 //letter to number
const valAlpha = (i) => String.fromCharCode(97 + i) //number to letter

function caesarCipher(string, shift){

    let result = "";
    for (let s of string){
        if (s.match(/[a-z]/i)){
            let x = alphaVal(s)
            console.log(x)
            let shifted = valAlpha(x + shift)
            let k = alphaVal(shifted)%26
            result += valAlpha(k)
        }
        else{
            result += s
        }
    }
    return result


}

export default caesarCipher