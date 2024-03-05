# Challenge
Given a sequence of integers as an array, determine whether it is possible to obtain a **strictly increasing sequence** by *removing* no more than one element from the array.

**Note:** The sequence *a<sub>0</sub>*, *a<sub>1</sub>*, &hellip;, *a<sub>n</sub>* is considered to be a strictly increasing if *a<sub>0</sub>* *< a<sub>1</sub>* < &hellip; < *a<sub>n</sub>*.
A sequence containing only one element is also considered to be strictly increasing.

# Example
- Given the sequence *`[1, 3, 2, 1]`*, the output should be **`false`**.

	There is no one element in this array that can be removed in order to get a strictly increasing sequence.

- Given the sequence *`[1, 3, 2]`*, the output should be **`true`**.

	You can remove 3 from the array to get the strictly increasing sequence `[1, 2]`.
	Alternately, you can remove 2 to get the strictly increasing sequence `[1, 3]`.
