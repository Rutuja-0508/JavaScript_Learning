///////////////////////////////////////
//
// Function Name : SquareMeter
// Description   : Converts square feet into square metre
// Input         : Integer
// Output        : Double (Area in Square Metre)
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function SquareMeter(iValue)
{
   let dMeter = 0.0

   dMeter = iValue * 0.092903

   return dMeter
}

function main()
{
   let iValue = 0
   let dRet = 0.0

   iValue = parseInt(prompt("Enter area in square feet: "))

   dRet = SquareMeter(iValue)

   console.log("Area in square metre is: " + dRet.toFixed(6))
}

main()
