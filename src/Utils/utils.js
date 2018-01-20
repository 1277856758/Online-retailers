const getCookie = (name) => {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
}

const setCookie = (key, val, time) => {
    document.cookie = key + '=' + val
  }

const delCookie = (name) => {
    var exp = new Date()
    exp.setTime(exp.getTime() - 10)
    var cval = getCookie(name)
    if (cval != null) {
        document.cookie = name + "=" +cval + ";expires=" + exp.toGMTString();
    }
}
export { getCookie, setCookie, delCookie}