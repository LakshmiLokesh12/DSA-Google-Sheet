def driver(N, arr):
    return arr.index(max(arr))

def main():
    N = int(input())
    arr = list(map(int, input().split()))
    print(driver(N, arr))

main()