///////////////////////////////////////
//
// Function Name : SumNonFact
// Description   : Calculates summation of all non-factors of a number
// Input         : Integer
// Output        : Sum of non-factors
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function SumNonFact(iNo)
{
   let iCnt = 0
   let iSum = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
      if(iNo % iCnt != 0)
      {
         iSum = iSum + iCnt
      }
   }

   return iSum
}

function main()
{
   let iValue = 0
   let iRet = 0

   iValue = parseInt(prompt("Enter number : "))

   iRet = SumNonFact(iValue)

   console.log("" + iRet)
}

main()
