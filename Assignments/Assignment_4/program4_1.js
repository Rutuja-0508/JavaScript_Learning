///////////////////////////////////////
//
// Function Name : CheckNumber
// Description   : Checks whether a number is positive, negative, or zero.
// Input         : Integer
// Output        : Positive Number / Negative Number / Zero
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CheckNumber(iValue)
{
   if(iValue > 0)
   {
      console.log("The Number is Positive")
   }
   else if(iValue < 0)
   {
      console.log("The Number is Negative")
   }
   else
   {
      console.log("The number is Zero")
   }
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter a Number :"))

   CheckNumber(iValue)
}

main()
