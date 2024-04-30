def permutation(arr, visited, cnt):
    if cnt == N:
        print(*arr)
        return
    for i in range(1, N + 1):
        if not visited[i]:
            visited[i] = True
            arr[cnt] = i
            permutation(arr, visited, cnt + 1)
            visited[i] = False
