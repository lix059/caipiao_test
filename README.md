# caipiao_test
彩票问题    http://www.ruanyifeng.com/blog/2018/04/lottery-mathematics.html

### 彩票解决方法详见阮老师博客
方法: 
    * 1.使用caipiao.js的gen函数产生全部4个号码的组合 C(48,4) 组，6个号码的组合 C(48,6) 组
    * 2.每次从6个号码的组合中选取 12972 个号码， 遍历 4个号码 的组合是否全部包含。
