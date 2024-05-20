.class public Jasmin
.super java/lang/Object
.method public static main([Ljava/lang/String;)V
.limit stack 20
.limit locals 20
ldc 3
istore_0
iload_0
ciclo_while:
iload_0
ldc 8
if_icmpgt fin_while
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "333"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iload_0
												
ldc 5
if_icmpeq condicion_if
goto fin_if
condicion_if:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "un cinco"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
fin_if:

iinc 0 1
goto ciclo_while
fin_while:
return
.end method
