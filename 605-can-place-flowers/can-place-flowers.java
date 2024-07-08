class Solution {
    public boolean canPlaceFlowers(final int[] flowerbed, final int n) {
        if(n == 0)
            return true;

        int count = 0, sum = 0;

        for(int i = 0; i < flowerbed.length; ++i) {
            final int plot = flowerbed[i];

            if(plot == 0)
                count++;

            if(plot == 1) {
                sum += count / 2;
                count = -1;
            }

            if(sum >= n)
                return true;
        }

        sum += (count + 1) / 2;

        return sum >= n;
    }
}