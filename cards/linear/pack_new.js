export default {
    name: "new",
    cards: [
        // ["", ""],
        ["image:linear_q2.png", "\\left[a+\\left(n-1\\right)b\\right]\\left(a-b\\right)^{\\left(n-1\\right)}",
            "如果a在副对角线上呢?",
            "image:linear_a3.png",
            "(-1)^{\\frac{n(n-1)}{2}}\\left[a+\\left(n-1\\right)b\\right]\\left(a-b\\right)^{\\left(n-1\\right)}"
        ],

        ["范德蒙德行列式(范氏)", "image:linear_vandermonde.png", "\\prod _{1\\le i\\le j\\le n}^{ }\\left(x_j-x_i\\right) \\\\ 代表右减左的联乘 \\\\ 假设第二行为 |A \\ B \\ C| \\\\ 公式=(C-B)(C-A)(B-A)"],
        [
            "\\left | \\begin{matrix} A&O \\\\ O&B \\end{matrix} \\right | \\\\" +
            "其中A为m阶矩阵,B为n阶矩阵,O为0矩阵 \\\\ 行列式的值为?",
            "|A||B|",
            "\\left | \\begin{matrix} A&O \\\\ O&B \\end{matrix} \\right |="  +
            "\\left | \\begin{matrix} A&C \\\\ O&B \\end{matrix} \\right |=" +
            "\\left | \\begin{matrix} A&O \\\\ C&B \\end{matrix} \\right |=?",
            "分别为右上三角行列式,左下三角行列式 \\\\ 它们的值都为 |A||B|",
            "\\left | \\begin{matrix} O&A \\\\ B&O \\end{matrix} \\right | \\\\" +
            "其中A为m阶矩阵,B为n阶矩阵,O为0矩阵 \\\\ 行列式的值为?",
            "(-1)^{mn}|A||B|",
            "\\left | \\begin{matrix} O&A \\\\ B&O \\end{matrix} \\right |="  +
            "\\left | \\begin{matrix} C&A \\\\ B&O \\end{matrix} \\right |=" +
            "\\left | \\begin{matrix} O&A \\\\ B&C \\end{matrix} \\right |",
            "分别为左上三角行列式,右下三角行列式 \\\\ 它们的值都为 (-1)^{mn}|A||B|",
        ],
        [
            "主对角线和副对角线是什么",
            "image:linear_main_sub_diagonal.png",
            "image:linear_main_diagonal_q1.png",
            "主对角线左下方全是0 \\\\ 直角在右上方,称为右上三角行列式",
            "image:linear_main_diagonal_q2.png",
            "主对角线右上方全是0 \\\\ 直角在左下方,称为左下三角行列式",
            "主对角线之外都为0,称作主对角行列式 \\\\ 右上三角、左下三角、主对角行列式的值为: \\\\ \\prod _{i=1}^na_{ii}(对角联乘)",
            "image:linear_sub_diagonal_q1.png",
            "副对角线右下方全是0 \\\\ 直角在左上方,称为左上三角行列式",
            "image:linear_sub_diagonal_q2.png",
            "副对角线左上方全是0 \\\\ 直角在右下方,称为右下三角行列式",
            "副对角线之外都为0,称作副对角行列式 \\\\ 右下三角、左上三角、副对角行列式的值为: \\\\ \\left(-1\\right)^{\\frac{n\\left(n-1\\right)}{2}}a_{1n}a_{2,\\left(n-1\\right)}...a_{n1} \\\\ (副对角联乘)",
        ],
        ["行列式按某一行(列)展开的展开公式", "image:linear_cofactor_expansion_formula.png",
            "A_{ij}是a_{ij}的代数余子式 \\\\ 展开式的核心是把 \\\\ n阶行列式转为n个n-1阶的行列式 \\\\ 对哪一行(列)展开呢?(0最多的行)"
        ],
        ["n阶行列式的余子式", "在n阶行列式中，去掉元素a_{ij}所在的第i行、第j列元素 \\\\ 由剩下的元素按原来的位置与顺序组成的 \\\\ n-1阶行列式称为元素a_{ij}的余子式, 记作M_{ij}",
        "代数余子式", "M_{ij}是a_{ij}的余子式 \\\\ M_{ij}乘上(-1)^{i+j}称作a_{ij}的代数余子式 \\\\ 代数余子式记作:A_{ij} \\\\ A_{ij}=(-1)^{i+j}M_{ij} \\\\ M_{ij}=(-1)^{i+j}A_{ij}"],
        ["行列数的逆序数法定义", "\\sum _{j_1j_2...j_n}\\left(-1\\right)^{\\tau \\left(j_1j_2...j_n\\right)}a_{1j_1}a_{2j_2}...a_{nj_n} \\\\ \\sum _{j_1j_2...j_n} 表示对排列j_1j_2...j_n的所有排序的情况进行求和 \\\\  j_1j_2...j_n是个n级排列,它不同排序的可能性有n!种 \\\\ \\tau(j_1j_2...j_n)表示j_1j_2...j_n这个排列的逆序数 \\\\ 若j_1j_2...j_n是奇排列，(-1)^{\\tau(j_1j_2...j_n)}=-1 \\\\ 若j_1j_2...j_n是偶排列，(-1)^{\\tau(j_1j_2...j_n)}=1 \\\\a_{1j_1}a_{2j_2}...a_{nj_n}表示1到n行,不同列的乘积 \\\\ a_{1j_1}代表行列式中第1行,第j_1列的元素",
            "请确认展开项a_{12}a_{31}a_{54}a_{43}a_{25}的正负号 \\\\ 首先按行号顺序排: a_{12}a_{25}a_{31}a_{43}a_{54} \\\\ 排列为: 25134, \\tau(25134)=4 \\\\ (-1)^4 = 1, 所以是正的"
        ],
        ["在一个n级排列中,逆序是什么?", "n级排列i_1,i_2,..,i_s..,i_t..,i_n \\\\ 若i_s>i_t,且i_s排在i_t前面, 称这两个数构成逆序 \\\\ 对6级排列621534来说,62,61,23,53等都是它的逆序",
            "逆序数是什么", "一个排列中,逆序的总数称为该排列的逆序数 \\\\ 记作\\tau(i_1,i_2,...,i_n) \\\\ \\tau(621534)=8 \\\\ 它的逆序有62,61,65,63,64,21,53,54",
            "奇排列和偶排列", "一个排列的逆序数为奇数,称为奇排列 \\\\ 一个排列的逆序数为偶数,称为偶排列"
        ],
        ["行列式中某行(列)的k倍加到另一行(列) \\\\ 行列式的值?", "行列式的值不变", "image:linear_multiple_add.png"],
        ["行列式中两行(列)互换,行列式的值?", "行列式中两行(列)互换,行列式的值反号"],
        ["image:linear_determinant_extraction.png", "这是行列式的单行(列)可拆性 \\\\ 如果两个行列式的其他元素对应相等 \\\\ 只有一行(列)不同时,可以相加 \\\\ 相加时其他元素不变 \\\\ 不同元素的行(列)对应相加即可"],
        ["image:linear_determinant_q_4.png", "k|A|可以把k乘到行列式的任意行(列)上 \\\\ 这叫(倍乘)性质,只需要乘一行(列),不是每行(列) \\\\ 若行列式中某行(列)元素有公因子k(k\\ne0) \\\\ 则k可提到行列式外面 "],
        ["行列式中的两行(列)元素相等或对应成比例", "则行列式为零"],
        ["若行列式中某行(列)元素全为零", "则行列式为零"],
        ["|A|=|A^\\top| 是什么意思?", "|A^\\top|是|A|的转置矩阵(行列互换) \\\\ |A|=|A^\\top|代表行列互换,其值不变"],
        ["三阶行列式D_3\\ne0, 这意味着什么", "D_3\\ne0,代表体积不为0 \\\\ 称该行列式的三个向量线性无关 \\\\ 若D_3=0, 则称线性相关", "image:linear_linear_independence_1.png"],
        ["image:linear_determinant_q_1.png", "image:linear_determinant_a_1.png",
            "二阶行列式由两个2维向量组成\\\\其(运算规则)结果为以这两个向量为邻边 \\\\ 所织成的平形四边形的面积",
            "image:linear_determinant_q_2.png", "这是一个三阶行列式，其由三个向量 \\\\ a_1=[a_{11},a_{12},a_{13}] \\\\ a_2=[a_{21},a_{22},a_{23}] \\\\ a_3=[a_{31},a_{32},a_{33}] \\\\ 所组成的,其(运算规则)结果为: \\\\ 以这三个向量为邻边的平行六面体的体积",
            "image:linear_determinant_q_3.png", "n 阶行列式是由n个n维向量 \\\\ a_1=\\left[a_{11},a_{12},...,a_{1n}\\right] \\\\ a_2=\\left[a_{21},a_{22},...,a_{2n}\\right] \\\\ ... \\\\ a_n=\\left[a_{n1},a_{n2},...,a_{nn}\\right] \\\\ 所组成的,其(运算规则)的结果为: \\\\ 以这n个n维向量为邻边的n维图形的体积"
        ],
        ["在行列式中,a_{ij}是什么意思?", "a_{ij}指行列式中,第i行,第j列的元素"],
    ]
}
