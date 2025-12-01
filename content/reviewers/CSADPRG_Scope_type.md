[MGS Miro board](https://miro.com/app/board/uXjVLT0Lv24=/?share_link_id=713304248319) | [MGS recoding](https://drive.google.com/drive/folders/17JpIWlBdnriYqYhLQwtF-qxXAvYqJTdt?usp=drive_link)

Assume the following is written in a programming language with **static scoping**:

```c
void f1() {
	int k = 6;
	int t = 7;
	int n = 1;
	int f = 2;
	int j = 4;
	{
		int k = 8;
		int n = 4;
		int f = n - (k - t);
		print(f);
		{
			int f = t - j;
			print(f);
		}
	}
	print(k + n + f);
}
```

What three **numeric values** will be printed by the call of to `f1`?

If the line `int n = 4;` is removed, what is the value passed to the first `print()` call?

---

Assume the following is written in a programming language with **dynamic scoping**:

```c
void f1() {
	int m = 1;
	int s = 3;
	int k;
	// body
}

void f2() {
	int t;
	int b;
	int w = 5;
	// body
}

void f3() {
	int s = 3;
	int w = 4;
	char m = '?';
	// body
}

int add(int a, int b) {
	return a + b;
}
```

Given that **`f3` calls `f2`, which calls `f1`**, identify which function contains the variable definition referenced by the following at the end of the call chain:

1. `t`
2. `b`
3. `s`
4. `w`
5. `m`
6. `k`

Assume control is currently at `f2`. `f2` will then call a function that will then make the call `add(s, w)`. If we want `add()` to return `8`, should `f2` call `f1` or `f3`?

Assume that this programming language does not support any kind of type coercion. Given that `f1` calls `f3`, which then makes the call `add(s, m)`, does a runtime error occur?

---

Consider a programming language with the following built-in data types:

```
word
noun
verb
adjective
particle
block
```

Assume that the following (and **only** the following) type coercions are supported:

- `noun`, `verb`, and `adjective` $\to$ `word`
- `verb` $\to$ `adjective`
- `adjective` $\to$ `verb`

Assume the following functions are declared, written as `return_type function(param_type, param_type2, ...)` (A return type of `void` means the function returns no value):

```
void spell(word);
noun nominalize(verb);
adjective adjectivize(noun);
block bind(word, particle);
block modify(block, verb);
block construct(block, block);
```

Assume the following variables are declared:

```
word thing;
particle topic;
particle object;
verb action;
adjective quality;
noun person;
block subject;
```

Which of the following statements are valid? Rewrite the invalid statements to use valid data types.

- `modify(bind(subject, topic), action);`
- `construct(bind(person, topic), bind(person, object));`
- `construct(modify(bind(thing, object), thing), subject);`
- `modify(bind(person, topic), adjectivize(person))`

Write a valid function call that returns a `block` using the following variables exactly once each: `thing`, `person`, and `topic`.

Which of the following statements is/are valid?

- `quality = adjectivize(nominalize(action));`
- `action = adjectivize(nominalize(action));`
- `quality = action;`
- `thing = spell(thing);`
- `thing = adjectivize(person);`

---

Refer to the following table of operator precedence, with the operators having the highest precedence being on top.

|Operator|Associativity|
|---|---|
|`ඞ`, `&`|R to L|
|`$`, `#`|L to R|
|`+`, `~`|L to R|
|`*`|R to L|

Place **parentheses** to highlight the **order** of operation evaluation in the following expressions:

```
A * L & B ඞ E ~ M + U * T # H
```

```
F * U * J & I ඞ T # A + K ~ O & T $ O # N $ E
```

```
T ඞ O & B ඞ I # S + A ~ W ~ A * M & I $ S # A + K * I
```

```
S * A * K * U & R * A * I * N $ O + Z # O ~ M $ I
```
