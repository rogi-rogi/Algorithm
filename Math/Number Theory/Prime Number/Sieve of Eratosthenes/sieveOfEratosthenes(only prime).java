    private static ArrayList<Integer> sieveOfEratosthenes(int N) {
        final boolean NOT_PRIME = false;
        boolean[] isPrime = new boolean[N + 1];
        Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = NOT_PRIME;
        for (int p = 2; p * p <= N; ++p) {
            for (int i = p * p; i <= N; i += p) {
                if (isPrime[i]) isPrime[i] = NOT_PRIME;
            }
        }
        
        ArrayList<Integer> primeList = new ArrayList<>();
        for (int i = 2; i <= N; ++i) {
            if (isPrime[i])
                primeList.add(i);
        }
        return primeList;
    }
