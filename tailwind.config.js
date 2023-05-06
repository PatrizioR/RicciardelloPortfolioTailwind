module.exports = {
    content: [
        "./wwwroot/**/*.html",
        "./wwwroot/**/*.razor",
        "./wwwroot/**/*.cshtml",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms")
    ],
}
