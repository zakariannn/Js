function allDigitsAreOdd(num){
    let x = num % 10
    if(x % 2 == 0)
    {
        return false;
    }
    num = num / 10
    if(num == 0)
    {
        return true
    }
    else
    {
        return allDigitsAreOdd(parseInt(num))
    }


}

console.log(allDigitsAreOdd(4211133))
