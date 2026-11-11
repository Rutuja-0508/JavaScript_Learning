///////////////////////////////////////
//
// Function Name : CalculateBonus
// Description   : Calculates the employee bonus
// Input         : Float, Integer
// Output        : Employee bonus
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CalculateBonus(fSalary, iYears)
{
   let fBonus = 0.0

   if(fSalary <= 0 || iYears < 0)
   {
      console.log("Invalid Input")
   }
   else
   {
      if(iYears > 10)
      {
         fBonus = Math.fround(Math.fround(fSalary * 15) / 100)
      }
      else if(iYears >= 5)
      {
         fBonus = Math.fround(Math.fround(fSalary * 10) / 100)
      }
      else
      {
         fBonus = Math.fround(Math.fround(fSalary * 5) / 100)
      }

      console.log("Bonus = " + fBonus.toFixed(2))
   }
}

function main()
{
   let fSalary = 0.0
   let iYears = 0

   let aInput = prompt("Enter salary and years of service: ").trim().split(/\s+/)
   fSalary = Math.fround(parseFloat(aInput[0]))
   iYears = parseInt(aInput[1])

   CalculateBonus(fSalary, iYears)
}

main()
