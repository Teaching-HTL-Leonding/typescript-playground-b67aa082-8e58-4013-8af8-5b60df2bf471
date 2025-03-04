const ones: string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine","ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tensInWords: string[] = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let temp:string = prompt("wähle eine zahl zwischen 0-99");
let num = parseInt(temp)

function setup() {
    if(num<20){
       console.log(ones[num])
    }
    if(num>=20){
        let result =""
        result += tensInWords[parseInt(temp[0])-2]
        result += ones[parseInt(temp[1])]
        console.log(result)
    }
}

function draw() {
}
