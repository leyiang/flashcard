export default {
    name: "complex",
    cards: [
        ["z\\overline{z}=?","z\\overline{z}=|z|^2"],
        ["z = x+yi \\\\ |z| = ?","z的模=\\sqrt{x^2+y^2}"],
        ["计算i^n","i^n = i^{n\\mod4} \\\\ 只需要计算i^{4的余数} \\\\ i^2 = -1, i^3 = -i, i^4=1"],
        ["(\\frac{\\sqrt{2}}{2}+\\frac{\\sqrt{2}}{2}i)^2为什么=i","(\\frac{\\sqrt{2}}{2}+\\frac{\\sqrt{2}}{2}i)是单位圆上角度为\\frac{\\pi}{4} \\\\ 长度为1的向量 \\\\ 它的平方就是该向量逆时针转动\\frac{\\pi}{4} \\\\ 也就是0+i"],
        ["z*i是什么意思?","逆时针旋转\\frac{\\pi}{2} \\\\ (a+bi)*i = (-b, ai)"],
        ["极坐标曲线围成的面积自么算?","\\int_{\\theta_0}^{\\theta_1}\\frac{1}{2}r^2d\\theta \\\\ ^*要特别注意r是负的情况 \\\\ 若有负的情况，要减去两次负的面积"],
        ["如何将笛卡尔坐标转为极坐标?","r^2=x^2+y^2 \\\\ \\tan(\\theta)=\\frac{y}{x} (x\\ne0) \\\\ 算出\\theta后要检查象限"],
        ["cis(a) * cis(b)=?","从图形上理解,cis(a)是角度为a的向量 \\\\ cis(a)*cis(b) 就是向量逆时针转动了b \\\\ \\therefore cis(a)cis(b)=cis(a+b)"],
        ["cis(x)是什么意思","cis(x)=\\cos(x)+i\\sin(x) \\\\ 大家用欧拉公式更多:e^{ix}=\\cos(x)+i\\sin(x)"],
        ["z^n=w有几个解?","z^n=w有n个解 \\\\ \\theta=\\phi+\\frac{2\\pi k}{n} \\\\ 这里的k取0,1,2...,n-1"],
        ["若e^{iA}=e^{iB},则A=B吗?","A=B+2k\\pi(k是整数)"],
        ["极坐标的点(r,\\theta)用复平面表示","z=r\\cos(\\theta)+ir\\sin(\\theta) \\\\ z=re^{i\\theta} \\\\ 例:-1=e^{i\\pi} \\iff -1+0i=1e^{i\\pi} \\\\ 笛卡尔坐标(-1, 0) \\iff 极坐标(1,\\pi)"],
        ["复数的除法怎么做?","分子分母同乘分母的共轭复数"],
    ]
}
