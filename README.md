# vuepress blog starter [像这样的博客](https://jojoti.github.io/)

## 1.构建步骤

### 1.1仓库 ok

0. 确保`git`环境`ssh`等ok
1. `git clone git@github.com:jojoti/blog-vuepress-starter.git`
2. `git remote rm origin`
3. `git remote add origin [yours blog git address]`
4. `git pull origin master --allow-unrelated-histories`

### 1.2. vuepress 配置

1. logo 文件地址, 自定替换 `./blog/.vuepress/public/logo.png`

2. 使用 text editor (`vscode`, `atom`, `sublime`...)
   打开 `./blog/.vuepress/config.js` [详细配置参考](https://vuepress.vuejs.org/zh/config/)

3. `必须`修改的配置:
    + `themeConfig.docsRepo` 修改为自己的github地址
    + `nav` 里找到留言修改仓库 issue 地址

4. 修改一些显示配置:
    + `title`
    + `description`
    + `locales.title`
    + `locales.description` 等

### 1.3. 大工告成

+ `git push --mirror`

## 2.本地调试

1. 确保`docker``docker-compose`环境ok
2. docker-compose up
3. 浏览器打开: [http://127.0.0.1:8081](http://127.0.0.1:8081)

## License CC BY-NC-SA 4.0

<p align="left">
  <img src="./cc4-license.png" alt="CC4 License"/>
</p>

[署名-非商业性使用-相同方式共享 4.0 (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)
