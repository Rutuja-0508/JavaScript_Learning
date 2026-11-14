///////////////////////////////////////
//
// Function Name : Multiply
// Description   : Multiplies three numbers
// Input         : Three integers
// Output        : Multiplication of three numbers
// Author        : Rutuja Patil
// Date          : 14/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Multiply(iNo1, iNo2, iNo3)
{
   let iResult = 0

   if(iNo1 == 0)
   {
      return 0
   }

   if(iNo2 == 0)
   {
      return iNo1 * iNo3
   }

   if(iNo3 == 0)
   {
      return iNo1 * iNo2
   }

   iResult = iNo1 * iNo2 * iNo3

   return iResult
}

function main()
{
   let iValue1 = 0, iValue2 = 0, iValue3 = 0
   let iRet = 0

   let aInput = prompt("Please enter three numbers: ").trim().split(/\s+/)
   iValue1 = parseInt(aInput[0])
   iValue2 = parseInt(aInput[1])
   iValue3 = parseInt(aInput[2])

   iRet = Multiply(iValue1, iValue2, iValue3)

   console.log("Multiplication is: " + iRet)
}

main()
