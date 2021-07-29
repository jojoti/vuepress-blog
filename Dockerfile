# @author JoJo Wang
# @link github.com/jojoti
# @url https://github.com/jojoti/jo2env/
# rf: https://vuepress.vuejs.org/zh/guide/getting-started.html
ARG NODE_VERSION=15

FROM node:${NODE_VERSION}

ADD . /home/blog
RUN cd /home/blog
RUN yarn install