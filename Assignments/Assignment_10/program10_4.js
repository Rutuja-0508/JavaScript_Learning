///////////////////////////////////////
//
// Function Name : FhtoCs
// Description   : Converts Fahrenheit into Celsius
// Input         : Float
// Output        : Double (Temperature in Celsius)
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function FhtoCs(fTemp)
{
   let dCelsius = 0.0

   dCelsius = (fTemp - 32) * (5.0 / 9.0)

   return dCelsius
}

function main()
{
   let fValue = 0.0
   let dRet = 0.0

   fValue = Math.fround(parseFloat(prompt("Enter temperature in Fahrenheit: ")))

   dRet = FhtoCs(fValue)

   console.log("Temperature in Celsius is: " + dRet.toFixed(6))
}

main()
