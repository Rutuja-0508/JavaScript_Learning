///////////////////////////////////////
//
// Function Name : CheckDivisibility
// Description   : Checks whether a number is divisible by 5.
// Input         : Integer
// Output        : Divisible by 5 / Not Divisible by 5
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CheckDivisibility(iValue)
{
   if((iValue % 5) == 0)
   {
      console.log("Number is Divisible by 5")
   }
   else
   {
      console.log("Number is not Divisible by 5")
   }
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter the Number :"))

   CheckDivisibility(iValue)
}

main()
