# Day 01

https://adventofcode.com/2024/day/1

Most of work on day 1 is just standing up all the pieces for rapid development - creating the repo, installing deps (eslint, vitest).

The problem's 2 parts are pretty simple: parsing values out of 2 lists, and performing calculations with their values.

TDD is the only way with AOC, so all code is in `{day}.spec.js` files, or shared `./utils/*`.

## Part 1

Parse the lists is first. I went with a very naive approach which was simple and worked - split on line breaks, and split each line on triple space into a nested array, `[[], []]`.

I sorted the inner lists and then iterated through them, in parallel? Checking both lists at the same index and summing the differences of the 2 values at each index.

## Part 2

This involves finding numbers that exist in both lists, and finding the product of the occurrences and the value of that number. Funny that re-phrasing the problem this way vs how it's written makes the solution jump right out.

The original wording implies iterating through lists nested, which is O(n + m). But a better data structure keeps it a to O(n).

I first constructed a `Map()` from each list, tallying each number occurrence. I next iterate through the shorter `Map` and sum the product of the occurrence in each `Map` and the value of the number.
