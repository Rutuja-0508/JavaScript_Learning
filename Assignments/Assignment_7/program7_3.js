///////////////////////////////////////
//
// Function Name : Display
// Description   : Displays numbers from -N to +N
// Input         : Integer
// Output        : Numbers from -N to +N
// Author        : Rutuja Patil
// Date          : 11/11/2026
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

   for(iCnt = -iNo; iCnt <= iNo; iCnt++)
   {
      sOutput += iCnt + "\t"
   }

   console.log(sOutput)
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number: "))

   Display(iValue)
}

main()
