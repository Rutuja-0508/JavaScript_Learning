///////////////////////////////////////
//
// Function Name : ChkEqual
// Description   : Checks whether two numbers are equal
// Input         : Two integers
// Output        : TRUE or FALSE
// Author        : Rutuja Patil
// Date          : 14/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

// typedef int BOOL in C -> plain numbers 1 / 0 in JavaScript
const TRUE = 1
const FALSE = 0

function ChkEqual(iNo1, iNo2)
{
   if(iNo1 == iNo2)
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
   let iValue1 = 0, iValue2 = 0
   let bRet = FALSE

   let aInput = prompt("Please enter two numbers: ").trim().split(/\s+/)
   iValue1 = parseInt(aInput[0])
   iValue2 = parseInt(aInput[1])

   bRet = ChkEqual(iValue1, iValue2)

   if(bRet == TRUE)
   {
      console.log("Equal")
   }
   else
   {
      console.log("Not Equal")
   }
}

main()
