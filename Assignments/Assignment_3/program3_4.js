///////////////////////////////////////
//
// Function Name : DisplayConvert
// Description   : Accept a character and convert its case
// Input         : Character
// Output        : Character with the opposite case
// Author        : Rutuja Patil
// Date          : 10/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function DisplayConvert(cValue)
{
   if(cValue >= 'a' && cValue <= 'z')
   {
      console.log(String.fromCharCode(cValue.charCodeAt(0) - 32))
   }
   else if(cValue >= 'A' && cValue <= 'Z')
   {
      console.log(String.fromCharCode(cValue.charCodeAt(0) + 32))
   }
}

function main()
{
   let cValue = ''
   cValue = prompt("Enter character\n").charAt(0)
   DisplayConvert(cValue)
}

main()
