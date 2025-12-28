class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        for(int n: nums){
            freqMap.put(n,freqMap.getOrDefault(n,0)+1);
        }
        
        Queue<Map.Entry<Integer,Integer>> maxHeap = new PriorityQueue<>((p1,p2) -> p2.getValue()-p1.getValue());
        for(Map.Entry<Integer, Integer> entry: freqMap.entrySet()){
            maxHeap.offer(entry);
        }
        
        int result[] = new int[k];
        while(k>0){
            result[k-1] = maxHeap.poll().getKey();
            k--;
        }
        return result;
    }
}
