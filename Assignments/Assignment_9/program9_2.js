///////////////////////////////////////
//
// Function Name : DollarToINR
// Description   : Converts US Dollar into Indian Rupees
// Input         : Integer
// Output        : Amount in Indian Rupees
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function DollarToINR(iNo)
{
   let iResult = 0

   iResult = iNo * 70

   return iResult
}

function main()
{
   let iValue = 0, iRet = 0

   iValue = parseInt(prompt("Enter number of USD : "))

   iRet = DollarToINR(iValue)

   console.log("Value in INR is " + iRet)
}

main()
