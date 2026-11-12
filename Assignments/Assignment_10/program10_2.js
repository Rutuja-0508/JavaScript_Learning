///////////////////////////////////////
//
// Function Name : RectArea
// Description   : Calculates area of rectangle
// Input         : Two Float Values
// Output        : Double (Area of Rectangle)
// Author        : Rutuja Patil
// Date          : 12/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function RectArea(fWidth, fHeight)
{
   let dArea = 0.0

   dArea = fWidth * fHeight

   return dArea
}

function main()
{
   let fValue1 = 0.0, fValue2 = 0.0
   let dRet = 0.0

   fValue1 = Math.fround(parseFloat(prompt("Enter width: ")))

   fValue2 = Math.fround(parseFloat(prompt("Enter height: ")))

   dRet = RectArea(fValue1, fValue2)

   console.log("Area of rectangle is: " + dRet.toFixed(6))
}

main()
