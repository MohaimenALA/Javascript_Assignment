//Below is code that was not finished since it did not show the results on the webpage.
// let userinput;

// document.getElementById("Button").onclick = function (){

//     userinput = parseInt(document.getElementById("number").value);
//     let i = userinput % 2 == 0 ? userinput : userinput + 1;
    
//     while(i <= userinput + 10){
//         console.log(i);
//         i += 2;
//     }
// }
//Below is the full and right code.

let userinput;

document.getElementById("Button").onclick = function (){

    userinput = document.getElementById("number").value;
    let output = "Even numbers between 0 and " + userinput + " are: ";
    let first = true;
    for(let i = 0; i <= userinput; i += 2){
        if(first){
            output += i;
            first = false;
        }else{
            output += ", " + i;
        }
    }
    document.getElementById("output").textContent = output;
}
