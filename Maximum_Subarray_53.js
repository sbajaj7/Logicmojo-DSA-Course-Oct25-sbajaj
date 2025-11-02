var maxSubArray = function(nums) {
    let max = nums[0]
    let curSum = 0

    for (let num of nums) {
        curSum += num
        if(num > curSum) {
            curSum = num
        }
        max = Math.max(max, curSum)
    }
    return max
};
