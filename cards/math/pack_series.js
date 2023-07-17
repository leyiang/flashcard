export default {
    name: "series",
    cards: [
        ["\\int_{a}^{b}(f(x)+g(x))dx=?", "\\int_{a}^{b}f(x)dx + \\int_{a}^{b}g(x)dx"],
        ["\\int_{a}^{b}Cf(x)dx=?", "C\\int_{a}^{b}f(x)dx=?"],
        ["\\int_{a}^{c}f(x)dx + \\int_{c}^{b}f(x)dx = ?", "\\int_{a}^{b}f(x)dx"],
        ["\\int_{a}^{a}f(x)dx=?", "0"],
        ["\\int_{a}^{b}f(x)dx=(\\text{what})\\int_{b}^{a}f(x)dx", "\\int_{a}^{b}f(x)dx=(-1)\\int_{b}^{a}f(x)dx"],
        ["\\int_{-a}^{a}f(x)dx=?", "如果f(x)是奇函数的话，积分值等于0 \\\\ 如果f(x)是偶函数，积分等于2\\int_0^{a}f(x)dx"],
        ["\\sum_{i=1}^{n}i^2=?", "\\frac{n(n+1)(2n+1)}{6}"],
        ["\\sum_{i=1}^{n}i=?", "\\frac{n(n+1)}{2}"],
        ["\\sum_{i=1}^{n}(x_{i} + y_{i})", "\\sum_{i=1}^{n}x_{i} + \\sum_{i=1}^{n}y_{i}"],
        ["\\sum_{i=a}^{n}c", "(n-a+1)*c"],
        ["\\sum_{i=1}^{n}cx_{i}", "c\\sum_{i=1}^{n}x_{i}"],
        ["\\sum_{j=1}^{n}(2j-1)=?", "n^2"],
        ["\\sum_{j=a}^{b}(f(j)-f(j-1))=?", "f(b) - f(a-1)"],
        ["\\sum_{m=100}^{1000} 1=?", "(1000 - 100 + 1) * 1"],
        ["\\sum_{m=1}^{200} 5=?", "200 * 5"],
    ]
}
