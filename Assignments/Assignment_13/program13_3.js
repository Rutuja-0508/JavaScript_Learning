///////////////////////////////////////
//
// Function Name : CountRange
// Description   : Counts digits between 3 and 7 in a number
// Input         : Integer
// Output        : Count of digits between 3 and 7
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CountRange(iNo)
{
   let iDigit = 0
   let iCount = 0

   if(iNo < 0)
   {
      iNo = -iNo
   }

   while(iNo != 0)
   {
      iDigit = iNo % 10

      if(iDigit > 3 && iDigit < 7)
      {
         iCount++
      }

      iNo = Math.trunc(iNo / 10)
   }

   return iCount
}

function main()
{
   let iValue = 0
   let iRet = 0

   iValue = parseInt(prompt("Enter number : "))

   iRet = CountRange(iValue)

   console.log("" + iRet)
}

main()
