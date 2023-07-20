export default {
    name: "new",
    cards: [
        ["image:infinite_small_2_ques.png", "image:infinite_small_2_ans.png"],
        ["image:infinite_small_1_ques.png", "image:infinite_small_1_ans.png"],
        ["若\\lim\\frac{a(x)}{[b(x)]^k}=C\\ne0", "a(x)是b(x)的k阶无穷小 \\\\ x\\to0, x^{100}是x的100阶无穷小"],
        ["a(x)\\to0, b(x)\\to0 \\\\ \\lim\\frac{a(x)}{b(x)}=L \\\\ L=\\infty代表什么, L=C代表什么 \\\\ L=1代表什么", "L=\\infty 代表a(x)是b(x)的低阶无穷小 \\\\ L=C 代表a(x)是b(x)的同阶无穷小 \\\\ L=1 代表a(x)和b(x)是等价无穷小"],
        ["a(x)\\to0, b(x)\\to0 \\\\ \\lim\\frac{a(x)}{b(x)}=0, 则?", "a(x)=o(b(x)) \\\\ a(x)趋向0的速度比b(x)快 \\\\ a(x)是b(x)的高阶无穷小"],
        ["\\lim_{n\\to\\infty}\\frac{2^n}{n!}", "0<\\frac{2^n}{n!}=\\frac{2*2*2*...*2}{1*2*3*...*n}\\le\\frac{4}{n} \\\\ n\\to\\infty, 两边都为0 \\\\ 解法2: a_n = \\frac{2^n}{n!}, a_{n+1} = \\frac{2}{n+1}a_n \\\\ 单调有界函数\\to有极限,假设\\lim_{n\\to\\infty}a_n = A \\\\ 两边取极限 A=0*A, A=0"],
        ["取整函数[x](向下)的基本不等式", "[x]定义是不大于x的最大整数 \\\\ 所以[x]\\le x (=是x为整数的情况) \\\\ [x]在舍去小数时，最大不会超过1 \\\\ 所以x-1<[x]\\le x"],
        ["\\lim_{n\\to\\infty}[\\frac{n}{n^2+1}+\\frac{n}{n^2+2}+...+\\frac{n}{n^2+n}]", "这道题的思路是用夹逼定理 \\\\ 把分母都换成n^2+n，分子加起来=n^2 \\\\ 所以 \\frac{n^2}{n^2+n} \\le [原式] \\le \\frac{n^2}{n^2+1} \\\\ n\\to\\infty时,两边都为1,所以极限为1"],
        ["\\lim_{n\\to\\infty}[\\frac{n}{n^2+1}+\\frac{n}{n^2+2}+...+\\frac{n}{n^2+n}] \\\\ 等于0吗?", "这里看似\\frac{n}{n^2+1}=0 \\\\ 极限就是很多0加起来，所以等于零 \\\\ 但这个思路是错的，这里有无限项 \\\\ 不能这么加"],
        ["单调有界数列必有极限", "单调增、有上界的数列必有极限 \\\\ 单调减、有下界的数列必有极限"],
        ["函数保号性 \\\\ 设\\lim_{x\\to x_0}f(x)=A \\\\ 若存在\\delta>0,当x\\in\\mathring{U}(x_0,\\delta)时 \\\\ f(x)\\ge0(或f(x)\\le0)", "A\\ge 0(或A\\le 0)"],
        ["函数保号性 \\\\ 设\\lim_{x\\to x_0}f(x)=A", "若A>0(或A<0),则存在\\delta>0 \\\\ 当x\\in\\mathring{U}(x_0,\\delta)时 \\\\ f(x)>0(或f(x)<0)"],
        ["\\mathring{U}(x_0,\\delta)是什么?", "以x_0为中心,\\delta为半径的一个去心邻域"],
        ["存在N>0,当n>N,x_n\\ge0(或x_n\\le0) \\\\ 则x_n的极限A有什么性质?", "A\\ge0(或A\\le0) \\\\ 保号性，极限的符号与N项后的x_n的符号相同"],
        ["保号性", "设\\lim_{n\\to\\infty}x_n=A \\\\ 若A>0(或A<0),则存在N>0 \\\\ 当n>N时,x_n>0(或x_n<0) \\\\ 若数列的极限不为0 \\\\ N项后的x_n与极限符号相同"],
        ["若数列收敛,那它有界吗?", "数列收敛必有界 \\\\ 但有界的数列不一定收敛 \\\\ 例:(-1)^n (极限不存在) \\\\ 如果数列有界且单调,那它收敛"],
        ["数列{x_n}收敛的定义?", "数列收敛就是n\\to\\infty, x_n的极限存在 \\\\ 极限存在(不能为正负无穷)"],
        ["\\lim_{x\\to0}(1+|x|)^{\\frac{1}{x}}=?","\\lim_{x\\to0^-}(1+(-1)*x)^{\\frac{1}{x}}=e^{-1} \\\\ \\lim_{x\\to0^+}(1+x)^{\\frac{1}{x}}=e"],
        ["\\lim_{x\\to 0}e^{\\frac{1}{x}} = ? \\\\ \\lim_{x\\to \\infty}e^x=? \\\\ \\lim_{x\\to \\infty}e^{-x} =?","\\lim_{x\\to 0}e^{\\frac{1}{x}} 不存在 \\\\ \\lim_{x\\to \\infty}e^x 不存在 \\\\ \\lim_{x\\to \\infty}e^{-x} 不存在 \\\\ 要特别注意左右极限的相等"],
        ["\\lim_{x\\to a}f(x)=A的数学定义","\\forall\\epsilon>0,\\exists\\delta>0 \\\\ 当0<|x-a|<\\delta时,恒有|f(x)-A|<\\epsilon \\\\ 0<|x-a|<\\delta是个关于a的去心邻域 \\\\ 所以f(x)在a处可以没定义"],
        ["n\\to\\infty实际上是什么?","n一般指代下标 \\\\ 所以n\\to\\infty 约定为 n\\to+\\infty"],
        ["\\lim_{x\\to\\infty} \\frac{\\sqrt{x^2+1}}{x}=?","x \\to \\infty 代表正负无穷都要考虑 \\\\ \\lim_{x\\to\\infty} \\frac{|x|\\sqrt{1+\\frac{1}{x^2}}}{x} \\\\ 此极限趋正无穷时=1, 趋负无穷时=-1 \\\\ 正负无穷不一样,极限不存在"],
        ["\\lim_{x\\to-\\infty}f(x)=A 的数学定义 ","\\forall\\epsilon>0,\\exists\\delta>0,当x<-\\delta时 \\\\ 恒有|f(x)-A|<\\epsilon"],
        ["\\lim_{x\\to+\\infty}f(x)=A 的数学定义 ","\\forall\\epsilon>0,\\exists\\delta>0,当x>\\delta时 \\\\ 恒有|f(x)-A|<\\epsilon"],
    ]
}