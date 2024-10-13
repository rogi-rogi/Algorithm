# 이진 탐색(Binary Search)

> *정렬된 배열에서 특정 값의 위치를 찾는 알고리즘*

### 왜 필요할까요?

선형 탐색(Linear Search)으로 길이가 100,000,000인 배열에서 특정 값을 찾아봅시다.

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # 값을 찾으면 인덱스 반환
    return -1  # 값을 찾지 못한 경우
```

최악의 경우, 찾는 값(target)이 배열의 마지막(100,000,000)에 위치할 수 있기 때문에 시간복잡도는 다음과 같습니다.

$O(N) = O(100,000,000)$ 

💡 만약 배열이 정렬되어 있다면 어떨까요?

<br>

### 배열이 정렬된 경우

배열의 모든 요소를 오름차순으로 정렬해봅시다.

```python
arr = [1, 341, 99, 521, 100]
arr.sort()
print(arr) # [1, 99, 100, 341, 521]
```

찾고자 하는 값은  `341`입니다. 

❓`100` 의 왼쪽에 위치한 값들을 살펴볼 필요가 있을까요?

이진 탐색의 아이디어는 여기서 시작됩니다!

<br>

# 🔄 동작 원리

이진 탐색은 정렬된 배열을 반으로 나누며 탐색 범위를 좁혀갑니다.

<br>

# ⌛시간 복잡도

때문에, $O(log N)$의 시간 복잡도를 가지며, 선형 탐색($O(N)$)보다 빠릅니다.

구체적인 단계는 다음과 같습니다.

1. 배열의 중간 요소를 선택합니다.
2. 탐색 대상과 중간 요소를 비교합니다:
    1. 중간 요소가 탐색 대상과 같으면 탐색을 종료합니다.
    2. 탐색 대상이 중간 요소보다 작으면 왼쪽 절반으로 범위를 좁혀 다시 탐색합니다.
    3. 탐색 대상이 중간 요소보다 크면 오른쪽 절반으로 범위를 좁혀 다시 탐색합니다.
3. 탐색 대상을 찾을 때까지 위 과정을 반복합니다.
    1. 탐색 대상을 찾지 못한 경우 -1을 반환해 탐색 실패를 알립니다.
  
<br>

# 🏗️ 구현

이제 배열 `arr` 에 탐색 대상 `traget` 이 몇 번째에 위치하는지 탐색하는 `binary_search()` 함수를 만들어 봅시다.

<br>

### 📜 전체 코드

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid  # 값을 찾으면 인덱스 반환
        elif arr[mid] < target:
            left = mid + 1  # 오른쪽으로 이동
        else:
            right = mid - 1  # 왼쪽으로 이동

    return -1  # 값을 찾지 못한 경우
```

탐색 범위는 배열의 인덱스와 동일합니다.

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
```

만약 탐색 범위를 변경되며 `left > right`가 된다면 탐색을 중단해야 한다. …(3)

```python
    while left <= right:
```

변동 하는 탐색 범위 `left`와 `right`의 중간 지점 `mid`를 계산해주자. …(1)

```python
        mid = (left + right) // 2
```

만약 `mid`에 위치한 요소의 값 `arr[mid]`이 `target`과 동일하다면 요소의 위치 `mid`를 반환하면 된다. …(2-a)

일치하지 않다면, 대소 비교에 따라 탐색 범위를 왼쪽 또는 오른쪽 절반으로 좁힌다. …(2-b, c)

```python
        if arr[mid] == target:
            return mid  # 값을 찾으면 인덱스 반환
        elif arr[mid] < target:
            left = mid + 1  # 오른쪽으로 이동
        else: # arr[mid] > target
            right = mid - 1  # 왼쪽으로 이동
```

만약 탐색 대상을 찾지 못하고 반복문이 종료되었다면, 실패를 의미하는 `-1`을 반환하자.

```python
    return -1  # 값을 찾지 못한 경우
```

<br>

# ✏️연습 문제
- [BOJ 01920](https://www.acmicpc.net/problem/1920), [정답코드](https://github.com/rogi-rogi/problem-solving/blob/main/Baekjoon%20Online%20Judge/easy/01920.py)

<br>

# [전체 코드](https://github.com/rogi-rogi/Algorithm/blob/main/Binary%20Search/binary_search.py)
