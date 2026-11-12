///////////////////////////////////////
//
// Function Name : Factorial
// Description   : Calculates factorial of given number
// Input         : Integer
// Output        : Factorial of number
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

// long long in C = 64 bit integer -> BigInt (asIntN(64) keeps the same overflow behaviour)
function Factorial(iNo)
{
   let iCnt = 0
   let iFact = 1n

   if(iNo < 0)
   {
      iNo = -iNo
   }

   for(iCnt = 1; iCnt <= iNo; iCnt++)
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

   iRet = Factorial(iValue)

   console.log("Factorial of number is " + iRet)
}

main()
