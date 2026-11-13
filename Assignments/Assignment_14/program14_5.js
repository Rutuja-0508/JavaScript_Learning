///////////////////////////////////////
//
// Function Name : FactDiff
// Description   : Calculates difference between sum of factors and non-factors
// Input         : Integer
// Output        : Difference of both sums
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function FactDiff(iNo)
{
   let iCnt = 0
   let iFactSum = 0
   let iNonFactSum = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
      if(iNo % iCnt == 0)
      {
         iFactSum = iFactSum + iCnt
      }
      else
      {
         iNonFactSum = iNonFactSum + iCnt
      }
   }

   return (iFactSum - iNonFactSum)
}

function main()
{
   let iValue = 0
   let iRet = 0

   iValue = parseInt(prompt("Enter number : "))

   iRet = FactDiff(iValue)

   console.log("" + iRet)
}

main()
