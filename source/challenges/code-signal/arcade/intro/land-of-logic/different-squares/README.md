# Challenge
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

# Example
Given&hellip;
~~~ts
const matrix = [
	[1, 2, 1],
	[2, 2, 2],
	[2, 2, 2],
	[1, 2, 3],
	[2, 2, 1],
]
~~~
&hellip;the output should be `solution(matrix) = 6`.

Here are all `6` different `2 × 2` squares:
- <table>
		<tr>
			<td>1</td>
			<td>2</td>
		</tr>
		<tr>
			<td>2</td>
			<td>2</td>
		</tr>
	</table>

- <table>
		<tr>
			<td>2</td>
			<td>1</td>
		</tr>
		<tr>
			<td>2</td>
			<td>2</td>
		</tr>
	</table>

- <table>
		<tr>
			<td>2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>2</td>
			<td>2</td>
		</tr>
	</table>

- <table>
		<tr>
			<td>2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>1</td>
			<td>2</td>
		</tr>
	</table>

- <table>
		<tr>
			<td>2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>2</td>
			<td>3</td>
		</tr>
	</table>

- <table>
		<tr>
			<td>2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>2</td>
			<td>1</td>
		</tr>
	</table>
