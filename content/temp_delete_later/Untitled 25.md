Where is it best to put WMFC? For example, for POP RSI:

4. RSPout, MARin, READ, WMFC, Select4, ADD, Zin  
5. Zout, Select 4, ADD, Zin  
6. Zout, RSPin  
7. MDRout, RSlin, END

Is it "more optimal" to place the WMFC on a later line so that execution cycle 5 and 6 can happen while the memory read is "happening in the background"? For example:

4. RSPout, MARin, READ, Select4, ADD, Zin  
5. Zout, Select 4, ADD, Zin  
6. Zout, RSPin, WMFC
7. MDRout, RSlin, END

---

For fetching the instruction:

1. PCout, MARin, Read, WMFC, Select 4, Add, Zin  
2. Zout, PCin  
3. MDRout, IRin

Why do we add 4 instead of 8 if we're assuming that we're working in x64?

---

