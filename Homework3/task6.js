function combinations(arr, n, r, index, data, i)
{
    let res = "[ ";
    if (index == r)
    {
        for (let j = 0; j < r; j++)
        {
            res = res + data[j] + " ";
        }  

        res += "]"
        console.log(res); 
        console.log(" ");
          
        return;
    }

    if (i >= n)
        return;

   
    data[index] = arr[i];
    combinations(arr, n, r, index + 1,
                            data, i + 1);


    combinations(arr, n, r, index,
                            data, i + 1);
}


function printCombination(arr, n, r)
{
      
   
    let data = new Array(r);
    data.fill(0);

    
    combinations(arr, n, r, 0, data, 0);
}
 
let arr = [1, 2, 3, 4];
let r = 2;
let n = arr.length;

printCombination(arr, n, r);
