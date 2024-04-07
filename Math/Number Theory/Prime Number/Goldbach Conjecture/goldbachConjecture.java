    private static int goldbachConjecture(ArrayList<Integer> primeList, int num) {
        int cnt = 0;
        for (Integer prime : primeList) {
            if (prime > num / 2) break;
            if (primeList.contains(num - prime)) ++cnt;
        }
        return cnt;
    }
