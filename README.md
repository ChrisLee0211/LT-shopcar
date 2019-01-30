# LT-shopcar
A demo of shopping cart. It`s easy to add a  module like shopping cart by just only 3 step. It include these functions: settlement amount, the calculation of quantity ,and so on...

## 效果预览：
![IMAGE](https://github.com/ChrisLee0211/LT-shopcar/blob/master/example01.gif)

## 技术栈：
> - jQuery3.3.1(已完成了剥离)
> - less
> - javascript

## v1.0(2019.01.18)：
- 全选/单选商品功能；
- 数量增减按钮功能；
- 单条目商品总价实时更新；
- 结算金额实时更新

## v1.0.1(2019.01.21):
- 修复了复选框全部选中而全选框无法自动打勾的bug

## v1.1（2019.01.30）：
· 封装了更原始的DOM方法来替换原来的querySelector
· 新增兼容IE8及其以下的浏览器

## 使用说明：
这个插件具备了一般购物车应有的功能如商品金额自动计算、数量增减更新等，目前还处于初始阶段，后续会慢慢完善功能。另外，整个DEMO不必要完全下载，只需要使用其中的js文件即可，内部已经封装好了方法，附上html和less文件是为了更好地理解和演示功能。
#### （一）加载js文件：
把js文件夹中的`LT-shopcar.js`文件放到你的项目中并且引用：
```html
<script src="你的js文件地址"></script>
```

#### （二）使用样式：
在你的html标签中，根据以下功能所代表的样式名称，添加到你自己`html元素`的的`class属性`中，以全选框为例：
```html
<input type="checkbox" class="select-item select-all" checked="checked">&nbsp;全选
//其中class中的select-all是实现功能的关键，前面的样式是自身的UI样式，非必须
```

|元素功能       | 样式名          | 作用  |
| ------------- |:-------------:| -----:|
| 全选框       | select-all | 选中全部商品的单选框 |
| 单选框     | cost-box      |   勾选每个商品条目 |
| 商品总价 | total_num      |    显示每个条目中商品的总价 |
| 商品单价       | price_num | 显示每个条目中商品的单价 |
| 商品数量(type="text")     | quantity_num      |   显示每个条目中商品的数量 |
| “+”按钮 | add      |    点击后商品数量+1 |
| “-”按钮 | subtract      |    点击后商品数量-1 |
| 结算金额       | total_pay | 显示整个购物车的结算金额 |

#### （三）调用组间入口函数：
在引用后，手动调用一次入口函数完成加载，示例：
```html
<script src="js/LT-shopcar.js"></script>
<script>
    var shopcar_module = new shopcar();
    shopcar_module.init()
</script>
```

## Todo：
- 完善好“删除”条目功能；
- 考虑增加一个“是否使用优惠券”的勾选框功能，通过ajax和后台校验有无优惠券；
- 在结算栏中增加已选商品数量；
- 增加传参调用的使用方法，避免干预使用者的样式命名。
