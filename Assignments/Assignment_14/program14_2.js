///////////////////////////////////////
//
// Function Name : FactRev
// Description   : Displays all factors of a number in decreasing order
// Input         : Integer
// Output        : Factors in decreasing order
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function FactRev(iNo)
{
   let sOutput = ""
   let iCnt = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   for(iCnt = iNo; iCnt >= 1; iCnt--)
   {
      if(iNo % iCnt == 0)
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

   FactRev(iValue)
}

main()
