///////////////////////////////////////
//
// Function Name : PrintEven
// Description   : Displays first N even numbers
// Input         : Integer
// Output        : First N even numbers
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function PrintEven(iNo)
{
   let iCnt = 0
   let iEven = 2

   if(iNo <= 0)
   {
      return
   }
   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
      console.log(iEven)
      iEven = iEven + 2
   }
}

function main()
{
   let iValue = 0
   iValue = parseInt(prompt("Enter Number :"))

   PrintEven(iValue)
}

main()
