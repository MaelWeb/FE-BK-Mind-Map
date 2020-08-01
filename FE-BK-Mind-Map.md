# 前端基础

## JavaScript

### 类型

- 内置类型

	- 基本类型

		- Undefined，Null，Boolean，String，Number，Symbol(ES6)

			- 可以表示为固定长度;存放在栈；

	- 引用类型

		- Object

			- 不可预知长度，并且可以 mutate；存放在堆（heap);

- 类型判断

	- typeof

		- 不能获取到准确的类型；唯一的作用是：检测一个对象是否已经定义或者是否已经赋值

	-  instanceof

		- 比较两个操作数的构造函数
		- 只有在比较自定义的对象时才有意义。 如果用来比较内置类型，将会和 typeof 操作符 一样用处不大。

	-  Object.prototype.toString.call(obj)

		- 获取对象的内部属性 [[Class]] 的值

- 类型转换

	- 等于操作符(==)

		- 等于操作符会为了比较两个值而进行强制类型转换。

			- 类型转换规则

				- 规则 1：NaN和其他任何类型比较永远返回false（包括和他自己）。
				- 规则 2：Boolean 和其他任何类型比较，Boolean 首先被转换为 Number 类型。
				- 规则 3：String和Number比较，先将String转换为Number类型。
				- 规则 4：null == undefined比较结果是true，除此之外，null、undefined和其他任何结果的比较值都为false。
				- 原始类型和引用类型做比较时，引用类型会依照ToPrimitive规则转换为原始类型。

					- ToPrimitive规则，是引用类型向原始类型转变的规则，它遵循先valueOf后toString的模式期望得到一个原始类型。

	- 严格等于(===)

		- 严格等于操作符不会进行强制类型转换

	- 内置类型的构造函数

		- 内置类型（比如 Number 和 String）的构造函数在被调用时，使用或者不使用 new 的结果完全不同。

			- new Number(10) !== 10

				- 使用内置类型 Number 作为构造函数将会创建一个新的 Number 对象

			- Number(10) === 10

				- 在不使用 new 关键字的 Number 函数更像是一个数字转换器

- 特殊类型

	- null

		- 是空值或不存在的值。

	- undefined

		- 表示已声明但未定义变量。

### 原型和继承

- new  关键字

	- 创建一个空对象
	- 将这个空对象的 proto 指向构造函数的prototype
	- 调用构造函数，去填充创建的空对象
	- 将this指向创建的新对象

- 原型链

	- 当我们访问一个对象的属性的时候，引擎首先会在当前对象进行查找，如果找不到就会访问该对象的__proto__， 如果__proto__有了，就返回，如果没有则递归执行上述过程，直到__proto__ 为 null。

- 继承

	- JS中继承背后的原理是原型prototype, 这种实现继承的方式，我们称之为原型继承。

- proto

	- 一个内部属性，不建议对其进行直接操作。
	- 是一个指向 构造函数 原型的引用

- 构造函数、原型和实例的关系

	- 每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针
	- 确定原型和实例的关系

		- instanceof
		- isPrototypeof()

	- 重点！不能忘！

		- 所有函数的默认原型都是 Object 的实例，因此默认原型都会包含一个内部指针，指向 Object.prototype

### this 关键字

- 为何设计 this 关键字

	- 设计目的就是指向函数运行时所在的环境。

		- 参考： https://lucifer.ren/fe-interview/#/topics/js/this

- 指向绑定

	- 默认绑定

		- 严格模式

			- this会绑定到undefined

		- 非严格模式

			- this指向全局对象

	- 隐式绑定

		- 函数作为对象的属性存在，通过对象属性执行函数时，此时隐式绑定规则会将this绑定到对象上

	- 显式绑定(call/apply/bind)

		- call/apply区别

			- 参数列表不同

		- bind和call/apply 区别

			- 不立即执行
			- 返回一个新函数

	- new绑定

		- 如果构造函数返回一个对象，那么 this 会指向返回的对象；否则都指向 new 出来的实例。

	- 箭头函数绑定

- 指向判定

	- 高级说法：指向函数运行时所在的环境。
	- 通俗说法：谁调用指向谁

### 作用域与闭包

- 作用域

	- 就是一套变量访问规则，这些规则包括变量如何存储和访问，也就是规定了哪些变量可以被访问，哪些变量不可以被访问。

		- 变量查询

			- LHS（左查询）

				- 向变量赋值

			- RHS（右查询）

				- 取变量的值

		- 词法作用域

			- 在词法分析时被定义的作用域。
			- 换句话说，词法作用域是基于【你】在写程序时，变量和作用域的块儿在何处被编写决定的，因此它在词法分析器处理你的代码时（基本上）是固定不变的。

		- 全局/局部变量

			- 全局变量

				- 不使用 var 声明变量将会导致隐式的全局变量产生

			- 局部变量

				- 作为函数参数
				- 通过 var 关键字声明

		- 独立命令空间

			- 对象
			- 模块管理
			-  匿名函数包装器（自执行函数）

		- 块作用域

			- try/catch 结构在 catch 子句上拥有块儿作用域。
			- ES6 let/const

		- 变量提升

			- 用于解释代码中变量声明行为的术语

				- 使用var关键字声明或初始化的变量，会将声明语句“提升”到当前作用域的顶部
				- 只有声明才会触发提升，赋值语句（如果有的话）将保持原样
				- 函数声明会使函数体提升，但函数表达式（以声明变量的形式书写）只有变量声明会被提升。

- 闭包

	- 闭包就是一个函数即使在它的词法作用域之外被执行时，也能记住并访问它的词法作用域。

		- 参考：作用域闭包

### 高阶函数（higher-order）

- 定义

	- 高阶函数是将一个或多个函数作为参数的函数，它用于数据处理，也可能将函数作为返回结果。

- 用途

	- 为了抽象一些重复执行的操作。

		- 典型的例子：Array.prototype.map()

### AMD/ CommonJS

- 实现模块体系的方式

	- CommonJS

		- 同步加载模块

	- AMD（Asynchronous Module Definition）

		- 异步加载模块

### 引用和操作符优先级

- var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };
console.log(bar.x) // ?
console.log(foo.x) // ?

## CSS

### position

- 常用的取值：static、relative以及absolute
- relative和absolute的定位原点

### 包含块(containing block)

- 定义：大多数情况下，包含块就是这个元素最近的祖先块元素的内容区，但也不是总是这样(受 position 影响)。
- 影响

	-  width, height, padding, margin，绝对定位元素的偏移值 （比如 position 被设置为 absolute 或 fixed），对其赋予百分比值时，这些值的计算值，就是通过元素的包含块计算得来。

- 确定

	- position

		- static 、 relative 或 sticky

			- 最近祖先块元素（比如说inline-block, block 或 list-item元素）的【内容区】的边缘组成

		- absolute

			- 由它的最近的 position 的值不是 static 的【祖先元素的内边距区】的边缘组成

		-  fixed

			- 在连续媒体的情况下(continuous media)包含块是 viewport ,在分页媒体(paged media)下的情况下包含块是分页区域(page area)

### 正常布局流(Normal Flow)

- 块级元素

	- 内容宽度是其父元素的100%，高度与内容高度一致
	- 块级元素按照基于其父元素的书写顺序(默认值: horizontal-tb)的块流动方向(block flow direction)放置 --- 每个块级元素会在上一个元素下面另起一行，它们会被设置好的margin 分隔

- 行内元素

	- height width与内容一致；无法设置行内元素的height width
	-  不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其他行内元素、相邻的文本内容（或者被包裹的）被安排在同一行。如果空间不够，溢出的文本或元素将移到新的一行。

- 外边距叠加

	- 如果两个相邻的元素都设置了margin 并且两个margin有重叠，那么更大的设置会被保留，小的则会消失

### *FC

- BFC（Block Formatting Contexts）块级格式化上下文
- IFC（Inline Formatting Contexts）行内级格式化上下文
- GFC（Grid Formatting Contexts）栅格格式化上下文
- FFC（Flex Formatting Contexts）Flex格式化上下文

### 外边距重叠(Margin Collapsing)

- 定义

	- 当块级元素（block）的上外边距(margin-top)和下外边距(margin-bottom)同时都有设定时只会只会保留最大边距

- 形成

	- 同一层相邻元素之间

	- 没有内容将父元素和后代元素分开

	- 空的块级元素

### 选择器优先级计算

- 内联>id>class>标签（伪类）
- !important

	- 谨慎使用

### writing-mode

- 定义了文本水平或垂直排布以及在块级元素中文本的行进方向。
- 此属性指定块流动方向，即块级容器堆叠的方向，以及行内内容在块级容器中的流动方向。因此，它也确定块级内容的顺序。

### 基线（Baseline）

- 基线是指欧洲和西亚文字排版中，用于在上面放置字符的一条假象的基准线。

### 盒模型

- 怪异/标准盒模型
- box-sizing

### 布局

- 弹性盒子布局 (CSS Flexible Box Layout)

	- flex: 0 1 auto; ?

		-  flex 规定了弹性元素如何伸长或缩短以适应flex容器中的可用空间。这是一个简写属性，用来设置 flex-grow, flex-shrink 与 flex-basis

			- flex-grow
			- flex-shrink
			- flex-basis

- 网格布局 (Grid Layout)

- 浮动(Float)

	- 基于float的布局技巧

## 框架/类库

### React

- API 的使用
- 生命周期

	- 挂载

		- constructor()

		- static getDerivedStateFromProps()

		- render()

		- componentWillMount() - React15，即将废弃
		- componentDidMount()

	- 更新

		- static getDerivedStateFromProps()

		- componentWillReceiveProps()- React15，即将废弃

		- shouldComponentUpdate()

		- render()

		- getSnapshotBeforeUpdate()

		- componentWillUpdate()- React15，即将废弃

		- componentDidUpdate()

	- 卸载

		- componentWillUnmount()

	- 错误处理

		- static getDerivedStateFromError()

		- componentDidCatch()

- setState

	- 使用要点

		- 如果你需要基于最新的state做业务的话，可以在componentDidUpdate或者setState的回调函数里获取。(注：官方推荐第一种做法)
		- 设想有一个需求，需要在在onClick里累加两次，如下:

			- 在react眼中，这个方法最终会变成

				- 由于后面的数据会覆盖前面的更改，所以最终只加了一次.所以如果是下一个state依赖前一个state的话，推荐给setState传function

	- 同步OR异步

		- 生命周期和合成事件中
		- 异步代码和原生事件中

	- 更新流程

		- 调用 this.setState(partialState)

			- 将 newState 放入padding队列；

				- 调用 enqueueUpdate()

					- 是否处于创建/更新组件的过程

						- 是

							- 将当前的组件放在dirtyComponents数组中

						- 不是

							- 调用 batchedUpdates()

								- 1. 将isBatchingUpdates设置为 true
2. 判断当前是否处于更新/创建阶段

									- 是

										- 将当前组件放在dirtyComponent里

									- 不是

										- 循环遍历所有的 dirtyComponent
调用 updateComponent 
更新 pending state or props

	- 事务(transaction)

		- transaction对象，它暴露了一个perform的方法，用来执行任一方法(anyMethod)，在anyMethod执行的前，需要先执行所有wrapper的initialize方法，在执行完后，要执行所有wrapper的close方法

			- 

- render
- 虚拟 DOM

	- 可以看作是一棵模拟了DOM树的JavaScript对象树

		- DOM diff 算法

			- 传统diff算法

				- 通过循环递归对节点进行依次对比，效率低下，算法复杂度达到 O (n 3 )，其中 n 是树中节点的总数。

			- React diff算法

				- 通过策略，将O(n^3)复杂度问题转换成O(n)复杂度问题。　

					- 策略一：Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。

						- tree diff

							- 基于策略一，React 只会对相同层级的DOM节点进行比较，即同一个父节点下的所有子节点。当发现节点已经不存在时，则该节点及其子节点会被完全删除，不会用于进行进一步比较。

								- 示例：当发生节点移动时，react的行为。

如图，A 节点（包括其子节点）整个被移动到 D 节点下，由于 React 只会简单地考虑同层级节点的位置变换，而对于不同层级的节点，只有创建和删除操作。当根节点发现子节点中 A 消失了，就会直接销毁 A；当 D 发现多了一个子节点 A，则会创建新的 A（包括子节点）作为其子节点。此时，diff 的执行情况：create A → create B → create C → delete A。

					- 策略二：拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。

						- component diff

							- 如果是同一类型的组件，按照原策略继续比较 Virtual DOM 树即可。
							- 如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。
							- 对于同一类型的组件，有可能其Virtual DOM 没有任何变化，如果能够确切的知道这点，那么就可以节省大量的diff运算时间。因此，React允许用户通过 showComponentUpdate() 来判断该组件是否需要进行diff算法分析。

					- 策略三：对于同一层级的一组节点，它们可以通过唯一ID进行区分。

						- element diff

							- 当节点处于同一层级时，diff 提供了 3 种节点操作，分别为 INSERT_MARKUP （插入）、MOVE_EXISTING （移动）和 REMOVE_NODE （删除）。

								- 3-22　对节点进行 diff 差异化对比

首先，对新集合中的节点进行循环遍历 for (name in nextChildren) ，通过唯一的 key 判断新旧集合中是否存在相同的节点 if (prevChild === nextChild) ，如果存在相同节点，则进行移动操作，但在移动前需要将当前节点在旧集合中的位置与 lastIndex 进行比较 if (child._mountIndex(旧节点中的index) < lastIndex(新节点中的index)) ，否则不执行该操作。

		- 为什么要使用？

			- 在传统的 Web 应用中，我们往往会把数据的变化实时地更新到用户界面中，于是每次数据的微小变动都会引起 DOM 树的重新渲染。

虚拟DOM的目的是将所有操作累加起来，统计计算出所有的变化后，统一更新一次DOM。

				- 

		- 为什么虚拟DOM会比DOM更优？

			- 当创建一个元素比如div，这个元素上本身或者继承很多属性如 width、height、offsetHeight、style、title，另外还需要注册这个元素的诸多方法，比如onfucos、onclick等等。这还只是一个元素，如果元素比较多的时候，还涉及到嵌套，那么元素的属性和方法等等就会很多，效率很低。

这个元素会挂载默认的styles、得到这个元素的computed属性、注册相应的Event Listener、DOM Breakpoints以及大量的properties，这些属性、方法的注册肯定是需要h耗费大量时间的。

尤其是在js操作DOM的过程中，不仅有dom本身的繁重，js的操作也需要浪费时间，我们认为js和DOM之间有一座桥，如果你频繁的在桥两边走动，显然效率是很低的。

React的虚拟DOM就是解决这个问题的！虽然它解决不了DOM自身的繁重，但是虚拟DOM可以对JavaScript操作DOM这一部分内容进行优化。

- Hook

	- 可以让我们在不编写 class 的情况下使用 state 以及其他的 React 特性。

		- 解决类组件的问题

			- 状态逻辑难复用
			- 趋向复杂难以维护
			- this 指向问题

		- 使用规则

			- 只能在【函数最外层】调用 Hook。
			- 只能在 【React 的函数组件】中调用 Hook。

		- hooker

			- State Hook(useState)
			- Effect Hook(useEffect)
			- useContext
			- useReducer 

- 优化

	- 使用纯组件

		- React.PureComponent 类组件也被看作纯组件

	- 使用 shouldComponentUpdate 生命周期事件
	-  使用 React Fragments 避免额外标记
	-  不要使用内联函数定义

		- 使用内联函数，则每次调用“render”函数时都会创建一个新的函数实例

			- <input type="button" onClick={(e) => { this.setState({inputValue: e.target.value}) }} value="Click For Inline Function" />

	- 在 Constructor 的早期绑定函数

		- 避免在DOM上绑定this

			- <input type="button" value="Click" onClick={this.handleButtonClick.bind(this)} />

每次render时都会生成一个新的函数

	- 避免使用内联样式属性
	- 渲染列表时添加key

- React Fiber
- 合成事件
- 高阶组件

### Redux

- Redux 中核心就是一个单一的 state。state 通过闭包的形式存放在 redux store 中，保证其是只读的。如果你想要更改 state，只能通过发送 action 进行，action 本质上就是一个普通的对象。

	- 核心原则

		- 1. 单一数据源：整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。单状态树使跟踪随时间变化的更改以及调试或检查应用程序变得更加容易。
		- 2. State 是只读的：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。这样确保了视图和网络请求都不能直接修改 state，相反它们只能表达想要修改的意图。
		- 3. 使用纯函数来执行修改：为了描述 action 如何改变 state tree ，你需要编写 reducers（Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state）。

- redux-thunk

	- 通过使用redux-thunk，action 创建函数除了返回 action 对象外还可以返回函数

### 小程序

## 浏览器

### 重排/重绘

- 重排(reflow)

	- 概念

		- 当DOM的变化影响了元素的几何信息(DOM对象的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。
		- 重排也叫回流

			- 回流就好比向河里(文档流)扔了一块石头(dom变化)，激起涟漪，然后引起周边水流受到波及，所以叫做回流

	- 引起重排的情况

		- 任何会改变元素几何信息(元素的位置和尺寸大小)的操作，都会触发重排

			- 添加或者删除可见的DOM元素；
			- 元素尺寸改变——边距、填充、边框、宽度和高度
			- 内容变化，比如用户在input框中输入文字
			- 浏览器窗口尺寸改变——resize事件发生时
			- 计算 offsetWidth 和 offsetHeight 属性
			- 设置 style 属性的值

	- 影响范围

		- 全局

			- 从根节点html开始对整个渲染树进行重新布局

		- 局部

			- 对渲染树的某部分或某一个渲染对象进行重新布局

	- 优化

		- 重排需要更新渲染树，性能花销非常大；因此应该尽可能的减少重排的次数，如果重排不可避免，那么应该尽可能的减少重排的范围，把重排控制在局部范围。

			- 1. 分离读写操作
			- 2. 样式集中改变
			- 3. 缓存布局信息
			- 4. 离线改变dom
			- 5. position属性为absolute或fixed
			- 6. 优化动画

- 重绘(repaint)

	- 概念

		- 当一个元素的外观发生改变，但没有改变布局；重新把元素外观绘制出来的过程，叫做重绘。

	- 引起重绘的属性

		- 常见的：color、border-style、	visibility	、background、border-radius等

- 渲染队列

	- 引子

		- 思考以下代码将会触发几次渲染？

div.style.left = '10px';
div.style.top = '10px';
div.style.width = '20px';
div.style.height = '20px';


只会触发一次！

	- 渲染队列机制

		- 我们修改了元素的几何属性，导致浏览器触发重排或重绘时。它会把该操作放进渲染队列，等到队列中的操作到了一定的数量或者到了一定的时间间隔时，浏览器就会批量执行这些操作。

	- 强制刷新队列

		- 当我们读取dom对象的以下属性，会触发强制渲染：

1. offsetTop, offsetLeft, offsetWidth, offsetHeight
2. scrollTop, scrollLeft, scrollWidth, scrollHeight
3. clientTop, clientLeft, clientWidth, clientHeight
4. getComputedStyle(), 或者 IE的 currentStyle

因为队列中，可能会有影响到这些值的操作，为了给我们最精确的值，浏览器会立即重排+重绘。

### 事件循环

- 定义

	- 为了协调事件，用户交互，脚本，渲染，网络等，用户代理（一般是浏览器）必须使用本节所述的event loop。
	- 一个event loop有一个或者多个task队列。一个task 队列是一组 task。

		- 注意⚠️：task队列 是集合，而不是队列，因为事件循环处理模型的第一步是从所选队列中获取第一个可运行任务，而不是使第一个任务出队。

	- 当用户代理安排一个任务，必须将该任务增加到相应的event loop的一个tsak队列中。
	- 每个task都来自特定task源。对于每个event loop，每个task源都必须与特定的task队列关联。

		- task 任务源

			- DOM操作任务源：
此任务源被用来相应dom操作，例如一个元素以非阻塞的方式插入文档。
			- 用户交互任务源：
此任务源用于对用户交互作出反应，例如键盘或鼠标输入。响应用户操作的事件（例如click）必须使用task队列。
			- 网络任务源：
网络任务源被用来响应网络活动。
			- history traversal任务源：
当调用history.back()等类似的api时，将任务插进task队列。
			- 注意⚠️：setTimeout、setInterval、setImmediate也是task任务源

	- 每个event loop都有一个当前正在运行的任务( currently running task)，它可以是一个task，也可以是null。最初，它为null。它用于处理重入。
	- 每一个event loop都有一个microtask队列，一个microtask会被排进microtask队列而不是task队列。
	- 每个event loop都有一个执行微任务检查点的布尔值，该布尔值最初为false。它用于防止执行微任务检查点算法的可重入调用。
	- 有两种microtasks：分别是solitary callback microtasks和compound microtasks。规范值只覆盖solitary callback microtasks。
	- 如果在初期执行时，spin the event loop，microtasks有可能被移动到常规的task队列，在这种情况下，microtasks任务源会被task任务源所用。通常情况，task任务源和microtasks是不相关的。

- 深入

	- 有两种event loops，一种在浏览器上下文，一种在workers中。
	- 每一个用户代理必须至少有一个浏览器上下文event loop，但是每个单元的相似源浏览器上下文至多有一个event loop。
	- event loop 总是具有至少一个浏览器上下文，当一个event loop的浏览器上下文全都销毁的时候，event loop也会销毁。一个浏览器上下文总有一个event loop去协调它的活动。
	- Worker的event loop相对简单一些，一个worker对应一个event loop，worker进程模型管理event loop的生命周期。

- 处理流程

	- task  处理过程

		- 1.在tasks队列中选择最老的一个task,用户代理可以选择任何task队列，如果没有可选的任务，则跳到下边的microtasks步骤。
		- 2.将上边选择的task设置为正在运行的task。

		- 3.Run: 运行被选择的task。
		- 4.将event loop的currently running task变为null。
		- 5.从task队列里移除前边运行的task。
		- 6.Microtasks: 执行microtasks任务检查点。（也就是执行microtasks队列里的任务）
		- 7.更新渲染（Update the rendering）...
		- 8.如果这是一个worker event loop，但是没有任务在task队列中，并且WorkerGlobalScope对象的closing标识为true，则销毁event loop，中止这些步骤，然后进行定义在Web workers章节的run a worker。
		- 9.返回到第一步。

	- microtasks检查点（microtask checkpoint）

		- 当用户代理去执行一个microtask checkpoint，如果microtask checkpoint的flag（标识）为false，用户代理必须运行下面的步骤：
		- 1.将microtask checkpoint的flag设为true。
		- 2.Microtask queue handling: 如果event loop的microtask队列为空，直接跳到第八步（Done）。
		- 3.在microtask队列中选择最老的一个任务。
		- 4.将上一步选择的任务设为event loop的currently running task。
		- 5.运行选择的任务。
		- 6.将event loop的currently running task变为null。
		- 7.将前面运行的microtask 从 microtask队列中删除，然后返回到第二步（Microtask queue handling）。
		- 8.Done: 每一个environment settings object它们的 responsible event loop就是当前的event loop，会给environment settings object发一个 rejected promises 的通知。
		- 9.清理IndexedDB的事务。
		- 10.将microtask checkpoint的flag设为flase。

- 执行栈（JavaScript execution context stack）

	- task和microtask都是推入栈中执行的，要完整了解event loops还需要认识JavaScript execution context stack

		- javaScript是单线程，也就是说只有一个主线程，主线程有一个栈，每一个函数执行的时候，都会生成新的execution context（执行上下文），执行上下文会包含一些当前函数的参数、局部变量之类的信息，它会被推入栈中， running execution context（正在执行的上下文）始终处于栈的顶部。当函数执行完后，它的执行上下文会从栈弹出。

- Update the rendering（更新渲染）

	- 这是event loop中很重要部分，在第7步会进行Update the rendering（更新渲染），规范允许浏览器自己选择是否更新视图。也就是说可能不是每轮事件循环都去更新视图，只在有必要的时候才更新视图。

		- 渲染的基本流程：
1. 处理 HTML 标记并构建 DOM 树。
2. 处理 CSS 标记并构建 CSSOM 树， 将 DOM 与 CSSOM 合并成一个渲染树。
3. 根据渲染树来布局，以计算每个节点的几何信息。
4. 将各个节点绘制到屏幕上。

- 应用

	- 如果task队列如果有大量的任务等待执行时，将dom的变动作为microtasks而不是task能更快的将变化呈现给用户。

### 安全

- 跨域
- XSS

	- What:  XSS是跨站脚本攻击（Cross-Site Scripting）的简称
	- Why:  这类安全问题发生的本质原因在于，浏览器错误的将攻击者提供的用户输入数据当做JavaScript脚本给执行了。
	- How:  防御XSS最佳的做法就是对数据进行严格的输出编码，使得攻击者提供的数据不再被浏览器认为是脚本而被误执行。例如<script>在进行HTML编码后变成了&lt;script&gt;，而这段数据就会被浏览器认为只是一段普通的字符串，而不会被当做脚本执行了。

- CSRF
- CSP
- iframe

	- What: 有些时候我们的前端页面需要用到第三方提供的页面组件，通常会以iframe的方式引入。典型的例子是使用iframe在页面上添加第三方提供的广告、天气预报、社交分享插件等等。
	- Why:  iframe中的内容是由第三方来提供的，默认情况下他们不受我们的控制，他们可以在iframe中运行JavaScirpt脚本、Flash插件、弹出对话框等等，这可能会破坏前端用户体验。

最危险的是：如果iframe中的域名因为过期而被恶意攻击者抢注，或者第三方被黑客攻破，iframe中的内容被替换掉了，从而利用用户浏览器中的安全漏洞下载安装木马、恶意勒索软件等等。
	- How： 在HTML5中，iframe有了一个叫做sandbox的安全属性，通过它可以对iframe的行为进行各种限制，充分实现“最小权限“原则。

<iframe sandbox src="..."> ... </iframe>

- HTTPS 

	- What： 黑客可以利用SSL Stripping这种攻击手段，强制让HTTPS降级回HTTP，从而继续进行中间人攻击。
	- Why： 问题的本质在于浏览器发出去第一次请求就被攻击者拦截了下来并做了修改，根本不给浏览器和服务器进行HTTPS通信的机会。
	- How： 解决这个安全问题的办法是使用HSTS（HTTP Strict Transport Security），它通过下面这个HTTP Header以及一个预加载的清单，来告知浏览器在和网站进行通信的时候强制性的使用HTTPS，而不是通过明文的HTTP进行通信：

Strict-Transport-Security: max-age=<seconds>; includeSubDomains; preload

- 点击劫持

	- What：我们在通过iframe使用别人提供的内容时，我们自己的页面也可能正在被不法分子放到他们精心构造的iframe或者frame当中，进行点击劫持攻击。

通常的攻击步骤是这样的：

1. 攻击者精心构造一个诱导用户点击的内容，比如Web页面小游戏

2. 将我们的页面放入到iframe当中

3. 利用z-index等CSS样式将这个iframe叠加到小游戏的垂直方向的正上方

4. 把iframe设置为100%透明度

5. 受害者访问到这个页面后，肉眼看到的是一个小游戏，如果受到诱导进行了点击的话，实际上点击到的却是iframe中的我们的页面
	- Why： 点击劫持的危害在于，攻击利用了受害者的用户身份，在其不知情的情况下进行一些操作。如果只是迫使用户关注某个微博账号的话，看上去仿佛还可以承受，但是如果是删除某个重要文件记录，或者窃取敏感信息，那么造成的危害可就难以承受了。
	- How： 有多种防御措施都可以防止页面遭到点击劫持攻击，例如Frame Breaking方案。一个推荐的防御方案是，使用X-Frame-Options：DENY这个HTTP Header来明确的告知浏览器，不要把当前HTTP响应中的内容在HTML Frame中显示出来。

- 错误的内容推断

	- What： 某网站允许用户在评论里上传图片，攻击者在上传图片的时候，看似提交的是个图片文件，实则是个含有JavaScript的脚本文件。该文件逃过了文件类型校验，在服务器里存储了下来。接下来，受害者在访问这段评论的时候，浏览器会去请求这个伪装成图片的JavaScript脚本，而此时如果浏览器错误的推断了这个响应的内容类型（MIME types），那么就会把这个图片文件当做JavaScript脚本执行，于是攻击也就成功了。
	- Why： 问题的关键就在于，后端服务器在返回的响应中设置的Content-Type Header仅仅只是给浏览器提供当前响应内容类型的建议，而浏览器有可能会自作主张的根据响应中的实际内容去推断内容的类型。

在上面的例子中，后端通过Content-Type Header建议浏览器按照图片来渲染这次的HTTP响应，但是浏览器发现响应中其实是JavaScript，于是就擅自做主把这段响应当做JS脚本来解释执行，安全问题也就产生了。
	- How： 通过设置X-Content-Type-Options 这个 HTTP Header明确禁止浏览器去推断响应类型。

- 不安全的第三方依赖包

	- How： 自动化的工具，比如NSP(Node Security Platform)，Snyk等等

- 本地存储数据泄露
- 缺乏静态资源完整性校验

	- What： 存储在CDN上的静态资源受到污染
	- WHy： 攻击者劫持了CDN，或者对CDN中的资源进行了污染，那么我们的前端应用拿到的就是有问题的JS脚本或者Stylesheet文件，使得攻击者可以肆意篡改我们的前端页面，对用户实施攻击。
	- How： 防御这种攻击的办法是使用浏览器提供的SRI（Subresource Integrity）功能。顾名思义，这里的Subresource指的就是HTML页面中通过<script>和<link>元素所指定的资源文件。

       每个资源文件都可以有一个SRI值，就像下面这样。它由两部分组成，减号（-）左侧是生成SRI值用到的哈希算法名，右侧是经过Base64编码后的该资源文件的Hash值。

<script src=“https://example.js” integrity=“sha384-eivAQsRgJIi2KsTdSnfoEGIRTo25NCAqjNJNZalV63WKX3Y51adIzLT4So1pk5tX”></script>

### 性能优化

- 加载性能

	- PRPL 模式

		- PRPL 是一种用于结构化和提供 Progressive Web App (PWA) 的模式，该模式强调应用交付和启动的性能。

			- Push -推送(或预加载) 最关键资源。
			- Render-尽快渲染初始路由
			- Pre-cache - 预缓存剩余资源。
			- Lazy load - 延迟加载其他路由和非关键资源

	- 避免不必要的下载，按需加载
	- 资源压缩（GZIP）
	- 图片优化

		- 懒加载
		- 减少使用图像图标，使用CSS3绘制，或Iconfont
		- 选择正确的图片格式(使用WebP)

	- HTTP 缓存
	- 使用HTTP/2 
	-  rel=preload/
	- 提供响应式图像；<img> 元素添加 srcset 属性

	- 使用视频而非动画 GIF。

- 运行时性能

	- 尽量避免重排/重绘
	- 使用Flexbox替换Float
	- 避免强制同步布局；分离读写操作；
	- 避免布局抖动

- 前端缓存

	- Http 缓存

		- 基本原理

			- 浏览器在加载资源时，根据请求头的expires和cache-control判断是否命中强缓存，是则直接从缓存读取资源，不会发请求到服务器
			- 如果没有命中强缓存，浏览器一定会发送一个请求到服务器，通过last-modified和etag验证资源是否命中协商缓存，如果命中，服务器会将这个请求返回，但是不会返回这个资源的数据，依然是从缓存中读取资源
			- 如果前面两者都没有命中，直接从服务器加载资源

		- 强缓存

			- 通过Expires和Cache-Control响应头实现

				- Expires

					- 一个绝对时间；修改本地时间，可能会造成缓存失效；

				- Cache-Control

					- 相对时间；优先级高于 Expires；
					- no-cache/no-store/public/private

		- 协商缓存

			- 通过【Last-Modified，If-Modified-Since】和【ETag、If-None-Match】两对Header来管理

				- Last-Modified(Response header)，If-Modified-Since(Request Header)

					- Last-Modified 表示本地文件最后修改日期，浏览器会在request header加上If-Modified-Since（上次返回的Last-Modified的值），询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来

				- ETag(Response header)、If-None-Match(Request Header)

					- Etag就像一个指纹，资源变化都会导致ETag变化。类似于content hash
					- If-None-Match的header会将上次返回的Etag发送给服务器，询问该资源的Etag是否有更新，有变动就会发送新的资源回来
					- ETag的优先级比Last-Modified更高

		- 相关状态码

	- 数据缓存

		- cookie

			- 优缺点

				- 缺点：容量小（4K），不安全（cookie被拦截，很可能暴露session）；原生接口不够友好，需要自己封装；需要指定作用域，不可以跨域调用
				- 优点：对于传输部分少量不敏感数据，非常简明有效

			- Cookie/Session

				- Cookie通过在客户端记录信息确定用户身份
				- Session通过在服务器端记录信息确定用户身份

			- 配置属性

				- Expires ：cookie最长有效期
				- Max-Age：在 cookie 失效之前需要经过的秒数。（当Expires和Max-Age同时存在时，文档中给出的是已Max-Age为准，可是我自己用Chrome实验的结果是取二者中最长有效期的值）
				- Domain：指定 cookie 可以送达的主机名。
				- path：指定一个 URL 路径
				- Secure：一个带有安全属性的 cookie 只有在请求使用SSL和HTTPS协议的时候才会被发送到服务器。
				- HttpOnly:设置了 HttpOnly 属性的 cookie 不能使用 JavaScript 经由 Document.cookie 属性、XMLHttpRequest 和 Request APIs 进行访问，以防范跨站脚本攻击（XSS）。

		- Web Storage

			- 优点：容量稍大一点（5M），localStorage可做持久化数据存储
支持事件通知机制，可以将数据更新的通知发送给监听者
			- 缺点：本地储存数据都容易被篡改，容易受到XSS攻击

		- indexDB

			- 一个结构化的、事务型的、高性能的NoSQL类型的数据库，包含了一组同步/异步API

		- Web  SQL

	- 应用（离线）缓存、PWA

## Http/Https

### Http

- 介绍

	- 超文本传输​​协议
	- 浏览web的通信协议
	- 该协议使用基于消息的模型。
	- 每个HTTP交互都包括一个请求和一个响应。
	- HTTP本质上是无状态的。

- 方法(Methods)

	- GET

		- 向指定的资源发出“显示”请求。使用GET方法应该只用在读取数据，而不应当被用于产生“副作用”的操作中，例如在网络应用程序中。其中一个原因是GET可能会被网络爬虫等随意访问。参见安全方法。浏览器直接发出的GET只能由一个url触发。GET上要在url之外带一些参数就只能依靠url上附带querystring。

	- POST

		- 向指定资源提交数据，请求服务器进行处理（例如提交表单或者上传文件）。数据被包含在请求本文中。这个请求可能会创建新的资源或修改现有资源，或二者皆有。每次提交，表单的数据被浏览器用编码到HTTP请求的body里。浏览器发出的POST请求的body主要有两种格式，一种是application/x-www-form-urlencoded用来传输简单的数据，大概就是"key1=value1&key2=value2"这样的格式。另外一种是传文件，会采用multipart/form-data格式。采用后者是因为application/x-www-form-urlencoded的编码方式对于文件这种二进制的数据非常低效。

	- PUT 

		- 向指定资源位置上传其最新内容。

	- HEAD 

		- 与GET方法一样，都是向服务器发出指定资源的请求。只不过服务器将不传回资源的本文部分。它的好处在于，使用这个方法可以在不必传输全部内容的情况下，就可以获取其中“关于该资源的信息”（元信息或称元数据）。

	- TRACE 

		- 回显服务器收到的请求，主要用于测试或诊断。

	- OPTIONS 

		- 这个方法可使服务器传回该资源所支持的所有HTTP请求方法。用'*'来代替资源名称，向Web服务器发送OPTIONS请求，可以测试服务器功能是否正常运作。

	- PATCH 

		- PATCH方法用于对资源进行部分修改。

	- DELETE 

		- 请求服务器删除Request-URI所标识的资源。

	- CONNECT

		- HTTP/1.1协议中预留给能够将连接改为隧道方式的代理服务器。通常用于SSL加密服务器的链接（经由非加密的HTTP代理服务器）。

- 状态码

	- 1xx 

		- 信息

	- 2xx

		- 请求成功。

			- 200

				- 请求OK

			- 202

				- 该请求已被接受，但可能不包含响应中的资源。这对于服务器端的异步处理很有用。服务器可以选择发送信息以进行监视。

			- 204

				- 响应中没有消息正文。

	- 3xx

		- 客户端被重定向到其他资源。

			- 301

				- 永久重定向

			- 302

				- 临时重定向

			- 304

				- 服务器已确定资源未更改，并且客户端应使用其缓存的副本。

	- 4xx

		- 该请求包含某种错误。

			- 400

				- Bad Reques：请求格式错误。

			- 401

				- Unauthorized：请求需要认证。客户端可以使用Authorization标头重复该请求。如果客户端已包含Authorization标头，则凭据错误。

			- 403

				- Forbidden：服务器已拒绝访问该资源。

			- 405

				-  Method Not Allowed：请求行中使用的HTTP动词无效，或者服务器不支持该动词。

	- 5xx

		- 服务器在满足请求时遇到错误。

			- 501

				- Not Implemented：服务器尚不支持请求的功能。

			- 503

				-  Service Unavailable：如果服务器上的内部系统出现故障或服务器过载，则可能发生这种情况。通常，服务器甚至不会响应，并且请求将超时。

- 持久连接(HTTP persistent connection也叫HTTP keep-alive或HTTP connection reuse)

	- 在HTTP / 1.0中，连接在单个请求或响应对之后关闭。在HTTP / 1.1中，引入了一种机制，称为持久连接。持久连接使用同一个TCP连接来发送和接收多个HTTP请求/应答，而不是为每一个新的请求/应答打开新的连接的方法。
	- 在 HTTP 1.0 中, 没有官方的 keepalive 的操作。通常是在现有协议上添加一个指数。如果浏览器支持 keep-alive，它会在请求的包头中添加：

Connection: Keep-Alive

然后当服务器收到请求，作出回应的时候，它也添加一个头在响应中：

Connection: Keep-Alive

- Session 

	- 会话状态也称为无状态。HTTP是无状态协议。在会话状态下，客户端和服务器仅在当前请求期间相互了解。如果连接已关闭，并且两台计算机想要再次连接，则它们需要作为新连接相互提供信息，并且该连接将作为第一个连接进行处理。

		- 大概工作步骤

			- 1. 浏览器第一次请求网站， 服务端生成 Session ID。
			- 2. 把生成的 Session ID 保存到服务端存储中(一般是内存)。
			- 3. 把生成的 Session ID 返回给浏览器，通过 set-cookie。
			- 4. 浏览器收到 Session ID， 在下一次发送请求时就会带上这个 Session ID。
			- 5. 服务端收到浏览器发来的 Session ID，从 Session 存储中找到用户状态数据，会话建立。
			- 6. 此后的请求都会交换这个 Session ID，进行有状态的会话。

### HTTP/2 

- 简介

	- HTTP/2是现行HTTP协议（HTTP/1.x）的替代，但它不是重写，HTTP方法/状态码/语义都与HTTP/1.x一样。HTTP/2基于SPDY3，专注于【性能】，最大的一个目标是在用户和网站间只用一个连接（connection）。

- 为什么需要HTTP/2

	- 我们知道，影响一个HTTP网络请求的因素主要有两个：带宽和延迟。在今天的网络情况下，带宽一般不再是瓶颈，所以主要是延迟。

		- 1.  线头阻塞（Head-Of-Line Blocking）：HTTP1.x 层面上，后一个请求会被前面的请求阻塞。

2. DNS查询。

3. 建立连接（Initial connection）：HTTP基于 TCP 协议，TCP的3次握手和慢启动极大增加延迟。

	- HTTP/1.x的缺陷

		- 【连接无法复用】：连接无法复用会导致每次请求都经历三次握手和慢启动。三次握手在高延迟的场景下影响较明显，慢启动则对大量小文件请求影响较大（没有达到最大窗口请求就被终止）。

			- HTTP/1.0传输数据时，每次都需要重新建立连接，增加延迟。
			- 1.1虽然加入keep-alive可以复用一部分连接，但域名分片等情况下仍然需要建立多个connection，耗费资源，给服务器带来性能压力。

		- 【Head-Of-Line Blocking】：导致带宽无法被充分利用，以及后续健康请求被阻塞。HOLB是指一系列包（package）因为第一个包被阻塞；HTTP/1.x中，由于服务器必须按接受请求的顺序发送响应的规则限制，那么假设浏览器在一个（tcp）连接上发送了两个请求，那么服务器必须等第一个请求响应完毕才能发送第二个响应。

		- 【协议开销大】：HTTP/1.x中header内容过大（每次请求header基本不怎么变化），增加了传输的成本。
		- 【安全因素】：HTTP/1.x中传输的内容都是明文，客户端和服务端双方无法验证身份。

- 新特性

	- 流（stream）和多路复用（MultiPlexing）

		- 流

			- stream就是在HTTP/2连接上的双向帧序列。每个http request都会新建自己的stream，response在同一个stream上返回。

		- 多路复用（MultiPlexing）

			- 多路复用（MultiPlexing），即连接共享。之所以可以复用，是因为每个stream高度独立，堵塞的stream不会影响其它stream的处理。一个连接上可以有多个stream，每个stream的frame可以随机的混杂在一起，接收方可以根据stream id将frame再归属到各自不同的request里面。

				- 多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。
				- 众所周知 ，在 HTTP/1.1 协议中 「浏览器客户端在同一时间，针对同一域名下的请求有一定数量限制。超过限制数目的请求会被阻塞」。

这也是为何一些站点会有多个静态资源 CDN 域名的原因之一，目的就是变相的解决浏览器针对同一域名的请求限制阻塞问题。

下图总结了不同浏览器对该限制的数目：

				- HTTP/2 的多路复用(Multiplexing) 则允许同时通过单一的 HTTP/2 连接发起多重的【请求-响应】 消息。

因此 HTTP/2 可以很容易的去实现多流并行而不用依赖建立多个 TCP 连接，HTTP/2 把 HTTP 协议通信的基本单位缩小为一个一个的帧，这些帧对应着逻辑流中的消息。并行地在同一个 TCP 连接上【双向交换】消息。

	- 二进制分帧

		- 在 应用层(HTTP/2)和传输层(TCP or UDP)之间增加一个二进制分帧层 是HTTP/2 在不改动 HTTP/1.x 的语义、方法、状态码、URI 以及首部字段….. 的情况下「突破 HTTP1.1 的性能限制，改进传输性能，实现低延迟和高吞吐量」的 关键之一。
		- 在二进制分帧层中， HTTP/2 会将所有传输的信息分割为更小的消息和帧（frame）,并对它们采用二进制格式的编码 ，其中 HTTP1.x 的首部信息会被封装到 HEADER frame，而相应的 Request Body 则封装到 DATA frame 里面。

			- 

		- HTTP/2 通信都在一个连接上完成，这个连接可以承载任意数量的双向数据流。

在过去， HTTP 性能优化的【关键并不在于高带宽】，而是【低延迟】。TCP 连接会随着时间进行自我「调谐」，起初会限制连接的最大速度，如果数据成功传输，会随着时间的推移提高传输的速度。这种调谐则被称为 TCP 慢启动。由于这种原因，让原本就具有突发性和短时性的 HTTP 连接变的十分低效。

HTTP/2 通过让所有数据流共用同一个连接，可以更有效地使用 TCP 连接，让高带宽也能真正的服务于 HTTP 的性能提升。

	- Header压缩

		- http1.x的header由于cookie和user agent很容易膨胀，而且每次都要重复发送。
		- http2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。高效的压缩算法可以很大的压缩header，减少发送包的数量从而降低延迟。

	- 服务端推送（Server Push）

		- 这个功能通常被称作“缓存推送”。主要的思想是：当一个客户端请求资源X，而服务器知道它很可能也需要资源Z的情况下，服务器可以在客户端发送请求前，主动将资源Z推送给客户端。这个功能帮助客户端将Z放进缓存以备将来之需。
		- 服务器推送还有一个很大的优势：可以缓存！也让在遵循同源的情况下，不同页面之间可以共享缓存资源成为可能。

- 推荐阅读

	- HTTP/2 for Front-End Developers

	- HTTP2 讲解

### HTTPS

- 加密过程

	- 

- SSL/TLS

	- 客户端解析证书这部分工作是由客户端的SSL/TLS来完成的。TLS就是从SSL发展而来的，只是SSL发展到3.0版本后改成了TLS。

		- 加密

			- TLS协议是基于TCP协议之上的，图中第一个蓝色往返是TCP的握手过程，之后两次橙色的往返，我们可以叫做TLS的握手。握手过程如下：

1. client1：TLS版本号+所支持加密套件列表+希望使用的TLS选项

2. Server1:选择一个客户端的加密套件+自己的公钥+自己的证书+希望使用的TLS选项+（要求客户端证书）；

3. Client2:(自己的证书)+使用服务器公钥和协商的加密套件加密一个对称秘钥（自己生成的一个随机值）；

4. Server2:使用私钥解密出对称秘钥（随机值）后，发送加密的Finish消息，表明完成握手
			- 对称加密和非对称加密

				- 一般的对称加密像这样：

encrypt(明文，秘钥) = 密文
decrypt(密文，秘钥) = 明文

也就是说加密和解密用的是同一个秘钥。而非对称加密是这样的：

encrypt(明文，公钥) = 密文
decrypt(密文，私钥) = 明文

加密和解密是需要不同的秘钥的。

## 工程化与工具

### Webpack

- loader 

	- loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中。

- plugin

	- plugin 用于扩展webpack的功能。它直接作用于 webpack，扩展了它的功能。当然loader也时变相的扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域。而plugin的功能更加的丰富，而不仅局限于资源的加载。

在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

- 编写 loader/plugin

	- loader

		- 所谓 loader 只是一个导出为函数的 JavaScript 模块。loader runner 会调用这个函数，然后把上一个 loader 产生的结果(应该是 String 或者 Buffer)或者资源文件(resource file)传入进去。函数的 this 上下文将由 webpack 填充，并且 loader runner 具有一些有用方法，可以使 loader 改变为异步调用方式，或者获取 query 参数。

			- 

	- plugin

		- Plugin和Loader不一样，一个插件必须是一个Class，因为我们在使用插件的时候都是 new xxxx() 的形式。假如我们在build的时候需要创建一个版权文件，那么我们写一个Plugin来处理。

			- 

- 编译优化
- 打包原理
- Babel转换过程

### Gulp

## 编程/算法

### 算法

- 复杂度分析

	- 时间复杂度
	- 空间复杂度

- 排序算法

	- 冒泡排序
	- 选择排序
	- 归并排序
	- 快速排序
	- 基数排序
	- 计数排序
	- 希尔排序
	- 桶排序

- 查找算法

	- 线性查找

		- 顺序查找
		- 二分查找
		- 分块查找

	- 树结构查找
	- 散列表查找

- 字符串问题

	- 翻转单词

		- 

	- 最长公共前缀（LCP）

		- 

	- 回文字符串

	- 无重复最长子串

		- 

	- 字符串相加

		- 

- 数组

	- 两数之和

	- 合并两个有序数组

		- 

	- 三数之和

	- 差集/交集

- 数据结构

	- 链表

		- 两数相加

			- 

		- LRU缓存机制

		- 相交链表

		- 反转链表

			- 

		-  K 个一组翻转链表

			- 

		- 反转从位置 m 到 n 的链表

		- 合并两个有序链表

			- 递归法

				- 

			- 迭代法

	- 栈

		- 有效括号

			- 

	- 队列

		- 用栈实现队列

	- 二叉树

		- 中序遍历

			- 中序遍历首先遍历左子树，然后访问根结点，最后遍历右子树。

				- 递归

					- 

				- 非递归

					- 

		- 前序遍历

			- 先访问根节点，再前序遍历左子树，再前序遍历右子树

				- 递归
				- 非递归

		- 后序遍历

			- 先后序遍历左子树，再后序遍历右子树，再访问根节点

				- 递归
				- 非递归

		- DFS 深度探索

			- 从上到下
			- 从下到上

		- BFS 层次遍历

- 动态规划

	- 最大子序和（类似背包问题）

		- 

	- 爬楼梯

		- 

### 编程题

- 实现 compose

	- 

- 实现继承

	- 

- 数组

	- 两个数组 交/差 集

		- const diffArray = (arrA, arrB) => arrA.filter(x => !arrB.includes(x));
		- const intersection = (arrA, arrB) => arrA.filter(x => arrB.includes(x));

	- 去重

		- 
		- Array.from(new Set(Arr))

	- 扁平化

		- 

	- Splice 实现

		- 

- bind() 实现

	- 

- 千位加逗号

	- 

- 手写async/await
- indexOf 实现
- 手写Promise

- 实现reduce

- 防抖 debounce / 节流 throttle

- call/applay 实现

- 函数柯理化

- 实现一个批量请求函数 multiRequest(urls, maxNum)

- 获取0～N不重复随机数组

## 新技术/方向

### PWA

### CSS Houdini

### Web Components

### HTTP/2

### WebAssembly

### Micro Frontends: 微前端 - 将微服务理念扩展到前端开发

- 微前端的概念缘由

	- 什么是微服务？

		- The Majestic Monolith

			- 当今的软件开发环境中，大多数应用程序都是单一的，这种方法的缺点之一是企业所有者一年内需要做的决策数量非常有限（因为依赖关系，响应时间较慢）。
			- 升级产品，在一系列相关服务中增加尺寸较大等新功能，需要所有相关方共同努力，以同步方式进行变更。

		- 微服务架构的好处：

			- 微服务是孤立的，独立的 “模块”，它们共同为更高的逻辑目的服务。他们通过商定的协议彼此沟通，每个服务都负责特定的功能。这使得每个服务都能够保持简单，简洁和可测试性。
			- 微服务允许您更自发地采取更深远的业务决策，因为每个微服务都是独立运作的，而且一个正在管理的团队可以很好地控制变更。
			- 微服务架构允许每个团队决定最适合他们的技术和基础架构
			- 引入微服务体系结构的重大好处，它允许团队扩展独立部署和维护服务的交付。
			- 假设服务边界已经被正确地定义为与可以独立运行的业务子域相对应，并确保在微服务设计中遵循许多最佳实践

				- 复杂性：服务可以更好地执行问题分离。
				- 可扩展性：服务可以独立扩展或缩减。
				- 弹性：服务可以独立失败。
				- 敏捷性：服务可以独立开发，测试和部署。

	- 那么前端的现状呢？ —— 臃肿的前端

		- 构建一个功能丰富，功能强大的浏览器应用程序，也就是单页面应用程序

			- 随着时间的推移，往往由一个单独的团队开发的前端层越来越难以维护。
			- 如果做得对，它提供了优秀的用户体验。主要缺点是它不能很好地扩展。在一个大公司里，有许多开发团队，单前端团队可能成为一个发展瓶颈。

		- 大型 SPA 却位于微服务架构之上。

			- 一个带有一个BFF的应用程序。 为什么与微服务一起拆分？
			- 不幸的是，我们也看到许多团队在其后端服务之上创建了前端庞然大物 - 一个庞大而庞大的浏览器应用程序。
			- 前端变得越来越大，后端变得越来越不重要。

				- 90％的前端代码，具有非常薄的后端。

		- 举实例：OSP 项目中 components library 的弊端 (NPM package)

			- 如果您想发布一个对 Header 组件的更改，这个 Header组件已经有五十页个页面在使用，该怎么办？ 您将不得不要求每个页面升级其标题版本，与此同时，您的用户会在整个网站上获得不一致的标题
			- 您现在正在编译另一个应用程序，作为你应用的的一部分，如果它引发意外情况，你的应用程序也会崩溃吗？
			- 您必须在两边都使用相同的技术，如果 Heaer 使用 ClojureScript 而你的页面使用 Elm 怎么办？ Webpack较差，编译时现在必须了解所有内容。

- 微前端的定义与解决方案

	- 定义

		- 微服务思想在前端的运用：微前端 - 将微服务理念扩展到前端开发

			- ThoughtWorks 的同志们最擅长举一反三，包装概念啦！
			- 微前端（Micro Frontends）这个术语是微服务的衍生物。它代表了多个自包含的和松散耦合的 UI 组件（服务）的构建方法，其中每个组件负责特定的 UI 元素和 / 或功能。
			- 如果我们看到微服务提供了后端的好处，如果我们能够将这些好处应用到前端，并不是向前迈出的一步，而且设计微服务不仅要完成后端逻辑，而且还要完成视觉部分
			- 使各个前端团队按照自己的步调迭代，然后在准备就绪时释放; 风险隔离; 而且更容易尝试新技术。
			- 对于微服务来说，微前端的许多要求是相同的：监控，健康检查，日志记录，仪器仪表，度量标准等等。

		- 微观前端的想法是基于代表领域特定功能的屏幕将应用程序分解为更小的单元，而不是编写大型单片前端应用程序。前端是独立的，可以独立部署。

			- 将网站或网络应用程序视为由独立团队拥有的功能组合。每个团队都有一个独特的业务或任务关注和专业的任务。一个团队是跨职能的，从数据库到用户界面端到端地发展其功能。
			- 您可以拥有后端，前端，数据访问层和数据库，即一个服务中的子域所需的所有内容。每一项服务都应该由一个独立的团队来完成。
			- 所有前端功能（身份验证，库存，购物车等）都是单个应用程序的一部分，并与后端（大部分时间通过 HTTP）进行通信，并将其分解为微服务。

		- Web 应用程序被分解成它的特征，并且每个特征都由不同的团队拥有，前端到后端。这确保了每个功能都是独立于其他功能开发，测试和部署的。

			- 找到线上 bug，测试，理解代码，改变框架，甚至语言，隔离，责任和其他事情变得更容易处理。我们不得不付出的代价是部署，但是，容器（Docker 和 Rocket）以及不可变服务器的概念也得到了极大的改善。
			- 通过微服务，DevOps 和持续交付是我们工程实践的核心，我们决定 AWS 是支持我们专注于基础架构自动化的正确环境，同时为我们提供冗余和可扩展性。

				- Docker 容器将给我们两个具体的好处：
				- 跨越环境以及跨 JVM 和非 JVM 应用程序统一部署管道：目前，我们正在管理 Symfony / Angular 表示层的部署，与我们的 JVM / Agora 中间层不同，导致不必要的差异，复制工作和浪费。
				- 在单独的主机上部署每个应用程序 / 服务实例的能力：容器调度将使我们能够整合我们的计​​算资源，同时保持服务实例之间的隔离，同时提高利用率。

		- 存在多种技术来重新组合特征 - 有时作为页面，有时作为组件 - 变为有凝聚力的用户体验。

			- 前端（不管是不是 SPA）将被缩减为只负责路由选择和决定要导入哪些服务的脚手架。

	- 核心思想

		- 是技术不可知的

			- 每个团队都应该能够选择和升级他们的堆栈，而不必与其他团队协调。自定义元素是隐藏实现细节的好方法，同时为其他人提供中立的界面。

		- 隔离团队代码

			- 即使所有团队使用相同的框架，也不要共享运行时。构建独立的应用程序。不要依赖共享状态或全局变量。

		- 建立团队前缀

			- 同意命名不能隔离的约定。命名空间 CSS，事件，本地存储和 Cookies，以避免冲突和明确所有权。

		- 通过定制 API 支持本地浏览器功能

			- 使用浏览器事件进行通信，而不是构建全局的 PubSub 系统。如果您确实需要构建跨团队 API，请尽量保持简单。
			- 组件事件总线

		- 构建弹性网站

			- 即使 JavaScript 失败或尚未执行，您的功能仍应有用。使用通用渲染和渐进增强来提高感知性能。

	- 解决了什么问题？

		- 跨团队沟通的问题

			- Spotify 在内部被分成小队（3-12 人）队称为小队。一个特点通常由一个小队拥有，而在正常情况下，小队拥有开发和维持其特征所需的一切。一个小队的 iOS，Android，网络和后端开发人员是很正常的。一般的想法是，每个小队都应该有自己的能力来完成自己的功能，最大限度地减少小组要求其他部门获得许可和 / 或帮助。
			- 提供了大量引进 library 的好处是少数人讨论，而不是涉及约 100 人的决定和他们的各种需求。这样一场大讨论不仅会耗费时间和精力，而且会迫使我们采用最不起眼的方法来选择 library，而不是选择专门针对每个 team 的问题领域的方案。

- 微前端的优缺点

	- 优点

		- 可重用的代码
		- 敏捷性 - 每项服务的独立开发和部署周期

			- 可以独立部署
			- 一旦完成其中一项就可以部署，而不必等待所有事情等。

		- 降低错误和回归问题的风险
		- 更简单快捷的测试
		- 微前端的好处

			- 个人开发团队可以选择自己的技术。
			- 开发和部署非常快。
			- 微服务的好处可以更好地利用。依赖性急剧下降。
			- 有助于持续部署。
			- 维护和支持非常简单，因为个人队伍拥有特定的区域。
			- 测试变得简单以及每一个小的变化，你不必去触摸整个应用程序。

	- 缺点

		- 开发与部署环境分离

			- 一个复杂的开发环境
			- 有一个孤立的部署周期。
			- 能够在一个孤立的环境中运行。

		- 复杂的集成

			- 隔离 js，避免 css 冲突，根据需要加载资源，在团队之间共享公共资源的机制，处理数据获取并考虑用户的良好加载状态。
			- 但是最后，他们都需要以某种方式集成到同一前端中，以便用户可以看到它。
			- Contract Testing 也只不过是在微服务架构下的产物，很多都是。

		- 第三方模块重叠 / 冗余组成复杂性

			- 依赖管理

				- 首先，我们将应用程序构建为完全独立的应用程序，这些应用程序已加载到iframe中并通过 postMessage 进行通信。 我们在某些方面仍在这样做，但是它有一些很大的缺点，尤其是在包大小和浏览器支持方面。 Bundle 包的大小尤其明显，因为您最终会多次发送相同的库，并且由于应用程序是分开的，因此无法在构建时提取常见的依赖项。

			- 提取库的问题是页面和应用程序之间的同步，您不想为你的应用加载过多或过少的所需库，因此让我们只关注主要的，较重的库，例如React 。

				- 
<script  src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js"
  crossorigin="anonymous"></script>

			- 如果您需要两个版本(的库)，则仍将加载重复的库，因此问题仍然存在。

				- 我最好的建议是要求团队升级其应用程序。

		- 最终用户的体验

			- 初始 Loading 时间可能会增加
			- HTML 应该是服务器端渲染。

- 参考资料

	- https://inbox.google.com/u/1/search/micro%20frontend

	- https://medium.com/@_rchaves_/building-microfrontends-part-ii-joining-apps-together-dfa1b6f17d3e

	- https://www.diigo.com/user/jimmylv?query=%23microfrontends

- 一些思考

	- 技术选型

		- 既然 React 经验不错，那为什么不推广到全公司？可能是跨 vendor 合作
		- 前端 JavaScript 框架穷出不穷，最后又出来要取代 Webpack 和 Yarn 的工具，过几个月就要重写项目？重构压力、负担大，那不如直接支持多 framework？

	- 在 Mobile/Mobile Web 上的悖论

		- 已经分出了不同的子页面，那何不如直接 Router 即可？

	- 合理划分：DDD

		- 最大的挑战是搞清楚如何划分应用程序。糟糕的设计可能成为开发和维护的噩梦。主要原则是将应用程序分为不同的部分，子部分和组件。

	- 所谓架构，其实是解决人的问题；所谓敏捷，其实是解决沟通的问题；所谓精益，其实是讨论如何榨干劳动力，美其名曰减少浪费；
	- 如果不需要，请不要使用任何一种想法

		- 除非有必要，否则请不要使用此处描述的想法，否则会使事情变得更复杂。
		- 如果您在大公司里，这些想法可以为您提供帮助

- Demo 时间

	- Single-SPA “meta framework” 可以在一个页面将多个不同的框架整合，甚至在切换的时候都不需要刷新页面 (这个是 demo，支持 React, Vue, Angular 1, Angular 2, etc)。

		- 构建可以共存的微前端，并且每个微前端都可以使用自己的框架编写。
		- 在同一页面上使用多个框架而无需刷新页面（React，AngularJS，Angular，Ember或您使用的任何内容）
		- 使用新框架编写代码，而无需重写现有应用
		- 延迟加载代码可缩短初始加载时间。
		- 热重新加载整个应用程序的整个块（而不是单个文件）。

	- 比较好的方案、框架支持，https://single-spa.surge.sh/

	- import * as singleSpa from 'single-spa';

const appName = 'app1';

const loadingFunction = () => import('./app1/app1.js');
const activityFunction = location => location.hash.startsWith('#/app1');

singleSpa.declareChildApplication(appName, loadingFunction, activityFunction);
singleSpa.start();

- 实战

	- 构建微前端

		- 创建小应用（不是组件）

			- # server.js
const renderedApp = renderToString(React.createElement(App, null));
			- # src/App.js
export default () =>
  <header>
    <h1>Logo</h1>
    ......
  </header>;
			- header, products-list, shopping-cart

		- 应用聚合

			- 选择 1: template

				- # server.js
Promise.all([
    getContents('https://microfrontends-header.herokuapp.com/'),
    getContents('https://microfrontends-products-list.herokuapp.com/'),
    getContents('https://microfrontends-cart.herokuapp.com/')
  ]).then(responses =>
    res.render('index', { header: responses[0], productsList: responses[1], cart: responses[2] })
  ).catch(error =>
    res.send(error.message)
  )
);
				- # views/index.ejs
  <head>
    <meta charset="utf-8">
    <title>Microfrontends Homepage</title>
  </head>
  <body>
    <%- header %>
    <%- productsList %>
    <%- cart %>
  </body>
				- 问题：某些应用可能需要更长的加载时间

在某些情况下，后端需要花费一些时间来加载，也许 header 的加载要比页面其他部分快得多，并且您希望尽快向用户显示该 header，而产品列表则需要更多时间。

					- 选择 1.1:从后端逐步加载

			- 选择 2: iframe

				- <body>
    <iframe frameBorder="0" width="100%" height="200" src="https://microfrontends-header.herokuapp.com/"></iframe>
    <iframe frameBorder="0" width="100%" height="200" src="https://microfrontends-products-list.herokuapp.com/"></iframe>
    <iframe frameBorder="0" width="100%" height="200" src="https://microfrontends-cart.herokuapp.com/"></iframe>
  </body>

			- Option 3: 客户端 JavaScript

				- 这基本上是通过ajax来加载应用并将其内容插入到div中。 它还必须手动创建脚本标签，以使其起作用。
				- var script = document.createElement("script");
              script.setAttribute("src", nonExecutableScript.src);
              script.setAttribute("type", "text/javascript");
              element.appendChild(script);
				- 一个缺点：为避免Javascript和CSS加载顺序出现问题，建议您将其演变为类似于facebook的bigpipe的解决方案，并返回JSON
{html：...，css：[...]，js：[...]}，以便您可以完全控制它。

		- 公共路径问题和路由

			- 主页和应用之间的耦合，如果一个团队负责开发主页，而另一个负责标题，那该怎么办？ 如果我们想将相同的标题添加到另一页怎么办？
			- 集中式URL服务。 它应该为应用提供注册自己的URL的API，该服务位于您网站的前面，仅指向其他应用。 我们将其称为路由。
			- 选择 4: WebComponents

				- # src/index.js

class Header extends HTMLElement {
  attachedCallback() {
    ReactDOM.render(<App />, this.createShadowRoot());
  }
}
document.registerElement('microfrontends-header', Header);
				- 
  <body>
    <microfrontends-header></microfrontends-header>
    <microfrontends-products-list></microfrontends-products-list>
    <microfrontends-cart></microfrontends-cart>
  </body>

		- 应用间的通信

			- 因为它可以与任何其他技术和框架一起使用，所以您可以将消息例如从React发送到Angular。
			- 这就是当今每个人都使用JSON在后端进行通信的相同原因，即使没有人使用NodeJS！
			- 我们如何测试这种通信？ 如何在这种情况下编写集成测试用例？ 我不知道。 另外在这里添加事件驱动架构可能会是一些很好的想法。
			- # angularComponent.ts
const event = new CustomEvent('addToCart', { detail: item });
window.dispatchEvent(event);

# reactComponent.js
componentDidMount() {
    window.addEventListener('addToCart', (event) => {
      this.setState({ products: [...this.state.products, event.detail] });
    }, false);
  }

	- iframe

		- 每个应用程序都在自己的小 iframe 中，这使得小组能够使用任何他们需要的框架，而无需与其他小组协调工具和依赖关系。
		- 将微服务包装到 IFrames 中，然后使用一些库和 Window.postMessageAPI 来交互。
		- 缺点

			- Bundle 的大小非常明显，因为你最终会多次发送相同的库，并且由于应用程序是分开的，所以在构建时不能提取公共依赖关系。
			- 至于浏览器的支持，你基本上不能嵌套两层以上的 iframes（parent - > iframe - > iframe），或者所有的地狱崩溃。如果任何嵌套的框架需要能够滚动或具有表单域，准备痛苦。

		- 优点

			- Iframes - 最强大的实现还隔离了组件和应用程序部分的运行时环境，因此每个部分都可以独立开发，并且可以与其他部分的技术无关 - 也就是说我们可以在 React 中开发一些部分，在 Angular 中开发一些部分，在 vanilla Js 中开发更多或任何其他技术。只要 iframes 来自同一个来源，帧间消息传递就相当直接和强大。

	- Web Components 来作为一个整合层整合所哟模块

		- 每个团队建立他们的组件使用他们所选择的网络技术，并把它包装自定义元素中（如<order-minicart></order-minicart>）。

			- 允许创建可以导入到 Web 应用程序中的可重用组件。它们就像可以导入任何网页的小部件。

		- Web 组件 - Web 组件是应用程序中包含的组件的本地实现，如菜单，表单，日期选择器等。每个组件都是独立开发的，主应用程序项目利用它们并组成最终的应用程序。
		- 这个特定元素（标签名称，属性和事件）的 DOM 规范充当其他团队的合同或公共 API。
		- 优点

			- 自定义元素是一个 Web 标准，所以像 Angular，React，Preact，Vue 或 Hyperapp 这样的主流 JavaScript 框架都支持它们。

				- 自定义元素 

					- 可以创建自己的自定义 HTML 标签和元素。每个元素可以有自己的脚本和 CSS 样式。
					- 还包括生命周期回调，它们允许我们定义特定于正在开发的组件的行为。

						- createdCallback 定义了组件注册时发生的行为。
						- attachedCallback 定义了将组件插入到 DOM 中时发生的行为。
						- detachedCallback 定义从 DOM 中删除元素时发生的行为。
						- attributeChangedCallback 定义添加，更改或删除元素的属性时发生的行为

				- Shadow DOM

					- 允许我们在 Web 组件中封装 JavaScript，CSS 和 HTML。在组件内部时，这些东西与主文档的 DOM 分离。

				- HTML 导入 

					- 在微服务的上下文中，导入可以是包含我们要使用的组件的服务的远程位置。
					- <link rel="import" href="/components/tc-books/tc-books.html">
<link rel="import" href="/components/tc-books/tc-book-form.html">


				- HTML 模板元素

					- 可以用来保存客户端内容，当页面加载时不会渲染。

			- 他们可以使用组件及其功能，而不必知道实现。他们只需要能够与 DOM 进行交互。
			- 使用 PubSub 机制，组件可以发布消息，其他组件可以订阅特定的主题。幸运的是浏览器内置了这个功能。

				- 购物车现在可以订阅此事件window并在应该刷新其数据时得到通知。
				- window.addEventListener('blue:basket:changed', this.refresh);

		- 缺点

			- 可悲的是，Web 组件规范根本不谈论服务器渲染。没有 JavaScript，没有自定义元素:(
			- 浏览器不全，支持不够，社区不够，框架支持不够。

				- 并非所有浏览器都完全支持WebComponents，比如，Mozilla不支持 HTML Imports 特性，因此您将需要polyfills和更多代码供用户加载。
				- 它尚未真正普及，也许永远不会，直到现在仍然很少有人尝试过！
				- JavaScript bundle 必须先加载并注册组件才能加载DOM，这意味着要获得服务器端渲染的优势，您可能需要变得更加聪明。
				- 对于这种替代方法，我们不仅必须在主页上而且还要在应用上进行更改，才能将它们转换为WebComponents。

	- 组件库 - 根据主应用程序的堆栈，不同的组件和应用程序部分可以开发为库和 “需要” 到主应用程序，所以主应用程序是由不同组件组成的。

		- 将 “应用程序” 作为黑盒 React 组件分发给消费应用程序。应用程序的状态完全包含在组件中，API 只是通过 props 暴露出来。
		- 它增加了应用程序之间的耦合，因为它迫使每个人都使用 React，甚至会使用相同版本的 React，但是对于我们来说，情况已经如此，所以这似乎是一个好的折衷。

	- SSI / ESI 方法的缺点是，最慢的片段决定了整个页面的响应时间。所以当一个片段的响应可以被缓存时是很好的。

		-         Edge Side Includes(ESI) 和 Server Side Includes(SSI) 和功能类似. SSI 需要特殊的文件后缀 (shtml,inc).ESI（Edge Side Include）通过使用简单的标记语言来对那些可以加速和不能加速的网页中的内容片断进行描述, 
		- 每个网页都被划分成不同的小部分分别赋予不同的缓存控制 策略, 使 Cache 服务器可以根据这些策略在将完整的网页发送给用户之前将不同的小部分动态地组合在一起. 
		- 通过这种控制, 可以有效地减少从服务器抓取整个 页面的次数, 而只用从原服务器中提取少量的不能缓存的片断, 因此可以有效降低原服务器的负载, 同时提高用户访问的响应时间.

	- 页面模块加载的问题

		- 推荐区域最初是空白的。团队绿色 JavaScript 被加载和执行。用于获取个性化推荐的 API 调用已经完成。推荐标记被呈现并且请求关联的图像。现在片段需要更多的空间，并推动页面的布局。
		- 团队红，控制页面，可以固定建议容器的高度。在响应式网站上，确定高度往往很难，因为不同的屏幕尺寸可能会有所不同。但更重要的问题是，这种队际协议在球队红绿之间产生了紧密的联系。
		- 更好的方法是使用称为骨架屏幕的技术。Team red 将green-recosSSI Include 包含在标记中。此外，团队绿色会更改其片段的服务器端渲染方法，以便生成内容的原理图版本。该骷髅标记可以重用的实际内容的布局样式的部分。这样就保留了所需的空间，实际内容的填充不会导致跳跃。

			- 骨架屏幕本质上是页面的空白版本，在该页面中逐渐加载信息。

	- 优化

		- 对于生产成本高且难以缓存的碎片，将其从初始渲染中排除是一个好主意。浏览器异步加载。
在我们的例子中green-recos，显示个性化推荐的片段就是这个候选人。
		- 在前端设计中，必须向用户呈现外观和感觉一致的用户界面。有很多页面上都出现了 UI 元素。关注的分离并不总是像后端服务一样清晰。
		- UI 组件库

			- 我们用微前端解决的下一个挑战是呈现一致的外观和感觉，同时也隔离风险。
			- 我们建立了一个共享组件（CSS，Font 和 JavaScript）的库。我们将这些资源托管在每个微前端可以在其 HTML 输出中引用它们的位置。每个组件库的版本都正确地对资源进行版本控制，每个微前端都指定要使用的组件库的版本。因此，CSS 和 JavaScript 不会意外地改变; 每个微前端的开发者都必须显式更新依赖关系。

