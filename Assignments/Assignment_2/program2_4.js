///////////////////////////////////////
//
// Function Name : Display
// Description   : Accept two numbers and display first number as many times as the second number
// Input         : Two integers
// Output        : First number printed Frequency times
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

/*
   Accept Two numbers from the user and display first number in second number of times

   Input:  12  5
   Output: 12  12  12  12  12

   Input:  -2  3
   Output: -2  -2  -2

   Input:  -2  0
   Output: 

*/
function Display(iNo, iFrequency)
{
   let sOutput = ""
   let iCnt = 0

   for(iCnt = 1; iCnt <= iFrequency; iCnt++)
   {
      sOutput += "" + iNo
   }
   console.log(sOutput)
}

function main()
{
   let iValue = 0
   let iCount = 0

   iValue = parseInt(prompt("Enter Number :"))

   iCount = parseInt(prompt("Enter Frequency :"))

   Display(iValue, iCount)
}

main()
