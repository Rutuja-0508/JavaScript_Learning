///////////////////////////////////////
//
// Function Name : MultipleDisplay
// Description   : Displays the first five multiples of N
// Input         : Integer
// Output        : First five multiples of N
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function MultipleDisplay(iNo)
{
   let sOutput = ""
   let iCnt = 0

   for(iCnt = 1; iCnt <= 5; iCnt++)
   {
      sOutput += (iNo * iCnt) + "\t"
   }

   console.log(sOutput)
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number: "))

   MultipleDisplay(iValue)
}

main()
