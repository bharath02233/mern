
class PPP {

    public static void main(String[] args) {
        int[] ar = { 22, 22, 33, 33 };
        int flag = 0;
        int ele = 22;
        for (int i = 0; i < ar.length; i++) {
            if (ar[i] == ele) {
                flag = 1;
                break;
            }
        }
        if (flag == 1) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }
}