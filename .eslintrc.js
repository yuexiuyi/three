/*eslint-env node*/
module.exports = {
    'root': true, //只有本文件配置生效
    'env': {
        'browser': true,
        'node': true,
        'es2021': true,
    }, //支持以上全局变量
    'extends': [ 'eslint:recommended', 'plugin:@typescript-eslint/recommended' ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module',
    }, //支持最新版本es，es moudule
    'plugins': ['@typescript-eslint'], //支持ts
    'rules': {
        'linebreak-style': [ 'error', 'unix' ], //必须使用unix换行符
        'quotes': [ 'error', 'single' ], //必须使用单引号
        'semi': [ 'error', 'always' ], //必须带分号
        'no-console': [2], //禁止输出
        /* ---------------------------------------- Variables 变量声明 ---------------------------------------- */
        'init-declarations': [ 'error', 'always' ], //除了 for 循环外，变量不能在声明时初始化
        'no-label-var': [2], //不允许标签与变量同名
        'no-undef-init': [2], //禁止将变量初始化为 undefined
        'no-undefined': [2], //禁止将 undefined 作为标识符
        'no-use-before-define': [2], //禁止在变量定义之前使用它们
        //'properties': 'always',//强制属性名称为驼峰风格
        'id-length': [
            'error',
            {
                'properties': 'always', //强制属性名称的标识符长度约定
                'min': 1, //强制标识符的最小长度
                'max': 12, //强制标识符的最大长度
            }
        ],
        'id-blacklist': [
            'error',
            'data',
            'err',
            'e',
            'cb',
            'callback'
        ], //限制通用标识符的使用
        /* ---------------------------------------- Stylistic Issues 编码风格 ---------------------------------------- */
        /* ------- 函数 ------- */
        'func-call-spacing': [ 'error', 'never' ], //禁止在函数名和开括号之间有空格
        'func-name-matching': [ 'error', 'always' ], //要求函数名与赋值给它们的变量名或属性名相匹配
        'func-names': [ 'error', 'always' ], //要求函数表达式有一个名字
        'func-style': [
            'error',
            'declaration',
            { 'allowArrowFunctions': true }
        ], //要求使用函数声明而不是函数表达式,允许使用箭头函数
        'new-cap': 'error', //要求构造函数首字母大写
        'new-parens': 'error', //强制括号后的新构造函数没有参数
        /* ------- 数组 ------- */
        'array-bracket-newline': [ 'error', { 'multiline': true, 'minItems': 3 }], // 在数组开括号后和闭括号大于等于给定的整数必须换行
        'array-bracket-spacing': [
            'error',
            'always', // 要求在数组括号内使用一个或多个空格、或折行
            {
                'singleValue': false, //要求在只包含一个元素的数组的括号内使用一个或多个空格、或折行
                'arraysInArrays': false, //要求在数组的方括号和数组内的对象元素的大括号之间，即[ { 或 } ]，使用一个或多个空格、或折行
                'objectsInArrays': false, //要求在数组的方括号和数组内的数组元素的方括号之间，即[ [ 或 ] ]，使用一个或多个空格、或折行
            }, //例外情况
        ],
        'array-element-newline': [
            'error',
            {
                'multiline': true, //如果数组元素间有换行，则要求换行。
                'minItems': 3, //如果数组元素的个数大于等于给定的整数，则要求换行。
            },
        ],
        'no-array-constructor': 'error', //该规则禁止使用 Array 构造函数
        /* ------- 类 ------- */
        'lines-between-class-members': [ 'error', 'always' ], //要求在类成员之后有一行空行
        /* ------- 括号 ------- */
        'block-spacing': 'error', //要求使用一个或多个空格
        'brace-style': 'error', //强制 one true brace style
        /* ------- 注释 ------- */
        'capitalized-comments': [ 'error', 'always' ], //强制对注释的第一个字母大写
        'multiline-comment-style': [ 'error', 'starred-block' ], //禁止使用连续的行注释来表示块注释。另外，要求块注释的每行之前有一个 *。
        // 'line-comment-position': [ 'error', { 'position': 'beside' }], //强制行注释只在代码行后面。
        /* ------- 逗号 ------- */
        'comma-spacing': [ 'error', { 'before':false, 'after': true }], //禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
        'comma-dangle': [ 'error', 'only-multiline' ], //当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
        'comma-style': [ 'error', 'last' ], //要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
        /* ------- 空格 ------- */
        'indent': [ 'error', 4 ], //必须使用4个空格缩进
        'computed-property-spacing': [ 'error', 'always' ], //强制在计算属性中使用空格
        /* ------- this ------- */
        'consistent-this': [ 'error', '_this' ], //为 this 指定别名 _this
        /* ------- 换行 ------- */
        'eol-last': [ 'error', 'always' ], //强制在非空文件末尾至少存在一行空行
        'multiline-ternary': [ 'error', 'always-multiline' ], //如果表达式跨越多个行，则在三元表达式的操作数之间强制换行。
        'newline-per-chained-call': [ 'error', { 'ignoreChainWithDepth': 1 }], //要求方法链中每个调用都有一个换行符
        /* ------- 最大限制 ------- */
        'max-depth': [ 'error', 4 ], //强制块语句的最大可嵌套深度
        'max-len': [ 'error', { 'code': 120 }], //强制行的最大长度
        'max-lines-per-function': [ 'error', 50 ], //强制在函数中的最大行数
        // 'max-lines': [ 'error', { 'code': 500 }], //强制一个文件的最大行数
        'max-nested-callbacks': [ 'error', 3 ], //强制回调函数最大嵌套深度
        'max-params': [ 'error', 2 ], //限制函数定义中最大参数个数
        'max-statements-per-line': [ 'error', { 'max': 1 }], //强制每一行中所允许的最大语句数量
    },
};
