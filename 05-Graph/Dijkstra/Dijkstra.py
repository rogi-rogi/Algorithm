from heapq import heappop, heappush
from math import inf
from sys import stdin
input = stdin.readline

def Dijkstra(v) : # start Vertex
    dist = [inf] * (V + 1)
    dist[v] = 0
    pq = [(0, v)]
    while pq :
        w, v = heappop(pq)
        if dist[v] < w : continue # distance previously calculated is shorter
        # for nv, nw in edges[v] :
        for nv, nw in edges[v].items() : 
            nw += w
            if nw < dist[nv] :
                dist[nv] = nw
                heappush(pq, (nw, nv))
    return dist
                
if __name__ == "__main__" :
    V, E = map(int, input().split())
    # edges = [[] for _ in range(V + 1)]  
    edges = [dict() for _ in range(V + 1)] # The edge may not be given for both vertex.
    for _ in range(E) :
        v1, v2, w = map(int, input().split())  # v1 --(w)--> v2
        # edges[v1].append((v2, w))
        edges[v1][v2] = min(edges[v1][v2], w) if v2 in edges[v1].keys() else w
    dist = Dijkstra(1)
    print(*dist[1:])
