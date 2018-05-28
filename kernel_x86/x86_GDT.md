# GDT(Global descriptor table)
## 全局描述符表GDT
## 段描述符
处理器中有6个段寄存器，每个段寄存器包括可见部分和不可见部分，段描述符可以有多个，在程序运行的某一时刻，只允许同时最多载入6个断描述符，要使其他的断描述符起作用需要载入断描述符的可见部分，有以下指令可以载入断描述符：
```asm
MOV,POP,LDS,lES,LSS,LGS,LFS
```
以下指令可以改变CS寄存器的值,载入代码段：
```asm
CALL,JMP,RET,SYSENTER,SYSEXIT,IRET,INT

```
## 段描述符格式
![Segment Discriptor](https://coding.net/u/sclei/p/picb/git/raw/master/os/SegmentDiscriptor.png)
<center>段描述符格式（图片摘自：intel用户手册）

SegLimit:<br/>
Segment Limit 指定了段限值，超过段限值的内存访问会引发异常。G标志设置为1，表示段粒度为4KBytes，设置为0表示段粒度为1Byte；除了SS段之外，任何段内访问超过段限制的内存都会引发异常#GP(general-protection),访问SS段超过限值的内存会引发异常#SS(stack-fault exception)。
