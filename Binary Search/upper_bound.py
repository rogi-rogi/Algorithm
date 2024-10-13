def upper_bound(arr, target):
    left, right = 0, len(arr)
    
    while left < right:
        mid = (left + right) // 2
        
        if arr[mid] <= target: # Lower Bound와 다른 부분
            left = mid + 1
        else:
            right = mid 
    
    return left
