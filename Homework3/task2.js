function SumOfDigits(n) {
        let sum = 0;
        while (n > 0 || sum > 9) {
             if(n == 0) {
                n = sum;
                sum = 0;
             }
             sum = sum + n % 10;
             n = Math.floor(n / 10);
        }
        return sum;
    }
    let n = 999999999999;
    console.log(SumOfDigits(n));
