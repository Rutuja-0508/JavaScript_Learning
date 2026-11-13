///////////////////////////////////////
//
// Function Name : CountFour
// Description   : Counts frequency of digit 4 in a number
// Input         : Integer
// Output        : Frequency of digit 4
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CountFour(iNo)
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

      if(iDigit == 4)
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

   iRet = CountFour(iValue)

   console.log("" + iRet)
}

main()
