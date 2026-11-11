///////////////////////////////////////
//
// Function Name : CalculateDiscount
// Description   : Calculates the final amount after discount
// Input         : Float
// Output        : Final payable amount
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CalculateDiscount(fAmount)
{
   let fDiscount = 0.0
   let fFinalAmount = 0.0

   if(fAmount < 0)
   {
      console.log("Invalid Input")
   }
   else
   {
      if(fAmount < 1000)
      {
         fDiscount = 0.0
      }
      else if(fAmount < 5000)
      {
         fDiscount = 10.0
      }
      else
      {
         fDiscount = 20.0
      }

      fFinalAmount = Math.fround(fAmount - Math.fround(Math.fround(fAmount * fDiscount) / 100))

      console.log("Payable Amount = " + fFinalAmount.toFixed(2))
   }
}

function main()
{
   let fAmount = 0.0

   fAmount = Math.fround(parseFloat(prompt("Enter purchase amount: ")))

   CalculateDiscount(fAmount)
}

main()
