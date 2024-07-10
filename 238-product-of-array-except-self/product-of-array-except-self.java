class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] prod = new int[nums.length];
        int zero = 0;
        int total = 1;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] == 0){
                zero++;
            }
            else{
                total *= nums[i];
            }
        }
        
        total = zero >= 2 ? 0 : total;
        
        if(zero == 1){
            for(int i = 0; i < nums.length; i++){
                if(nums[i] != 0){
                    prod[i] = 0;
                }
                else{
                    prod[i] = total;
                }
            }
        }
        else if(zero == 0){
            for(int i = 0; i < nums.length; i++){
                prod[i] = total/ nums[i];
            }
        }
        else{
            for(int i = 0; i < prod.length; i++){
                prod[i] = 0;
            }
        }
        return prod;
    }
}