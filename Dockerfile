# @author JoJo Wang
# @link github.com/jojoti
# @url https://github.com/jojoti/jo2env/
# rf: https://vuepress.vuejs.org/zh/guide/getting-started.html
ARG NODE_VERSION=15

FROM node:${NODE_VERSION}

WORKDIR /home/docs/

ADD ./ /home/docs/
RUN cd /home/docs/
# yarn install error: error https://registry.yarnpkg.com/regjsparser/-/regjsparser-0.6.9.tgz: Extracting tar content of undefined failed, the file appears to be corrupt: "ENOENT: no such file or directory, stat '/usr/local/share/.cache/yarn/v6/npm-regjsparser-0.6.9-b489eef7c9a2ce43727627011429cf833a7183e6-integrity/node_modules/regjsparser/CHANGELOG'"
# https://stackoverflow.com/questions/63103518/yarn-install-errors-with-enoent-no-such-file-or-directory
RUN yarn install --frozen-lockfile