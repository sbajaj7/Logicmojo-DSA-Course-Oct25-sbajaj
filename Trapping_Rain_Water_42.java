class Solution {
    public int trap(int[] height) {
        
        int left = 0;
        int right = height.length -1;

        int amount = 0;
        int leftMax = 0, rightMax = 0;

        while(left<=right){
            leftMax = Math.max(height[left], leftMax);
            rightMax = Math.max(height[right], rightMax);

            if(leftMax<rightMax) {
                amount += leftMax-height[left];
                left++;
            } else {
                amount += rightMax-height[right];
                right--;
            }
        }
        return amount;
    }
}
