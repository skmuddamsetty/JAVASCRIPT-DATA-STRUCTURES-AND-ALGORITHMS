class Solution {
    public int findComplement(int num) {
        
        String binary = convertToBi(num);
        
        StringBuilder sb = new StringBuilder();
        
        for (int i = 0; i < binary.length(); i++) {
            if (binary.charAt(i) == '0') {
                sb.append("0");
            } else if (binary.charAt(i) == '1') {
                sb.append("1");
            }
        }
        
        int result = Integer.parseInt(sb.toString(), 2);
        
        System.out.println(result);
        
        return result;
        
    }
    
    private String convertToBi(int num) {
        
        StringBuilder sb = new StringBuilder();
        
        while (num != 0) {
            int mod = num % 2;
            
            if (mod == 0) {
                sb.append("1");
            } else if (mod == 1) {
                sb.append("0");
            }
            
            num /= 2;
        }
        
        return sb.reverse().toString();
    }
}