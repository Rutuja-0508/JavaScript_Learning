///////////////////////////////////////
//
// Function Name : CheckEvenOdd
// Description   : Checks whether a number is even or odd.
// Input         : Integer
// Output        : Even Number / Odd Number
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CheckEvenOdd(iValue)
{
   if((iValue % 2) == 0)
   {
      console.log("The Number is Even")
   }
   else
   {
      console.log("The Number is Odd")
   }
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter a Number :"))

   CheckEvenOdd(iValue)
}

main()
