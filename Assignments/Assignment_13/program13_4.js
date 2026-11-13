///////////////////////////////////////
//
// Function Name : MultDigits
// Description   : Calculates multiplication of all digits in a number
// Input         : Integer
// Output        : Multiplication of digits
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function MultDigits(iNo)
{
   let iDigit = 0
   let iMult = 1

   if(iNo < 0)
   {
      iNo = -iNo
   }

   if(iNo == 0)
   {
      return 0
   }

   while(iNo != 0)
   {
      iDigit = iNo % 10

      iMult = Math.imul(iMult, iDigit)    // int (32 bit) multiplication like C

      iNo = Math.trunc(iNo / 10)
   }

   return iMult
}

function main()
{
   let iValue = 0
   let iRet = 0

   iValue = parseInt(prompt("Enter number : "))

   iRet = MultDigits(iValue)

   console.log("" + iRet)
}

main()
