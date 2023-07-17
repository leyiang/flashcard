export default {
    name: "calc",
    cards: [
        ["洛必达法则的适用情况", "\\frac{0}{0}, \\frac{\\infty}{\\infty}, 若不是这个形式 \\\\ 可以尝试通分, 取对数, 等方式转化"],
        ["牛顿法近似 \\\\ a是f(x)=0的一个近似", "b=a-\\frac{f(a)}{f'(a)}"],
        ["f在x=a处的微分", "df=f'(a)\\triangle x"],
        ["f(a+\\triangle x)\\approx", "f(a)+f'(a)\\triangle x"],
        ["线性化方程L(x)", "L(x)=f(a)+f'(a)(x-a)"],
        ["极限为指数时使用洛必达", "text:对原式取ln对数, 指数可提到前面来。最后算出极限为L，原式极限为e^L"],
        ["0 * \\infty时使用洛必达", "化成\\frac{\\infty}{\\frac{1}{0}}的形式, 即  (\\frac{\\infty}{\\infty})"],
        ["\\infty - \\infty时使用洛必达", "想办法通分成\\frac{0}{0}或\\frac{\\infty}{\\infty}的形式"],
        ["f''(x)的正负代表什么？", "f''(x)>0代表函数凹向上 \\\\ f''(x)<0代表函数凹向下"],
        ["二阶导如何判断f'(a)=0的类型", "f''(a)>0=局部最小值 \\\\ f''(a)<0=局部最大值 \\\\ f''(a)=0 无法判断 "],
        ["一阶导如何判断f'(a)=0的类型", "从左往右通过a点: \\\\ f'(x)从负到正=局部最小值 \\\\ f'(x)从正到负=局部最大值 \\\\ f'(x)符号不变=拐点 "],
        ["f'(a)=0代表什么？", "text:a点可能是f(x)的局部最大值、局部最小值，或拐点"],
        ["f''(c)=0 意味着拐点吗?", "c不一定是拐点"],
        ["c是函数拐点代表什么", "f''(c)=0"],
        ["介值定理", "image:intermediate_value_theorem.png"],
        ["连续的定义？", "\\lim_{x \\to a}{f(x)}=f(a) \\\\ f在点a处连续 "],
        ["极值定理", "image:extreme_value_theorem.png"],
        ["罗尔定理", "image:rolles_theorem.png"],
        ["中值定理", "image:mean_value_theorem.png"],
    ]
}
