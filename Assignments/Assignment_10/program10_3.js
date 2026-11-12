///////////////////////////////////////
//
// Function Name : KMtoMeter
// Description   : Converts kilometre into metre
// Input         : Integer
// Output        : Integer (Distance in Metres)
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function KMtoMeter(iNo)
{
   let iMeter = 0

   iMeter = iNo * 1000

   return iMeter
}

function main()
{
   let iValue = 0, iRet = 0

   iValue = parseInt(prompt("Enter distance in kilometre: "))

   iRet = KMtoMeter(iValue)

   console.log("Distance in metre is: " + iRet)
}

main()
