mov ax, 0x1111
mov bx, 0x2222
mov cx, 0x8888
push 
push bx
push ax
call L1
INC AL
xor rax, rax
ret
L1: mov rbp, rsp
mov r8w, [ rbp+ ]
PRINT_HEX 2, r8w
NEWLINE
mov r9w, [ rbp+ ]
PRINT_HEX 2, r9w
NEWLINE
mov r10w, [ rbp+  ]
PRINT_HEX 2, r10w
ret