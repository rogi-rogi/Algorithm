# Goldbach's Conjecture

```골드바흐의 추측(Goldbach's Conjecture)```은 2보다 큰 모든 ```짝수``` 자연수는 ```두 소수의 합```으로 나타낼 수 있다는 추측이다.

이를 ```약한(Weak) 골드바흐의 추측```이라고도 한다.

```T. Oliveira e Silva```에 의해 $4 * 10^{18}$이하에서는 참임이 증명되었다.

## 응용

골드바흐의 추측에 따라 주어진 짝수를 구성하는 소수쌍을 구해보자.

### 1. 짝수 판별

우선 짝수에 대한 추측이므로 주어진 수가 짝수인지 확인하자.

만약 짝수가 아니라면 -1을 반환한다.

```Python
def goldbach(prime_list, num):
    if num % 2 != 0:
        return -1
    
```

### 2. 유효한 두 소수 선별

소수로 어떤 짝수를 만드는 과정에서 중복된 결과가 나올 수 있다. 주어진 짝수의 절반을 넘는 경우는 무시하자.

만약 주어진 짝수에서 임의의 소수를 뺀 값이 소수임을 보이면 된다.

```Python
    cnt = 0
    for prime in prime_list:
        if prime > num / 2:
            break
        if (num - prime) in prime_list:
            cnt += 1
    return cnt
```
위 코드는 소수 쌍의 갯수를 반환한다.
