// var
var name = "Jeeva"; //string
var age = 19; //number
var canfly = false; //boolean
var languages = ['tamil' , 'hindi' , 'english']; //array
var info = {name:"naveen" , age:"20" , city:"cbe"}; //objects
var a;
console.log(a); //Throws an error
var b=10;
console.log(b); //Output is 10
var c = null;
console.log(c); 
 
//Let
{
    Let name = "jm";   //output is jm
    console.log(name); 
}
{
    Let name = "ABC";  //output is EFG
    name = "EFG"
    console.log(name);    
}
{
    //Let name = "hey";  
    name = "hello"
    console.log(name);   //Output is hello 
}
console.log(name);       /*Output is hello because the variable name is                       
                           Not declared with let */
 
//const
 
const city = "cbe";
console.log(city);
//city = "Salem"    //Throws an error const value cannot be changed or reassigned
 
const state = ['TN' , 'KL']; /*We can change the object elements in the array while using const but we cannot change or replace an array while it is declared in const */ 
console.log(state);
state.push('AP')
console.log(state);

