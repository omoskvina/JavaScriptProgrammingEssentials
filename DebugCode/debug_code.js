    
    function performOperation() {
    // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
            let multiplicationResult = multiply(num1, num2);
            let divisionResult = divide(num1, num2);
            let additionResult = add(num1, num2);
            let subtractionResult = subtract(num1, num2);
            console.log(num1, num2)
            // Display the result
            displayResult(multiplicationResult, divisionResult, additionResult, subtractionResult);
        } else {
            displayResult('Invalid numbers', 'Invalid numbers', 'Invalid numbers', 'Invalid numbers');
        }
    }

    function multiply(a, b) {
        // Introduce a debugger statement to pause execution
        debugger;

        // Multiply the numbers
        return a * b;
    }

    function divide(a, b) {
        if(b!=0) {
            return a / b
        }
        // Multiply the numbers
        else  {
            return('Invalid divisor');
        }
        
    }

    function add(a, b) {
        // Introduce a debugger statement to pause execution
        debugger;

        // Multiply the numbers
        return a + b;
    }

    function subtract(a, b) {
        // Introduce a debugger statement to pause execution
        debugger;

        // Multiply the numbers
        return a - b;
    }

    function displayResult(multiplicationResult, divisionResult, additionResult, subtractionResult) {
        // Display the result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.textContent = `The results 
        Multiplication:  ${multiplicationResult}
        Division:  ${divisionResult}
        Addition:  ${additionResult}
        Subtraction:  ${subtractionResult}`;
    }
