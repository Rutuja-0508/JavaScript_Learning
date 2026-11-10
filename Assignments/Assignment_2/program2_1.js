///////////////////////////////////////
//
// Function Name : Display
// Description   : Displays stars as per the given number (while loop)
// Input         : Integer
// Output        : Stars printed N times
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Display(iNo)
{
   let sOutput = ""
   let iCnt = 0

   while(iCnt < iNo)
   {
      sOutput += "*"
      iCnt++
   }
   console.log(sOutput)
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number :"))

   Display(iValue)
}

main()
