# Stack

```Stack```은 나중에 삽입한 요소를 먼저 꺼내는 ```LIFO(Last in Frist out)``` 방식의 자료구조다.

Stack의 기능과 시간복잡도, 각 PL마다 사용하는 방법에 대해 알아보자.

<br>

## ⌛기능 및 시간복잡도

보통의 경우 아래의 대표적인 기능은 $O(1)$ 안에 작동한다.

+ ```push()``` : Stack의 가장 마지막 부분에 요소 삽입
+ ```pop()``` : Stack의 가장 마지막 요소 반환 및 삭제
+ ```top()``` : Stack의 가장 마지막 요소 반환
+ ```empty()``` : Stack에 요소가 없는지 확인

<br>

## 🧰 PL 마다 다른 Stack

### Python

Python은 ```List```를 Stack처럼 사용할 수 있습니다.

```Python
  stack = []
  stack.append(1)    # stack에 1추가 = push
  stack.append(2)    # stack에 2추가 = push
  print(stack.pop()) # 2, stack의 마지막 요소 반환 및 삭제 = pop
  stack.append(3)    # stack에 3추가
  print(stack)       # [1, 3]
  print(len(stack))  # 2, stack의 요소 갯수 반환, 0일 경우 empty()와 동일
  print(stack[-1])   # 1, stack의 마지막 요소 반환 = top
```

### C++

### Java



