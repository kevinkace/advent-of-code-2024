# Day 05

https://adventofcode.com/2024/day/05



## Part 1

I think I can parse the rules into a `Map`, eg `33|74` > `rules=>33=>44 = true`, then rip through each page list, and check for every illegal page combo.

Page lists max at 20 pages, which creates 190 pairs via `n(n-1) / 2`.

There are about 200 page lists, which average to around 10 pages (using my highly calibrated eyecrometer), which is about 45 pairs * 200 pages... should be no problem.

And turns out that worked great. Using `console.time()` within vitest test is only 8.8ms.

## Part 2

Screw it brute forcing this one.

Ok I'm back from trying that and it didn't work.

Initially I was hitting a memory limit in NodeJS generating all permutations of each page list. For 20 pages that's 2.432902e+18 permutations. Not feasible in NodeJS.

My fist permutation function tried generating all permutations and pushing them to an array. Obviously this didn't work. 

But I had an idea to use a [`generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator), each invocation would return the next permutation.

```js
function* getPermutations(array, current = []) {
    if (array.length === 0) {
        yield current;
    } else {
        for (let i = 0; i < array.length; i++) {
            const next = array[i];
            const remaining = array.slice(0, i).concat(array.slice(i + 1));

            yield* getPermutations(remaining, [...current, next]);
        }
    }
}

const generator = getPermutations(pagesList);

for (const permutation of generator) {
    // validate page order permutation here
}
```

This is maybe the first time I've written a generator with a valid use-case.
I left this running for 60 mins, and it hadn't completed the first page list out of dozens of page lists.

I then made a simple sort function using the page rules within the comparator function. So bloody simple and completes in 43ms.

## Closing

Don't try to be clever!
