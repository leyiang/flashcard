export default {
    name: "integral",
    cards: [
        ["\\frac{...}{(...)(x+a)^3},怎么拆", "... + \\frac{A}{(x+a)^3} + \\frac{B}{(x+a)^2} + \\frac{C}{(x+a)}"],
        ["\\frac{...}{(...)(x^2+ax+b)},怎么拆", "... + \\frac{Ax+B}{x^2+ax+b}"],
        ["\\frac{...}{(...)(x+a)^2},怎么拆", "... + \\frac{A}{(x+a)^2} + \\frac{B}{(x+a)}"],
        ["\\frac{...}{(...)(x+a)},怎么拆", "... + \\frac{A}{(x+a)}"],
        ["分部积分法", "\\int udv = uv - \\int vdu"],
        ["\\int \\frac{f'(x)}{f(x)}dx=?", "ln|f(x)| + C"],
        ["\\displaylines{\\int_{a}^{b}f(x)dx=? \\\\ F(x)是f的任意反导数}", "F(b)-F(a)"],
        ["\\frac{d}{dx}\\int_{a}^{x}f(t)dt=?", "f(x)"],
    ]
}
