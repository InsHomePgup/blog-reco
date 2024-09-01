### React学习
首先用vite + react启动一个react-ts项目
删除多余的内容，仅保留app和main

## html插入动态内容，动态属性

``` jsx

function App()  {  
	const name = 'foo'
	return(
		 <div title={name}> /** 使用属性*/
			{name}
		</div>
	)
}
// 一个花括号里面输入来使用js表达式和变量
```

## 事件操作，获取事件对象event


``` jsx
// 事件操作
function App() {  
    function test(number1?: number, event?: any) {  
        console.log(number1, event)  
    }  
  
    return (  
        <div>  
            {/*调用方式1*/}  
            <button onClick={test.bind(null, 123)}>  
            </button>  
            {/*调用方式2*/}  
            <button onClick={() => {  
                test(123)  
            }}></button>  
            {/* 箭头函数拿到click事件对象，箭头函数传参就是event*/}  
            <button onClick={(event) => {  
                test(123, event)  
            }}></button>  
            {/*bind方式拿到event，默认最后一个参数就是event*/}  
            <button onClick={test.bind(null, 123)}></button>  
        </div>  
    )  
}  
  
export default App
```

## 实现html循环遍历

``` jsx

// v-for的react实现，遍历html   v
  
const arr = [1, 2, 3]  
  
const persons = [  
    {  
        name: 'foo'  
    },  
    {  
        name: 'egg'  
    }  
]  
  
function App() {  
    return (  
        <div>  
            <div>  
                {  
                    arr.map((item, index) => {  
                        return <div key={index}>  
                            {item}  
                        </div>  
                    })  
                }  
            </div>  
            <div>  
                {  
                    persons.map((item, index) => {  
                        return <div key={index}>  
                            {item.name}  
                        </div>  
                    })  
                }  
            </div>  
        </div>  
    )  
}  
  
export default App

```

## 添加内联样式

``` jsx
// 添加内联样式  
const style1 = {  
    width: '100px',  
    height: '100px',  
    backgroundColor: 'lightskyblue'  
}  
  
const style2 = {  
    width: 200  
}  
  
/**  
 * 媒体查询 + 伪类使用 radium包裹  
 */  
  
function App() {  
    return (  
        <div>  
            <div style={{backgroundColor: 'lightskyblue', width: '100px', height: '50px'}}></div>  
            <div style={style1}></div>  
            <div style={{...style1,...style2}}></div>  
        </div>  
    )  
}  
  
export default App
```

## 添加外部css文件

``` js
import './index.css'
```

```css

/** index.css**/

.box1 {  
    width: 100px;  
    height: 100px;  
    background-color: lightskyblue;  
}

```

```jsx
// 外源css的使用
function App() {  
    return (  
        <div className={ 'box1' }></div>  
    )  
}  
  
export default App

```