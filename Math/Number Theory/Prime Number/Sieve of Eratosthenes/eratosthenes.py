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