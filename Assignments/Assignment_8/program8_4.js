///////////////////////////////////////
//
// Function Name : Table
// Description   : Displays multiplication table of given number
// Input         : Integer
// Output        : Multiplication table
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Table(iNo)
{
   let sOutput = ""
   let iCnt = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   for(iCnt = 1; iCnt <= 10; iCnt++)
   {
      sOutput += (iNo * iCnt) + "\t"
   }
   console.log(sOutput)
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number : "))

   Table(iValue)
}

main()
