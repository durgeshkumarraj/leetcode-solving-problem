class Solution {
    int mod=1000000007;
    public int numTilings(int n) {
        if(n==1 || n==2) return n;
        int dp[]=new int[n];
        dp[0]=1;
        dp[1]=2;
        dp[2]=5;
        for(int i=3;i<n;i++) dp[i]=(((dp[i-1])%mod*2)%mod+dp[i-3]%mod)%mod;
        return dp[n-1];
    }
}