///////////////////////////////////////
//
// Function Name : RangeDisplay
// Description   : Displays all numbers between given range
// Input         : Two Integers
// Output        : Numbers between the range
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function RangeDisplay(iStart, iEnd)
{
   let sOutput = ""
   let iCnt = 0

   if(iStart > iEnd)
   {
      console.log("Invalid range")
      return
   }

   for(iCnt = iStart; iCnt <= iEnd; iCnt++)
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

   RangeDisplay(iValue1, iValue2)
}

main()
