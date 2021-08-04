/*Question in the bag, every element of the big list is a level,
every element of a level is a question, every question is [question, [correct, wrong1, wrong2, wrong3, wrong 4]]*/

export const questions = [
    [
        ['<p>What is 2 + 2?</p>', [4, 2, 5, 7, 8, 22]],
        ['<p>What is 12 x 11?</p>', [132, 244, 144, 1, 23, 1211]],
        ['<p><math><msqrt><mi>144</mi></msqrt></math> is equal to</p>', [12, 34, 144, 0, 8, 142]]
    ],
    [
        ['<p>Solution to 2x = 2?</p>', [1, 2, 5, 7, 8, -1]],
        ['<p>Solution to x² - 2 = 0?</p>', ['<math><msqrt><mi>2</mi></msqrt></math>', '<math><msqrt><mi>4</mi></msqrt></math>', 144, 0, 23, 2]],
        ['<p>0² is equal to</p>', [0, 34, 144, 12, 8, 1]]

    ]
]

export default questions