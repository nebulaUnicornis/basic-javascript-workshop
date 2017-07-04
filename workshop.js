function firstLetter(inputString) {
    if (inputString === undefined) {
        return undefined
    } else {
        return inputString[0];
    }
}

function lastLetter(inputString) {
    if (inputString === undefined || inputString === '') {
        return undefined
    } else {
        var size = inputString.length;
        return inputString[size - 1];
    }
}

function letterAtPosition(inputString, position) {
    if (inputString === undefined || inputString === '') {
        return undefined
    } else {
        return inputString[position];
    }
}

function addTwoNumbers(num1, num2) {
    if (num1 === undefined || isNaN(num1) || num2 === undefined || isNaN(num2)) {
        return undefined
    } else {
        return (num1 + num2);
    }

}

function multiplyTwoNumbers(num1, num2) {
    if (num1 === undefined || isNaN(num1) || num2 === undefined || isNaN(num2)) {
        return undefined
    } else {
        return (num1 * num2);
    }
}

function calculator(operation, num1, num2) {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'sub') {
        return (num1 - num2);
    } else if (operation === 'mult') {
        return (num1 * num2);
    } else if (operation === 'div') {
        return (num1 / num2);
    } else {
        return undefined;
    }
}

function repeatString(inputString, numRepetitions) {
    if (numRepetitions <= 0) {
        return '';
    } else if (isNaN(numRepetitions)) {
        return undefined;
    } else {
        var str = '';
        for (var i = 0; i < numRepetitions; i++) {
             str += inputString;
        }
        
        return str;
    }
}

function reverseString(inputString) {
    var str = '';
    for (var i = inputString.length - 1; i >= 0 ; i--) {
        str += inputString[i];
    }
    return str;

}

function longestWord(inputString) {
    // Empty string
    if (inputString === '') {
        return '';
    // String with no space (single word)
    } else if (inputString.indexOf(' ') < 0) {
        return inputString;
    // Multiple words
    } else {
        var str = '';
        var arrayStrings = [];
        for (var i = 0; i < inputString.length; i++) {
            if (inputString[i] === ' ') {
                arrayStrings.push(str);
                str = '';
            } else {
                str += inputString[i];
            }
        }
        
        var biggerString = 0;
        for (var j = 0; j < arrayStrings.length; j++) {
            if (arrayStrings[j].length > arrayStrings[biggerString].length) {
                biggerString = j;
            }
        }
        
        return arrayStrings[biggerString];
    }

}

function capitalize(inputString) {
    // Empty string
    if (inputString === '') {
        return '';
    } 
    // Single word
    else if (inputString.indexOf(' ') < 0) {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }
    // Multiple words
    else {
        var str = inputString.split(' ');
        for (var i = 0; i < str.length; i++) {
            
            str[i] = str[i].charAt(0).toUpperCase() + str[i].toLowerCase().slice(1);
        }
        inputString = str.join(' ');
        return inputString;
    }
}

function sumOfNumbers(arrayOfNumbers) {
    var total = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        if (isNaN(arrayOfNumbers[i])) {
            return undefined;
        } else {
            total += arrayOfNumbers[i];
        }
    }
    
    return total;

}

function uniqueElements(array1, array2) {
    var arrayUnique = [], arrayTotal = [];
    
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return undefined;
    } else if (array1.length < 1) {
        return array2;
    } else {
        // Looping through array1 
        for (var i = 0; i < array1.length; i++) {
            arrayTotal.push(array1[i]);
        }
        // Looping through array2
        for (var j = 0; j < array2.length; j++) {
            arrayTotal.push(array2[j]);
        }
        //console.log(arrayTotal);
        // Looping through arrayTotal
        for (var i = 0; i < arrayTotal.length; i++) {
            var itemFound = false;
            for (var j = 0; j < array1.length; j++) {
                if (arrayTotal[i] === array1[j]) {
                    itemFound = true;
                }
            }
            if (!itemFound) {
                console.log('hello');
                arrayUnique.push(arrayTotal[i]);
            }
        }
        for (var i = 0; i < arrayTotal.length; i++) {
            var itemFound = false;
            for (var j = 0; j < array2.length; j++) {
                if (arrayTotal[i] === array2[j]) {
                    itemFound = true;
                }
            }
            if (!itemFound) {
                console.log('hello');
                arrayUnique.push(arrayTotal[i]);
            }
        }
        return arrayUnique;
    }
}

function isPalindrome(inputString) {
    if (inputString === '') {
        return true;
    } else {
        var str1 = '', str2 = '';
        
        for (var i = 0; i < inputString.length; i++) {
            if (inputString[i] === ' ' || inputString[i] === ',' || inputString[i] === '-') {
            continue;
            }else {
            	str1 += inputString[i].toLowerCase();
            }
        }
        
        console.log (str1);
        
        for (var i = str1.length - 1; i >= 0 ; i--) {
            str2 += str1[i];
        }
        if (str1 === str2) {
            return true;
        } else {
            return false;
        }
    }

}

function wrapCharacter(inputString) {
    var returnLine = 1;
    var newString = '';
    
    for (var i = 0; i < inputString.length; i++) {
        if (returnLine === 40) {
            newString += inputString[i] + '\n';
            returnLine = 1;
        }
        else {
            if (inputString[i] === ' ' && returnLine === 1) {
            //we need our iterator to skip as well, thus we increment i
                i++;
            }
            newString += inputString[i];
            returnLine++;
        }
    }
    
    return newString;

}

function wrapWord(inputString) {
    var arr = inputString.split(' ');
    var sum = 0;
    var newString = '';
    
    console.log(arr);
    //console.log(arr[0].length);
    
    // Looping through arr
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].length;
        if (sum <= 40) {
            newString += arr[i];
            newString += ' ';
            sum++; // counting the spaces
        } else {
            console.log(sum);
            newString += '\n';
            newString += arr[i];
            newString += ' ';
            //sum++;
            sum = arr[i].length;
        } 
    }
    
    return newString;

}

function bubbleSort(arrayOfNumbers) {
    
    if (arrayOfNumbers.length === 0) {
        return [];
    }
    
    for (var i = 0; i < arrayOfNumbers.length -1; i++) {
        for (var j = 0; j < arrayOfNumbers.length -1 -i; j++) {
            // Compare the two neighbors
           if (arrayOfNumbers[j+1] < arrayOfNumbers[j]) {
               var tmp = arrayOfNumbers[j];         /* swap a[j] and a[j+1]      */
                arrayOfNumbers[j] = arrayOfNumbers[j+1];
                arrayOfNumbers[j+1] = tmp;
           }
        }
    }
    
    return arrayOfNumbers;
        
}
/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};