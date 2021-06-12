function between(a,b){
    for (var i=0;i<=b;i++)
    if (i>=a)
    isPrime(i);
}

function isPrime(a){
    var b=0;
    for(var i=1;i<a;i++)
    if (a%i==0)b++
    if (b==1)console.log(a)
}

between(2,11)
