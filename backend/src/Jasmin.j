.class public Jasmin
.super java/lang/Object
		    
.method public static main([Ljava/lang/String;)V
.limit stack 20
.limit locals 20

ldc 2
															
ldc 5
if_icmplt condicion_if
goto fin_if
condicion_if:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "hola wero"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

fin_if:

return
.end method