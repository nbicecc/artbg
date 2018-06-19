# Linux JDK1.8安装配置
## 必要软件
- ssh
- jdk-8u131-linux-x64.tar.gz安装包
## 配置信息
- 安装目录：/usr/local/jdk/jdk1.8
- 配置过程

    1.	首先ssh登陆服务器root账户；
    2.	将压缩包解压到安装目录；
    3.	配置环境还变量；
    ```shell
    tar zxvf /root/softwares/jdk-8u131-linux-x64.tar.gz -C /usr/local/
    mkdir /usr/local/jdk
    mv /usr/local/jdk1.8.0_131 /usr/local/jdk/jdk1.8
    ```
- 打开/etc/profile写入以下内容：
    ```
    JAVA_HOME=/usr/local/jdk/jdk1.8
    JRE_HOME=$JAVA_HOME/jre
    CLASSPATH=:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib/dt.jar
    export JAVA_HOME JRE_HOME CLASSPATH
    PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
    ```
    ```shell
    vim /etc/profile
    ```

## 使配置立即生效
```shell
source /etc/profile
```

## 测试JAVA环境配置
```shell
java -version
```
输出版本信息就说明配置成功了。
