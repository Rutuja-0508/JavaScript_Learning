///////////////////////////////////////
//
// Function Name : ChkGreater
// Description   : Checks whether a number is greater than 100
// Input         : Integer
// Output        : TRUE or FALSE
// Author        : Rutuja Patil
// Date          : 14/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

// typedef int BOOL in C -> plain numbers 1 / 0 in JavaScript
const TRUE = 1
const FALSE = 0

function ChkGreater(iNo)
{
   if(iNo > 100)
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

   iValue = parseInt(prompt("Please enter number: "))

   bRet = ChkGreater(iValue)

   if(bRet == TRUE)
   {
      console.log("Greater")
   }
   else
   {
      console.log("Smaller")
   }
}

main()
