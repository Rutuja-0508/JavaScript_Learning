///////////////////////////////////////
//
// Function Name : Pattern
// Description   : Displays uppercase alphabets in each row
// Input         : Number of rows and columns
// Output        : Alphabet pattern
// Author        : Rutuja Patil
// Date          : 14/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function Pattern(iRow, iCol)
{
   let sOutput = ""
   let i = 0, j = 0

   for(i = 1; i <= iRow; i++)
   {
      for(j = 1; j <= iCol; j++)
      {
         sOutput += String.fromCharCode('A'.charCodeAt(0) + j - 1) + "\t"
      }
      console.log(sOutput)
      sOutput = ""
   }
}

function main()
{
   let iValue1 = 0, iValue2 = 0

   let aInput = prompt("Enter number of rows and columns: ").trim().split(/\s+/)
   iValue1 = parseInt(aInput[0])
   iValue2 = parseInt(aInput[1])

   Pattern(iValue1, iValue2)
}

main()
