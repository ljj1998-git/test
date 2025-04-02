module.exports = {
    printWidth: 100, // 单行最大长度
    tabWidth: 2, // 缩进空格数
    useTabs: false, // 禁止使用制表符
    semi: true, // 语句结尾保留分号
    singleQuote: true, // 使用单引号
    quoteProps: 'consistent', // 对象属性引号一致性
    jsxSingleQuote: false, // JSX 中使用双引号
    trailingComma: 'es5', // 多行时尽可能保留尾随逗号
    bracketSpacing: true, // 对象括号空格 { foo: bar }
    bracketSameLine: false, // 多属性HTML标签的‘>’换行
    arrowParens: 'avoid', // 箭头函数单参数时省略括号 x => x
    vueIndentScriptAndStyle: true, // Vue文件缩进<script>和<style>
    endOfLine: 'lf', // 统一换行符为LF
    htmlWhitespaceSensitivity: 'ignore' // HTML空格敏感度
};
