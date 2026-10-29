function DisplayDigits(iNo) 
{ 
    let iDigit = 0;

    while(iNo != 0) 
    { 
        iDigit = iNo % 10;
        console.log(iDigit);
        iNo = Math.floor(iNo / 10);
    } 
} 

function main() 
{ 
    let iValue = 12345;

    DisplayDigits(iValue);
} 

main();
