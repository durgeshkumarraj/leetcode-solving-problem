class Solution {
    public int minFlips(int a, int b, int c) {
        int ans = 0;
        while(c > 0 || b > 0 || a > 0) {
            int cBit = (c & 1);
            int aBit = (a & 1);
            int bBit = (b & 1);
        
            if(cBit == 1) {
                if(aBit == 0 && bBit == 0) {
                    ans++;
                }
            } else {
                ans += aBit + bBit;
            }
            a >>= 1; b >>= 1; c >>= 1;
        }

        return ans;
    }
}