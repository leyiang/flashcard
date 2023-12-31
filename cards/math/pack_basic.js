export default {
    name: "basic",
    cards: [
        ["b^xb^y=?", "b^{(x+y)}"],
        ["\\frac{b^x}{b^y}=?", "b^{(x-y)}"],
        ["(b^x)^y=?", "b^{xy}"],
        ["b^{\\log_{b} (y)}=?", "y"],
        ["\\log_{b} (b^x)=?", "x"],
        ["\\log_{b} (1)=?", "0"],
        ["\\log_{b} (b)=?", "1"],
        ["\\log_{b} (xy)=?", "\\log_{b} (x) + \\log_{b} (y)"],
        ["\\log_{b} (\\frac{x}{y})=?", "\\log_{b} (x) - \\log_{b} (y)"],
        ["\\log_{b} (x^y)=?", "y\\log_{b} (x)"],
        ["换成以c为底：\\log_{b} (x)", "\\frac{\\log_{c} (x)}{\\log_{c} (b)}"],
        ["\\mathring{U}(x_0,\\delta)是什么?", "以x_0为中心,\\delta为半径的一个去心邻域"],
        ["x\\in(0,\\frac{\\pi}{2})时 \\\\ 请给出\\sin x, \\tan x, x的不等式关系", "x\\in(0,\\frac{\\pi}{2})时 \\\\ \\sin x < x < \\tan x"],
        ["||a|-|b|| 和 |a-b|的不等式关系",
            "||a|-|b|| <= |a-b|",
            "取整函数[x](向下)的基本不等式",
            "[x]定义是不大于x的最大整数 \\\\ 所以[x]\\le x (=是x为整数的情况) \\\\ [x]在舍去小数时，最大不会超过1 \\\\ 所以x-1<[x]\\le x",
            "涉及a,b的不等式关系",
            "2ab\\le a^2+b^2",
            "涉及a,b,c的不等式关系",
            "\\sqrt[3]{abc}\\le \\frac{a+b+c}{3}"
        ],
        ["f(x)+f(-x)是个什么函数? \\\\ f(x)-f(-x)是什么函数?", "f(x)+f(-x)大概率是偶函数 \\\\ f(x)-f(-x)大概率是奇函数 \\\\ 要自己验证一下"],
        ["函数凹凸性的不等式定义", "凹：f\\left(\\frac{x_1+x_2}{2}\\right)<\\frac{f\\left(x_1\\right)+f\\left(x_2\\right)}{2} \\\\ 凸：f\\left(\\frac{x_1+x_2}{2}\\right)>\\frac{f\\left(x_1\\right)+f\\left(x_2\\right)}{2}", "image:math_concave_defination.png"],
        ["两条垂直线斜率的关系", "两条垂直线斜率互为负倒数"],
        [   "圆体积公式","V=\\frac{4}{3}\\pi r^3",
            "圆柱体积公式","V=\\pi r^2h",
            "圆锥体积公式","V=\\frac{1}{3}\\pi r^2h",
        ],
        ["C^k_n=C(n,k)=?", "\\frac{n!}{(n-k)!*k!}"],
        ["双曲函数的奇偶性","\\cosh和sech是偶函数，其余是奇函数"],
        ["如何求解关于y的积分(dy)?","\\int_{a}^b 2\\pi yxdy \\\\ 当积分是关于y的时候，把y当做x \\\\ 不要把y换成关于x的表达式 \\\\ 直接代入上下限算就好了"],
        ["\\int_{-5}^{5} \\sqrt{25-x^2}dx \\\\ x = 5\\sin(\\theta), 上下限要变成什么?","\\sin(\\theta)=\\frac{x}{5} \\\\ \\theta=\\sin^{-1}(\\frac{x}{5}) \\\\ 上限从5变成\\sin^{-1}(\\frac{5}{5}) \\\\ 下限从-5变成\\sin^{-1}(\\frac{-5}{5})"],
        ["(y-b)^2+(x-a)^2=r^2代表?","代表一个圆心为(a,b) \\\\ 半径为r的圆的方程"],
        ["sin(x)的周期，cos(x)的周期 \\\\ sin(2x)的周期, |sin(x)|的周期","2\\pi, 2\\pi \\\\ \\pi, \\pi"],
        ["若f(x)以T为周期，则f(ax+b)的周期为?","\\frac{T}{|a|}"],
        ["sgn(x)是什么","符号函数, x<0, sgn(x)=-1 \\\\ x=0, sgn(x)=0 \\\\ x>0, sgn(x)=1"],
        ["偶函数×偶函数=? \\\\ 奇函数×奇函数=? \\\\ 奇函数×偶函数=? ","偶函数×偶函数=偶函数 \\\\ 奇函数×奇函数=偶函数 \\\\ 奇函数×偶函数=奇函数 "],
        ["a^3-b^3","(a-b)(a^2+ab+b^2)"],
        ["数学规纳法", "1.证明首项成立 \\\\ 2.假设n成立，证明n+1成立"],
        ["\\sec图像", "image:math_sec_graph.svg"],
        ["\\csc图像", "image:math_csc_graph.svg"],
        ["\\cot图像", "image:math_cot_graph.png"],
        ["\\tan图像", "image:math_tan_graph.png"],
        ["\\cos图像", "image:math_cos_graph.png"],
        ["\\sin图像", "image:math_sin_graph.png"],
        ["对数函数性质", "底数a>0且a\\neq1 \\\\ a\\in(0,1)为减函数 \\\\ a>1时为增函数 \\\\ 定义域(0, +\\infty), 值域R"],
        ["对数函数图像", "image:math_log_graph.png"],
        ["指数函数性质", "底数a>0且a\\neq1 \\\\ a\\in(0,1)为减函数 \\\\ a>1时为增函数 \\\\ 定义域R, 值域(0, +\\infty)"],
        ["指数函数图像", "image:math_exp_graph.png"],
    ]
}
