# nav-键盘
### 使用
- 键盘按键在按A-Z的时候会自动跳转相应的网站。
- 搜索框当按<kdb>enter</kdb>键时候会自动百度搜索，谷歌就没做，反正智能翻墙吧，推荐[SS](https://github.com/shadowsocks/shadowsocks-windows)
### 问题
1. 关于display: inline-block, 两两之间有空隙, 找了半天都没找到问题,FK,只能用inline-table;
2. document我们对他进行绑定事件onkeypress，但是对于input输入框的时候在不阻止事件冒泡的情况会导致，，可有自己试试，反正很恶心。
