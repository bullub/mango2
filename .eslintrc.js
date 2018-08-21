'use strict';

module.exports = {
  // 继承eslint推荐的默认规则
  // "extends": "eslint:recommended",
  // 环境定义了预定义的全局变量。更多在官网查看
  "globals": {
    "CONFIG": true
  },
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "amd": true,
  },
  // JavaScript 语言选项
  "parserOptions": {
    // ECMAScript 版本
    "ecmaVersion": 9,
    "sourceType": "module", // module
    // "ecmaFeatures": {
    //   // 打开一些实验性的功能的校验
    //   "experimentalObjectRestSpread": true
    // }
  },
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  "rules": {
    // 强制 getter 函数中出现 return 语句
    "getter-return": 2,
    // 禁止在正则表达式中使用控制字符
    "no-control-regex": 2,
    // 强制尽可能地使用点号
    "dot-notation": 2,
    // 允许写console语句
    "no-console": 0,
    // 禁止条件表达式中出现赋值操作符
    "no-cond-assign": 2,
    // 禁止在条件中使用常量表达式
    "no-constant-condition": 2,
    // 禁止 function 定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止重复的 case 标签
    "no-duplicate-case": 2,
    // 禁止空语句块
    "no-empty": 1,
    // 禁止在正则表达式中使用空字符集 (/^abc[]/)
    "no-empty-character-class": 2,
    // 禁止对 catch 子句的参数重新赋值
    "no-ex-assign": 2,
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast": 1,
    // 禁止对 function 声明重新赋值
    "no-func-assign": 2,
    // 禁止在嵌套的块中出现 function 或 var 声明
    "no-inner-declarations": [2, "functions"],
    // 禁止 RegExp 构造函数中无效的正则表达式字符串
    "no-invalid-regexp": 2,
    // 禁止在 in 表达式中出现否定的左操作数
    "no-negated-in-lhs": 2,
    // !!!!!!!!!!!禁止出现令人困惑的多行表达式
    "no-unexpected-multiline": 2,
    // 禁止在return、throw、continue 和 break语句之后出现不可达代码
    "no-unreachable": 2,
    // 要求使用 isNaN() 检查 NaN
    "use-isnan": 2,
    // 强制使用有效的 JSDoc 注释
    "valid-jsdoc": [1, { "requireReturn": true }],
    // 强制 typeof 表达式与有效的字符串进行比较
    // typeof foo === "undefimed" 错误
    "valid-typeof": 2,
    // 禁止对关系运算符的左操作数使用否定操作符
    "no-unsafe-negation": 2,
    // 禁止在 finally 语句块中出现控制流语句
    "no-unsafe-finally": 2,
    // 禁用稀疏数组
    "no-sparse-arrays": 1,
    // 禁止正则表达式字面量中出现多个空格
    "no-regex-spaces": 2,
    // 禁止把全局对象作为函数调用
    "no-obj-calls": 2,
    // 禁止在字符串和注释之外不规则的空白
    "no-irregular-whitespace": 2,
    // 强制在parseInt()使用基数参数
    "radix": 2,
    // 禁止使用不带 await 表达式的 async 函数
    "require-await": 2,
    // 要求或禁止 “Yoda” 条件
    "yoda": 1,
    // 禁止使用with语句
    "no-with": 2,
    // 禁止多余的 return 语句
    "no-useless-return": 1,

    // ////////////
    // 最佳实践 //
    // ////////////

    // 强制把变量的使用限制在其定义的作用域范围内
    "block-scoped-var": 1,
    // 强制所有控制语句使用一致的括号风格
    "curly": [2, "all"],
    // switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
    "default-case": 1,
    // 禁止扩展原生对象，扩展原生对象会降低V8性能
    "no-extend-native": 2,
    // 不允许使用eval
    "no-eval": 2,
    // 使用 ===
    "eqeqeq": 1,
    // 不允许在 case 子句中使用词法声明
    "no-case-declarations": 2,
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    "no-div-regex": 2,
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    "no-eq-null": 1,
    // 禁止扩展原生类型
    "no-extend-native": 2,
    // 禁止不必要的 .bind() 调用
    "no-extra-bind": 1,
    // 禁止数字字面量中使用前导和末尾小数点
    "no-floating-decimal": 2,
    // 禁用不必要的嵌套块
    "no-lone-blocks": 1,
    // 禁止在循环中出现 function 声明和表达式
    "no-loop-func": 2,
    // 禁止对原生对象赋值
    "no-native-reassign": 2,
    // 禁止在非赋值或条件语句中使用 new 操作符
    "no-new": 0,
    // 不允许对 function 的参数进行重新赋值
    "no-param-reassign": [1, { "props": true }],
    // 禁止使用 var 多次声明同一变量
    "no-redeclare": 2,
    // 禁止自我赋值
    "no-self-assign": 2,
    // 禁止自身比较
    "no-self-compare": 2,
    // 禁用一成不变的循环条件
    "no-unmodified-loop-condition": 2,
    // 禁止不必要的 .call() 和 .apply()
    "no-useless-call": 2,
    // 禁止不必要的字符串字面量或模板字面量的连接
    "no-useless-concat": 2,
    // 强制在parseInt()使用基数参数
    "radix": 1,
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    "vars-on-top": 1,
    // 要求 IIFE 使用括号括起来
    "wrap-iife": [2, "any"],
    // 禁止不必要的转义字符
    "no-useless-escape": 2,
    // 禁止出现未使用过的标签
    "no-unused-labels": 2,
    // 禁止自我赋值
    "no-self-assign": 2,
    // 禁止8禁止字面量，避免parseInt错误
    "no-octal": 2,
    // 禁止对原生对象或只读的全局对象进行赋值
    "no-global-assign": 2,
    // 禁止 case 语句落空
    "no-fallthrough": 2,
    // 禁止用空解构模式
    "no-empty-pattern": 2,
    // 不允许case子句中使用词法声明
    "no-case-declarations": 2,
    // 禁止抛出异常字面量
    "no-throw-literal": 1,
    // 禁用逗号操作符
    "no-sequences": 1,
    // 禁止使用 javascript: url
    "no-script-url": 2,
    // 禁用不必要的 return await
    "no-return-await": 2,
    // 禁止在 return 语句中使用赋值语句
    "no-return-assign": 2,
    // 禁用魔术数字
    "no-magic-numbers": 0,
    // 强制数组方括号中使用一致的空格
    "array-bracket-spacing": 1,
    // 强制使用骆驼拼写法命名约定
    "camelcase": 1,
    // 强制使用一致的逗号风格
    "comma-style": 1,
    // 函数名和对应的变量名相同
    "func-name-matching": 1,
    // 禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": 1,
    // 禁用嵌套的三元表达式
    "no-nested-ternary": 2,
    // 禁用 Object 的构造函数
    "no-new-object": 1,
    "indent": [1, 2, { "SwitchCase": 1 }],

    "no-restricted-properties": [2, {
      "property": "__defineGetter__",
      "message": "Please use Object.defineProperty instead."
    }],

    // 禁止类似eval的方法
    "no-implied-eval": 2,


    // ////////////
    // 变量声明 //
    // ////////////
    // 禁止 catch 子句的参数与外层作用域中的变量同名
    "no-catch-shadow": 1,
    // 禁止删除变量
    "no-delete-var": 2,
    // 禁止 var 声明 与外层作用域的变量同名
    "no-shadow": 1,
    // 禁止覆盖受限制的标识符
    "no-shadow-restricted-names": 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    "no-undef": 2,
    // 禁止将变量初始化为 undefined
    "no-undef-init": 2,
    // 禁止将 undefined 作为标识符
    "no-undefined": 2,
    // 禁止出现未使用过的变量
    "no-unused-vars": [1, { "vars": "all", "args": "none" }],
    // 不允许在变量定义之前使用它们
    "no-use-before-define": 0,
  }
}