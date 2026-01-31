class Solution {
    public int fib(int N) {
        if(N<2)
            return N;
        
        //Dynamic programming with tabulation
        // int dp[] = new int[N+1];
        // dp[0] = 0;
        // dp[1] = 1;
        // for(int i = 2;i<=N;i++){
        //     dp[i] = dp[i-1] + dp[i-2];
        // }
        // System.out.print(Arrays.toString(dp));
        // return dp[N];
        
        //Dynamic programming with improved tabulation
        int a = 0, b = 1, c = 0;
        for(int i = 2;i<=N;i++){
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}
