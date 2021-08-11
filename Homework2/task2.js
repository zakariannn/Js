function allDigitsAreEven(p)
{
    let x = p % 10
    if(x % 2 != 0)
    {
        return false;
    }
    p = p / 10
    if(p == 0)
    {
        return true
    }
    else
    {
        return allDigitsAreEven(parseInt(p))
    }
}
function numbersWithEvenDigits(x, y) {
    let arr = []
    for(let i = x; i < y; ++i)
    {
        if(allDigitsAreEven(i))
        {
            arr.push(i)
        }
    }
    if(arr.length != 0)
    {
      console.log(arr)
    }
    else
    {
        console.log("Such numbers does not exist.")
    }

}

numbersWithEvenDigits(19, 42)
numbersWithEvenDigits(99, 199)
