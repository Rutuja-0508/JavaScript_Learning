///////////////////////////////////////
//
// Function Name : Percentage
// Description   : Calculates percentage from total and obtained marks
// Input         : Total marks and obtained marks
// Output        : Percentage
// Author        : Rutuja Patil
// Date          : 14/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Percentage(iTotal, iObtained)
{
   let fResult = 0.0

   if(iTotal == 0)
   {
      return 0.0
   }

   fResult = Math.fround(Math.fround(Math.fround(iObtained) / iTotal) * 100)

   return fResult
}

function main()
{
   let iValue1 = 0, iValue2 = 0
   let fRet = 0.0

   iValue1 = parseInt(prompt("Please enter total marks: "))

   iValue2 = parseInt(prompt("Please enter obtained marks: "))

   fRet = Percentage(iValue1, iValue2)

   console.log("Percentage is: " + fRet.toFixed(1) + "%")
}

main()
