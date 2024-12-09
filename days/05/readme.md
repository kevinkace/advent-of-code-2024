# Day 05

https://adventofcode.com/2024/day/05



## Part 1

I think I can parse the rules into a `Map`, eg `33|74` > `rules=>33=>44 = true`, then rip through each page list, and check for every illegal page combo.

Page lists max at 20 pages, which creates 190 pairs via `n(n-1) / 2`.

There are about 200 page lists, which average to around 10 pages (using my highly calibrated eyecrometer), which is about 45 pairs * 200 pages... should be no problem.

And turns out that worked great. Using `console.time()` within vitest test is only 8.8ms.

## Part 2



## Closing


