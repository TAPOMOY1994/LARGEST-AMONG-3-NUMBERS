let a=parseInt(prompt("Enter 1st number"));
let b=parseInt(prompt("Enter 2nd number"));
let c=parseInt(prompt("Enter 3rd number"));



let largest;



if(a>=b && a>=c){

      largest=a;
}

else if(b>=a && b>=c){

    largest=b;
}

else{

    largest=c;
}




console.log(largest);