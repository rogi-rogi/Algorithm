/*
[PS] https://www.acmicpc.net/problem/12865
공간복잡도 : O(NW) -> 토글링 적용시 O(W)
시간복잡도 : O(NW)
*/

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // init
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // input
        StringTokenizer st = new StringTokenizer(br.readLine());
        final int N = Integer.parseInt(st.nextToken());
        final int K = Integer.parseInt(st.nextToken()); // is 'W'

        // solve
        final int[][] items = new int[N + 1][2]; // (w, v)
        for (int i = 1; i <= N; ++i) {
            st = new StringTokenizer(br.readLine());
            items[i][0] = Integer.parseInt(st.nextToken());
            items[i][1] = Integer.parseInt(st.nextToken());
        }

        int[][] dp = new int[N + 1][K + 1];
        for (int i = 1; i <= N; ++i) {
            for (int w = 1; w <= K; ++w) {
                if (items[i][0] > w) dp[i][w] = dp[i - 1][w];
                else dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - items[i][0]] + items[i][1]);
            }
        }
        
        // output
        System.out.println(dp[N][K]);
    }
}
