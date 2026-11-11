///////////////////////////////////////
//
// Function Name : DisplayGrade
// Description   : Displays grade according to marks
// Input         : Float marks
// Output        : Student grade or Invalid Marks
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function DisplayGrade(fMarks)
{
   if((fMarks >= 90) && (fMarks <= 100))
   {
      console.log("You Grade is A")
   }
   else if((fMarks >= 75 ) && (fMarks <= 89))
   {
      console.log("You Grade is B")
   }
   else if((fMarks >= 60 ) && (fMarks <= 74))
   {
      console.log("You Grade is C")
   }
   else if((fMarks >= 40 ) && (fMarks <= 59))
   {
      console.log("You Grade is D")
   }
   else if((fMarks < 40) && (fMarks >= 0))
   {
      console.log("You are fail....")
   }
   else
   {
      console.log("Marks are invalid")
   }
}

function main()
{
   let fMarks = 0.0

   fMarks = Math.fround(parseFloat(prompt("Enter Marks :")))   // float in C = 32 bit

   DisplayGrade(fMarks)
}

main()
