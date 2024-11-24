class Solution {
    public String intToRoman(int num) {

        StringBuilder str = new StringBuilder();

        while(num > 0) {
            if(num < 5) {
                if(num == 4) {
                    str.append("IV");
                    num -= 4;
                }else {
                    str.append('I');
                    num--;
                }

            }else if(num < 10) {
                if(num == 9) {
                    str.append("IX");
                    num -= 9;
                }else {
                    str.append('V');
                    num -= 5;
                }
            }else if(num < 50) {
                if(num >= 40) {
                    str.append("XL");
                    num -= 40;
                }else {
                    str.append("X");
                    num -= 10;
                }
            }else if(num < 100) {
                if(num >= 90) {
                    str.append("XC");
                    num -= 90;
                }else {
                    str.append("L");
                    num -= 50;
                }
            }else if(num < 500) {
                if(num >= 400) {
                    str.append("CD");
                    num -= 400;
                }else {
                    str.append("C");
                    num -= 100;
                }
            }else if(num < 1000) {
                if(num >= 900) {
                    str.append("CM");
                    num -= 900;
                }else {
                    str.append("D");
                    num -= 500;
                }
            }else{ 
                str.append("M");
                num -= 1000;
            }

        }
        return str.toString();
    }
}