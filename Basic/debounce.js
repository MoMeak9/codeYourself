// 函数防抖的实现，相当于工厂函数
function debounce(fn, wait) {
    let timer = null;

    return function () {
        let context = this, // 保存当前函数执行上下文
            args = arguments;

        // 如果此时存在定时器的话，则取消之前的定时器重新记时
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        // 设置定时器，使事件间隔指定事件后执行
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, wait);
    };
}

// 函数防抖的实现
function debounce2(fn, wait) {
    let timer = null;

    return function () {
        let args = arguments;

        // 如果此时存在定时器的话，则取消之前的定时器重新记时
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        // 设置定时器，使事件间隔指定事件后执行
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
}
