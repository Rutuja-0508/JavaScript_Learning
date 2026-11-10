//program to divide two numbers
///////////////////////////////////////
//
// Function Name : Divide
// Description   : Divides two numbers
// Input         : Two integers
// Output        : Division of the numbers
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

function Divide(iNo1, iNo2)
{
   let iAns = 0
   if(iNo2 == 0)
   {
      return -1
   }
   iAns = Math.trunc(iNo1 / iNo2)
   return iAns
}

function main()
{
   let iValue1 = 15, iValue2 = 5
   let iRet = 0

   iRet = Divide(iValue1, iValue2)
   console.log("Division is " + iRet)
}

main()
