export default {
    input: "dist/index.js",
    output: [
        {
            file: 'dist/index.cjs',
            format: 'cjs'
        },
        {
            file: 'dist/index.mjs',
            format: 'esm'
        }
    ]
}