var factors = [];
var factors2 = [];
//Function to find factors and push into array (only factors under 10000)//
var factor = function (num1) {
    for (var i=2; i<10000; i++) {
        if (!(num1%i)) {
            factors.push(i);
        }
    }
    console.log("The largest factor of " + num1 + " under 10000 is "+ factors[factors.length-1]);
};
//This is where I ran the function with the number in Euler problem 3//
factor (600851475143);
//After I got the answer, I verified that it was prime (has no factors other than 1 or itself) using the following function//
var factor2 = function (num2) {
    for (var j=2; j<num2; j++) {
        if (!(num2%j)) {
            factors2.push(j);
        }
    }
    console.log("The largest factor of " + num2 + " (other than 1 or itself) is "+ factors2[factors2.length-1]);
};
//Checking whether that number is a prime//
factor2 (6857);

