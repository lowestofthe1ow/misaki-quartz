
```
LEA RAX, [ALPHA]

IRAFout, RAXin, END


RET

RSPout, MARin, READ, WMFC, SELECT 4, ADD, Zin
Zout, SELECT 4, ADD, Zin
Zout, RSPin
MDRout, PCin, END


IMUL RSI, [GAMMA], 0x7

IRDFout, Yin
IRAFout, MARin, READ, WMFC
MDRout, SELECT Y, MUL, Zin
Zout, RSIin, END


ADD dword[RSI], 0x7

IRDFout, Yin
RSIout, MARin, READ, WMFC
MDRout, SELECT Y, ADD, Zin
Zout, MDRin, WRITE, WMFC, END


CMP RSI, 0x01

IRDFout, Yin
RSIout, SELECT Y, SUB


SAHF

AHout, STATUSFLAGSin, END


JG

IF (OF == 1 || OF != CF)




IF (ZF == 0) END

IF (ZF == 0) END


POP PC
RSP = RSP + 16


RSI = *RSP
RSP = RSP+8



PCout, MARin, READ, SELECT 4, ADD, Zin
Zout, PCin
MDRout, IRin
```


If a - b < 0
sign: 1
overflow: 1

if a - b > 0
sign: 0

IF 

CALL func

LABELS are offsets stored in the data field
ADD THEM TO PC

RSPout, SELECT 4, SUB, Zin
Zout, SELECT 4, SUB, Zin
Zout, MARin, RSPin
PCout, MDRin, WRITE, WMFC
IRDFout, Yin
PCout, SELECT Y, ADD, Zin
Zout, PCin, END

IF (SF == OF) END


RCXout, SET CARRY, SUB, Zin


RSPout, MARin, READ, WMFC, SELECT 4, ADD, Zin
Zout, SELECT 4, ADD, Zin
Zout, RSPin
MDRout, RSIin, END




ENQUEUE src32
4. RHPout, MARin, SELECT 4, ADD, Zin
5. Zout, RHPin
6. EAXout, MDRin, WRITE, WMFC

DEQUEUE src64
4. RTPout, MARin, READ, SELECT 4, ADD, Zin
5. Zout, SELECT 4, ADD, Zin
6. Zout, RTPin, WMFC
7. MDRout, src64in

SUB RAX, RBX
4. RBXout, NOT, Zin000
5. Zout, Yin
6. RAXout, SET CARRY SELECT Y,
7. RAXout, ADD, Zin
8. Zout, RAXin

MUL5 RAX, RBX
4. RBXout

RBXout, NOT, Zin
Zout, Yin
RAXout, SELECT Y, SET CARRY, ADD, Zin
Zout, RAXin

4.



```
0x AB CD EF 12           34 56 78 90
   00 01 02 03 
```


RSPout, SELECT 4, SUB, Zin
Zout, SELECT 4, SUB, Zin
Zout, MARin, RSPin


XOR [RBX], RAX + RBX


RAXout, SELECT 4, MUL, Zin
Zout, 



a. ADD RSI, [RDI]
b. MUL EAX, [ALPHA + ESI]
c. SAHF
d. RET
e. SUB RBX, imm