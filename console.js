var a = {name:"jeeeva" , age:"18" , city:"cbe"};
var b = {name:"sathya" , age:"19" , city:"cbe"};
var c = {name:"naveen" , age:"20" , city:"cbe"};
console.group('Group');
console.time('Time taken'); 
console.log("Javascript");
//display the content written
console.error("An error occured");
//throws an error message “An error occurred”
console.warn("Warning!");
//used to give warnings
console.table({a,b,c});
//create a table and displays the content in var a,b,c
console.log('%c css' , 'color:red;')
console.groupEnd('group end');
//displays the word css in red_font_color
console.timeEnd('Time end');
/*displays the time taken for the process 
within console.time() and console.timeEnd()*/
console.clear();
//used to clear console
for(var i=1;i<=5;i++)
{
    console.count(i);
}
//counts the number of times the function occurs (here for loop)
 


