export default {
    name: "basic",
    cards: [
        ["C^k_n=C(n,k)=?", "\\frac{n!}{(n-k)!*k!}"],
        ["双曲函数的奇偶性","\\cosh和sech是偶函数，其余是奇函数"],
        ["如何求解关于y的积分(dy)?","\\int_{a}^b 2\\pi yxdy \\\\ 当积分是关于y的时候，把y当做x \\\\ 不要把y换成关于x的表达式 \\\\ 直接代入上下限算就好了"],
        ["\\int_{-5}^{5} \\sqrt{25-x^2}dx \\\\ x = 5\\sin(\\theta), 上下限要变成什么?","\\sin(\\theta)=\\frac{x}{5} \\\\ \\theta=\\sin^{-1}(\\frac{x}{5}) \\\\ 上限从5变成\\sin^{-1}(\\frac{5}{5}) \\\\ 下限从-5变成\\sin^{-1}(\\frac{-5}{5})"],
        ["(y-b)^2+(x-a)^2=r^2代表?","代表一个圆心为(a,b) \\\\ 半径为r的圆的方程"],
        ["text:Volume of Sphere:","V=\\frac{4}{3}\\pi r^3"],
        ["text:Volume of Cylinder:","V=\\pi r^2h"],
        ["sin(x)的周期，cos(x)的周期 \\\\ sin(2x)的周期, |sin(x)|的周期","2\\pi, 2\\pi \\\\ \\pi, \\pi"],
        ["若f(x)以T为周期，则f(ax+b)的周期为?","\\frac{T}{|a|}"],
        ["sgn(x)是什么","符号函数, x<0, sgn(x)=-1 \\\\ x=0, sgn(x)=0 \\\\ x>0, sgn(x)=1"],
        ["偶函数×偶函数=? \\\\ 奇函数×奇函数=? \\\\ 奇函数×偶函数=? ","偶函数×偶函数=偶函数 \\\\ 奇函数×奇函数=偶函数 \\\\ 奇函数×偶函数=奇函数 "],
        ["a^3-b^3","(a-b)(a^2+ab+b^2)"],
        ["数学规纳法", "1.证明首项成立 \\\\ 2.假设n成立，证明n+1成立"],
        ["\\sec图像", "image:sec_graph.svg"],
        ["\\csc图像", "image:csc_graph.svg"],
        ["\\cot图像", "image:cot_graph.png"],
        ["\\tan图像", "image:tan_graph.png"],
        ["\\cos图像", "image:cos_graph.png"],
        ["\\sin图像", "image:sin_graph.png"],
        ["对数函数性质", "底数a>0且a\\neq1 \\\\ a\\in(0,1)为减函数 \\\\ a>1时为增函数 \\\\ 定义域(0, +\\infty), 值域R"],
        ["对数函数图像", "image:log_graph.png"],
        ["指数函数性质", "底数a>0且a\\neq1 \\\\ a\\in(0,1)为减函数 \\\\ a>1时为增函数 \\\\ 定义域R, 值域(0, +\\infty)"],
        ["指数函数图像", "image:exp_graph.png"],
    ]
}
