`SUB AX, DX`

4. RBXout, Yin
5. IRAFout, SELECT Y, MUL, Zin
6. Zout, MARin, READ, WMFC
7. MDRout, Yin
8. ALout, SELECT Y, MUL, Zin
9. Zout, AXin, END

`DEC RSI`

4. RBXout, Yin
5. IRAFout, SELECT Y, MUL, Zin
6. Zout, MARin, READ, WMFC
7. MDRout, Yin
8. ALout, SELECT Y, MUL, Zin
9. Zout, AXin, END

`DEC byte[RDI]`

4. RBXout, Yin
5. IRAFout, SELECT Y, MUL, Zin
6. Zout, MARin, READ, WMFC
7. MDRout, Yin
8. ALout, SELECT Y, MUL, Zin
9. Zout, AXin, END

`MUL byte[ALPHA + RBX]`

4. RBXout, Yin
5. IRAFout, SELECT Y, ADD, Zin
6. Zout, MARin, READ, WMFC
7. MDRout, Yin
8. ALout, SELECT Y, MUL, Zin
9. Zout, AXin, END




