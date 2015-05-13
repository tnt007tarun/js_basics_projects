var i=1;
var j=0;
var k=0;
var total=0;

while (k<4000000) {
    k=i+j;
    i=j;
    j=k;
    if (!(j%2)) {
        total+=k;
    }
}
console.log(total);
