/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    let trolly = []
    let seen = new Set()

    helper(0, [], trolly)
    return trolly

    function helper(i, bag, trolly) {
        if(i === nums.length) {
            const key = bag.join(",");
            console.log("Key is: "+ key)

        if (!seen.has(key)) {
            seen.add(key);
            trolly.push([...bag]);
        }
            return;
        }

        bag.push(nums[i])
        helper(i+1, bag, trolly)
        bag.pop()
        helper(i+1, bag, trolly)
    }
};
