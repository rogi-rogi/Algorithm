# fast Input-Output
PS에 자주 사용되는 빠른 입/출력에 대해 알아봅시다.

<hr>

## C
  
```<stdio.h>```의 ```printf()```, ```scanf()```는 충분히 빠릅니다.
  
<br>

## C++

### 입출력 스트림 동기화 해제

기본적으로 ```C```와 ```C++```의 stream은 동기화 되어있기 때문에, ```<cstdio>```, ```<iostream>```의 입출력문을 혼용해도 동일한 stream buffer를 사용하기 때문에 절차적으로 수행이 가능하다.

```ios_base::sync_with_stdio(false)```은 ```C```와 ```C++```의 stream의 동기화를 비활성화해 독립적인 버퍼를 사용할 수 있도록 해주어 입출력 속도를 증가시킬 수 있다.

이때, ```<cstdio>```, ```<iostream>```의 입출력문 혼용시 순서 보장이 안된다.
  
PS와 같은 싱글스레드 환경에서 입출력 속도를 향상시키기 위해 사용하며, 멀티쓰레드 환경 및 입출력문의 혼용 사용시 순서가 보장되지 않는다.

```cpp
#include <cstdio>
#include <iostream>

using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  cout << "1\n";
  printf("2\n");
}
/* OUTPUT :
2
1
*/
```

<br>

### stream auto flush 비활성화

```cin```, ```cout```의 두 stream은 기본적으로 동기화 되어있기 때문에, 


  
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
