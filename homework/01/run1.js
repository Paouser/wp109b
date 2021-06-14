class Vector {
    constructor(array) {
      this.a = array
    }
    add(y) {
      var r = []
      var x = this
      for (var i=0; i<x.a.length; i++) {
        r[i] = x.a[i]+y.a[i]
      }
      return new Vector(r)
    }
  }
  
  var x = new Vector([1,2,3])
  var y = new Vector([1,1,1])

  console.log('x.add(y)=', x.add(y))
  console.log('x.add(y).add(y).add(x)=', x.add(y).add(y).add(x))