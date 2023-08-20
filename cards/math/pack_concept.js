export default {
    name: "concept",
    cards: [
        ["柯西中值定理", "y=f(t), x=F(t) \\\\ f(x),F(x)在[a,b]上连续 \\\\ f(x)和F(x)在(a,b)可导 \\\\ 且F(x)\\ne0,则\\exists c\\in (a,b) \\\\ \\frac{f(b)-f(a)}{F(b)-F(a)}=\\frac{f'(c)}{F'(c)}"],
        ["介值定理","若f(x)在[a,b]上连续，且f(a)\\ne f(b) \\\\ 则对f(a)与f(b)之间任意值N \\\\ 在[a,b]之间至少有一点c, 使得f(c)=N"],
        ["最值定理","若f(x)在[a,b]上连续 \\\\ 则f(x)在[a,b]上必有最大值和最小值"],
        ["零点定理", "若f(x)在[a,b]上连续，f(a)与f(b)异号 \\\\ 即f(a)f(b)<0, 那在(a,b)之间必有一点c \\\\ 使得f(c)=0"],
        ["连续的定义？", "\\lim_{x \\to a}{f(x)}=f(a) \\\\ f在点a处连续 "],
        ["极值定理", "image:math_extreme_value_theorem.png"],
        ["罗尔定理", "image:math_rolles_theorem.png"],
        ["中值定理", "image:math_mean_value_theorem.png"],
        ["f[f^{-1}(x)]=?\\\\f^{-1}[f(x)]=?","f[f^{-1}(x)]=x\\\\f^{-1}[f(x)]=x"],
        ["f(x)在区间X上无界的定义","若对任意M>0,至少存在一个x\\in X \\\\ 使得 |f(x)| > M \\\\ 则称f(x)在区间X上为无界函数"],
        ["f(x)在区间X上有界的定义","若存在M>0,使得任意x\\in X \\\\ 恒有 |f(x)|\\le M \\\\ 则称f(x)在区间X上为有界函数"],
    ]
}
