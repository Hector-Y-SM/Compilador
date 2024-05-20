.class public Jasmin
.super java/lang/Object
.method public static main([Ljava/lang/String;)V
.limit stack 20
.limit locals 20
ldc 1
istore_0

iload_0
												
ldc 3
if_icmpne condicion_if
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "es tres"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
goto ifElseIfElse
condicion_if:

iload_0
                                    
ldc 4
if_icmpne ifElseIf
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "es cuatro"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
goto ifElseIfElse
ifElseIf:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "es otro numero"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
ifElseIfElse:
return
.end method
