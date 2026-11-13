///////////////////////////////////////
//
// Function Name : CountEven
// Description   : Counts even digits in a given number
// Input         : Integer
// Output        : Count of even digits
// Author        : Rutuja Patil
// Date          : 13/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CountEven(iNo)
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

      if(iDigit % 2 == 0)
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

   iRet = CountEven(iValue)

   console.log("" + iRet)
}

main()
