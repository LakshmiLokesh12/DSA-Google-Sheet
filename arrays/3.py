def driver(N, arr):
    arr = arr[::-1]
    return " ".join([str(x) for x in arr])

def main():
    N = int(raw_input())
    arr = list(map(int, raw_input().split()))
    print(driver(N, arr))

main()