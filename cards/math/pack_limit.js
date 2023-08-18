export default {
    name: "limit",
    cards: [
        ["\\lim_{x\\to0}(1+|x|)^{\\frac{1}{x}}=?","\\lim_{x\\to0^-}(1+(-1)*x)^{\\frac{1}{x}}=e^{-1} \\\\ \\lim_{x\\to0^+}(1+x)^{\\frac{1}{x}}=e"],
        ["\\lim_{x\\to 0}e^{\\frac{1}{x}} = ? \\\\ \\lim_{x\\to \\infty}e^x=? \\\\ \\lim_{x\\to \\infty}e^{-x} =?","\\lim_{x\\to 0}e^{\\frac{1}{x}} 不存在 \\\\ \\lim_{x\\to \\infty}e^x 不存在 \\\\ \\lim_{x\\to \\infty}e^{-x} 不存在 \\\\ 要特别注意左右极限的相等"],
        ["n\\to\\infty实际上是什么?","n一般指代下标 \\\\ 所以n\\to\\infty 约定为 n\\to+\\infty"],
        ["\\lim_{x\\to\\infty} \\frac{\\sqrt{x^2+1}}{x}=?","x \\to \\infty 代表正负无穷都要考虑 \\\\ \\lim_{x\\to\\infty} \\frac{|x|\\sqrt{1+\\frac{1}{x^2}}}{x} \\\\ 此极限趋正无穷时=1, 趋负无穷时=-1 \\\\ 正负无穷不一样,极限不存在"],
    ]
}

