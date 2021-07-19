let str = '“A revolution without dancing is a revolution not worth having.”'
let arr = str.split(" ")
let arrMax = arr[0]
for(let i = 0; i < arr.length; ++i)
{
  if(arr[i].length > arrMax.length)
  {
     arrMax = arr[i];
  }
}
console.log(arrMax)
