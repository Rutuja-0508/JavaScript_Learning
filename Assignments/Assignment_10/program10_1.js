///////////////////////////////////////
//
// Function Name : CircleArea
// Description   : Calculates area of a circle
// Input         : Float
// Output        : Double (Area of Circle)
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CircleArea(fRadius)
{
   let dArea = 0.0

   dArea = 3.14 * fRadius * fRadius

   return dArea
}

function main()
{
   let fValue = 0.0
   let dRet = 0.0

   fValue = Math.fround(parseFloat(prompt("Enter radius: ")))

   dRet = CircleArea(fValue)

   console.log("Area of circle is: " + dRet.toFixed(6))
}

main()
