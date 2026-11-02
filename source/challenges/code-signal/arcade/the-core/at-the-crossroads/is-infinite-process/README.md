# Challenge
Given integers *a* and *b*, determine whether the following results in an infinite loop:

~~~ts
while (a !== b) {
	a++
	b--
}
~~~

Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

# Example
- For *a = 2* and *b = 6*, the output should be **`false`**.
- For *a = 2* and *b = 3*, the output should be **`true`**.
