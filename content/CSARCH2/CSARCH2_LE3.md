>[!info] Covers cache memory up to restoring and non-restoring division.

## Cache memory

---

### Memory hierarchy

- The *memory hierarchy* refers to a structure that uses multiple levels of memories.
- As the distance from the processor increases, the size of the memories and the access time both increase, while the cost per unit decreases. $$\boxed{\text{CPU}} \longleftrightarrow \boxed{\text{SRAM}} \longleftrightarrow \boxed{\text{DRAM}}$$
	1. Registers (smallest, fastest, cheapest)
	2. L1 cache
	3. L2 cache
	4. Main memory
	5. Secondary memory (largest, slowest, most expensive)
- *Cache memory* refers to small and fast memory interposed between the processor and the main memory. This may reduce the access time of the main memory.

### Temporal locality

- A recently executed instruction is likely to be executed again very soon
- Whenever data is first needed, it is brought into the cache as it is likely to be needed again soon

### Spatial locality

- Instructions close to a recently executed instruction are likely to be executed soon
- Instead of fetching only a single address from main memory at a time, it is useful to fetch multiple adjacent addresses at once (a cache *block* or *line*)

#### Cache block

- The cache and main memories are divided into *cache blocks* (also known as *cache lines*).
- Each block is composed of $2^n$ contiguous memory locations for some nonnegative integer $n$.
- Each cache block is assigned a *tag* to distinguish memory blocks contained in the cache.
- Each cache block has a *valid* bit to determine if the entry is valid or not.
	- The valid bit is initially 0.

### Miss penalty

The *miss penalty* refers to the time required to fetch a cache block (specifically, the first word in that block) from the main memory to the CPU. Assuming a *non-load through* read policy:

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

Ideally, the entire memory hierarchy would appear to the processor as a single memory unit. The *average access time* is the average access time experienced by the processor.

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

### Cache mapping functions

- *Mapping functions* identify where the main memory blocks are placed in the cache
- Direct, full associative, and block set associative

<!--ID: 1750750953019-->

#### Direct mapping

- If main memory is viewed as blocks: $$(\text{Main memory block number}) \mod (\text{Number of blocks in cache})$$
- If main memory is viewed as *addresses*:
	1. Divide address into three partitions: *tag*, *block*, and *word*.
	2. Map the address to the block indicated by the block partition.

##### Word field

- Identifies a word within a block
- Is $w$ bits long, where $2^w$ is the number of words in a block.

##### Block field

- Identifies which cache block position to store to.
- Is $k$ bits long, where $2^k$ is the number of blocks in the cache

##### Tag field

- Copied to the tag assigned to a block in cache memory, where it identifies which of the main memory blocks that are allowed to be stored in a cache block *is currently being stored* in that cache block.
- Takes up the rest of the memory address after word and block are partitioned, because: $$
	\overbrace{\underbrace{\text{MM words}}_\text{Whole address} \times \underbrace{\frac{\text{block}}{\text{words}}}_\text{Word field (reciprocal)}}^\text{Blocks in MM} \times \underbrace{\frac{1}{\text{blocks in cache}}}_\text{Block field (reciprocal)}
$$ which gives $$\frac{\text{Blocks in MM}}{\text{Blocks in cache}} = \text{Blocks in MM that map to any given cache block}$$

#### Full associative mapping

- Any main memory block can be mapped to any cache block.
- If main memory is viewed as blocks, "first-come-first-serve"
- If main memory is viewed as addresses:
	1. Divide address into *two* partitions: *tag* and *word*.
	2. Still just mapped anywhere

#### Block-set associative

- Blocks in cache memory are grouped into *sets*
- Blocks in main memory are mapped to a set and are then allowed to be mapped to any block within the set: $$(\text{Main memory block number}) \mod (\text{Number of sets in cache})$$
- If main memory is viewed as *addresses*:
	1. Divide address into three partitions: *tag*, **set**, and *word*.
	2. Map the address to any block in the set indicated by the block partition.

##### Set field

- Identifies which cache block set position to store to.
- Is $k$ bits long, where $2^k$ is the number of sets in the cache

### Cache replacement algorithm

- A *cache replacement algorithm* identifies which cache block may be overwritten in the case that all cache blocks that may be occupied by a main memory block are already used.
- The block that will no longer be accessed should be released.

#### Modulo replacement (direct mapping)

- In direct mapping, the replacement algorithm is automatically handled by the modulo function.

#### Least recently used (LRU)

1. Set up a *counter* that is set to 0 on the first write to the cache.
	- For block-set associative, include a separate counter for each set
	- The counter value of each block is set to the value of the counter when data is written to that block.
2. When data is written to a cache block:
	1. If the cache is full, replace the block with the smallest counter value.
	2. Increment the counter value (or the counter value of the set containing the block, in the case of block-set associative mapping)

#### Most recently used (MRU)

- Process is identical to LRU, except replace the block with the *largest* counter value when the cache is full.

<div style="break-after: page"></div>

## Multiplication

---

Before performing any multiplication, make sure both operands are the same length (sign-extend the shorter one as necessary)

### Pencil-and-paper multiplication

1. Represent both multiplicand m and multiplier n in 2's complement.
2. The first intermediate product has a length of m+n bits.
3. Succeeding intermediate products are shifted left.
4. If the multiplier is negative, add the 2’s complement of the multiplicand, sign-extended and shifted to sign-bit position

### Booth's/Extended Booth's algorithm

Perform the same steps as pen-and-paper, but replace multiplier with Booth's/Extended Booth's equivalent.

#### Booth's equivalent

1. Append 0 to LSb
2. Pair 2 bits starting at LSb
	- 00 → 0
	- 01 → +1
	- 10 → -1
	- 11 → 0

#### Extended Booth's equivalent

1. If odd number of bits, sign extend once
2. Append 0 to LSb side
3. Group 3 bits starting at LSB
	- 000 → 0
	- 001 → +1
	- 010 → +1
	- 011 → +2
	- 100 → -2
	- 101 → -1
	- 110 → -1
	- 111 → 0

### Sequential circuit binary multiplier

1. $A \leftarrow 0, Q_{-1} \leftarrow 0$
2. $M \leftarrow \text{multiplicand}, Q \leftarrow \text{multiplier}$
3. Check concatenated value of $Q_0 Q_{-1}$
	- If $Q_0 Q_{-1} = 01$, then $A \leftarrow A + M$
	- If $Q_0 Q_{-1} = 10$, then $A \leftarrow A - M$
	- Otherwise, do nothing
4. Arithmetic shift right $A Q_0 Q_{-1}$

<div style="break-after: page"></div>

## Division

---

### Restoring division

1. $Q \leftarrow \text{dividend}$.
2. $A \leftarrow 0$. $A$ should be 1 bit longer than the longer operand.
3. $M \leftarrow \text{divisor}$. Extend $M$ to match the length of $A$.
4. For each bit in $Q$:
	1. Shift left $AQ$.
	2. $A \leftarrow A - M$
	3. Check sign bit of $A$:
		- If negative, undo step 2 ($A \leftarrow A + M$) and reset LSb of $Q$ ($Q_0 \leftarrow 0$)
		- If positive, set LSb of $Q$ ($Q_0 \leftarrow 1$)
5. Quotient will be in $Q$ while remainder will be in $A$. Adjust sign as needed.

### Non-restoring division

1. $Q \leftarrow \text{dividend}$.
2. $A \leftarrow 0$. $A$ should be 1 bit longer than the longer operand.
3. $M \leftarrow \text{divisor}$. Extend $M$ to match the length of $A$.
4. For each bit in $Q$, check sign bit of $A$.
	- If negative ($A_n = 1$)
		1. Shift left $AQ$.
		2. $A \leftarrow A + M$
		3. $Q_0$ gets complement value of the MSb of $A$.
	- If positive ($A_n = 0$):
		1. Shift left $AQ$.
		2. $A \leftarrow A - M$
		3. $Q_0$ gets complement value of the MSb of $A$.
5. If final result in $A$ is negative, perform restoration ($A \leftarrow A + M$)
6. Quotient will be in $Q$ while remainder will be in $A$. Adjust sign as needed.
