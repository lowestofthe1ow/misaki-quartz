ESIout, SELECT 4, MUL, Zin
Zout, Yin
EBXout, SELECT Y, ADD, Zin
Zout, Yin
IRAFout, SELECT Y, ADD, Zin
Zout, MARin, READ, WMFC
MDRout, EAXin, END

IRDFout, EAXin, END

400 

4 * 0*

0.000000002.5 ns

ESIout, MARin, READ, WMFC
MDRout, Yin
EAXout, SELECT Y, MUL, Zin
Zout, EAXin, EDXin, END

ESIout, MARin, READ, WMFC
MDRout, EAXin, END

ESIout, SELECT 4, MUL, Zin
Zout, Yin
IRAFout, SELECT Y, ADD, Zin
Zout, MARin, READ, WMFC
MDRout, EAXin

