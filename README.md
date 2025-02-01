# Unexpected behavior with null and loose comparison in JavaScript function
This repository demonstrates an unexpected behavior in JavaScript when using loose comparison with null values in a function.

## Bug Description
The function `foo` is intended to return `null` if either `a` or `b` is `null`. However, due to the use of loose comparison (`==`) instead of strict comparison (`===`), it behaves unexpectedly when one of the parameters is `null` and the other is `0`.  The loose comparison treats `null == 0` as `false`, leading to unexpected results.

## Bug Solution
The solution involves using strict equality (`===`) to check for `null` values, resolving the unexpected behavior.