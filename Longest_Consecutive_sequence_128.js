/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0
    
    let s = new Set(nums)
    let max = 1

    //O(n) solution
    for(let num of s){
        if(!s.has(num-1)) { //Without this it is n^2 solution which exceeds time
            let nextNum = num + 1
            let currentCount = 1
            while(s.has(nextNum)) {
                currentCount++
                nextNum++
                max = Math.max(max, currentCount)
            }
        }
    }
    return max

    //nLogn solution
    /*
    nums = nums.sort((a,b) => a-b)
    let count = 1, max = 1, i = 1
    while (i<nums.length) {
        if(nums[i] == nums[i-1]+1) {
            count++
            max = Math.max(max, count)
        }
        else if (nums[i] != nums[i-1]) {
            count = 1
        }
        i++
    }
    return max*/
};
