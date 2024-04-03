# 💡Sweeping

```Sweeping```은 가상의 ```선(또는 점)```을 한 방향에서 다른 방향으로 움직이며, ```이벤트 발생 지점```을 탐색해 문제를 해결하는 ```방법```이다.

주로, ```기하학```, ```구간 문제```에 사용된다.

반드시 요소들을 정렬 후 이벤트 발생 지점을 탐색해야 한다. 

<br>

## ⏳시간복잡도

1. 탐색 전 요소들을 정렬해야 한다. $=O(N \log_2 N)$
2. 정렬 후 선형 탐색을 하며 문제를 해결한다. $=O(N)$

따라서, $(1) + (2) = O(N \log_2 N + N) = O(N \log_2 N)$ 이다.

<br>

## 🏷️종류

주로 ```라인 스위핑(Line Sweeping)```, ```평면 스위핑(Plane Sweeping)```으로 분류된다.

 + ```Line Sweeping``` : 일직선 상의 선분을 처리하는데 사용된다.
   + 👉 [BOJ 2170 : 선 긋기](https://www.acmicpc.net/problem/2170)
   + ✅ [정답 코드](https://github.com/rogi-rogi/problem-solving/blob/main/Baekjoon%20Online%20Judge/normal/02170.py)
   
 + ```Plane Sweeping``` : 평면 상에서 여러 도형을 처리하는데 사용된다.

