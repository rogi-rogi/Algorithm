    private static void sieveOfEratosthenes(boolean[] isPrime, int N) {
        Arrays.fill(isPrime, true);
        final boolean NOT_PRIME = false;
        isPrime[0] = isPrime[1] = NOT_PRIME;
        for (int p = 2; p * p <= N; ++p) {
            for (int i = p * p; i <= N; i += p) {
                if (isPrime[i]) isPrime[i] = NOT_PRIME;
            }
        }
    }
