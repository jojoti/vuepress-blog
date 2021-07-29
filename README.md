# blog vuepress starter <a href="https://jojoti.github.io/" target="_blank">像这样的博客</a>

## 1.构建步骤

### 1.0. 准备个人仓库

1. 个人博客,仓库名字满足以下约束`username.github.io`, 例如`jojoti.github.io`
2. 项目文档,仓库名字随意

### 1.1. git checkout

1. 确保`git`环境`ssh`等ok
2. `git clone https://github.com/jojoti/blog-vuepress-starter.git`
3. `git remote rm origin`
4. `git remote add origin [yours blog git address]`
   例如: `git remote add origin git@github.com:jojoti/jojoti.github.io.git`
5. `git pull origin main --allow-unrelated-histories`

### 1.2. vuepress 配置

1. logo 文件地址, 自定替换 `./blog/.vuepress/public/logo.png`

2. 使用 text editor (`vscode`, `atom`, `sublime`...)
   打开 `./blog/.vuepress/config.js` [详细配置参考](https://vuepress.vuejs.org/zh/config/)

3. `必须`修改的配置:
    + `themeConfig.docsRepo`
      修改为自己的github地址, [找不到点击这里](https://github.com/jojoti/blog-vuepress-starter/blob/3ac8038c7204a3e5903abdc3f9f2464ec8e7b970/blog/.vuepress/config.js#L26)
    + `nav` 里找到留言修改仓库 `issue`
      地址, [找不到点击这里](https://github.com/jojoti/blog-vuepress-starter/blob/3ac8038c7204a3e5903abdc3f9f2464ec8e7b970/blog/.vuepress/config.js#L52)

4. 修改一些显示配置:
    + `title`
    + `description`
    + `locales.title`
    + `locales.description` 等

### 1.3. 大工告成

1. `git push --mirror`
2. 打开仓库设置: setting -> pages -> source -> select `gh-pages` -> `save`
3. 点击 Your site is ready to be published at https://jojoti.github.io/blog-vuepress-starter/

### 1.4. 特别的自定义域名

1. [修改本地代码配置,去掉注释](https://github.com/jojoti/blog-vuepress-starter/blob/3ac8038c7204a3e5903abdc3f9f2464ec8e7b970/.github/workflows/vuepress.yml#L34)
2. 修改根目录,[CNAME](./CNAME)文件写上自己的域名, [例如](https://github.com/deliangyang/sntflyv.github.io/blob/master/CNAME)
3. 去域名运营商添加CNAME记录指向 `username.github.io`

## 2. 本地调试

1. 确保 `docker` `docker-compose` 环境ok
2. docker-compose up , 第一次比较慢, 大约300s, 臃肿的`nodejs`, 体谅一下
3. 浏览器打开: [http://127.0.0.1:8080](http://127.0.0.1:8080)

## License CC BY-NC-SA 4.0

<p align="left">
  <img src="./cc4-license.png" alt="CC4 License"/>
</p>

[署名-非商业性使用-相同方式共享 4.0 (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)
