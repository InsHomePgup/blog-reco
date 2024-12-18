在官网的教程里演示的是添加json的plugin。
那么作为举一反三的能力，我选择添加ts的plugin
# @rollup/plugin-typescript
不知道怎么上手，那我先安装这个包试试。
``` bash
pnpm add @rollup/plugin-typescript --save-dev
```

![](https://raw.githubusercontent.com/InsHomePgup/pic_go_img/main/Pasted%20image%2020240830175050.png)

根据npm上的介绍，还需要安装这两个包。
```
pnpm add typescript tslib -S -D
```

然后配置文件添加plugin的配置

``` js

import typescript from '@rollup/plugin-typescript';  
export default {  
    input: 'src/main.js',  // 入口  
    output: {  // 出口  
        file: 'bundle.js',  
        format: 'cjs'  // 打包规范  
    },  
    plugins: [typescript()]  
};

```
npm 的介绍上说使用行内的写tsconfig的方法，我想了一下还是用文件的形式。

根目录创建tsconfig.json 文件
然后简单写入一些基础配置

``` json
// tsconfig.json 之前测试ts的时候的配置，随便加进来的
{  
  "compilerOptions": {  
    "module": "NodeNext",  
    "moduleResolution": "NodeNext",  
    "resolvePackageJsonExports": true,  
    "resolveJsonModule": true,  
    "allowImportingTsExtensions": true  
  }  
}
```

同时去修改rollup的config
``` js
// rollup.config.js
import typescript from '@rollup/plugin-typescript';  
export default {  
    input: 'src/main.js',  // 入口  
    output: {  // 出口  
        file: 'bundle.js',  
        format: 'cjs'  // 打包规范  
    },  
    plugins: [  
        typescript({  
            tsconfig: './tsconfig.json',  
        })  
    ]  
};

```

看上去非常不错，那么现在pnpm run build一下，很好，报错了。。
```
[!] (plugin typescript) RollupError: [plugin typescript] @rollup/plugin-typescript: Couldn't process compiler options
```
