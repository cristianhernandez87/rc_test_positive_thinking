import { useLoaderData } from "react-router-dom"

import Question from "../components/Question"

export function loader() {
    const questions = [
        {
          id: 1,
          question: "I am satisfied with my roles and responsibilities.",
        },
        {
          id: 2,
          question: "I feel like I have a healthy work/life balance.",
        },
        {
          id: 3,
          question: "I feel comfortable working and interacting with the colleagues on my team.",
        },
        {
          id: 4,
          question: "I like my work environment, and I believe it helps me perform at my best.",
        },
        {
          id: 5,
          question: "My direct manager gives me necessary support and clear objectives.",
        }
      ]

    return questions
}

function Questions() {

    const questions = useLoaderData()

    return (
        <div className="w-full lg:w-1/2 p-2 lg:pl-8 lg:pr-4 lg:mt-5 overflow-auto">
            { questions.map(question => (
                <Question
                    key={question.id}
                    question={question}
                />
            ))}

            <div
                className="card rounded p-3 shadow bg-teal-800 mb-5">
                <label
                    className="font-bold text-xl text-white mb-2 w-full block"
                    htmlFor="notes"
                >Would you like to add anything?</label>
                <textarea
                    id="notes"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 border-2 border-emerald-400"
                    placeholder="Express yourself freely and safely. This will always remain anonymous."
                    name="notes"
                    // defaultValue={costumer?.notes}
                />
            </div>
        </div>
    )
}

export default Questions