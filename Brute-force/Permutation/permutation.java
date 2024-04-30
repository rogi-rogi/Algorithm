    private static void permutation(boolean[] visited, int[] arr, int cnt) {
        if (cnt == N) {
            System.out.println(Arrays.toString(arr));
            return;
        }
        for (int i = 1; i <= N; ++i) {
            if (!visited[i]) {
                visited[i] = true;
                arr[cnt] = i;
                permutation(visited, arr, cnt + 1);
                visited[i] = false;
            }
        }
    }
