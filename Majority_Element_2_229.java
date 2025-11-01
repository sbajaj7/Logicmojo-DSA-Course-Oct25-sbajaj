class Solution {
    public List<Integer> majorityElement(int[] nums) {
        int num1 = nums[0];
        int num2 = nums[0];
        int count1 = 0, count2 = 0;
        
        for(int i=0; i<nums.length;i++){
            if(nums[i] == num1)
                count1++;
            else if(nums[i] == num2)
                count2++;
            else if(count1 == 0){
                count1++;
                num1 = nums[i];
            }
            else if(count2 == 0){
                count2++;
                num2 = nums[i];
            }
            else{
                count1--;
                count2--;
            }
        }
        
    count1 = 0;
    count2 = 0;
    List<Integer> result = new ArrayList();
    
    for(int i = 0;i<nums.length; i++){
        if(nums[i] == num1)
            count1++;
        else if(nums[i] == num2)
            count2++;
    }
        
    if(count1 > nums.length/3)
        result.add(num1);
    if(count2 > nums.length/3)
        result.add(num2);
    
    return result;
    }
}
