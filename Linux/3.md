# Centos MySQL5.6数据库安装配置
## 必要软件
- SSH
- mysql-5.6.33-linux-glibc2.5-x86_64.tar.gz安装包
## 配置信息
1. 新建Linux用户组：mysql
1. 新建Linux用户：mysql 隶属于mysql组
1. Localhost登陆信息：
    - 账户：root
    - 安装目录：/usr/local/mysql
    - 数据和log所在目录：/home/mysql/{data,log}
## 配置过程

1. 新建软件安装包目录，并下载MySql发行版解压包
    ```shell
    mkdir softwares 
    cd softwares
    wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.20-linux-glibc2.12-x86_64.tar.gz
    ```
2. 安装编译工具和依赖包，在CentOS中，用yum包管理工具安装，ubuntu中使用apt安装。
    ``` shell
    yum -y install make gcc-c++ cmake 
    yum -y install bison-devel ncurses-devel libaio
    ```
3. 删除CentOS默认安装的mariadb
    ```shell
    rpm -qa | grep mariadb
    rpm -e --nodeps `rpm -qa|grep mariadb `
    ```
4. 新建mysql用户组和msyql用户
    ```shell
    groupadd mysql
    useradd -g mysql mysql
    ```
5. 解压文件
    ```shell
    tar zxvf /root/softwares/mysql-5.7.20-linux-glibc2.12-x86_64.tar.gz -C /usr/local/
    mv /usr/local/mysql-5.7.20-linux-glibc2.12-x86_64 /usr/local/mysql
    ```
6. 新建my.cnf配置文件
    ```shell
    vim /etc/my.cnf
    ```
7. 复制启动文件
    ```shell
    cp /usr/local/mysql/support-files/mysql.server /etc/rc.d/init.d/mysqld```
    ```
8. 修改mysqld的执行权限
    ```shell
    chmod +x /etc/rc.d/init.d/mysqld
    ```
9. 将mysqld服务加入到系统服务
    ```shell
    chkconfig --add mysqld
    ```

10. 写入以下内容：
    ```ini
    [mysqld]
    server_id=01
    port = 3306
    user = mysql
    character-set-server = utf8
    default_storage_engine = innodb
    log_timestamps = SYSTEM
    socket = /tmp/mysql.sock
    basedir = /usr/local/mysql
    datadir = /home/mysql/mysql/data
    pid-file = /home/mysql/mysql/data/mysql.pid
    max_connections = 500
    max_connect_errors = 220
    table_open_cache = 1024
    max_allowed_packet = 128M
    open_files_limit = 65535
    innodb_buffer_pool_size = 1024M
    innodb_file_per_table = 1
    innodb_write_io_threads = 4
    innodb_read_io_threads = 4
    innodb_purge_threads = 2
    innodb_flush_log_at_trx_commit = 1
    innodb_log_file_size = 512M
    innodb_log_files_in_group = 2
    innodb_log_buffer_size = 16M
    innodb_max_dirty_pages_pct = 80
    innodb_lock_wait_timeout = 30
    innodb_data_file_path=ibdata1:1024M:autoextend
    log_error = /home/mysql/mysql/log/mysql-error.log 
    slow_query_log = 1
    long_query_time = 1 
    slow_query_log_file = /home/mysql/mysql/log/mysql-slow.log
    sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
    ```
11. 切换到mysql用户
    ```shell
    su - mysql
    ```

12. 新建日志文件夹
    ```shell
    $ mkdir -p ./mysql/{data,log}
    ```
12. 设置目录权限（可能需要切换到root帐户或者给mysql设置密码后sudo）
    ```shell
    chown -R mysql:mysql /usr/local/mysql ./mysql
    ```
13. 设置环境变量
- 打开.bashrc
    ```bash
    vim .bashrc
    ```
- 添加以下内容
    ```bash
    export MYSQL_HOME="/usr/local/mysql"
    export PATH=$PATH:$MYSQL_HOME/bin
    ```
14. 执行
    ```shell
    source .bashrc
    ```
15. 初始化数据库
    ```shell
    mysqld --initialize --user=mysql
    ```
    执行上面的命令初始化数据库，mysql会自动为数据库root用户设置随机密码
    > 如果遇到如错误，警示data文件夹不为空。因为初始化时，data文件夹必须为空，确认data里没有重要数据后可以直接删除data文件夹和log文件夹里的文件 ，再执行初始化命令。
    执行以下代码找到自动设置的随机密码，最后一个匹配的就是最新的密码。 
    ```shell
    $ grep 'password .* generated' ~/mysql/log/mysql-error.log
    ```

16. 打开数据库服务
    ```shell
    service mysqld start
    ```

17. 用MySql 客户端登陆
    ```shell
    mysql -uroot –p’默认密码’
    ```
    如果再登陆后执行sql语句时遇到：ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement错误，则需要修改默认密码，实际部署应该设置比较复杂的密码。
    解决办法
    ```shell
    mysql> alter user 'root'@'localhost' identified by 'newpassword*2018example';
    mysql> flush privileges;  
    ```
    或者
    ```shell
    mysql> set password=password("newpassword*2018example");
    mysql> flush privileges;
    ```

## 导入数据
可以使用Navcat访问数据库直接或者使用linux的scp工具上传sql备份数据到服务器，用mysql恢复sql文件到数据库。
以下操作需要转到mysql用户，
    ```shell
    su - mysql
    ```
	增加数据库远程访问权限。(用navcat链接会用上/直接用服务器上的mysql操作可以跳过)
1. 登陆mysql
    ```shell
    $ mysql -uroot -p'newpassword*2018example'; 
    mysql>use mysql;
    mysql> update user set host='%' where user='root';
    ```
2. 还原数据库。
用navcat链接数据库。新建example数据库并导入备份数据。
	由于暂时没有打开3306端口，无法使用软件导入，暂时使用mysql导入
3. 新建example数据库
	```
    mysql> create database if not exists example default charset utf8 COLLATE utf8_general_ci;
    ```
4. 查看数据库
    ```mysql> show databases;
    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | example            |
    | mysql              |
    | performance_schema |
    | sys                |
    +--------------------+
    5 rows in set (0.00 sec)
    ```

    存在以上数据库，example创建成功，现在导入数据库备份
    ```
    mysql> source ~/backpack/example.sql
    ```
    如果没有出现错误则成功导入备份数据。
5. 防火墙配置
因为需要远程访问数据库，需要开启3306端口,也可以修改默认端口.