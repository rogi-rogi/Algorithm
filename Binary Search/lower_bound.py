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
