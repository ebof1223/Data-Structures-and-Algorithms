def singleNumber(nums):
    storage = dict()
    for n in nums:
        if n in storage:
            del storage[n]
        else:
            storage[n] = n
    return next(iter(storage))


print(singleNumber([4, 1, 2, 1, 2]))
