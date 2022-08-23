const presets = [
  [
    '@babel/preset-env', // 将ES6语法转换为es5
    {
      useBuiltIns: 'usage', // 只编译需要编译的代码
      corejs: '3',
      loose: true,
    },
  ],
];

module.exports = { presets };
