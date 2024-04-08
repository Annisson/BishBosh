function UserInput()
{
    const bishInput = document.getElementById('formBishInput').value; // Save the user input
    const boshInput = document.getElementById('formBoshInput').value;
    const loopInput = document.getElementById('formLoopInput').value;

    const validInput = ValidateUserInput(bishInput, boshInput, loopInput); // Call the function to do a validation check

    if (validInput) { // If validation is successful, parse input to int and call for the function to print the numbers/words
        const bish = parseInt(bishInput);
        const bosh = parseInt(boshInput);
        const loop = parseInt(loopInput);
        BishBosh(bish, bosh, loop);
    }
}

function ValidateUserInput(bishInput, boshInput, loopInput) // Validate user input, add checks for number and negative numbers
{
    if (!bishInput || isNaN(bishInput) || bishInput <= 0 || // Checks if a field is not filled out, NaN(not a numer), or is a negative number
    !boshInput || isNaN(boshInput) || boshInput <= 0 ||
    !loopInput || isNaN(loopInput) || loopInput <= 0) {
        return false;
    }

    return true;

}

function BishBosh(bish, bosh, loop) 
{
    const resultOutput = document.getElementById('formResultOutput'); 
    let result = '';

   for (let i = 1; i <= loop; i++) {
        if(i % bish === 0 && i % bosh === 0)
        {
            result += 'Bish-Bosh';
        }
        else if(i % bish === 0)
        {
            result += 'Bish';
        }
        else if(i % bosh === 0)
        {
            result += 'Bosh';
        }
        else
        {
            result += i;
        }

        if (i !== loop) { // Add a comma if it's not the last word/number
            result += ', ';
        }
    } 
    resultOutput.textContent = result;  // Print result string in the p-tag with id "resultOutput"
}