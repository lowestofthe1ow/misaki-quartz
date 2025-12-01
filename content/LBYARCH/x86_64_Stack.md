PUSH: Decrements RSP and then pushes a value onto the stack. This way, RSP will always point to the top of the stack. Note that the "decrement" is because the stack grows downards.

POP: Pops a value from the stack and then increments RSP.

CALL: Jumps to a label, but the address of the next instruction (the address in RIP) is first pushed onto the stack.

RET: The stack is popped, and the value is stored in RIP. This is why it is important to pop everything first before calling RET. Alternatively, RET can take an operand that first increments RSP by a certain amount to "return" it to the address of the previous instruction before popping.