# 💡Two Pointers
```Two Pointers```는 ```두 개의 포인터```로 선형 자료 구조에서 ```서로 다른 요소```를 선택하는 탐색 방법이다.

주로 배열에 사용되며 두 포인터를 양끝에서 시작한다.

<br>

## ⏳시간복잡도

두 개의 포인터로 모든 요소를 한 번씩 탐색한다 $=O(N)$

<br>

## 🛠️구현

1. 두 개의 포인터의 초기 위치 설정
2. 반복문을 돌며 조건에 따라 포인터 위치 변경 및 값 계산
3. 모든 요소를 탐색할 때 까지 (2)를 반복한다.

+ 양 끝에서 시작하는 경우
   ```python
  left, right = 0, len(arr) - 1
  while left < right:
      if 탐색_조건:
  
      elif left를_옮기는_경우:
          left += 1
      elif right를_옮기는_경우:
          right += 1
  ```


<br>

## 👉문제
[BOJ 13144](https://www.acmicpc.net/problem/13144) start = end인 경우

