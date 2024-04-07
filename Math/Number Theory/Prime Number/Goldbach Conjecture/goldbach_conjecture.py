def goldbach_conjecture(prime_list, num):
    if num % 2 != 0:
        return -1
    cnt = 0
    for prime in prime_list:
        if prime > num / 2:
            break
        if (num - prime) in prime_list:
            cnt += 1
    return cnt
