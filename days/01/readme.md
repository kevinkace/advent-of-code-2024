# Day 01

Most of work on day 1 is just standing up all the pieces for rapid development - creating the repo, installing deps (eslint, vitest).

The problem itself is pretty simple, parsing values out of 2 lists, and performing calculations with their values.

## Part 1

Parse the lists, sort them, iterate through the lists and sum the differences of values at each index.

## Part 2

This involves finding numbers that exist in both lists, and finding the product of the occurrences and the number value. Funny that re-phrasing the problem this way (vs [how it's written](https://adventofcode.com/2024/day/1)) makes the solution jump right out.

First build a `Map()` from each list, tallying each number occurrence. Next iterate through the shorter `Map` and sum the product of the occurrence in each `Map` and the value of the number.
