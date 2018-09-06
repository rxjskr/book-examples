// webpack.config.js
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // 시작점
    entry: './index.js',

    // 번들링 결과 파일
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname)
    },

    // 결과 파일의 용량을 줄여주는 Uglify 활성화
    plugins: [
        new UglifyJSPlugin(),
    ],
    module: {
        rules: [
            {
                // 파일 확장명이 js인 파일에 ES2015+로 코드 변환 실행
                test: /\.js$/,

                // node_modules에 있는 모듈들은 코드 변환 제외
                exclude: /node_modules/,
                use: {
                    // ES2015+ 문법을 ES5로 바꾸는 바벨(babel)로 코드 변환
                    loader: 'babel-loader',
                    options: {
                        // modules 변수를 false로 설정하면 웹팩이 모듈 관련 처리를 실행
                        presets: [
                            ['env', {
                                modules: false
                            }]
                        ]
                    }
                }
            }
        ]
    }
};

