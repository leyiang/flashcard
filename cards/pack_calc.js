export default {
    name: "calc",
    cards: [
        ["f''(x)的正负代表什么？", "\\displaylines{f''(x)>0代表函数凹向上 \\\\ f''(x)<0代表函数凹向下}"],
        ["二阶导如何判断f'(a)=0的类型", "\\displaylines{f''(a)>0=局部最小值 \\\\ f''(a)<0=局部最大值 \\\\ f''(a)=0 无法判断 }"],
        ["一阶导如何判断f'(a)=0的类型", "\\displaylines{从左往右通过a点: \\\\ f'(x)从负到正=局部最小值 \\\\ f'(x)从正到负=局部最大值 \\\\ f'(x)符号不变=拐点 }"],
        ["f'(a)=0代表什么？", "text:a点可能是f(x)的局部最大值、局部最小值，或拐点"],
        ["f''(c)=0 意味着拐点吗?", "c不一定是拐点"],
        ["c是函数拐点代表什么", "f''(c)=0"],
        ["介值定理", "image:intermediate_value_theorem.png"],
        ["连续的定义？", "\\displaylines{\\lim_{x \\to a}{f(x)}=f(a) \\\\ f在点a处连续 }"],
        ["极值定理", "image:extreme_value_theorem.png"],
        ["罗尔定理", "image:rolles_theorem.png"],
        ["中值定理", "image:mean_value_theorem.png"],
    ]
}
