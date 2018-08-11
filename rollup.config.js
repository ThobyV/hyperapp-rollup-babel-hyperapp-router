import babel from "rollup-plugin-babel"
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import sass from 'rollup-plugin-sass'

const prod = !process.env.ROLLUP_WATCH
const dev = !!process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: {
    file: 'build/build.min.js',
    sourcemap: dev ? 'inline' : false,
    format: 'iife',
  },
  plugins: [
    sass({
       insert: true
    }),
    resolve({ jsnext: true,
              browser: true, }),
    commonjs({
      exclude: 'src/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    prod && uglify(),
    dev && livereload('build'),
    dev &&
    serve({
      contentBase: ['build'],
      historyApiFallback: true,
      port: 8080,
    }),
  ],
}
