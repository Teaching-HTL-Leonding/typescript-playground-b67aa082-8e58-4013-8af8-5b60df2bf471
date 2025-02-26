let numbers = [1,4,5,6]
let target = 9
console.log(numberGuesser(numbers,target))
function numberGuesser(nums: number[] , target: number):any[]{

for(let i = 0; i<nums.length; i++){
    for(let k = i+1; k<nums.length;k++){
        if(nums[k] + nums[i] === target){
            return [nums[i],nums[k]]
        }
    }
}
return [`in this array there are no two elements that equal ${target}`]
}