///////////////////////////////////////
//
// Function Name : RangeSum
// Description   : Calculates addition of all numbers in given range
// Input         : Two Integers
// Output        : Addition of numbers
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function RangeSum(iStart, iEnd)
{
   let iCnt = 0
   let iSum = 0

   if(iStart <= 0 || iEnd <= 0 || iStart > iEnd)
   {
      console.log("Invalid range")
      return 0
   }

   for(iCnt = iStart; iCnt <= iEnd; iCnt++)
   {
      iSum = iSum + iCnt
   }

   return iSum
}

function main()
{
   let iValue1 = 0, iValue2 = 0, iRet = 0

   iValue1 = parseInt(prompt("Enter starting point : "))

   iValue2 = parseInt(prompt("Enter ending point : "))

   if(iValue1 <= 0 || iValue2 <= 0 || iValue1 > iValue2)
   {
      console.log("Invalid range")
   }
   else
   {
      iRet = RangeSum(iValue1, iValue2)

      console.log("Addition is " + iRet)
   }
}

main()
