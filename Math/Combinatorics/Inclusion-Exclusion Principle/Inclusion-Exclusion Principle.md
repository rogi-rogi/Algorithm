# Inclusion-Exclusion Principle

`Inclusion-Exclusion Principle(포함 배제의 원리)`는 유한 집합인 `합집합의 원소 개수`를 세는 방법이다.

N개의 집합에 대한 합집합을 구할 때(N ≥ 2)는 다음과 같다.

`홀수개의 집합 원소 갯수의 합 - 짝수개의 집합 원소 갯수의 합`

즉, N개의 집합이 있을 때 이 집합들의 교차되는 부분을 적절히 더하고 빼서 정확한 합집합의 원소 개수를 구하는 방법이다.

N = 2 ~ 3에 대해서는 아래와 같다.

|N|expression|
|:---:|:---|
| 2 | $∣A⋃B∣$ $=$ $∣A∣ + ∣B∣ - ∣A⋂B∣$ |
| 3 | $∣A⋃B⋃C∣$ $=$ $∣A∣ + ∣B∣ + ∣C∣ - ∣A⋂B∣ - ∣B⋂C∣ - ∣C⋂A∣ + ∣A⋂B⋂C∣$ |

<br>

## ✅ 문제 풀이
[*17436 소수의 배수*](https://www.acmicpc.net/problem/17436)

M이하의 자연수 중에, 주어진 N개의 소수 중 적어도 하나로 나누어 떨어지는 수의 개수를 구하는 문제다.

즉, M이하의 자연수 중 N개의 소수들에 대한 배수로 이루어진 합집합의 원소 수를 구하는 문제다.

이 문제에 포함 배제의 원리를 적용해보자.

합집합 원소 수를 저장하는 변수(res)를 선언하자.
```python
res = 0
```

이제 조합(Combination)을 사용해 1 ~ N개의 소수 집합을 구해보자.
```python
for i in range(1, N + 1):
    for comb in combinations(prime_list, i):
```

i = 1일 때, 1개의 집합 원소의 개수는 그냥 더해주면 된다.

i ≥ 2일 때, 아래와 같이 원소의 최소공배수(lcm)을 구해주자.

```python
        lcm = 1
        for p in comb:
            lcm *= p
            if lcm > M: # M보다 큰 lcm에 대해서는 무시한다.
                break
        else:
```

이제 M을 원소의 최소 공배수(lcm)으로 나눈 소수의 배수들을 집합의 원소 갯수(i)에 따라 합집합 원소의 수에 더하거나 빼면 된다.

*이 부분에서 포함 배제의 원리가 적용된다.*
```python
            if i % 2 == 1:
                res += M // lcm
            else:
                res -= M // lcm

# Output
print(res)
```

### [전체코드](https://github.com/rogi-rogi/problem-solving/blob/main/Baekjoon%20Online%20Judge/normal/17436.py)


<br>

## 👉 연습 문제

[더 많은 문제](https://www.acmicpc.net/problemset?sort=solvedac_asc&tier=1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C30&algo=38&algo_if=and)
