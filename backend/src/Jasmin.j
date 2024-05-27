.class public Jasmin
.super java/lang/Object
.method public static main([Ljava/lang/String;)V
.limit stack 20
.limit locals 20
ldc 9
istore_0
iload_0
ldc 4
if_icmpeq IF0
iload_0
ldc 9
if_icmpeq IF0
goto ELSE0
IF0:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "and cumplidofdfs"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
goto endIFElse0
ELSE0:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "otro"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
endIFElse0:
return
.end method
