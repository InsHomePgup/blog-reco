vue会检测ref的更新并且去更新Dom，但是这个不是同步发生的，可以在数据变更中调用nextTick() 等dom刷新以后再进行其他操作。
ref的更新和dom的更新是异步的。
``` js
import { nextTick } from 'vue'
async function increment() {
  count.value++
  await nextTick()
  // Now the DOM is updated
}
```

ref可以检测到一些深度嵌套的对象以及js的数组和map