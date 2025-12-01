---
target-deck: CSARCH2::Cache memory
tags: [CSARCH2]
title: Cache memory
---

## Memory hierarchy

- The **memory hierarchy** refers to a structure that uses multiple levels of memories.
- As the distance from the processor increases, the size of the memories and the access time both increase, while the cost per unit decreases.

$$
\boxed{\text{CPU}} \longleftrightarrow \boxed{\text{SRAM}} \longleftrightarrow \boxed{\text{DRAM}}
$$

1. Registers (smallest, fastest, cheapest)
2. L1 cache
3. L2 cache
4. Main memory
5. Secondary memory (largest, slowest, most expensive)
<!--ID: 1750738628416-->

## Cache memory

- **Cache memory** refers to **small** and **fast** memory interposed between the processor and the main memory. This may reduce the access time of the main memory.
<!--ID: 1750738628418-->

### Locality of reference

- Most programs use routines in which instructions are executed repeatedly
- Many instructions in localized areas of the program are localized repeatedly during some time period
<!--ID: 1750738628420-->

#### Temporal locality

- A recently executed instruction is likely to be executed again very soon
- Whenever data is first needed, it is brought into the cache as it is likely to be needed again soon
<!--ID: 1750738628423-->

#### Spatial locality

- Instructions close to a recently executed instruction are likely to be executed soon
- Instead of fetching only a single address from main memory at a time, it is useful to fetch multiple adjacent addresses at once (a cache **block** or **line**)
<!--ID: 1750738628425-->

## Cache organization

- **Cache organization** refers to how portions of main memory are located in the cache.
<!--ID: 1750738628428-->

### Cache block

- The cache and main memories are divided into **cache blocks** (also known as **cache lines**).
- Each block is composed of $2^n$ contiguous memory locations for some nonnegative integer $n$.
- Each cache block is assigned a **tag** to distinguish memory blocks contained in the cache.
- Each cache block has a **valid** bit to determine if the entry is valid or not.
	- The valid bit is initially 0.
<!--ID: 1750738628430-->

## Cache hit

- A **cache hit** means the desired memory location has a copy on the cache memory.
- **Hit rate** refers to the fraction of memory accesses that are cache hits.
- If a memory **read** is a hit, read from the cache
- If a memory **write** is a hit (i.e., when attempting to write to a location in memory, the CPU finds that that location has a copy in the cache), proceed with either:
	- **Write-through**: Write on both the main memory and the cache memory
	- **Write-back**: Write to the cache first and update the main memory later in the background
<!--ID: 1750738628432-->

### Hit time

- **Hit time** refers to the time required to access the cache memory, including the time needed to determine whether the access is a hit or miss.
<!--ID: 1750738628434-->

### Write-through

- **Write-through** is a policy for cache write hits that means the CPU will write to the main memory and the cache memory.
- Access time is (assume 1ns cache access / 10ns memory access):
	- 1ns cache write
	- 10ns memory write
<!--ID: 1750738628436-->

### Write-back

- **Write-back** is a policy for cache write hits that means the CPU will write to the cache memory only. The main memory is updated later in the background.
- Access time is (assume 1ns cache access):
	- 1ns cache write
<!--ID: 1750738628439-->

## Cache miss

- A **cache miss** occurs when the desired main memory location was not found in cache memory.
- **Miss rate** refers to the fraction of memory accesses that are misses.
<!--ID: 1750738628441-->

### Miss penalty

- **Miss penalty** refers to the time required to fetch a cache block (specifically, the first word in that block) from the main memory to the CPU.
- Depends on policy used for cache misses.
- If memory **read** is a miss, proceed with either:
	- **No load-through**
	- **Load-through**
- If memory **write** is a miss, proceed with either:
	- **Write-allocate**
	- **No write-allocate**
<!--ID: 1750738628443-->

### No load-through

- **No load-through** is a policy for cache read misses that means:
	1. Information is read from the main memory
	2. Cache block is copied from the main memory into the cache
	3. Data is transferred from cache to CPU
- **Miss penalty** (assume 1ns cache access / 10ns memory access):
	- 1ns initial cache check
	- 10ns **for each word in the cache block to be transferred**
	- 1ns cache read
<!--ID: 1750738628445-->

### Load-through

- **Load-through** is a policy for cache read misses that means the data is sent to the processor **before** it is loaded into the cache.
- **Miss penalty** (assume 1ns cache access / 10ns memory access):
	- 1ns initial cache check
	- 10ns for each word in block starting at the initial cache block **until** the correct word is transferred
		- This already includes transfer to CPU
<!--ID: 1750738628447-->

### No write-allocate

- **No write-allocate** is a policy for cache write misses (i.e., when attempting to write to a location in memory, the CPU finds that that location **does not** have a copy in the cache) that means the data is written directly to the main memory (and not loaded into cache)
- **Miss penalty**:
	- 1ns initial cache check
	- 10ns write data to main memory
<!--ID: 1750738628449-->

### Write-allocate

- **Write-allocate** is a policy for cache write misses (i.e., when attempting to write to a location in memory, the CPU finds that that location **does not** have a copy in the cache) that means the block containing the target main memory address is first loaded into cache, followed by a write hit operation.
- **Miss penalty**:
	- 1ns initial cache check
	- 10ns **for each word in the main memory block**
	- 1ns cache write
	- 10ns memory write
<!--ID: 1750738628452-->

### Average access time

- Ideally, the entire memory hierarchy would appear to the processor as a single memory unit with:
	- The access time of the cache
	- The size of the main memory
- The **average access time** is the average access time experienced by the processor $$t_\text{avg} = hC + (1-h)M$$
	- $C$ is the cache access time
	- $M$ is the miss penalty
	- $h$ is the hit rate
	- $1 - h$ is the miss rate
- "Weighted average of hits and misses"
<!--ID: 1750738628454-->
