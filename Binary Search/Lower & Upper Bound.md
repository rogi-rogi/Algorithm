# 💪 Binary Search 확장 : Lower/Upper Bound

만약 탐색 대상이 없어도, 탐색 대상의 근사치를 찾고 싶을 때는 어떻게 찾을 수 있을까요?

```python
arr = [1, 5, 5, 5, 9]
target = 4
find_target_index = binary_search(arr, target)
print(find_target_index) # -1
```

탐색 대상 `target`은 배열 `arr` 에 존재하지 않아 찾지 못하고, 반복문이 종료되어 `-1`이 반환 합니다.

탐색 대상의 근사치를 찾는 방법 2개에 대해 알아봅시다.

<br>

## ⬇️ Lower Bound

> *정렬된 배열에서 탐색 대상 값 이상이 처음으로 등장하는 위치를 찾는 알고리즘*

### 📜 전체 코드

```python
def lower_bound(arr, target):
    left, right = 0, len(arr)  # 탐색 범위: [left, right)
    
    while left < right:
        mid = (left + right) // 2
        
        if arr[mid] < target:
            left = mid + 1
        else:
        # arr[mid]가 target 이하라면, 탐색 범위를 왼쪽으로 좁혀야 한다.
            right = mid
    
    return left  # target 이상의 값이 처음 등장하는 위치
```

배열 `arr`에서 탐색 대상 `target`이상의 값을 찾지 못했다면, `target`의 근사치는 마지막 요소`len(arr) - 1` 가 될 수 있어야 한다.

```python
def lower_bound(arr, target):
    left, right = 0, len(arr)  # 탐색 범위: [left, right)
    
    while left < right:
        mid = (left + right) // 2

        if arr[mid] < target:
            left = mid + 1
```

arr[mid]가 traget이하라면, 가장 큰 근사치를 찾은 셈이다.

lower bound의 목적은 탐색 대상 값 이상의 값이 처음 등장하는, 즉 근사치 중 가장 작은 근사치를 찾아야 한다.

```python

        else:
        # arr[mid]가 target 이하라면, 탐색 범위를 왼쪽으로 좁혀야 한다.
            right = mid
```

lower bound가 찾고자 하는 근사치를 찾았거나, 찾지 못해 `left`가 `len(arr) - 1`에 도달했다면 반복문이 종료되고 근사치가 존재하는 위치를 반환한다.

즉, 탐색에 실패하는 경우는 없다.

```python
    return left  # target 이상의 값이 처음 등장하는 위치
```

<br>

## ⬆️ Upper Bound

> *정렬된 배열에서 탐색 대상 값을 초과하는 값이 처음으로 등장하는 위치를 찾는 알고리즘*

💡 좌측 탐색 영역 선정 시 arr[mid]가 target 미만에서 이하로 확장되었다는 차이가 있다.

### 📜 전체 코드

```python
def upper_bound(arr, target):
    left, right = 0, len(arr)
    
    while left < right:
        mid = (left + right) // 2
        
        if arr[mid] <= target: # Lower Bound와 다른 부분
            left = mid + 1
        else:
            right = mid 
    
    return left
```

<br>

## 왜 필요할까요?

이진 탐색은 정렬된 배열에 대해 찾고자 하는 값을 빠르게 찾을 수 있다는 장점이 있습니다.

그렇다면, Lower/Upper Bound는 언제 사용될까요?

다음과 같은 배열에 대해 생각해봅시다. 길이가 100,000,000인 배열이 다음과 같이 주어집니다.

```python
arr = [1, 2, 3, 3, 3, 3, 3, ....., 3, 3, 3, 4, 5]
# 99,999,996개의 3이 존재한다.
```

선형 탐색으로 `3`의 개수를 세면 $O(N - 2) = O(99,999,998)$의 시간복잡도가 요구됩니다.

하지만, Lower/Upper Bound를 사용하면 어떨까요?

```python
target = 3
# [1, 2, 3, 3, 3, 3, 3, ....., 3, 3, 3, 4, 5]
three_cnt = upper_bound(arr, target) - lower_bound(arr, target)

# 99,999,998 - 2 = 99,999,996
print(three_cnt) # 99,999,996
```

이처럼 정렬된 배열에서 중복된 값을 처리하거나, 특정 값 이상의 범위를 찾는데 사용됩니다.

<br>

# 🧰 bitset

> *정렬된 리스트에 효율적으로 값을 삽입하거나 탐색하는 데 사용하는 표준 라이브러리*

⚠️ 표준 라이브러리를 그대로 사용해 풀이하는 경우는 흔치 않습니다. Lower/Upper Bound는 직접 구현할 수 있어야 합니다.


Python에서는 Binary Search 알고리즘을 활용한 [표준 라이브러리](https://docs.python.org/ko/3.7/library/bisect.html)가 있습니다.

Lower/Upper Bound가 이미 구현되어있으며, 탐색 대상을 탐색 또는 값을 삽입할 수 있습니다.

다음과 같이 사용할 수 있습니다.

```python
from bitset import bisect_left, bisect_right
```

- `bisect_left(arr, target)` : Lower Bound 역할을 하는 함수입니다.
- `bisect_right(arr, target)`  : Upper Bound 역할을 하는 함수입니다.

💡 Lower Bound의 반환 값을 이용하면 Binary Search 또한 구현할 수 있습니다!

```python
def binary_search(arr, target):
    index = bisect_left(arr, target)
    
    # target이 배열 안에 있는지 확인
    if index < len(arr) and arr[index] == target:
        return index  # 값을 찾았을 경우 인덱스 반환
    return -1  # 값을 찾지 못한 경우
```

# ✏️연습 문제

- 10816
