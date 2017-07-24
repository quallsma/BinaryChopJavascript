export const binaryChop = (num, numArray) => {
    target = num;
    numberArray = numArray;

    let firstIndex = 0;
    let lastIndex = numberArray.length - 1;
    let correctIndex = -1;

    if(isValid()){
        let run = true;
        while(run){
            let middleIndex = Math.floor((lastIndex + firstIndex) / 2);
            let indexNumber = numberArray[middleIndex];
            
            if(indexNumber == target){
                correctIndex = middleIndex;
                run = false;
            }
            else if (indexNumber < target)
                firstIndex = middleIndex +1;
            else if(indexNumber > target)
                lastIndex = middleIndex -1;
        }
    }

    return correctIndex;
};

let target;
let numberArray;

let isValid = () => {
    let valid = true;

    if(numberArray.length == 0)
        valid = false;
    if(!(numberArray.includes(target)))
        valid = false;

    return valid;
};