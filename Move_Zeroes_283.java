class Solution {
    public void moveZeroes(int[] nums) {
        int i = 0;
        for(int num: nums)
            if(num != 0)
                nums[i++] = num;
        
        //for(int j = i;j<nums.length;j++)
        while(i<nums.length) {
            nums[i++] = 0;
        }
    }
}
