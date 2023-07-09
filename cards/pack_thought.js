export default {
    name: "thought",
    cards: [
        ["\\int \\csc^3(x)\\sec(x)", "1可以看做\\sin^2 + \\cos^2"],
        ["\\int \\frac{x^2+1}{x^4-x^2+1}", "因式分解不了的,就配方 \\\\ 每次变动后检查能否换元 \\\\ 尝试配成常见的导数"],
        ["\\int \\frac{\\cos(2x)}{\\sin(x)+\\cos(x)}", "\\cos(2x)变成平方差\\cos^2(x)-\\sin^2(x)"],
        ["求\\int \\sec(x)的思路", "\\sec(x) * \\frac{\\sec(x)+\\tan(x)}{\\sec(x)+\\tan(x)} \\\\ 构造\\frac{f'(x)}{f(x)}"],
    ],
}