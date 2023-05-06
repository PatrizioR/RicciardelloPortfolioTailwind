module.exports = (ctx) => ({
    theme: {
    },
    plugins: {
        "postcss-import": { root: ctx.file.dirname },
        "tailwindcss/nesting": {},
        tailwindcss: {},
        autoprefixer: {},
        cssnano: ctx.env === "production" ? {} : false,
    }
})