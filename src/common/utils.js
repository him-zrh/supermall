//防抖函数
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


//将date进行格式化转换成字符串封装函数
//正则表达式是干什么的? 字符串匹配 利器(很难，规则太多)  
export function formatDate(date, fmt) {
  //获取年份
  //y
  //y+ --> 1个或者多个y
  //y* --> 0个或者多个y
  //y? --> 0个或者1个y

  //2020
  //yyyy--> 2020
  //yyy--> 020
  //yy--> 20
  //y--> 0
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  let o = {
    'M+': date.getMonth() + 1, //获取月份
    'd+': date.getDate(),      //获取日期
    'h+': date.getHours(),     //获取小时
    'm+': date.getMinutes(),   //获取分钟
    's+': date.getSeconds()    //获取此刻秒数
  }

  //进行统一处理
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }

  return fmt
};

//一个小算法
function padLeftZero(str) {
  //'00'补齐
  //如果传入的参数是04，那么就是0004，再截取传入参数的长度，最后就是04
  //04-->0004-->04 ,  4-->004-->04,  保证最后一定是两位数
  return ('00' + str).substr(str.length)
};