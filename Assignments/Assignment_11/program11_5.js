///////////////////////////////////////
//
// Function Name : RangeDisplayRev
// Description   : Displays all numbers in reverse order
// Input         : Two Integers
// Output        : Numbers in reverse order
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function RangeDisplayRev(iStart, iEnd)
{
   let sOutput = ""
   let iCnt = 0

   if(iStart > iEnd)
   {
      console.log("Invalid range")
      return
   }

   for(iCnt = iEnd; iCnt >= iStart; iCnt--)
   {
      sOutput += iCnt + "\t"
   }
   console.log(sOutput)
}

function main()
{
   let iValue1 = 0, iValue2 = 0

   iValue1 = parseInt(prompt("Enter starting point : "))

   iValue2 = parseInt(prompt("Enter ending point : "))

   RangeDisplayRev(iValue1, iValue2)
}

main()
