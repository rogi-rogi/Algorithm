# fast Input-Output
PS에 자주 사용되는 빠른 입/출력에 대해 알아봅시다.

<hr>

+ C

  충분히 빠릅니다.
  
+ C++
  ```cpp
  // 입출력 스트림 동기화 해제
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  ```
  
+ Java
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
