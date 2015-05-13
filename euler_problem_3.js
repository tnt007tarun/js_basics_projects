//This is for finding factors of a number using a 'factor' function.//

var factor = function (num1) {
    for (var i=1; i<num1; i++) {
        if (!(num1%i)) {
            console.log(i);
        }
    }
};

//This is for printing prime factors using a 'primef' function.//

var primef = function (num2) {
    for (var j=2; j<num2; j++) {
        if (!(factor(num2))%j) {
            j++;
        }
        else {
            console.log(j);
        }
    } 
};
 

primef(50);
