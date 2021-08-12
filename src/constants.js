import questions from "./components/question/questions_ingame";

/* How many questions per section will the page render */
export const amount_value = 2;
/* How many questions per section are already wrote (max_value >= amount_value) */
export const max_value = questions[0].length;
/* How many sections exist */
export const level_value = questions.length;