export default {
    name: "new",
    cards: [
        ["\\int \\csc^3(x)\\sec(x)", "1可以看做\\sin^2 + \\cos^2"],
        ["\\int \\frac{x^2+1}{x^4-x^2+1}", "\\displaylines{因式分解不了的,就配方 \\\\ 每次变动后检查能否换元 \\\\ 尝试配成常见的导数}"],
        ["\\int \\frac{\\cos(2x)}{\\sin(x)+\\cos(x)}", "\\cos(2x)变成平方差\\cos^2(x)-\\sin^2(x)"],
        ["求\\int \\sec(x)的思路", "\\displaylines{\\sec(x) * \\frac{\\sec(x)+\\tan(x)}{\\sec(x)+\\tan(x)} \\\\ 构造\\frac{f'(x)}{f(x)}}"],

        ["\\sqrt{x^2-a^2}, 三角替换", "\\displaylines{x=a\\sec(\\theta) \\\\ x^2-a^a=a^2\\tan^2(\\theta) \\\\ 考虑绝对值, x<0时, 对边为负 }"],
        ["\\sqrt{a^2+x^2}, 三角替换", "\\displaylines{x=a\\tan(\\theta) \\\\ a^2+x^2=a^2\\sec^2(\\theta)}"],
        ["\\sqrt{a^2-x^2}, 三角替换", "\\displaylines{x=a\\sin(\\theta) \\\\ a^2-x^2=a^2\\cos^2(\\theta)}"],
        ["\\int b^xdx=?", "\\frac{b^x}{ln(b)}+C"],
        ["\\int x^adx=?(a \\neq 1)", "\\frac{x^{a+1}}{a+1}+C"],
        ["\\int \\frac{1}{t^2+a^2}dt=?", "\\frac{1}{a} tan^{-1}(\\frac{t}{a}) + C"],
        ["积分中值定理", "image:integral_mean_value_theorem.png"],

        ["洛必达法则的适用情况", "\\frac{0}{0}, \\frac{\\infty}{\\infty}, 若不是这个形式，可以尝试通分、取对数等方式转化"],
        ["极限为指数时使用洛必达", "text:对原式取ln对数, 指数可提到前面来。最后算出极限为L，原式极限为e^L"],
        ["0 * \\infty时使用洛必达", "化成\\frac{\\infty}{\\frac{1}{0}}的形式, 即  (\\frac{\\infty}{\\infty})"],
        ["\\infty - \\infty时使用洛必达", "想办法通分成\\frac{0}{0}或\\frac{\\infty}{\\infty}的形式"],

        ["\\displaylines{牛顿法近似 \\\\ a是f(x)=0的一个近似}", "b=a-\\frac{f(a)}{f'(a)}"],
        ["f在x=a处的微分", "df=f'(a)\\triangle x"],
        ["f(a+\\triangle x)\\approx", "f(a)+f'(a)\\triangle x"],
        ["线性化方程L(x)", "L(x)=f(a)+f'(a)(x-a)"],
    ]
}