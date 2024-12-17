---
title: How to use git branch
date: 2024/05/09
tags:
  - git
categories:
  - git
sticky: 1
---
Git Branch 
##### 创建与切换分支
git checkout 也有一些分支的操作，更推荐使用switch来切换分支。

``` shell

# 切换分支
git switch [branchName]

git checkout [branchName]

# 创建并切换到一个新分支
git switch -c [branchName]
```

##### 查看本地分支和远程分支

```shell
# 本地
git branch
#远程
git branch -a

```

##### 删除本地分支和删除远程分支

```shell
# 删除本地分支
git branch -d [branchName]

# 删除远程分支
git push origin -d [branchName]
git push origin --delete [branchName]

```