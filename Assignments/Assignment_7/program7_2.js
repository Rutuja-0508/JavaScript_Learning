///////////////////////////////////////
//
// Function Name : Display
// Description   : Displays numbers from 1 to N
// Input         : Integer
// Output        : Numbers from 1 to N
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Display(iNo)
{
   let sOutput = ""
   let iCnt = 0

   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
      sOutput += iCnt + "\t"
   }

   console.log(sOutput)
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number: "))

   Display(iValue)
}

main()
