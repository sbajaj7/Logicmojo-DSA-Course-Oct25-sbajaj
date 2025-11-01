class Solution {
    public void sortColors(int[] nums) {
        int start = 0;
        int end = nums.length - 1;
        int mid = 0;
        while (mid <= end) {
            if (nums[mid] == 0) {
                System.out.println("mid is "+ mid);
                nums[mid] = 1;
                nums[start]=0;
                start++;
                mid++;
            } else if (nums[mid] == 2) {
                System.out.println("mid is "+ mid);
                nums[mid] = nums[end];
                nums[end] = 2;
                end--;
            } else
                mid++;
        }
    }
}
