# Zoo_Y
:yum: Based on Vue + VUex + VUE-Router + Express + Vue Material Kit development of an animal protection forum project

This is a course project with the following requirements:

1. The home page can display videos, have the introduction of pandas and link to jump to the forum interface.

2. Users who have not logged in can only view posts, but not post or comment

3. Logged in users can post and comment

4. Posts from users are displayed on the page only after being confirmed by the administrator.

5. The administrator can delete posts


## 预览

#### 主页

![主页](images/1.png)

#### 帖子页面
![帖子页面](images/2.png)

#### 帖子详情
![帖子详情](images/3.png)

#### 登录界面
![管理员界面](images/4.png)

#### 管理员界面（登录账号：Admin,密码:123456）
![点击moderator](images/admin.png)
![管理员界面](images/5.png)

#### 其他界面欢迎探索...

#### 技术栈

**前端**

* `Vue`：用于构建用户界面的 MVVM 框架
* `vue-router`：为单页面应用提供的路由系统
* `vuex`：Vue 集中状态管理，用来保存登录状态和登录的用户信息，便于多个组件共享
* `vue material`:Vue组件库


**后端**

* `Express`：基于Node.js平台的Web开发框架，本项目使用Express进行后端的开发
* `Multer`：node.js中间件，用于处理multipart/form-data类型的表单数据，本项目中主要用于上传文件
* `bcrypt`: 密码加密
* `cookie-parser`:解析cookie


**其他工具**

* `sqllite`: 用于连接和操作sqllite数据库
* `vue-cli`：Vue 脚手架工具，快速初始化项目代码
* `eslint`：代码风格检查工具
* `prettier` ：自动格式化代码


## 最后

做的很急，有时间会重新写一下，欢迎交流！

## Build Setup
```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build
```
## Backend
```bash

cd server

node app.js
```
