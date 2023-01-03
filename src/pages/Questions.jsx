import { useLoaderData, useActionData, Form } from "react-router-dom"
import { getQuestions, addAnswer } from "../data/data"
import Question from "../components/Question"
import Error from "../components/Error"

export async function action({request}) {
    
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    
    // validate
    const errors = []
    if(Object.values(data).includes('')) {
        errors.push('Mood is required')
    }
    
    if(Object.keys(errors).length) {
        return errors
    }
    
    const questions = []
    console.log(questions)
    addAnswer(data)

    return {}
}

export function loader() {
    const questions = getQuestions()
    return questions
}

function Questions() {
    
    const errors = useActionData()
    const questions = useLoaderData()
    // console.log(questions)

    return (
        <div className="w-full lg:w-1/2 p-2 lg:pl-8 lg:pr-4 lg:mt-5 overflow-auto">
            { errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)}
            <Form
                method="post"
            >
                { questions.map(question => (
                    <Question
                        key={question.id}
                        question={question}
                    />
                ))}
                <div className="card rounded p-3 shadow bg-teal-800 mb-5">
                    <label
                        className="font-bold text-xl text-white mb-2 w-full block"
                        htmlFor="notes"
                    >Would you like to add anything?</label>
                    <textarea
                        id="notes"
                        className="mt-2 block w-full p-3 bg-gray-50 h-40 border-2 border-emerald-400"
                        placeholder="Express yourself freely and safely. This will always remain anonymous."
                        name="notes"
                    />
                </div>

                <div className="w-full mb-6">
                    <input
                        type="submit"
                        className="cursor-pointer w-full bg-teal-300 p-3 uppercase font-bold text-white text-lg hover:bg-blue-700"
                        value="Send Answers"
                    />
                </div>
            </Form>
        </div>
    )
}

export default Questions