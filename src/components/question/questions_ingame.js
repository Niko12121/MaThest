/*Question in the bag, every element of the big list is a level,
every element of a level is a question, every question is [question, [correct, wrong1, wrong2, wrong3, wrong 4, wrong 5]]
Sections 1-5 basic, Sections 6-10 intermediate, 11-15 intro-advanced, 16-20 advanced */

export const questions = [
    [/* Section 1 */
        ["<p> 2+2 equals to</p>", [4, 2, 5, 7, 8, 22]],
        ["<p>12+11 equals to</p>", [23, 132, 1.1, 22, 20, 25]],
        ["<p>17-19 equals to</p>", [-2, 2, 0, -4, -0.5, 1]],
        ["<p>12+21 equals to</p>", [33, 12, -9, 30, 23, 32]],
        ["<p>4-8 equals to</p>", [-4, 4, 0, -2, 2, 12]]
    ],
    [/* Section 2 */
        ["<p>2+7-3 equals to</p>", [6, 9, -1, 5, 8, -8]],
        ["<p>2×12 equals to</p>", [24, 36, 12, 6, 14, 10]],
        ["<p>3-2×4 equals to</p>", [-5, -7, 1, 4, -4, 5]],
        ["<p>2×(10-3) equals to</p>", [14, 26, 17, 19, 20, 11]],
        ["<p>12+12+12 is equivalent to</p>", ["3 × 12", "3 + 12", "312", "3 × 12 × 12", "123", "12 - 3"]]
    ],
    [/* Section 3 */
        ["<p>16÷2+2</p>", [10, 4, 12, 14, 8, 6]],
        ["<p>13×12+4×2</p>", [164, 160, 80, 82, 156, 182]],
        ["<p>If a÷(x×b)=y then</p>", ["x = a ÷ (y × b)","x = (a × y) ÷ b", "x = (a × b) ÷ y", "x = (b × y) ÷ a","x = b ÷ (a × y)", "x = y ÷ (a × b)"]],
        ["<p>If y=mx+n then m equals to</p>", ["(y - n) ÷ x","(n - y) ÷ x", "(x - y) ÷ n", "y ÷ (n - x)", "n ÷ (y - x)", "x ÷ (y - n)"]],
        ["<p>16×2+3×2+4</p>", [42, 38, 74, 75, 39, 40]]
    ],
    [/* Section 4 */
        ["<p>What is the area of a triangle in the plane with vertices in [0,2], [7,12] and [0,8]</p>", [21, 44, 73, 12, 18, 19]],
        ["<p>What is the multiplicative inverse of the slope of the rect defined by y=3x+7</p>", ["1/3", "3", "7", "1/7", "1", "3/7"]],
        ["<p>Which of the next numbers is not prime</p>", [7296, 7723, 6047, 5653, 6143, 5647]],
        ["<p>what is the last digit of 35632×12411×12779</p>", [8, 7, 4, 3, 1, 9]],
        ["<p>If a is odd and b is even, the expression a×b+(a-b) can not be equal to</p>", [1282, 1241, 7867, 269, 311, 22901]]
    ],
    [/* Section 5 */
        ["<p>The area of the triangle formed by axis and the line given by y=8x+1 is</p>", ["1/16", "16", "1", "-1/16", "16/3", "8"]],
        ["<p>Which of the next numbers is not a perfect square</p>", [182767, 277729, 285156, 180625, 194481, 237169]],
        ["<p>The sum of coordinates of the vertex of the graph given by x²+4x-2 equals to</p>", [-8, 12, -12, -21, -18, 0]],
        ["<p>If an pentagon has angles 13x, 12x, 8x, 12x and 15x degrees then x equals to</p>", [9, 12, 22, 7, 8, 1]],
        ["<p>The sum of the first 200 natural numbers equals to</p>", [20100, 19800, 10900, 7900, 21100, 10200]]
    ],
    [/* Section 6 */
        ["<p>(x+y)²-(x²-x)² equals to</p>", ["-x⁴ + 2x³ + 2xy + y²", "x⁴ - 4x³ + 2xy + y²", "-x⁴ - 2x³ - 2xy + y²", "x⁴ - 2x² + 2xy + y²", "2x³ + 4xy + y²", "x⁴ + 2xy + y²"]],
        ["<p>If every year had 365 days, and january 1, 2021 is friday, what day is january 1, 1916</p>", [ "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Thursday"]],
        ["<p>In base 8, 2 × 12 × 297 × 96 × 2890 equals to</p>", [0, 4, 2, 6, 1, 7]],
        ["<p>If a fungi colony duplicate herself every 2 hours and at 14:00hrs had population of 12000, at what hour the colonie had 1500 of population</p>", ["10:00", "18:00", "12:00", "11:00", "8:00", "12:30"]],
        ["<p>If the rect y=x+n intersect once with the paraboll y=ax²+bx+c, what is n?</p>", ["c - (b-1)² / 4a", "(8c - b²) / 4a", "(4c² - b(b + a)²", "(2c - b²) / 4a²", "b² - 4ac", "a² + b + c"]]
    ],
    [/* Section 7 */
        ["<p>Which of the next numbers is not integer</p>", ["2/(0.4)⁵" ,"1,999...", "1/(0.2)⁴", "0.242424.../0.080808...", "-124 / 2", "0"]],
        ["<p>How many solution have the equality (x²+2x+1)²=0</p>", [1, 0, -1, 2, 3, 4]],
        ["<p>Let f a function &#8477; -> &#8477;, if f(q)=0 for all q in &#8474;, then f=0</p>", ["True", "False"]],
        ["<p>How many natural numbers exist as solution to inequallity 2x²+4x+2 ≤ 8÷x</p>", [1, 0, 2, 3, 4, 5]],
        ["<p>If i² = -1, then (1 + i) × (1 - i) equals</p>", [2, 0, "i", "2i", 1, -2]]
    ],
    [/* Section 8 */
        ["<p>If the distance between (5, 2, 0) and (7, -4, x) is 7, then x can be equal to</p>", [3, 2, 0, 1, -4, 5]],
        ["<p>L = (4, 1) + λ(2, 8) then L also equals</p>", ["4x-y-15 = 0", "2x-2y-13 = 0", "8x-y-35 = 0", "-2x+3y+5 = 0", "3x-2y+1 = 0", "4x - y - 17 = 0"]],
        ["<p>If x and y are reals with 0<x<y, and xy = 1, which is the biggest number that x + y can not be</p>", [2, 1, 0, "None", -2, -1]],
        ["<p>1&frasl;10⁴ × 20⁵ equals to</p>", [320, 160, "1&frasl;4", 8, 1, "1&frasl;2"]],
        ["<p>If i know 3 points of a square, then i know the area of that square</p>", ["False", "True"]]
    ],
    [/* Section 9 */
        ["<p>There are more rational numbers than reals between 0 and 1</p>", ["False", "True"]],
        ["<p>If a circle has diameter x cm. and area x cm.², then x equals to</p>", [2, 0, 1, "π", 4, 6]],
        ["<p>How many different anagram exist (not necessarily meaningful) of the word 'revenge'</p>", [840, 720, 5040, 72, 1024, 640]],
        ["<p>If |4-2x| > 8</p> then", ["x < -2 or x > 6", "x < -2 and x > 6", "x < 2", "x < 2 and x > -6", "x > 2 and x < 6", "x > 2 or x < 6"]]
    ],
    [/* Section 10 */
        ["<p>If f(x) has inverse in all R then f(x) can not be</p>", ["x²", "x³", "x¹⁷", "x", "x³ + 81", "x + 1"]],
        ["<p>If i have a notebook paper, and i draw n (straight) lines from border to border, what is the smallest number that i need to paint all the paper without adjacents same color regions, no matter the way how i draw the lines</p>", [2, "n²", 3, 4, "n + 1", "n"]],
        ["Sin(112.5)"],
        ["1 < sin(e*x*cos(x²)/x)"],
        ["(1 + 1/n)^2n"]
    ]
]

export default questions