# x86 long mode
## x86 与 x86_64
## PAE-Paging and Legacy-Paging
- 传统分页模式

- PAE分页模式

## 进入long mode的步骤
1. 测试是否支持CPUID
  ```asm
  ;测试FLAGS的第21位是否为1
  pushad
  pushfd
  pop eax
  mov ecx, eax
  xor eax, 1 << 21
  push eax
  popfd
  pushfd
  pop eax
  push ecx
  popfd
  mov %输出,0   ;%输出是内存区域
  xor eax,ecx
  jb nocpuid
  mov %输出,1   ;%输出是内存区域
nocpuid:
  popad
  ```

2. 测试是否支持long mode
