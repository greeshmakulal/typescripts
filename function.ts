let z = 100;
function addNumbers(a: number, b: number) { 
    return a + b; 
} 

var sum: number = addNumbers(10, 15) 

console.log('Sum of the two numbers is: ' +sum); 

function evenOdd(number:number)
{
    if((number%2)==0)
    {
        return "Even"
    }
    else
    {
        return "ODD"
    }

}
function addToZ(x:any, y:any) {
  return x + y + z;
}
function Concat(x: string, y: string): string {
    return x + y;
  }
   
  let text = Concat("Flip","Flop");
  console.log(text);