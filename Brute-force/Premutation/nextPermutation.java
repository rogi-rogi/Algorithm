public class Main {
    private static boolean nextPermutation(int[] arr) {
        int N = arr.length;
        int i = N - 1;
        while (i > 0 && arr[i - 1] >= arr[i]) --i;
        if (i == 0) return false;
        int j = N - 1;
        while (arr[i - 1] >= arr[j]) --j;
        swap(i - 1, j, arr);
        j = N - 1;
        while (i < j) swap(i++, j--, arr);
        return true;
    }
}
