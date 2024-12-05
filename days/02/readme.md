# Day {day}

https://adventofcode.com/2024/day/2



## Part 1

Simple parsing. My initial implementation had 2 condition checks: one for positive and one for negative direction. Another option is to use the direction as a multiplier when doing comparisons.

```js
// separate positive and negative checks
if (
    dir === 1 &&
    nextValue > (currValue * dir) &&
    nextValue - currValue <= 3
) {
    return true;
}

if (
    dir === -1 &&
    nextValue < currValue &&
    currValue - nextValue <= 3
) {
    return true;
}

// cooler single check
if (
    nextValue > (currValue * dir) &&
    Math.abs(nextValue - currValue) <= 3
) {
    return true;
}
```

I actually prefer the first option, it reads clearer. But this is AOC so some code golfing is the point, and often comes in handy later on as computational demands increase.

## Part 2

being able to isolate tests is very important.


## Closing


