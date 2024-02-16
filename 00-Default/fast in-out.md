# fast Input-Output
PS에 자주 사용되는 빠른 입/출력에 대해 알아봅시다.

<hr>

## C
  
```<stdio.h>```의 ```printf()```, ```scanf()```는 충분히 빠릅니다.
  
<br>

## C++

### 입출력 스트림 동기화 해제

```ios_base::sync_with_stdio(false)```은 ```C```와 ```C++```의 입출력문에 대한 스트림 동기화를 비활성화 해준다.
  
이때, ```<stdio.h>```, ```<iostream>```의 입출력문을 혼용해서 사용하면 안된다.
  
PS와 같은 싱글스레드 환경에서 입출력 속도를 향상시키기 위해 사용하며, 멀티쓰레드 환경에서는 출력 순서가 보장되지 않는다.

### 자동 버퍼 비움 해제


  
```cpp
ios_base::sync_with_stdio(false);
cin.tie(nullptr);
```


<br>


## Java
```java
  // 기본
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
  }
  
  //
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    // Input
    br.readLine();
  }
```

+ Python
  ```python
  from sys import stdin
  input = stdin.readline
  ```

<hr>

## 참고
[입력속도비교](https://www.acmicpc.net/blog/view/56) 
