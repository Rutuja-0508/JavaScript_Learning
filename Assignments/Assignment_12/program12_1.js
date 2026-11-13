///////////////////////////////////////
//
// Function Name : DisplayDigit
// Description   : Displays digits of a number in reverse order
// Input         : Integer
// Output        : Digits in reverse order
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function DisplayDigit(iNo)
{
   let iDigit = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   while(iNo != 0)
   {
      iDigit = iNo % 10

      console.log(iDigit)

      iNo = Math.trunc(iNo / 10)
   }
}

function main()
{
   let iValue = 0

   iValue = parseInt(prompt("Enter number : "))

   DisplayDigit(iValue)
}

main()
