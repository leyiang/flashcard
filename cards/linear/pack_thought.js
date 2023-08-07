export default {
    name: "thought",
    cards: [
        // ["", ""],
        ["image:linear_q1.png", "image:linear_a1.png"],
        ["image:linear_q2.png", "ans=\\left[a+\\left(n-1\\right)b\\right]\\left(a-b\\right)^{\\left(n-1\\right)} \\\\ 这里是行和相等的类型 \\\\ 思路是把每一列都加到第1列上 \\\\ 这样第一列都是a+(n-1)b \\\\ 提出来,第一列只剩1",
            "image:linear_a2_1.png",
            "再把第一行的(-1)倍加到其它行 \\\\ 这样就构成了一个左下三角行列式 \\\\ 答案就是主对角联乘 \\\\ ans=\\left[a+\\left(n-1\\right)b\\right]\\left(a-b\\right)^{\\left(n-1\\right)}",
            "image:linear_a2_2.png",
            "如果a在副对角线上呢?",
            "image:linear_q3.png",
            "可以把最后一列移到第一列 \\\\ 需要移动(n-1)次 \\\\ 倒数第二列移到第二列 \\\\ 需要n-2次,把所有列都移动需要: \\\\ (n-1)+(n-2)+...+1=\\frac{n(n-1)}{2} \\\\ 每次互换两列，行列式反号 \\\\ 前面就要加上(-1)^{\\frac{n(n-1)}{2}}",
            "image:linear_a3.png",
            "image:linear_a3_2.png",
        ],
        ["image:linear_q5.png", "image:linear_a5_1.png", "image:linear_a5_2.png"],
        ["image:linear_q4.png", "image:linear_a4_1.png", "image:linear_a4_2.png", "image:linear_a4_3.png"],
    ]
}
