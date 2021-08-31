function inverse(obj){
    var retobj = {};
    for(var key in obj){
      retobj[obj[key]] = key;
    }
    return retobj;
  }
  var o = {a: "1", b: "2"};
  console.log(inverse(o));
  var o1 = {a: "1", b: "2", c: "3"  };
  console.log(inverse(o1));
