# 💡Fast Input-Output

PS에 자주 사용되는 빠른 입/출력에 대해 알아봅시다.

<br><hr>

## C
  
```<stdio.h>```의 ```printf()```, ```scanf()```는 충분히 빠릅니다.
  
<br><hr>

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

```cin```, ```cout```의 두 stream은 기본적으로 동기화 되어있기 때문에, 다른 stream 작업시 자동으로 flush를 한다.

```cin.tie(nullptr)```, ```cout.tie(nullptr)```을 사용해 해당 스트림 호출시 다른 스트림의 buffer를 flush하는 기능을 비활성화할 수 있다.

auto flush를 비활성화 할 경우, 아래와 같이 출력 후 입력을 받을 때 입력을 먼저 받는 경우가 발생할 수 있다.
```cpp
cout << "Input:";
cin >> value;
```

대부분의 PS에서는 많은 입력에 대헌 계산을 수행하고 출력을 하므로 결과가 나오기만 하면 된다. 빈번하게 flush할 필요가 없다. 

```cpp
int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
}

```

<br>

### ```endl``` auto flush 대체

줄바꿈을 할 때, ```endl```을 사용하면 마찬가지로 자동으로 flush된다.
대신 ```'\n'```을 사용하자.

<br><hr>


## Java

```java
// 기본
public static void main(String[] args) throws IOException {
  BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  StringBuilder sb = new StringBuilder();
  // Input
  br.readLine();
}
```
<br><hr>

## Python

```python
from sys import stdin
input = stdin.readline
```

<hr>

## 참고
[입력속도비교](https://www.acmicpc.net/blog/view/56) 
