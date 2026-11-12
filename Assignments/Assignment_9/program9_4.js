///////////////////////////////////////
//
// Function Name : OddFactorial
// Description   : Calculates odd factorial of given number
// Input         : Integer
// Output        : Odd factorial
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function OddFactorial(iNo)
{
   let iCnt = 0
   let iFact = 1n

   if(iNo < 0)
   {
      iNo = -iNo
   }

   if(iNo % 2 == 0)
   {
      iNo--
   }

   for(iCnt = iNo; iCnt >= 1; iCnt = iCnt - 2)
   {
      iFact = BigInt.asIntN(64, iFact * BigInt(iCnt))
   }

   return iFact
}

function main()
{
   let iValue = 0
   let iRet = 0n

   iValue = parseInt(prompt("Enter number : "))

   iRet = OddFactorial(iValue)

   console.log("Odd Factorial of number is " + iRet)
}

main()
