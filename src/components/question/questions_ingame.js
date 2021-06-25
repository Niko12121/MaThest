/*Question in the bag, every element of the big list is a level,
every element of a level is a question, every question is [question, [correct, wrong1, wrong2, wrong3, wrong 4]]*/

export const questions = [
    [
        ['What is 2 + 2?', [4, 2, 5, 7, 8]],
        ['What is 12 x 11?', [132, 244, 144, 1, 23]],
        ['What is the square root of 144?', [12, 34, 144, 0, 8]]
    ],
    [
        ['Solution to 2x = 2?', [1, 2, 5, 7, 8]],
        ['Solution to x^2 - 2 = 0?', ['sqrt of 2', 'sqrt of 4', 144, 0, 23]],
        ['What is the answer to 0^2?', [0, 34, 144, 12, 8]]

    ]
]

export default questions