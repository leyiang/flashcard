export default {
    name: "derivative",
    cards: [
        ["\\frac{d}{dx} \\ln{(x)}", "\\frac{1}{x}"],
        ["\\frac{d}{dx} \\log_{b}{(x)}", "\\frac{1}{x\\ln{(b)}}"],
        ["\\frac{d}{dx} (b^x)", "b^x\\ln{(b)}"],
        ["\\frac{d}{dx} (e^x)", "e^x"],
        ["\\frac{dy}{dx}=ky意味着什么?", "y=Ae^{kx}, A为常数"],
        ["若f(x)n阶可导 \\\\ 洛必达能洛到几阶导出现 \\\\ 若f(x)有n阶连续导数呢","若f(x)n阶可导 \\\\ 洛必达只能出现f^{(n-1)}(x) \\\\ 若f(x)有n阶连续导数 \\\\ 洛必达能出现f^{(n)}(x)"],
    ]
}
