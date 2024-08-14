
安装 nodejs 的过程真的是艰苦，用镜像源就好多了

NVM_NODEJS_ORG_MIRROR=http://mirrors.cloud.tencent.com/nodejs-release/

nvm 安装完成以后使用这个镜像以后再去安装 nodejs

顺便设置一下 npm 的镜像。。。为了后续使用

```

npm config set registry http://mirrors.cloud.tencent.com/npm/

```