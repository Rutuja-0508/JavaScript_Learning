///////////////////////////////////////
//
// Function Name : Check
// Description   : Checks whether a number is divisible by 5
// Input         : Integer
// Output        : Divisible by 5 / Not Divisible by 5
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

// typedef int BOOL in C -> plain numbers 1 / 0 in JavaScript
const TRUE = 1
const FALSE = 0

function Check(iNo)
{
   if((iNo % 5) == 0)
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

   bRet = Check(iValue)

   if(bRet == TRUE)
   {
      console.log("Divisible by 5")
   }
   else
   {
      console.log("Not Divisible by 5")
   }
}

main()
