function UserInput()
{
    const bishInput = document.getElementById('formBishInput').value; // Save the user input
    const boshInput = document.getElementById('formBoshInput').value;
    const loopInput = document.getElementById('formLoopInput').value;

    ValidateUserInput(bishInput, boshInput, loopInput); // Call the function to do the validation check


    BishBosh(bish, bosh, loop); // Call the function that will print the result


}

function ValidateUserInput(bishInput, boshInput, loopInput) // Validate user input, add checks for number and negative numbers
{
    if (!bishInput || !boshInput || !loopInput) {
        
        return false;
    }

    return true;

}

function BishBosh(bish, bosh, loop)   // Add the function here for printing the result
{

   for (let i = 1; i <= loop; i++) {
        if(i % bish === 0 && i % bosh === 0)
        {
            console.log("Bish-Bosh");
        }
        else if(i % bish === 0)
        {
            console.log("Bish");
        }
        else if(i % bosh === 0)
        {
            console.log("Bosh");
        }
        else
        {
            console.log(i);
        }


    } 
    
}