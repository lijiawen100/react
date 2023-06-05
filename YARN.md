# YARN

## 安装

```
npm install  --global yarn
或者：使用老师提供的安装包
yarn -v 查看版本号
```

## 使用

初始化一个新项目

```
yarn init
```

添加依赖包

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

将依赖项添加到不同依赖项类别中

分别添加到dependencies，devDependencies，peerDependencies，optionalDependencies类别中

```
yarn add [package]  --save | -S
yarn add [package]  --dev  | -D
yarn add [package]  --peer
yarn add [package]  --optional
```

升级依赖包

```
yarn update [package]
yarn update [package]@[version]
yarn update [package]@[tag]
```

移除依赖包

```
yarn remove [package]
```

安装项目的全部依赖

```
yarn
```

安装到全局

```js
yarn global add [package] //global的位置不能变
yarn global remove [package]
```

