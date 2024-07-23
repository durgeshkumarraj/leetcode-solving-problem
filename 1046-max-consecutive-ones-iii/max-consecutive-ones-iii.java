import java.util.HashMap;

class Solution {
    public int longestOnes(int[] A, int K) {
        int sum=0;
        int len=0;
        int su[]=new int[A.length];
        for(int i=0;i<A.length;i++)
        {
            sum+=A[i];
            su[i]=sum;
            if(sum+K>=i+1&&i+1>len)
                len=i+1;
            else
            {
                for(int j=0;j<i;j++)
                {
                    int su2=su[j];
                    int sum3=sum-su2;
                    int len2=i-j;
                    if(sum3+K>=len2)
                    {
                        if(len2>len)
                            len=len2;
                        break;
                    }
                }
            }

        }
        return len;
    }
}