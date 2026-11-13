///////////////////////////////////////
//
// Function Name : Count
// Description   : Counts digits which are less than 6 in a number
// Input         : Integer
// Output        : Count of digits less than 6
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Count(iNo)
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

      if(iDigit < 6)
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

   iRet = Count(iValue)

   console.log("" + iRet)
}

main()
