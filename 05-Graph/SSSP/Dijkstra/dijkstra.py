from heapq import heappop, heappush
from math import inf
from sys import stdin
input = stdin.readline

def dijkstra(v, SIZE) :
    dist = [inf] * (SIZE + 1)
    dist[v] = 0
    pq = [(0, v)]
    while pq :
        w, v = heappop(pq)
        if dist[v] < w : continue
        # for nv, nw in graph[v] :
        for nv, nw in graph[v].items() : 
            nw += w
            if nw < dist[nv] :
                dist[nv] = nw
                heappush(pq, (nw, nv))
    return dist
                
if __name__ == "__main__" :
    V, E = map(int, input().split())
    # graph = [[] for _ in range(V + 1)]  
    graph = [dict() for _ in range(V + 1)]
    for _ in range(E) :
        v1, v2, w = map(int, input().split())
        # graph[v1].append((v2, w))
        graph[v1][v2] = min(graph[v1][v2], w) if v2 in graph[v1].keys() else w
    dist = dijkstra(1, V)
    print(*dist[1:])
