function setup() {
    createCanvas(500, 500);
    background("white");

    let result = "";
    let sum = getSum("1,2,30,4,5");
    result += `getSum 1: ${sum} ${sum === 42 ? "✅" : "❌"}\n`;

    sum = getSum("");
    result += `getSum 2: ${sum} ${sum === 0 ? "✅" : "❌"}\n`;

    let index = getIndexOf("1,2,30,4,5", 30);
    result += `getIndexOf 1: ${index} ${index === 4 ? "✅" : "❌"}\n`;

    index = getIndexOf("1,2,30,4,5", 31);
    result += `getIndexOf 2: ${index} ${index === -1 ? "✅" : "❌"}\n`;

    let array = [1, 2, 30, 4, 5];
    index = findIndexInArray(array, 30);
    result += `findIndexInArray 1: ${index} ${index === 2 ? "✅" : "❌"}\n`;

    index = findIndexInArray(array, 31);
    result += `findIndexInArray 2: ${index} ${index === -1 ? "✅" : "❌"}\n`;

    let cardShortcode = "S5";
    let decoded = decodeCCard(cardShortcode);
    result += `decodeCCard 1: ${decoded} ${decoded === "5 of Spades" ? "✅" : "❌"}\n`;

    cardShortcode = "HJ";
    decoded = decodeCCard(cardShortcode);
    result += `decodeCCard 2: ${decoded} ${decoded === "Jack of Hearts" ? "✅" : "❌"}\n`;

    let evenNumbers = findAllEvenNumbers("1,2,30,4,5");
    result += `findAllEvenNumbers 1: ${evenNumbers} ${evenNumbers.indexOf(2) !== -1 && evenNumbers.indexOf(30) !== -1 && evenNumbers.indexOf(4) !== -1 ? "✅" : "❌"}\n`;

    evenNumbers = findAllEvenNumbers("1,3,5,7,9");
    result += `findAllEvenNumbers 2: ${evenNumbers} ${evenNumbers.length === 0 ? "✅" : "❌"}\n`;

    evenNumbers = findAllEvenNumbers("");
    result += `findAllEvenNumbers 3: ${evenNumbers} ${evenNumbers.length === 0 ? "✅" : "❌"}\n`;

    fill("black");
    textAlign(LEFT, TOP);
    textSize(15);
    text(result, 10, 10, width - 20, height - 20);
}

/**
* Parse a string of numbers separated by commas and return the sum of the numbers
* @param numbersString - A string of numbers separated by commas (e.g. "1,2,30,4,5")
* @returns The sum of the numbers, 0 if the string is empty
*/
function getSum(numbersString: string): number {
    let temp = 0;
    let sum = 0;
    for(let i = 0; i<numbersString.length;i++){
        if(numbersString[i]=== ","){
         sum = sum + temp
   
            temp = 0
        }
        else{
            temp = temp * 10 + parseInt(numbersString[i])
        }
    
    }
    sum = sum + temp
    return sum; // <<< Remove this line and implement the function
}

/**
* Get the start index of a number in a string of numbers separated by commas
* @param numbersString - A string of numbers separated by commas (e.g. "1,2,30,4,5")
* @param number - The number to get the index of (e.g. 30)
* @returns The start index of the number, -1 if the number is not found
*/
function getIndexOf(numbersString: string, number: number): number {
    let temp:number = 0;
    let array:string[] = []
    for(let i = 0; i<numbersString.length; i++){
        if(numbersString[i]=== ","){
            array.push(temp.toString());
            temp = 0;
        }
        else{
            temp = temp *10 + parseInt(numbersString[i])
        }
    }
    array.push(temp.toString())
    let currentIndex = 0 
    for(let i = 0; i<array.length;i++){
        if(array[i]=== number.toString()){
            return currentIndex;
        }
        currentIndex = currentIndex + array[i].length+1
    }
    return -1;
}

/**
* Find the index of a number in an array
* @param array - An array of numbers (e.g. [1, 2, 30, 4, 5])
* @param number - The number to find the index of (e.g. 30)
* @returns The index of the number, -1 if the number is not found
*/
function findIndexInArray(array: number[], number: number): number {
    for(let i = 0;i<array.length;i++){
        if(array[i]=== number){
            return i
        }
    }


    return -1; // <<< Remove this line and implement the function
}

/**
* Decode a playing card shortcode
* @param cardShortcode - A shortcode for a playing card (e.g. "S5", "HJ", "DQ", "C8")
* @returns The decoded playing card (e.g. "5 of Spades", "Jack of Hearts", "Queen of Diamonds", "8 of Clubs")
* 
* Shortcodes consist of the suite (first character) and the rank (second character).
* 
* Suites:
* * S: Spades (♠)
* * H: Hearts (♥)
* * D: Diamonds (♦)
* * C: Clubs (♣)
* 
* Ranks:
* * 2-9: The number
* * T: 10
* * J: Jack
* * Q: Queen
* * K: King
* * A: Ace

*/
function decodeCCard(cardShortcode: string): string {
    let shortsuit = cardShortcode[0]
    let shortrank = cardShortcode[1]
    let longsuit = ""
    let longrank = ""
    switch(shortsuit){
        case "S": longsuit = "Spades"
        break;
        case "H": longsuit = "Hearts"
        break;
        case "D": longsuit = "Diamonds"
        break;
        case "C": longsuit = "Clubs"
        break;
        default: longsuit = "unknown"
        break;
    }
        switch(shortrank){
            case "1": longrank = "1"
            break;
            case "2": longrank = "2"
            break;
            case "3": longrank = "3"
            break;
            case "4": longrank = "4"
            break;
            case "5": longrank = "5"
            break;
            case "6": longrank = "6"
            break;
            case "7": longrank = "7"
            break;
            case "8": longrank = "8"
            break;
            case "9": longrank = "9"
            break;
            case "T": longrank = "10"
            break;
            case "J": longrank = "Jack"
            break;
            case "Q": longrank = "Queen"
            break;
            case "K": longrank = "King"
            break;
            case "A": longrank = "Ace"
            break;
            default: longrank = "unknown"
            break;
        }

    return `${longrank} of ${longsuit}`; // <<< Remove this line and implement the function
}

/**
* Find all even numbers in a string of numbers separated by commas
* @param numberString - A string of numbers separated by commas (e.g. "1,2,30,4,5")
* @returns An array of even numbers (e.g. [2, 30, 4]), empty array if no even numbers are found
*/
function findAllEvenNumbers(numberString: string): number[] {
    let arraynotsorted = []
    let arraysorted = []
    let temp = 0
    for(let i = 0; i<numberString.length; i++){
        if(numberString[i]===","){
            arraynotsorted.push(temp)
            temp = 0
        }
        else {
            temp = temp * 10 + parseInt(numberString[i])
        }
    }
    arraynotsorted.push(temp)
    for(let i = 0; i<arraynotsorted.length;i++){
        if(arraynotsorted[i]%2 === 0)
        arraysorted.push(arraynotsorted[i])
    }
    return arraysorted;
}