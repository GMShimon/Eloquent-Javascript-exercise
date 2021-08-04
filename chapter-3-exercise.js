//write a function that takes two number as an argument and return the smallest number
function min(num1,num2){
    if(num1<num2){
        return num1;
    }
    else 
        return num2;
}
console.log("the smallest number : ",min(6,3));

//using recursion to check a number whether it is even or odd

function isEven(num){
    if(num==0){
        return true;
    }
    if(num==1){
        return false;
    }
    if(num<0){
        return isEven(-num);
    }
    else
        return isEven(num-2);
}

console.log(isEven(-50));

//Bean counting
function countBs(string,chr){
    let count = 0;
    for (let i = 0; i < string.length; i++) {

        if(string[i] == chr){
            count++;
        }
    }
    return count;
}
function countChar(string) {
    return countBs(string,"o");
}
console.log(countBs("BBBBC","B"));
console.log(countChar("kooola"));