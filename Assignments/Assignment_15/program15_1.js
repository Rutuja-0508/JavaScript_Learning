///////////////////////////////////////
//
// Function Name : DisplayName
// Description   : Accepts a full name and displays it
// Input         : String
// Output        : Displays the entered name
// Author        : Rutuja Patil
// Date          : 14/11/2026
//
///////////////////////////////////////

const prompt = require('prompt-sync')()

function DisplayName(Name)
{
   console.log("Your name is " + Name)
}

function main()
{
   let Name = ""

   Name = prompt("Please enter full name: ").trim().slice(0, 29)    // scanf(" %29[^\n]") reads at most 29 characters

   DisplayName(Name)
}

main()
