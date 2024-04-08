function UserInput()
{
    const bishInput = document.getElementById('formBishInput').value.trim(); // Save the user input and trim off any spaces
    const boshInput = document.getElementById('formBoshInput').value.trim();
    const loopInput = document.getElementById('formLoopInput').value.trim();

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
        errorMessage.textContent = 'Please fill in all the fields with valid numbers.'; // Add message if user input is incorrect
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

function ResetFields() { // Function to reset all the fields
    document.getElementById('formBishInput').value = '';
    document.getElementById('formBoshInput').value = '';
    document.getElementById('formLoopInput').value = '';
    document.getElementById('formResultOutput').textContent = '';
    document.getElementById('errorMessage').textContent = '';
}


// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', UserInput); // Event listener for when the user clicks the Start-button

    document.getElementById('resetButton').addEventListener('click', function() { // Event listener for when the user clicks the Reset-button
        ResetFields();
    });  // Call the ResetFields function to reset/clear all the fields
});