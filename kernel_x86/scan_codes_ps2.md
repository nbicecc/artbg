## PS/2 Keyboard Scan Codes Table
### 描述
PS/2键盘扫描码分为“make”和“break”，当按键被按下，键盘控制器根据设置的重复率在0x60端口返回按键的“make”码，当按键被释放，键盘控制器返回对应按键的“break”码。

### 键盘扫描码表
|key|make(break)|key|make(break)|
|-|-|-|-|
|ESC|76 (F076)|K|42 (F042)|
|F1|05 (F005)|L|4B (F04B)|
|F2|06 (F006)|;|4C (F04C)|
|F3|04 (F004)|'|52 (F052)|
|F4|0C (F00C)|Enter|5A (F05A)|
|F5|03 (F003)|Shift (Left)|12 (F012)|
|F6|0B (F00B)|Z|1A (F01A)|
|F7|83 (F083)|X|22 (F022)|
|F8|0A (F00A)|C|21 (F021)|
|F9|01 (F001)|V|2A (F02A)|
|F10|09 (F009)|B|32 (F032)|
|F11|78 (F078)|N|31 (F031)|
|F12|07 (F007)|M|3A (F03A)|
|Prt Scr|E012E07C (E0F07CE0F012)|,|41 (F041)|
|Scroll Lock|7E (F07E)|.|49 (F049)|
|Pause/Break|E11477E1F014E077 (None)|/|4A (F04A)|
|`|0E (F00E)|Shift (Right)|59 (F059)|
|1|16 (F016)|Ctrl (left)|14 (F014)|
|2|1E (F01E)|Windows (left)|E01F (E0F01F)|
|3|26 (F026)|Alt (left)|11 (F011)|
|4|25 (F025)|Spacebar|29 (F029)|
|5|2E (F02E)|Alt (right)|E011 (E0F011)|
|6|36 (F036)|Windows (right)|E027 (E0F027)|
|7|3D (F03D)|Menus|E02F (E0F02F)|
|8|3E (F03E)|Ctrl (right)|E014 (E0F014)|
|9|46 (F046)|Insert|E070 (E0F070)|
|0|45 (F045)|Home|E06C (E0F06C)|
|-|4E (F04E)|Page Up|E07D (E0F07D)|
|=|55 (F055)|Delete|E071 (E0F071)|
|Backspace|66 (F066)|End|E069 (E0F069)|
|Tab|0D (F00D)|Page Down|E07A (E0F07A)|
|Q|15 (F015)|Up Arrow|E075 (E0F075)|
|W|1D (F01D)|Left Arrow|E06B (E0F06B)|
|E|24 (F024)|Down Arrow|E072 (E0F072)|
|R|2D (F02D)|Right Arrow|E074 (E0F074)|
|T|2C (F02C)|Num Lock|77 (F077)|
|Y|35 (F035)|/|E04A (E0F04A)|
|U|3C (F03C)|*|7C (F07C)|
|I|43 (F043)|-|7B (F07B)|
|O|44 (F044)|7|6C (F06C)|
|P|4D (F04D)|8|75 (F075)|
|[|54 (F054)|9|7D (F07D)|
|]|5B (F05B)|+|79 (F079)|
|\|5D (F05D)|4|6B (F06B)|
|Caps Lock|58 (F058)|5|73 (F073)|
|A|1C (F01C)|6|74 (F074)|
|S|1B (F01B)|1|69 (F069)|
|D|23 (F023)|2|72 (F072)|
|F|2B (F02B)|3|7A (F07A)|
|G|34 (F034)|0|70 (F070)|
|H|33 (F033)|.|71 (F071)|
|J|3B (F03B)|Enter|E05A (E0F05A)|
