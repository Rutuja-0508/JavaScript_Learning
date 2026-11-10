///////////////////////////////////////
//
// Function Name : Accept
// Description   : Displays stars as per the given number
// Input         : Integer
// Output        : Stars printed N times
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

function Accept(iNo)
{
   let sOutput = ""
   let iCnt = 0

   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
      sOutput += "*"
   }
   console.log(sOutput)
}

function main()
{
   let iValue = 0
   iValue = 5

   Accept(iValue)
}

main()
