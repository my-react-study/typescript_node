###typescript node运行环境搭建
1. 安装 typescript 命令工具

```
npm install -g typescript
```

2. 初始化 node 项目

创建项目文件夹并进入文件夹执行以下命令

```
npm init
```

3. 生成 tsconfig.json 文件

如果一个目录下存在一个 tsconfig.json 文件，那么它意味着这个目录是 TypeScript 项目的根目录。 tsconfig.json 文件中指定了用来编译这个项目的根文件和编译选项

```
tsc --init
```

4. 修改 tsconfig.json 配置文件

取消 outDir 和 rootDir 的注释并修改路径分别为`./out`和`./src`

5. 在根目录创建 out 和 src 目录

并在 src 下创建 intex.ts 文件，里面写入以下内容

```
console.log("hello");
```

6. 修改 package.json 的命令

在 scripts 节点创建如下命令

```
"start": "tsc && node out/index.js "
```

7. 执行 `npm start` 命令即可运行 ts 代码

### 安装request包
~~~
yarn add request
yarn add @types/request
~~~
