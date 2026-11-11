///////////////////////////////////////
//
// Function Name : CheckAdmission
// Description   : Checks admission eligibility
// Input         : Float, Integer
// Output        : Eligibility status
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CheckAdmission(fMarks, iAge)
{
   if((fMarks < 0) || (fMarks > 100) || (iAge < 0))
   {
      console.log("Invalid Input")
   }
   else if((fMarks >= 60) && (iAge >= 17))
   {
      console.log("Eligible for Admission")
   }
   else
   {
      console.log("Not Eligible")
   }
}

function main()
{
   let iAge = 0
   let fMarks = 0.0

   let aInput = prompt("Enter marks and age: ").trim().split(/\s+/)
   fMarks = Math.fround(parseFloat(aInput[0]))
   iAge = parseInt(aInput[1])

   CheckAdmission(fMarks, iAge)
}

main()
