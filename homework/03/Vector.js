class Vector {
    constructor(array){
        this.a = array
    }
    add(y) {
        var r =[]
        var x=this
        for(var i=0; i<x.a.length; i++){
            r[i] = x.a[i]+y.a[i]
        }
        return new Vector(r)
    }
    sub(y) {
        var r =[]
        var x= this
        for(var i=0; i<x.a.length; i++){
            r[i] = x.a[i]-y.a[i]
        }
        return new Vector(r)
    }
    dot(x) {
        var r=0
        var x =this
        for (var i of x.a){
            r = r+i
        }
        return r 
    }
    neg(x) {
        var r =[]
        var x =this
        for (var i=0; i<x.a.length; i++) {
            r[i] = 0-x.a[i]
        }
        return new Vector(r)
    }
}
    var x = new Vector([4,5,6])
    var y = new Vector([1,2,3])

    console.log('x.add(y)=',x.add(y))
    console.log('x.sub(y)=',x.sub(y))
    console.log('x.dot(x)=',x.dot(x))
    console.log('x.neg(x)=',x.neg(x))

