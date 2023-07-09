export default {
    name: "new",
    cards: [
        ["若p(x)的最低次项是ax^m \\\\ 当x \\to 0时, p(x) \\sim ?","p(x) \\sim ax^m \\\\ 趋于0时，最低次起作用"],
        ["若p(x)的最高次项是ax^n \\\\ 当x \\to \\pm\\infty时, p(x) \\sim ?","p(x) \\sim ax^n \\\\ 趋于无穷时，最高次起作用"],
        ["若 \\int_a^b |f(x)|dx收敛,那么","\\int_a^b f(x)dx也收敛 \\\\ 注：绝对值发散，f(x)不一定发散"],
        ["对任何有限值a>0 \\\\ \\int_0^a\\frac{1}{x^p}dx 的发散情况是?","p<1时收敛，p\\geq1时发散"],
        ["对任何有限值a>0 \\\\ \\int_a^{\\infty}\\frac{1}{x^p}dx 的发散情况是?","p>1时收敛，p\\leq1时发散"],
        ["当x \\to a, f(x) \\sim g(x) \\\\ \\int_a^b g(x)dx 与 \\int_a^b f(x)dx \\\\ 仅有a一个瑕点代表?","两积分在(a,b]上同时收敛或发散 \\\\ (若收敛，收敛值可能不同)"],
        ["当x \\to a, f(x) \\sim g(x)代表?","\\lim_{x \\to a} \\frac{f(x)}{g(x)} = 1"],
        ["\\int_{-\\infty}^{b} f(x)dx = ?","\\lim_{N \\to \\infty} \\int_{-N}^b f(x)dx"],
        ["\\int_{a}^{\\infty} f(x)dx = ?","\\lim_{N \\to \\infty} \\int_{a}^N f(x)dx"],
        ["若仅仅在x接近b时 f(x)无界 \\\\ \\int_{a}^{b} f(x)dx = ? ","\\lim_{\\epsilon \\to 0^+}\\int_{a}^{b-\\epsilon}f(x)dx"],
        ["若仅仅在x接近a时 f(x)无界 \\\\ \\int_{a}^{b} f(x)dx = ? ","\\lim_{\\epsilon \\to 0^+}\\int_{a+\\epsilon}^{b}f(x)dx"],

        ["\\int \\cos(\\sqrt{x})dx 思路", "u=\\sqrt{x} \\\\ u^2 = x \\\\ 2udu=dx \\\\ 换元两边求导，x也要有dx "],
        ["\\int \\frac{1}{x^2\\sqrt{x^2+1}} 思路", "变成\\int \\frac{x^{-3}}{\\sqrt{1+x^{-2}}} \\\\ 分数尽量写成负次幂 \\\\ 多考虑负次幂换元的可能"],
    ]
}