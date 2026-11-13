///////////////////////////////////////
//
// Function Name : MultFact
// Description   : Calculates multiplication of all factors of a number
// Input         : Integer
// Output        : Multiplication of factors
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function MultFact(iNo)
{
   let iCnt = 0
   let iMult = 1

   if(iNo < 0)
   {
      iNo = -iNo
   }

   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
      if(iNo % iCnt == 0)
      {
         iMult = Math.imul(iMult, iCnt)    // int (32 bit) multiplication like C
      }
   }

   return iMult
}

function main()
{
   let iValue = 0
   let iRet = 0

   iValue = parseInt(prompt("Enter number : "))

   iRet = MultFact(iValue)

   console.log("" + iRet)
}

main()
