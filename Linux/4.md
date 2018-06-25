## Jupyter lab的安装、配置与后台运行
1. 安装
   - 安装conda
   - 用conda安装jupyterlab

2. 生成配置文件
   ```shell
   jupyter notebook --generate-config
   ```
    
3. 生成密码

   - 打开ipython，创建一个sha1密码：
   ```python
    In [1]: from notebook.auth import passwd
    In [2]: passwd()
    Enter password: 
    Verify password: 
    Out[2]: 'sha1:cexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
   ```
   - 复制‘sha:cexxxx....’备用
    
4. 修改配置文件

   ```shell
   $vim ~/.jupyter/jupyter_notebook_config.py 
   修改如下内容：
   # 接受请求的ip，*为接受所有ip的请求
   c.NotebookApp.ip='*' 
   # 第3步中生成的密文
   c.NotebookApp.password = u'sha:cexxxx....' 
   # 不打开浏览器
   c.NotebookApp.open_browser = False
   # 服务端口，默认8888，可以修改为自定义端口
   c.NotebookApp.port = 8888
   ```
    
5. 启动jupyter notebook & lab：
   
   如果每次使用都手动打开服务则只需要每次执行以下代码
   打开jupyter notebook
   ```shell
   $ jupyter notebook 
    
   ```
   打开jupyter lab
    
   ```shell
   $ jupyter lab 
   ```

6. 在服务器后台运行jupyter notebook & lab
   ```shell
   $ (jupyter lab &)
   ```