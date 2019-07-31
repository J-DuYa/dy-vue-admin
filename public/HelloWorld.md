> 毒牙君 If you don't work hard, who will help you.

自己写的项目源代码：https://github.com/dyJunZou/iviewWorld 项目面向的是初学者和想要自己大项目没有点思路的程序猿。下面的讲解，主要讲 Vue-router 官网的讲解精简了一下，如有不好的地方，可以指出来，谢谢！
项目图片：
[图片]![在这里插入图片描述](https://img-blog.csdnimg.cn/20190711172525556.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MDIzMTE2,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190507212942500.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MDIzMTE2,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190507213030308.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MDIzMTE2,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190507213046748.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MDIzMTE2,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190507213108991.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MDIzMTE2,size_16,color_FFFFFF,t_70)
vue 具有 RESTful 模式的路由。
RESTful 作为一种架构风格，是一种设计风格而不是一个标准，只提供了一组设计原则和约束条件，它主要用于客户端和服务器端交互的`桥梁`。基于这种风格设计的应用可以`更简洁、更有层次、更易于`实现缓存等机制。

### Vue 的路由 vue-router@3.0+

vue-router 在 vue 中充当一个非常强大的角色。通过 vue-router，vue 可以更加方便的进行路由控制。开发者可以通过`vue-router+Vue`实现一个强大的单页面的应用。

> Vue 脚手架搭建项目的指令：`vue init webpack 项目名称`

基础路由的构成

```
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({  //实例化一个路由对象
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
```

在它原有的基础上动一下，是的代码更加的简洁

```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')  // 改变引入的方式，减少引入组件的不便
    }
  ]
})
```

当然在很多时候路由都是公用的一个页面可以提供给不同的角色参数使用。

1.  可以通过组件封装；
2.  可以通过路由配置（动态路由）；
    > 动态路由在相同路由之间切换是不会有 history 的变化所以 浏览器的返回键不会如愿以尝的返回你想返回的页面。

> 动态路由的变化可以通过`watch`监听得到，也可以通过 vue-router 的 beforeRouteUpdate 进行监听。
>
> 通过`watch`监听

```
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```

或

通过 vue-router 的 beforeRouteUpdate 进行监听

```
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // 当路由发生改变...
    // 不要忘记使用next()
  }
}
```

vue-router 导航守卫经常用到的情况之一就是：`登录权限验证`和`组件内部内容权限的验证`，只有当用户`满足一定的条件`才能进行`登录`和`进行部分内容的访问和操作`。当然，如果路由 route`寻找不到页面`的时候，应用通常需要返回`404页面`以告诉用户当前访问的页面不存在，这样你的应用的用户感知会更加的`好`。

> 通常使用通配符`*`来配置 404 页面的`访问`，当然通配符必须`配置在所有路由的后面`，以保证路由展示正确。

> 如果要配置 500 页面，可以使用`$route.push({ path: '500' })`进行访问

### 进阶版导航守卫

> “导航”表示路由正在发生改变

vue-router 总共有三个全局守卫，分别是：`beforeEach`, `beforeResolve`, `afterEach`。
`beforeEach`:

```
const router = new Router({ ... })
router.beforeEach((to, from, next) => {
	// to 将要进入的页面
	// from 即将离开的页面
	// next 必须配置的 next(false)路由跳转; next({ path: `跳转路由的path值` })
	// TODO
})
```

`beforeResolve`:

```
const router = new Router({...})
router.beforeResolve((to, from, next) => {
	// 跟beforeEach类似
	// 区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
})
```

`afterEach`:

```
const router = new Router({...})
router.afterEach((to, from) => {
	// to 进入的页面
	// from 进入前的页面
})
```

### 组件内守卫

组件内守卫同样也有三个：`beforeRouteEnter`, `beforeRouteUpdate`, `beforeRouteLeave`

- beforeRouteEnter

```
export default {
	name: '...',
	beforeRouteEnter(to, from, next) {
		// 不能使用this， 因为该组件在这时候还没有实例化
	}
}
```

- beforeRouteUpdate

```
export default {
	name: '...',
	beforeRouteUpdate(to, from, next) {
		// 能使用this，组件此时已经被实例化
		//当前路由被复用的时候调用，例如：/user/:id => // /user/1 and /user/2
	}
}
```

- beforeRouteLeave

```
export default {
	name: '...',
	beforeRouteLeave(to, from, next) {
		// 即将离开当前路由时触发
		// 能使用this，组件此时已经被实例化
	}
}
```

```
/**
--> 导航被触发。
--> 在失活的组件里调用离开守卫。
--> 调用全局的 beforeEach 守卫。
--> 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
--> 在路由配置里调用 beforeEnter。
--> 解析异步路由组件。
--> 在被激活的组件里调用 beforeRouteEnter。
--> 调用全局的 beforeResolve 守卫 (2.5+)。
--> 导航被确认。
--> 调用全局的 afterEach 钩子。
--> 触发 DOM 更新。
--> 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
*/
```

### 路由过渡

- transition

```
<transition name=`自己配置值`> // 有`slide`, `fade`等等
	<router-view></router-view>
</transition>
```

## vue 生命周期（在这个周期内，this 都可以调用）

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190227102933930.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MDIzMTE2,size_16,color_FFFFFF,t_70)
`循序排列` 开始 ---> 结束

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed
