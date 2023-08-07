export default {
    name: "integral",
    cards: [
        ["曲线绕y轴旋转的体积:","\\int_{a}^b 2\\pi xydx"],
        ["曲线绕x轴旋转的体积:","\\int_{a}^b \\pi y^2dx"],
        ["\\sqrt{x^2-a^2}, 三角替换", "x=a\\sec(\\theta) \\\\ x^2-a^a=a^2\\tan^2(\\theta) \\\\ 考虑绝对值, x<0时, 对边为负 "],
        ["\\sqrt{a^2+x^2}, 三角替换", "x=a\\tan(\\theta) \\\\ a^2+x^2=a^2\\sec^2(\\theta)"],
        ["\\sqrt{a^2-x^2}, 三角替换", "x=a\\sin(\\theta) \\\\ a^2-x^2=a^2\\cos^2(\\theta)"],
        ["\\int b^xdx=?", "\\frac{b^x}{ln(b)}+C"],
        ["\\int x^adx=?(a \\neq 1)", "\\frac{x^{a+1}}{a+1}+C"],
        ["\\int \\frac{1}{t^2+a^2}dt=?", "\\frac{1}{a} tan^{-1}(\\frac{t}{a}) + C"],
        ["积分中值定理", "image:math_integral_mean_value_theorem.png"],
        ["\\frac{...}{(...)(x+a)^3},怎么拆", "... + \\frac{A}{(x+a)^3} + \\frac{B}{(x+a)^2} + \\frac{C}{(x+a)}"],
        ["\\frac{...}{(...)(x^2+ax+b)},怎么拆", "... + \\frac{Ax+B}{x^2+ax+b}"],
        ["\\frac{...}{(...)(x+a)^2},怎么拆", "... + \\frac{A}{(x+a)^2} + \\frac{B}{(x+a)}"],
        ["\\frac{...}{(...)(x+a)},怎么拆", "... + \\frac{A}{(x+a)}"],
        ["分部积分法", "\\int udv = uv - \\int vdu"],
        ["\\int \\frac{f'(x)}{f(x)}dx=?", "ln|f(x)| + C"],
        ["\\int_{a}^{b}f(x)dx=? \\\\ F(x)是f的任意反导数", "F(b)-F(a)"],
        ["\\frac{d}{dx}\\int_{a}^{x}f(t)dt=?", "f(x)"],
    ]
}
