function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
        return '0';
    }

    let binary = '';
    while (decimalNumber > 0) {
        binary = (decimalNumber % 2) + binary;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binary;
}

// Test cases
console.log(decimalToBinary(7));   // Output: "111"
console.log(decimalToBinary(10));  // Output: "1010"
console.log(decimalToBinary(33));  // Output: "100001"