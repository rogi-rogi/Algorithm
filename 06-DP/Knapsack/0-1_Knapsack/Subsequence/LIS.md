# 최장 증가 부분 수열(LIS, Longest Increasing Subsequence)

```최장 증가 부분 수열(LIS)```은 수열에서 증가하는 가장 긴 부분 수열을 의미한다.

<br>

## 📏 LIS의 길이 구하기

주어진 수열에 대해 LIS의 최대 길이를 출력하는 함수를 만들어보자.

```dp[i]``` : i번째 요소로 끝나는 LIS의 길이

### ⏳ $O(N^2)$ 탐색

```python
def LIS(N, nums) :
  dp = [1] * (N + 1)
  for cur in range(1, N + 1) :
    for prev in range(1, cur) :
      if nums[prev] < nums[cur] and dp[prev] == dp[cur] :
        dp[cur] += 1
  return max(dp)
```

### ⏳ $O(Nlog_2N)$ 탐색

```python
```

<br>

##
