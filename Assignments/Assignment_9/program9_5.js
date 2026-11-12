///////////////////////////////////////
//
// Function Name : FactorialDiff
// Description   : Calculates difference between even and odd factorial
// Input         : Integer
// Output        : Difference of factorials
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function FactorialDiff(iNo)
{
   let iCnt = 0
   let iEvenNo = 0
   let iOddNo = 0

   let iEvenFact = 1n
   let iOddFact = 1n

   if(iNo < 0)
   {
      iNo = -iNo
   }

   iEvenNo = iNo
   iOddNo = iNo

   if(iEvenNo % 2 != 0)
   {
      iEvenNo--
   }

   if(iOddNo % 2 == 0)
   {
      iOddNo--
   }

   for(iCnt = iEvenNo; iCnt >= 2; iCnt = iCnt - 2)
   {
      iEvenFact = BigInt.asIntN(64, iEvenFact * BigInt(iCnt))
   }

   for(iCnt = iOddNo; iCnt >= 1; iCnt = iCnt - 2)
   {
      iOddFact = BigInt.asIntN(64, iOddFact * BigInt(iCnt))
   }

   return BigInt.asIntN(64, iEvenFact - iOddFact)
}

function main()
{
   let iValue = 0
   let iRet = 0n

   iValue = parseInt(prompt("Enter number : "))

   iRet = FactorialDiff(iValue)

   console.log("Factorial difference is " + iRet)
}

main()
