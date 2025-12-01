---
target-deck: CSARCH2::Cache memory::Practice exercises
tags: [CSARCH2]
title: Practice exercises
---

## (a) 1300τ, (b) 778τ

Consider a computer that has the following parameters. Access times to the cache and the main memory are τ and 10τ, respectively. When a cache miss occurs, a block of 8 words is transferred from the main memory to the cache. It takes 10τ to transfer a word from memory to cache. The miss penalty also includes a delay of τ for the initial access to the cache, which misses, and another delay of τ to transfer the word to the processor after the block is loaded into the cache (assuming no load-through).

Assume that 30 percent of the instructions in a typical program perform a read or a write operation. Assume that there are 100 instructions in a program. Assume that the hit rates in the cache are 0.95 for instructions and 0.9 for data. Assume further that the miss penalty is the same for both read and write accesses. Compute for:

(a) Time to fetch without cache

(b) Time to fetch with cache

<!--ID: 1750750952991-->
## (a) 7, (b) TBW 2/2/3, (c) 524, (d) 2048, (e) 2, (f) 1

A direct-mapped cache consists of a total of 4 blocks. The main memory contains 16 blocks, each consisting of 8 words. Each word is 16 bits.

(a) How many bits are there in a main memory address?

(b) In the main memory address, how many bits are there in each of the TAG, BLOCK, and WORD fields?

(c) What is the size of the cache memory (in bits)?

(d) What is the size of the main memory (in bits)?

(e) In which cache block will memory block 10 be mapped?

(f) In which cache block will memory address 10 be mapped?

<!--ID: 1750750953002-->
## (a) 7, (b) TW 4/3, (c) 532, (d) 2048, (e)/(f) anywhere

An associative-mapped cache consists of a total of 4 blocks. The main memory contains 16 blocks, each consisting of 8 words. Each word is 16 bits.

(a) How many bits are there in a main memory address?

(b) In the main memory address, how many bits are there in each of the TAG and WORD fields?

(c) What is the size of the cache memory (in bits)?

(d) What is the size of the main memory (in bits)?

(e) In which cache block will memory block 10 be mapped?

(f) In which cache block will memory address 10 be mapped?

<!--ID: 1750750953006-->
## (a) 7, (b) TSW 2/2/3, (c) 1056, (d) 2048, (e)/(f) 2

A 2-way block set associative mapping cache consists of a total of 8 blocks. The main memory contains 16 blocks, each consisting of 8 words. Each word is 16 bits.

(a) How many bits are there in a main memory address?

(b) In the main memory address, how many bits are there in each of the TAG, SET, and WORD fields?

(c) What is the size of the cache memory (in bits)?

(d) What is the size of the main memory (in bits)?

(e) In which cache set will memory block 10 be mapped?

(f) In which cache set will memory address 10 be mapped?
<!--ID: 1750750953012-->
