import { useLoaderData } from "react-router-dom"

export function loader() {
    const questions = [
        {
          id: 1,
          question: "I am satisfied with my roles and responsibilities.",
          ranking: 1,
          answer: "xx"
        },
        {
          id: 2,
          question: "I feel like I have a healthy work/life balance.",
          ranking: 1,
          answer: "xx"
        },
        {
          id: 3,
          question: "I feel comfortable working and interacting with the colleagues on my team.",
          ranking: 1,
          answer: "xx"
        },
        {
          id: 4,
          question: "I like my work environment, and I believe it helps me perform at my best.",
          ranking: 1,
          answer: "xx"
        },
        {
          id: 5,
          question: "My direct manager gives me necessary support and clear objectives.",
          ranking: 1,
          answer: "xx"
        }
      ]

    return questions
}

function Questions() {

    const questions = useLoaderData()

    console.log(questions)

    return (
        <div className="w-full p-2">

            <div>Questions</div>
        </div>
    )
}

export default Questions