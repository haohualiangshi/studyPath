### git学习###

git是开源的分布式版本管理工具；svn是使用的最多的集中式版本控制工具；

一：命令行的使用

* 初始化一个空的仓管库

~~~
git init
~~~

* 使用git必须使用git配置用户名和邮箱 

  ~~~
  git config username "xxxx"
  git config user.email "xxxx.com"
  ~~~


* 配置全局的用户和邮箱

  ~~~
  git config --global user.name "xxx"
  git config --global user.name "xxx.com"
  ~~~


* 初始化项目

  ~~~
  touch main.m//创建main.m文件
  ~~~


* 查看状态：红色代表文件被添加或者修改，没有添加到暂缓区；绿色说明文件被添加到暂缓区；注意：添加的文件或者修改的文件都要通过add命令添加到文件暂缓区

  ~~~
  git status    //查看状态
  ~~~


* 将文件提交到暂缓区

  ~~~
  git add .或者[文件名]//.表示将所有更改或添加文件添加到暂缓区
  ~~~

* 将文件提奖到本地

  ~~~
  git commit -m "文件说明" [要提交的文件名；可有可无]
  ~~~

二：工作原理

	1. 工作区（work directory）：仓库文件夹里除.git目录外的内容
	2. 版本库（respository）：.git目录；用于存储记录版本信息
	3. 暂缓区（stage）：文件提交需要使用add命令行添加到暂缓区
	4. 分支（master）：git自动创建的第一个分支
	5. HEAD指针：用于指向当前分支
	6. git add 和git commit的原理
		1. git add 把添加的问价或者是修改的文件添加到暂缓区
		2. git commit 把暂缓区的所有内容提交到当前分支

三：给命令行使用别名

~~~
git config alias.st "status"//这句话的意思是将git status的命令行定义为git st
~~~

四：删除文件

~~~

~~~

五：查看版本信息

~~~
git log  //显示的版本号是由sha1算法生成的40位哈希值


get reflog   //可以查看所有版本回退的操作
~~~

六：版本回退：使用共享版本库进行回退时最好先进行备份；共同开发要告诉别人你回退了

~~~
git reset --hard HEAD  //回到当前版本
git reset --hard HEAD^  //回到上一个版本
git reset --hard HEAD^^   //回到上上一个版本
git reset --hard HEAD~100   //回到前100个版本
git reset --hard 版本号(前五位)


git push -f //强制版本推送；该方法会把上个版本指针永久删除，慎用
~~~

七：共享版本库

1. git服务器的搭建非常繁琐；需要在linux系统
2. 把代码托管到github/OSchina
3. 一个文件夹（在window下无法使用
4. 一个U盘

使用文件夹构建一个版本库：

1. 在目标i文件夹下运行`git init --bare `
2. 新建开发文件；将共享项目的所有文件下载到本地`git clone 地址文件地址`
3. 忽略文件  `touch .gitignore`并配置；忽略不需要提交的文件

八：版本备份的重要事项（举个版本备份的例子）

1. 新项目开发完毕后；对项目进行备份（打上标签）`git tag -a xxx(标签名字) -m`；查看tag使用`git tag`
2. 将标签push到共享版本库中`git push origin  xxx(tag名)`
3. 开始2.0版本的开发
4. 要更改1.0版本的程序时；先将共享版本库的所有内容clone
5. 将当前代码转为1.0版本的标签；转为1.0标签`git checkout xxx(标签名)`;创建分支`git checkout -b <new-branch-name>`
6. 在分支中修复bug；修复bug后打上tag并上传到共享版本库；注意tag名不能重复且不能和分支名字相同
7. 跟当前正在开发的2.0版本合并
8. 删除分支
   * git branch  ：查看当前在哪个分支
   * git branch -r ：查看本地版本库的分支
   * git branch -d xxx(分支名)  删除本地分支
   * git branch -r -d origin/xxx(分支名字)  删除本地版本库的分支
   * git push origin --delete xxx(分支名字)  删除远程库的分支

九：git命令总结

* git init 初始化
* git add .或者是git add “文件名";将文件添加到暂存区
* git status查看文件的状态
* git commit -m "msg"：将文件添加到本地仓库
* git log查看提交的状态（q退出）git reflog查看过去的所有版本信息
* git reset --hard^回退到上一个版本；可以使用~数字制定回退多少个版本
* git reset --hard 版本号：回退到制定版本的项目
* git diff HEAD -- "FILE"比较文件在版本和工作区之间的差异
* git checkout -- "file"将工作区和暂存区进行比较，丢弃工作区的修改；回到add到暂存区后的版本
* git reset --soft HEAD 'file'将暂存区和HEAD版本进行比较；丢弃暂存区的修改
* git branch -a查看分支；包括远程分支
* git branch -r 查看远程分支
* git branch ‘branchname’创建分支
* git checkout ‘branchname'切换分支
* git checkout -b 'branchname' 创建并切换分支
* git merge ’branchname'合并分支到当前分支
* git merge-no-ff 'branchname'用普通模式合并分支；这样就能看到分支记录
* git branch -d 'brachname' 删除分支
* git branch -D ‘branchname'强行删除分支
* git log –graph –pretty=oneline 查看分支图
* git remote add [origin][git address]：添加远程仓库，将本地仓库链接到git address对应的远程仓库，然后就可以push本地内容到git远程仓库了；
* git remote -v 查看远程仓库信息