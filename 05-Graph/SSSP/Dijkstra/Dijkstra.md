# Dijkstra

Dijkstra(다익스트라)는 SSSP를 위한 그래프 탐색 알고리즘이다. 네덜란드의 Edsgar W. Dijkstra의 이름을 따서 지은 영어식 표기이다.

정확한 발음은 ```데이크스트라``` 이다.

BFS처럼 시작 정점으로부터 다른 모든 정점에 대한 최단 거리를 구하기 위해 사용된다.

가중치 그래프에 대해 ```나중에 발견한 최단 경로를 우선 적용```하기 위해 ```우선순위 큐(Priority Queue)```를 사용해 구현한다.

최단거리를 갱신하는 경로를 발견한 경우 ```거리(nw)와, 정점의 번호(nv)로 이루어진 하나의 쌍```을 우선순위 큐에 삽입하는 방식이다.

⚠ 음수 사이클이 없지만, ```음수 간선을 포함하는 그래프에 대해 계산은 가능```하지만 시간 복잡도가 증가하기 때문에 권장하지 않는다.

<br>

## 시간복잡도

1. 음수 간선 또는 음수 사이클이 존재하지 않는 그래프에 최단 거리를 우선적으로 탐색하므로, ```모든 간선(E)```에 대해 한 번만 탐색한다. $= O(E)$
2. 모든 간선에 대해 ```dist```가 갱신 가능한 최악의 경우 우선순위 큐에는 ```간선의 갯수만큼 요소가 추가```된다. $= O(E)$
3. 우선순위 큐에 추가되는 요소의 ```삽입/삭제에 로그 시간```이 소요된다. $= O(\log_2 E)$

따라서, $(1) + (2) * (3) = O(E + E\log_2 E) = O(E\log_2 E)$ 이다.
정점의 수가 적거나 간선의 수가 매우 많은 경우에는 우선순위 큐를 사용하지 않는 [다른 방식]()으로 구현해야 한다. $= O(V^2 + E)$

   


<br>

## 🧰 라이브러리

PS에서 ```Python```은 속도를 위해 ```Thread Non Safe```한 ```heeaq```로 우선순위 큐를 대체한다.

아직 방문하지 않은 정점까지의 거리를 ```inf```으로 표현해주었다.

```python
from heapq import heappop, heappush
from math import inf
```

<br>

## 👨‍🔧 구현

### I. 초기 설정

1. 시작 정점과, 다른 모든 정점까지의 최단거리를 기록할 1차원 배열 ```dist```을 ```inf```로 초기화
2. 시작 정점은 최단거리를 ```0```으로 초기화
3. 시작 정점의 인접한 정점을 탐색하기 위해 우선순위 큐에 시작 정점의 거리와 번호 삽입

```python
def dijkstra(v, SIZE) :
  # I. 초기 설정
  dist = [inf] * (SIZE + 1) # I-1
  dist[v] = 0               # I-2
  pq = [(0, v)]             # I-3
```

<br>

### II. 최단거리 갱신

1. 우선순위 큐의 모든 경로를 탐색하며, ```기존의 거리가 현재 거리보다 최단거리인 경우``` 무시함. 
2. 위의 조건을 성립하는 경우 인접 정점을 모두 재검사.

```python
def dijkstra(v) :
  # I. 초기 설정

  # II. 최단거리 갱신
  while pq :
    w, v = heappop(pq)
    if dist[v] < w : continue   # II-1
    for nv, nw in edges[v] :    # II-2
      nw += w
      if dist[nv] > nw :
        dist[nv] = nw
        heappush(pq, (nw, nv))
```

<br>

### III. 최단거리 배열 반환

우선순위 큐의 모든 경로에 대한 탐색이 끝나면 탐색 종료, 최단거리를 저장한 배열을 반환.

```python
def dijkstra(v) :
  # I. 초기 설정

  # II. 최단거리 갱신

  # III. 최단거리 배열 반환
  return dist
```

<br>

### 전체 코드
```python
from heapq import heappop, heappush
from math import inf

def dijkstra(v, SIZE) :
    dist = [inf] * (SIZE + 1)
    dist[v] = 0
    pq = [(0, v)]
    while pq :
        w, v = heappop(pq)
        if dist[v] < w : continue
        # for nv, nw in edges[v] :
        for nv, nw in edges[v].items() : 
            nw += w
            if nw < dist[nv] :
                dist[nv] = nw
                heappush(pq, (nw, nv))
    return dist
```
