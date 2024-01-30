## 防火墙
iptables -I INPUT -p tcp --dport 8080 -j ACCEPT
iptables -I INPUT -p udp --dport 60001:61000 -j ACCEPT

iptables-save

## 永久生效
- 安装 iptables-persistent

sudo apt-get -y install iptables-persistent

netfilter-persistent save


## 允许ping
`echo 0 > /proc/sys/net/ipv4/icmp_echo_ignore_all`

## 快速生成大文件 4G
dd if=/dev/zero of=file bs=1M count=4000

## 硬盘测速

dd if=/dev/zero of=./testfile bs=1M count=400 oflag=direct

## Rename

rename 's/ \[\d{10}\]//' *.mp3  # 去除末尾数字

rename 's/ //' *.mp3

**如何使用 wget 下载一个目录下的所有文件**

wget -r -np -nH --cut-dirs=1 'http://v.huidengvan.com/hdv/sound/fjkxl/' -R 'index.html*'

各个参数的含义：

-r : 遍历所有子目录  
-np : 不到上一层子目录去  
-nH : 不要将文件保存到主机名文件夹  
-R index.html : 不下载 index.html 文件
