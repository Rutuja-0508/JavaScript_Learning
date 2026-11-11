///////////////////////////////////////
//
// Function Name : OddDisplay
// Description   : Displays all odd numbers up to N
// Input         : Integer
// Output        : Odd numbers up to N
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function OddDisplay(iNo)
{
   let sOutput = ""
   let iCnt = 0

   for(iCnt = 1; iCnt <= iNo; iCnt = iCnt + 2)
   {
      sOutput += iCnt + "\t"
   }

   console.log(sOutput)
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number: "))

   OddDisplay(iValue)
}

main()
