# CPUID指令
## 调用格式
## CPUID.00H

```c
//cpuid.c
struct cpuid_return_struct
{
  uint32_t eax;
  uint32_t ebx;
  uint32_t ecx;
  uint32_t edx;
};
//c语言定义cpuid指令函数
void inline cpuid(struct cpuid_return_struct * cpu_fetures,uint32_t arg_eax)
{
  asm("pushal");
  asm volatile("cpuid"
                  :
                  "=a"(cpu_fetures->eax)
                  ,"=b"(cpu_fetures->ebx)
                  ,"=c"(cpu_fetures->ecx)
                  ,"=d"(cpu_fetures->edx)
                :"a"(arg_eax));
  asm("popal");

}

//CPUID.00H 返回CPU的基本信息
void cpuid_cpu_feature(struct cpuid_return_struct * cpu_fetures)
{
  uint32_t eax=0x0;//cpuid.00H号功能，获取cpu的基本信息
  cpuid(cpu_fetures,eax);
}

```
调用cpuid.00h号功能测试cpuid指令封装的正确性

```c
//test.c
uint32_t str[3];
struct cpuid_return_struct cpu_fetures;
cpuid_cpu_feature(&cpu_fetures);
str[0] = cpu_fetures.ebx;
str[1] = cpu_fetures.edx;
str[2] = cpu_fetures.ecx;
write_str(0x07,str);

```
Windows 10 环境下 qemu-system-x86_64虚拟机执行结果：
>AuthenticAMD
