///////////////////////////////////////
//
// Function Name : ChkZero
// Description   : Checks whether number contains zero or not
// Input         : Integer
// Output        : TRUE or FALSE
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

// typedef int BOOL in C -> plain numbers 1 / 0 in JavaScript
const TRUE = 1
const FALSE = 0

function ChkZero(iNo)
{
   let iDigit = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   while(iNo != 0)
   {
      iDigit = iNo % 10

      if(iDigit == 0)
      {
         return TRUE
      }

      iNo = Math.trunc(iNo / 10)
   }

   return FALSE
}

function main()
{
   let iValue = 0
   let bRet = FALSE

   iValue = parseInt(prompt("Enter number : "))

   bRet = ChkZero(iValue)

   if(bRet == TRUE)
   {
      console.log("It Contains Zero")
   }
   else
   {
      console.log("There is no Zero")
   }
}

main()
