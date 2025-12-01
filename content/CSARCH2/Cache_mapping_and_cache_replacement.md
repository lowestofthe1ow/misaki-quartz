---
target-deck: CSARCH2::Cache mapping and cache replacement
tags: [CSARCH2]
title: Cache mapping and cache replacement
---

## Cache mapping functions

- **Mapping functions** identify where the main memory blocks are placed in the cache
- Direct, full associative, and block set associative

<!--ID: 1750750953019-->

### Direct mapping

- If main memory is viewed as blocks: $$(\text{Main memory block number}) \mod (\text{Number of blocks in cache})$$
- If main memory is viewed as **addresses**:
	1. Divide address into three partitions: **tag**, **block**, and **word**.
	2. Map the address to the block indicated by the block partition.

<!--ID: 1750750953022-->

#### Word field

- Identifies a word within a block
- Is $w$ bits long, where $2^w$ is the number of words in a block.

<!--ID: 1750750953024-->

#### Block field

- Identifies which cache block position to store to.
- Is $k$ bits long, where $2^k$ is the number of blocks in the cache

<!--ID: 1750750953026-->

#### Tag field

- Copied to the tag assigned to a block in cache memory, where it identifies which of the main memory blocks that are allowed to be stored in a cache block *is currently being stored* in that cache block.
- Takes up the rest of the memory address after word and block are partitioned, because:
	$$
	\text{MM words} \times \frac{\text{block}}{\text{words}} \times \frac{1}{\text{blocks}}
$$

<!--ID: 1750750953028-->

### Full associative mapping

- Any main memory block can be mapped to any cache block.
- If main memory is viewed as blocks, "first-come-first-serve"
- If main memory is viewed as addresses:
	1. Divide address into **two** partitions: **tag** and **word**.
	2. Still just mapped anywhere

<!--ID: 1750750953030-->

### Block-set associative

- Blocks in cache memory are grouped into **sets**
- Blocks in main memory are mapped to a set and are then allowed to be mapped to any block within the set: $$(\text{Main memory block number}) \mod (\text{Number of sets in cache})$$
- If main memory is viewed as **addresses**:
	1. Divide address into three partitions: **tag**, ***set***, and **word**.
	2. Map the address to any block in the set indicated by the block partition.

<!--ID: 1750750953032-->
#### Set field

- Identifies which cache block set position to store to.
- Is $k$ bits long, where $2^k$ is the number of sets in the cache

<!--ID: 1750750953034-->

## Cache replacement algorithm

- A **cache replacement algorithm** identifies which cache block may be overwritten in the case that all cache blocks that may be occupied by a main memory block are already used.
- **The block that will no longer be accessed should be released**
	- (But this is very difficult to determine)

<!--ID: 1750750953036-->

### Modulo replacement (direct mapping)

- In direct mapping, the replacement algorithm is automatically handled by the modulo function.

<!--ID: 1750750953037-->

### Least recently used (LRU)

1. Set up a **counter** that is set to 0 on the first write to the cache.
	- For block-set associative, include a separate counter for each set
	- The counter value of each block is set to the value of the counter when data is written to that block.
2. When data is written to a cache block:
	1. If the cache is full, replace the block with the smallest counter value.
	2. Increment the counter value (or the counter value of the set containing the block, in the case of block-set associative mapping)

<!--ID: 1750750953039-->

### Most recently used (MRU)

- Process is identical to LRU, except replace the block with the **largest** counter value when the cache is full.
<!--ID: 1750750953041-->
