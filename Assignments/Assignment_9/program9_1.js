///////////////////////////////////////
//
// Function Name : Display
// Description   : Displays stars and hashes
// Input         : Integer
// Output        : Pattern of * and #
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Display(iNo)
{
   let sOutput = ""
   let iCnt = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
      sOutput += "*\t"
   }

   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
      sOutput += "#\t"
   }
   console.log(sOutput)
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number : "))

   Display(iValue)
}

main()
