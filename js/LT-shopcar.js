function shopcar(){}
shopcar.prototype.getDom = function(){
    // 获取全选按钮
    selectAll = document.querySelector(".select-all");
     
    // 获取每一个选择框
    costItem = document.querySelectorAll(".cost-box");
     
    //  获取每个商品的总价
    total_num = document.querySelectorAll(".total_num");
    
    // 获取每个商品的单价
    price_num = document.querySelectorAll(".price_num");
    
    // 获取每个商品的数量
    quantity_num = document.querySelectorAll(".quantity_num")

    // 获取每一个增加按钮
    add_btn = document.querySelectorAll(".add")

    // 获取每一个减少按钮
    subtract_btn = document.querySelectorAll(".subtract")

    // 获取结算价格
    final_price = document.querySelector(".total_pay")
}

shopcar.prototype.chooseDom = function(){
    selectAll.onclick=function () {
    operate.chooseAll(this)
  }
    for(var i = 0 ; i < costItem.length; i++){
        costItem[i].onclick=function(){
            var arr = [];
            for(var i = 0; i < costItem.length; i++){
                arr.push(costItem[i].checked)
            }
            if(judgement.isChoosed(this)){
                this.removeAttribute("checked")
                this.checked=false
                operate.totalPay()
                if(judgement.isChooseAll()){
                    selectAll.removeAttribute("checked")
                    selectAll.checked=false
                }else{
                    return
                }
            }else{
                this.setAttribute("checked","checked");
                this.checked=true
                operate.totalPay()
                if(arr.indexOf(false) == -1){
                    selectAll.setAttribute("checked","checked")
                    selectAll.checked=true
                }else{
                    selectAll.checked=false
                }
            }
            
        }
    }
}

shopcar.prototype.numChange = function () { 
    for(var i = 0 ; i < quantity_num.length; i++){
    quantity_num[i].index = i
    // quantity_num[i].onfocus = function () {
    //     var quantity_index = this.index
    //     var result = quantity_num[quantity_index].value;
    //     quantity_num[quantity_index].value = result
    //   }
    quantity_num[i].onblur = function(){
        var quantity_index = this.index
        var result = quantity_num[quantity_index].value;
        quantity_num[quantity_index].value = result;
        operate.totalPrice(quantity_index)
        operate.totalPay() 
        }
    }
    for(var i = 0 ; i < add_btn.length; i ++) {
        add_btn[i].index = i;
        add_btn[i].onclick=function () {
            var btn_index=this.index;
            operate.add(btn_index)
            operate.totalPrice(btn_index)
            operate.totalPay()
        }
    }
    for(var i = 0; i < subtract_btn.length; i++){
        subtract_btn[i].index = i;
        subtract_btn[i].onclick=function () { 
            var btn_index=this.index;
            operate.subtract(btn_index)
            operate.totalPrice(btn_index)
            operate.totalPay()
        }
    }
}
// 判断功能模块
var judgement = {
    // 是否已选
    isChoosed:function(dom){
            var judge = dom.getAttribute("checked")
            return judge?true:false
        },
    // 是否全选
    isChooseAll:function(){ 
            if(judgement.isChoosed(selectAll)){
                return true
            }else{
                return false
            }
        }
}
// 操作功能模块
var operate = {
    // 全选操作
    chooseAll:function(dom){
        if(judgement.isChoosed(dom)){
            selectAll.removeAttribute("checked")
            selectAll.checked=false
            final_price.innerHTML = 0
            for(var i = 0;i < costItem.length; i++){
                costItem[i].removeAttribute("checked")
                costItem[i].checked=false
            }
        }else{
            selectAll.setAttribute("checked","checked")
            selectAll.checked=true
            for(var i = 0;i < costItem.length; i++){
                costItem[i].setAttribute("checked","checked")
                costItem[i].checked=true
            }
            operate.totalPay()  
        }
    },
    // 增加数量操作
    add:function (index) {
        var value = quantity_num[index].value;
        var result = parseInt(value) + 1
        quantity_num[index].value = result
        
    },
    // 减少数量操作
    subtract:function(index){
        var value = quantity_num[index].value;
        if(parseInt(value) <= 1){
            var result = 1
        }else{
            var result = parseInt(value) - 1
        }
        quantity_num[index].value = result
    },
    // 总价计算操作
    addAll:function(price,quantity){
        var result = parseInt(price) * parseInt(quantity)
        return result
    },
    // 总价显示更新操作
    totalPrice:function (index) {
        var quantity = quantity_num[index].value;
        var price = price_num[index].innerHTML;
        var result = operate.addAll(price,quantity);
        total_num[index].innerHTML = result;
        
    },
    // 结算金额计算操作
    addTotalPay:function(arr){
        if(arr.length == 0){
            return 0
        }else{
            var sum = 0;
            for(var i = 0; i < arr.length; i++){
                sum += parseInt(arr[i])
            }
            return sum
        }
    },
    // 结算金额更新
    totalPay:function(){
        var chooseList = [];
        for(var i = 0; i < costItem.length; i++){
            if(judgement.isChoosed(costItem[i])){
                console.log(judgement.isChoosed(costItem[i]))
                costItem[i].index = i;
                var choosed_index = costItem[i].index
                var choosed_price = total_num[choosed_index].innerHTML;
                chooseList.push(choosed_price)
                
            }
        }
        console.log(chooseList)
        var total_pay = operate.addTotalPay(chooseList);
        final_price.innerHTML = total_pay

    }
}
// 入口函数
shopcar.prototype.init = function () {
    //获取所需要的DOM元素
    this.getDom();
    // 选择框操作模块
    this.chooseDom();
    //商品数量增减功能模块
    this.numChange();
}