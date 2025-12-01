## Cache memory

### Miss penalty

Assume a **non-load through** read policy.

$$
\begin{align*}

	\text{MP} &= 

	\underbrace{\text{CAT}}
	_\text{Initial cache check}
	
	+ \overbrace{(\text{MAT} \times \text{block size})}
	^\text{Transfer blocks from memory to cache}
	
	+ \underbrace{\text{CAT}}
	_\text{Transfer first word in block to CPU} \\ \\

	&= (2 \times \text{CAT}) + (\text{MAT} \times \text{block size})

\end{align*}
$$

### Average access time

$$
t_\text{avg} = (\text{hit rate} \times \text{CAT}) + (\text{miss rate} \times \text{MP})
$$

### Total access time

$$
t_\text{total} = 
\underbrace{\text{hits} \times (\text{CAT} \times \text{block size})}
_\text{Transfer cache-hit blocks to CPU}

+ \overbrace{\text{misses} \times
 
[\text{CAT}

+ (\text{MAT} \times \text{block size})

+ \underbrace{(\text{CAT} \times \text{block size})}
_\text{Transfer whole block to CPU}
 
]}

^\text{Transfer cache-miss blocks to CPU, similar to miss penalty}
$$
