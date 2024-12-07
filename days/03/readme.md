# Day 03

https://adventofcode.com/2024/day/03



## Part 1

I had a heads up from the Reddit memes about this one - big brain regex - which was a pretty clear path to working solution. I could see how days 1 and 2 would lead someone down the path of parsing instead.

The [matchAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) method is much nicer than `RegExp` [exec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec).

## Part 2

This was a pretty simple modification from part 1, just a couple more regexes, pushing all results to a queue at their respective original indexes, then processing the queue while maintaining an `enabled` flag.

## Closing

I'm glad this was a quick one compared to day 2 part 2...

Ran into an issue with vitest importing from a file exporting a single long string of the problem input. I opted to switch to `readFile` after a short google without a solution.
