///////////////////////////////////////
//
// Function Name : NonFact
// Description   : Displays all non-factors of a given number
// Input         : Integer
// Output        : Non-factors of the number
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function NonFact(iNo)
{
   let sOutput = ""
   let iCnt = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
      if(iNo % iCnt != 0)
      {
         sOutput += iCnt + "\t"
      }
   }
   console.log(sOutput)
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number : "))

   NonFact(iValue)
}

main()
