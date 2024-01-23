from math import inf
from sys import stdin
input = stdin.readline

def dijkstra_original(v, SIZE) :
    dist = [inf] * (SIZE + 1)
    visited = [False] * (SIZE + 1)
    dist[v] = 0
    visited[v] = True
    while True :
        min_dist = inf
        for i in range(1, SIZE + 1) :
            if dist[i] < min_dist and not visited[i] :
                min_dist = dist[i]
                v = i
        if min_dist == inf : break
        visited[v] = True
        for nv, nw in graph[v] :
            if visited[nv] : continue
            dist[nv] = min(dist[nv], nw + dist[v])
    return dist
                
if __name__ == "__main__" :
    V, E = map(int, input().split())
    graph = [[] for _ in range(V + 1)]
    for _ in range(E) :
        v1, v2, w = map(int, input().split())
        graph[v1].append((v2, w))
    dist = dijkstra_original(1, V)
    print(*dist[1:])