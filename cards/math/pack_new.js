export default {
    name: "new",
    cards: [
        // ["", ""],
        ["定积分关于\\sin的公式", "image:math_2023-08-18-05-50-06.png"],
        ["变上限积分给定的函数", "image:math_2023-08-18-05-32-46.png", "image:math_2023-08-18-05-33-15.png",
            "若f(x)存在奇偶性，变上限积分的奇偶性?", "image:math_2023-08-18-05-38-28.png"
        ],
        ["定积分的定义", "image:math_2023-08-18-16-52-52.png", "\\lim _{\\lambda \\to 0}\\sum _{i=1}^nf\\left(\\xi _i\\right)\\triangle x_i",
            "image:math_2023-08-18-16-57-07.png", "image:math_2023-08-18-17-07-22.png", "可积的充分条件?", "image:math_2023-08-18-17-10-27.png",
            "可积的必要条件?", "f(x)有界",
            "定积分的不等式性质", "image:math_2023-08-18-17-16-29.png"
        ],
        ["简单无理函数积分", "image:math_2023-08-18-03-44-55.png"],
        ["不定三角有理式规律", "image:math_2023-08-18-03-10-43.png"],

        ["\\lim _{x\\to 0}x\\ln \\left|x\\right|\\sin \\frac{1}{x}=?","x\\to0,\\sin \\frac{1}{x}在-1,1之间振荡 \\\\ x\\ln \\left|x\\right|=\\frac{\\ln \\left|x\\right|}{\\frac{1}{x}}=\\frac{\\frac{1}{x}}{\\frac{1}{x^2}}=0 \\\\ 无穷量×有界量=0,所以极限值为0"],
        ["1-\\cos^\\alpha(x) \\sim ?","1-\\cos^\\alpha(x) \\sim \\frac{\\alpha}{2}x^2"],
        ["若a\\sim b, a=?","a=b+o(b)"],
        ["若f(x)n阶可导 \\\\ 洛必达能洛到几阶导出现 \\\\ 若f(x)有n阶连续导数呢","若f(x)n阶可导 \\\\ 洛必达只能出现f^{(n-1)}(x) \\\\ 若f(x)有n阶连续导数 \\\\ 洛必达能出现f^{(n)}(x)"],
        ["若\\lim f(x)g(x)存在 \\\\ 且\\lim f(x)\\to\\infty \\\\ 那\\lim g(x)\\to?", "若\\lim f\\left(x\\right)g\\left(x\\right)=A \\\\  且\\lim f(x)\\to\\infty \\\\ \\lim g(x)\\to0"],
        ["\\lim f\\left(x\\right)存在,\\lim g\\left(x\\right)不存在 \\\\ \\lim \\left(f\\left(x\\right)\\pm g\\left(x\\right)\\right) 存在吗? ", "不存在 \\\\ \\lim F\\left(x\\right)=\\lim \\left(f\\left(x\\right)+g\\left(x\\right)\\right) \\\\ \\lim g\\left(x\\right)=\\lim F\\left(x\\right)-\\lim f\\left(x\\right) \\\\ 若F(x)的极限存在, f(x)的极限也存在 \\\\ 那两个极限相减也存在,这就矛盾了 \\\\ \\therefore 存在+不存在=不存在"],
        ["\\lim f\\left(x\\right)=A,\\lim g\\left(x\\right)=B \\\\ 极限的有理运算法则为?", "\\lim \\left(f\\left(x\\right)\\pm g\\left(x\\right)\\right)=\\lim f\\left(x\\right)\\pm \\lim g\\left(x\\right) \\\\ \\lim \\left(f\\left(x\\right)\\cdot g\\left(x\\right)\\right)=\\lim f\\left(x\\right)\\cdot \\lim g\\left(x\\right) \\\\  \\lim \\left(\\frac{f\\left(x\\right)}{g\\left(x\\right)}\\right)=\\frac{\\lim f\\left(x\\right)}{\\lim g\\left(x\\right)}\\left(B\\ne 0\\right) \\\\ 使用的前提是f(x)和g(x)的极限都存在"],
        ["当x\\to0, \\\\ (1+x)^a-1 \\sim ? \\\\ (1+a(x))^{b(x)}-1 \\sim?", "(1+x)^a-1 \\sim ax \\\\ 若a(x)\\to0,a(x)b(x)\\to0 \\\\ 则(1+a(x))^{b(x)} \\sim a(x)b(x) \\\\ 条件要求a(x)\\to0, a(x)b(x)\\to0 \\\\ 所以b(x)可以不\\to0"],
        ["若\\lim a(x)=0, \\lim b(x)=\\infty \\\\ 且\\lim a(x)b(x)=A \\\\ 那 \\lim (1+a(x))^{b(x)}=?", "\\lim (1+a(x))^{b(x)}=e^A"],
        ["\\lim_{x\\to 0}\\frac{a^x-1}{x}=?", "\\lim_{x\\to 0}\\frac{a^x-1}{x}=\\ln(a)"],
        ["已知\\lim_{n\\to\\infty}x_n=a,下面是否成立\\\\ \\lim_{n\\to\\infty}x_{2n}=\\lim_{n\\to\\infty}x_{2n+1}=a \\\\ \\lim_{n\\to\\infty}x_{3n}=\\lim_{n\\to\\infty}x_{3n+1}=a \\\\ 返过来可以吗", "若数列极限为a \\\\ 那么它的任意部分列极限都为a \\\\ 若已知 x_{2n} 和 x_{2n+1} (奇数列和偶数列) \\\\ 极限为a,可以推出x_n极限也为a \\\\ 但是x_{3n}和x_{3n+1}不行, 它没覆盖所有的x_n \\\\ 若加上x_{3n+2}也为a,则可推出x_n=a"],
        ["若\\lim\\frac{a(x)}{[b(x)]^k}=C\\ne0", "a(x)是b(x)的k阶无穷小 \\\\ x\\to0, x^{100}是x的100阶无穷小"],
        ["a(x)\\to0, b(x)\\to0 \\\\ \\lim\\frac{a(x)}{b(x)}=L \\\\ L=\\infty,C,1,分别代表什么", "L=\\infty 代表a(x)是b(x)的低阶无穷小 \\\\ L=C 代表a(x)是b(x)的同阶无穷小 \\\\ L=1 代表a(x)和b(x)是等价无穷小"],
        ["a(x)\\to0, b(x)\\to0 \\\\ \\lim\\frac{a(x)}{b(x)}=0, 则?", "a(x)=o(b(x)) \\\\ a(x)趋向0的速度比b(x)快 \\\\ a(x)是b(x)的高阶无穷小"],
        ["\\mathring{U}(x_0,\\delta)是什么?", "以x_0为中心,\\delta为半径的一个去心邻域"],
        ["\\lim_{x\\to0}(1+|x|)^{\\frac{1}{x}}=?","\\lim_{x\\to0^-}(1+(-1)*x)^{\\frac{1}{x}}=e^{-1} \\\\ \\lim_{x\\to0^+}(1+x)^{\\frac{1}{x}}=e"],
        ["\\lim_{x\\to 0}e^{\\frac{1}{x}} = ? \\\\ \\lim_{x\\to \\infty}e^x=? \\\\ \\lim_{x\\to \\infty}e^{-x} =?","\\lim_{x\\to 0}e^{\\frac{1}{x}} 不存在 \\\\ \\lim_{x\\to \\infty}e^x 不存在 \\\\ \\lim_{x\\to \\infty}e^{-x} 不存在 \\\\ 要特别注意左右极限的相等"],
        ["n\\to\\infty实际上是什么?","n一般指代下标 \\\\ 所以n\\to\\infty 约定为 n\\to+\\infty"],
        ["\\lim_{x\\to\\infty} \\frac{\\sqrt{x^2+1}}{x}=?","x \\to \\infty 代表正负无穷都要考虑 \\\\ \\lim_{x\\to\\infty} \\frac{|x|\\sqrt{1+\\frac{1}{x^2}}}{x} \\\\ 此极限趋正无穷时=1, 趋负无穷时=-1 \\\\ 正负无穷不一样,极限不存在"],
    ]
}
