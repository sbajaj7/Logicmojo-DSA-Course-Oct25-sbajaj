class Solution {
    public int missingNumber(int[] nums) {
        boolean trackingArray[] = new boolean[nums.length+1];
        for(int i: nums) {
            trackingArray[i] = true;
        }
        for(int i=0;i<trackingArray.length;i++){
            if(!trackingArray[i]){
                return i;
            }
        }
        return -1;
    }
}
