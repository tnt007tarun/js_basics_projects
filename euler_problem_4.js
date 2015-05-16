var factor = function (num1) {
    var factors = [];
    for (var i=100; i<999; i++) {
        if (!(num1%i)) {
        factors.push(i);
        var ostr = (num1/i).toString();
        if (ostr.length===3) {
            console.log("number is " + num1);
            console.log("factors are " + i + "and" + num1/i);
            }
        }
    }
};
                
for (var i=998001; i>900000; i--) {
    var n = i.toString();
    if (n.charAt(n.length-1)===n.charAt(0)) {
        if (n.charAt(n.length-2)===n.charAt(1)) {
            if (n.charAt(n.length-3)===n.charAt(2)) {
                factor(n);
            }
        }
    }
}
