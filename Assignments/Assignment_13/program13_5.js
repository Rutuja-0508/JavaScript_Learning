///////////////////////////////////////
//
// Function Name : CountDiff
// Description   : Calculates difference between sum of even and odd digits
// Input         : Integer
// Output        : Difference of digit sums
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CountDiff(iNo)
{
   let iDigit = 0
   let iEvenSum = 0
   let iOddSum = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   while(iNo != 0)
   {
      iDigit = iNo % 10

      if(iDigit % 2 == 0)
      {
         iEvenSum = iEvenSum + iDigit
      }
      else
      {
         iOddSum = iOddSum + iDigit
      }

      iNo = Math.trunc(iNo / 10)
   }

   return (iEvenSum - iOddSum)
}

function main()
{
   let iValue = 0
   let iRet = 0

   iValue = parseInt(prompt("Enter number : "))

   iRet = CountDiff(iValue)

   console.log("" + iRet)
}

main()
