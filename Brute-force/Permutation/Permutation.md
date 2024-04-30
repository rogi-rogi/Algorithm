# Permutation

`순열`은 $n$개의 요소 중 중복없이 순서를 고려해 $r$개의 요소를 뽑아 나열한 것이다.

$= nPr$

$n$개의 원소에 대한 순열의 수는 $n!$이다.

<br>

## 🛠️구현

### 방문 리스트 생성

요소의 중복 선택을 방지하기 위해 이미 선택한 요소가 아닌지 확인해야 한다.

```Python
visited = [False] * (N + 1)
```

### base case 설정

보통의 permutation은 현재의 상태를 유지하고 다른 경우의 수를 탐색하므로 재귀 호출로 구현하자.

모든 요소를 탐색한 경우인 `cnt == N`이 base case이다. 

하나의 순열이 완성되는 시점이다.

```Python
def permutation(arr, visited, cnt):
    if cnt == N:
        print(*arr)
        return
```

### 요소 선택 및 방문 설정

1부터 N까지의 수의 순열을 생성하는 경우로 1부터 N까지 수 중 아직 선택하지 않은 수를 선택해주고 재귀 호출을 한다.

```Python
    for i in range(1, N + 1):
        if not visited[i]:
            visited[i] = True
            arr[cnt] = i
            permutation(arr, visited, cnt + 1, N)
            visited[i] = False
```

<br>

## nextPermutation

`오름차순` 순열에서 다음 순열을 찾아보자.

내림차순으로 정렬된 구간은 더 이상 `다음 순열이 존재하지 않는다.`

1. 따라서 배열의 역순으로 탐색하며 오름차순으로 정렬되는 두 수를 찾아야 한다. 만약 찾지 못한다면 전부 내림차순 정렬 상태이므로 다음 순열은 존재하지 않는다.

2. 오름차순 정렬된 `두 수 중 앞선 수( arr[i - 1] )`의 위치를 교체해 다음 순열을 만들 수 있다.내림차순 정렬 구간 중에서 `arr[i - 1] 보다 크거나 같은 수`를 찾아서 swap하자.

3. 이제 내림차순 되어있는 i ~ N-1 구간을 오름차순으로 뒤집어주자.


<br>

## prevPermutation
