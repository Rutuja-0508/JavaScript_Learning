///////////////////////////////////////
//
// Function Name : Pattern
// Description   : Prints $ and * alternately
// Input         : Integer
// Output        : Pattern of $ and *
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Pattern(iNo)
{
   let sOutput = ""
   let iCnt = 0

   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
      sOutput += "$\t*\t"
   }

   console.log(sOutput)
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number: "))

   if(iValue < 0)
   {
      iValue = -iValue
   }

   Pattern(iValue)
}

main()
