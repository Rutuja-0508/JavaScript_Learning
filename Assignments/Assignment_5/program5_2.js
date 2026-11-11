///////////////////////////////////////
//
// Function Name : CheckLeapYear
// Description   : Checks whether a year is a leap year
// Input         : Integer year
// Output        : Leap Year or Not a Leap Year
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CheckLeapYear(iYear)
{
   if(iYear <= 0)
   {
      console.log("Invalid year")
   }
   else if ((iYear % 400) == 0 || (iYear % 4) == 0 && ((iYear % 100) != 0 ))
   {
      console.log("This is a Leap Year")
   }
   else
   {
      console.log("This is not a Leap year")
   }
}

function main()
{
   let iYear = 0

   iYear = parseInt(prompt("Enter year: "))

   CheckLeapYear(iYear)
}

main()
