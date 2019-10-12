
//STEP 1
halfNumber = (num) => {
    let half = num/2;
    console.log('half of '+num+ ' is '+ half);
    return half;
}

// halfNumber(20);

//STEP 2
squareNumber = (num) => {
    let square = num*num;
    console.log('The result of squaring the number '+ num +' is ' + square);
    return square;
}

// squareNumber(10);

//STEP 3
percentOf = (num1, num2) => {
    let perc = num2*100/num1;
    console.log(num2 +' is ' + perc + '% of ' + num1);
    return perc; 
}

// percentOf(4,2);

//STEP 4
findModulus = (num1, num2) => {
    let mod = num2%num1;
    console.log(mod + ' is a modulus of '+num1+' and '+num2);
    return mod;
}

// findModulus(4, 10);

//STEP 5

sumArray = () => {
    let nums = window.prompt("Enter comma separated numbers").split(",");
    sum = getSum(nums);
    console.log('sum = '+sum);
    return sum;
}

function getSum() {
    let sum = 0;
    for (var num of arguments[0]) {
        sum += parseInt(num);
    }
    return sum;
}

// sumArray();
