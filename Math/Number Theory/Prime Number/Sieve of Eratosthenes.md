# Sieve of Eratosthenes

```에라토스테네스의 체(Sieve of Eratosthenes)```는 소수를 찾는 쉬운 방법이다.

가장 작은 소수인 2부터 시작해 ```자신의 배수를 제외```하며, 남는 수(다음으로 큰 소수)에 대해 탐색하는 방법이다.
주어진 ```N```이하의 소수를 찾는데 사용된다.

고대 그리스 수학자 ```Eratosthenes```가 고안한 방법으로 마치 체(sieve)로 소수를 걸러내는 듯한 모습에서 붙은 이름이다.

<br>

## 🛠️구현

### 1. 숫자 리스트 생성

각 숫자가 소수인지 아닌지 판별할 리스트 ```prime_list```를 생성해주자.

0과 1은 소수가 아니므로 제외하자.

```python
def eratosthenes(N):
    NOT_PRIME = False
    prime_list = [True] * (N + 1)
    prime_list[0] = prime_list[1] = NOT_PRIME
```

### 2. 배수 지우기(소수 걸러내기)

가장 작은 소수인 2부터 시작해 자신의 배수를 차례대로 지우면 소수만 남는다.

```python
    for p in range(2, N + 1):
        for j in range(p * 2, N + 1):
            if prime_list[j]:
                prime_list[j] = NOT_PRIME
    return prime_list
```

<br>

## 💡최적화

1. 소수($p$)의 배수를 제거하는 과정에서 $p^2$이하의 $p$의 배수 $(2p, 3p, ..., (p-1)p)$는 이미 검사가 끝났기 때문에 $p^2$부터 배수를 제거해도 된다.
2. $p^2$이 만약 $N$을 넘는다면 탐색할 필요가 없다.

따라서, 2부터 $\sqrt N$이하의 수들에 대해서만 배수를 지워도 N이하의 소수를 얻기에 충분하다.

```python
def eratosthenes(N):
    NOT_PRIME = False
    prime_list = [True] * (N + 1)
    prime_list[0] = prime_list[1] = NOT_PRIME
    p = 2
    while p * p <= N:
        for j in range(p*p, N+1):
            if prime_list[j]:
                prime_list[j] = NOT_PRIME
        p += 1
    return prime_list
```
