// questions
export async function getQuestions() {
    const response = await fetch(import.meta.env.VITE_API_QUESTIONS)
    const result = await response.json()
    return result
}

// answers
export async function getAnswers() {
    const response = await fetch(import.meta.env.VITE_API_ANSWERS)
    const result = await response.json()
    return result
}

export async function addAnswer(data) {
    console.log(data)
}
