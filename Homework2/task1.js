function findGreater(arr, elem) {

    let newArr = arr.filter((item) => {
      return item > elem
    })
    if(!(newArr.length === 0))
     return newArr
    else 
     return "Such values do not exist."
  }
