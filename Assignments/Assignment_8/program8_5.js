///////////////////////////////////////
//
// Function Name : TableRev
// Description   : Displays multiplication table in reverse order
// Input         : Integer
// Output        : Reverse multiplication table
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function TableRev(iNo)
{
   let sOutput = ""
   let iCnt = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   for(iCnt = 10; iCnt >= 1; iCnt--)
   {
      sOutput += (iNo * iCnt) + "\t"
   }
   console.log(sOutput)
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number : "))

   TableRev(iValue)
}

main()
