# Day 04

https://adventofcode.com/2024/day/4



## Part 1

Word search, but only the same word and count the instances.

Walk the data, find the start of the word, search the perimeter for the next letter, yada yada.

But I think an optimization is to search for the start or end of the word, and only search in 1/2 the directions.

---

Ok back and that was a stupid idea, unless you were partitioning off the work to service workers - searching 1/2 the dirs for twice the letters...

Ended up with a walker fn to step through the grid with a callback fn called at each position in the grid.

It's actually pretty slow with the input, 1-2 seconds.

But I got the correct solution with first run.

## Part 2

Not too bad to search for other patterns once you have a walker and helpers. My solution only handles trivial cases - 3 word xword.

## Closing

It's funny all the lessons I relearn, this time mainly how to work with large strings more efficiently.
