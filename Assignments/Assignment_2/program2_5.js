///////////////////////////////////////
//
// Function Name : CheckEven
// Description   : Checks whether a number is even or odd
// Input         : Integer
// Output        : Number is Even / Number is Odd
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

// typedef int BOOL in C -> plain numbers 1 / 0 in JavaScript
const TRUE = 1
const FALSE = 0

function CheckEven(iNo)
{
   if((iNo % 2) == 0)
   {
      return TRUE
   }
   else
   {
      return FALSE
   }
}

function main()
{
   let iValue = 0
   let bRet = FALSE

   iValue = parseInt(prompt("Enter Number :"))

   bRet = CheckEven(iValue)

   if(bRet == TRUE)
   {
      console.log("Number is Even")
   }
   else
   {
      console.log("Number is Odd")
   }
}

main()
