// use strict


it('test var', () => {

    // const a = 1;
    // let b = 2;
    // console.log(b)

    for (var i = 0; i < 10; i++) {
        var a = 'a';
    }
    console.log(a);

    for (var i = 0; i < 10; i++) {
        const a1 = 1;
        let b = 2;
        console.log(b)
    }
    console.log(a1);


});

it('test template', () => {

    let a = "a";
    const b = "b"

    console.log(`${a} - ${b} 13123
    213123
    1231231
    123312`)


});

it('test default function', () => {
    function say(name = "haha") {
        console.log(name)
    }

    say()
})

it('test arrow', () => {
// 函数的快捷写法，不需要通过 function 关键字创建函数，并且还可以省略 return 关键字。
//
// 同时，箭头函数还会继承当前上下文的 this 关键字。
//
// 比如： like java8 lamblok

    let b = [1, 2, 3].map(x => x + 1);  // [2, 3, 4]
    console.log(b)
})

it("test import", () => {
    // 引入全部
    // import dva from 'dva';

// 引入部分
//     import { connect } from 'dva';
//     import { Link, Route } from 'dva/router';

// 引入全部并作为 github 对象
//     import * as github from './services/github';

// 导出默认
//     export default App;
// 部分导出，需 import { App } from './file'; 引入
//     export class App extend Component {};
})


/**
 * 和 beanutils copy properties 类似
 */
it("test assigen", () => {
    let state = {
        type : 'test',
        index : 1
    }

    let state2 = {
        type : 'test2',
        index : 1
    }

    let dest = Object.assign({},state);
    console.log(dest)

    let dest2 = Object.assign({},state,state2)
    console.log(dest2)
})