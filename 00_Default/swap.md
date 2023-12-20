## Swap

두 변수(a, b)의 값을 서로 교환할 때 임시변수를 사용하는 연산 알고리즘이다.

두 변수가 가지는 값을 아래와 같이 즉시 대입할 경우 값의 교환이 아닌, 복사가 발생한다.

```cpp
a = b;
b = a;
```

때문에 임시변수(temp)를 두어 두 변수 중 하나를 저장하고, 나중에 다시 이용하는 방식으로 swap이 진행된다. 

```cpp
void swap(int& a, int& b)
{
  int temp = a;
  a = b;
  b = temp; // 원래 a의 값
}
```

<hr><br/>

## XOR Swap

두 변수(a, b)의 값을 서로 교환할 때 임시변수 대신 XOR 연산을 사용하는 연산 알고리즘이다.
최신 CPU 아키텍처의 최적화, XOR연산의 ILP(Instruction-Level Parallelism) 이점 제한, Aliasing 등으로 인해 임시변수를 사용하는 방법보다 느리다.

```cpp
void XOR_swap(int& a, int& b)
{
  a ^= b;
  b = a^b;
  a ^= b;
}

int main()
{
  int a = 1, b = 2;
  XOR_swap(a, b);
  cout << a << ", " << b; // 2, 2
}
```
