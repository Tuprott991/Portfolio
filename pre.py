def gen():
    for i in range(3):
        yield i

g = gen()
print(next(g))
print(list(g))       