///////////////////////////////////////
//
// Function Name : CheckCharacterType
// Description   : Identifies the type of character
// Input         : Single character
// Output        : Character type
// Author        : Rutuja Patil
// Date          : 11/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function CheckCharacterType(cValue)
{
   if(cValue >= 'A' && cValue <= 'Z')
   {
      console.log("It is an upper case Letter")
   }
   else if(cValue >= 'a' && cValue <= 'z')
   {
      console.log("It is an lower case Letter")
   }
   else if(cValue >= '0' && cValue <= '9')
   {
      console.log("It is an Digit")
   }
   else
   {
      console.log("its an Special character")
   }
}

function main()
{
   let cValue = ''

   cValue = prompt("Enter a Character :").charAt(0)

   CheckCharacterType(cValue)
}

main()
