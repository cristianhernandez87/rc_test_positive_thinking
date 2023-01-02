import { useLoaderData } from 'react-router-dom'
import Answer from '../components/Answer'

export function loader() {
    const answers = [
        {
            user_id: 873,
            notes: 'Pellentesque volutpat laoreet consequat. Maecenas bibendum tortor risus, at dapibus nisi pellentesque at. Phasellus quam massa, mattis vitae tristique ut, suscipit nec odio. Mauris placerat libero ac dolor rutrum placerat. Proin et semper urna, non blandit tellus. Etiam volutpat interdum quam nec fringilla. Phasellus facilisis est nec enim tristique, at vehicula lectus iaculis.',
            questions: [

                {
                  id: 1,
                  question: "I am satisfied with my roles and responsibilities.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 2,
                  question: "I feel like I have a healthy work/life balance.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 3,
                  question: "I feel comfortable working and interacting with the colleagues on my team.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 4,
                  question: "I like my work environment, and I believe it helps me perform at my best.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 5,
                  question: "My direct manager gives me necessary support and clear objectives.",
                  ranking: 1,
                  answer_q: "xx"
                }
            ]
        },
        {
            user_id: 874,
            notes: '',
            questions: [

                {
                  id: 1,
                  question: "I am satisfied with my roles and responsibilities.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 2,
                  question: "I feel like I have a healthy work/life balance.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 3,
                  question: "I feel comfortable working and interacting with the colleagues on my team.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 4,
                  question: "I like my work environment, and I believe it helps me perform at my best.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 5,
                  question: "My direct manager gives me necessary support and clear objectives.",
                  ranking: 1,
                  answer_q: "xx"
                }
            ]
        },
        {
            user_id: 382,
            notes: 'Pellentesque volutpat laoreet consequat. Maecenas bibendum tortor risus, at dapibus nisi pellentesque at. Phasellus quam massa, mattis vitae tristique ut, suscipit nec odio. Mauris placerat libero ac dolor rutrum placerat. Proin et semper urna, non blandit tellus. Etiam volutpat interdum quam nec fringilla. Phasellus facilisis est nec enim tristique, at vehicula lectus iaculis.',
            questions: [

                {
                  id: 1,
                  question: "I am satisfied with my roles and responsibilities.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 2,
                  question: "I feel like I have a healthy work/life balance.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 3,
                  question: "I feel comfortable working and interacting with the colleagues on my team.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 4,
                  question: "I like my work environment, and I believe it helps me perform at my best.",
                  ranking: 1,
                  answer_q: "xx"
                },
                {
                  id: 5,
                  question: "My direct manager gives me necessary support and clear objectives.",
                  ranking: 1,
                  answer_q: "xx"
                }
            ]
        },
      ]

    return answers
}

function Answers() {

    const answers = useLoaderData()

    console.log(answers)
  
    return (
        <div className="w-full py-2 px-4 overflow-auto">
            <h3 className="text-2xl text-white font-bold font-white mb-2">Answers</h3>
            <p className="text-white mb-5">Check your answers</p>

            { answers.length ? (
                <table className="table-auto w-full bg-white p-3 shadow">
                    <thead className='bg-teal-800'>
                        <tr>
                            <th className="p-2 text-white">User Id</th>
                            <th className="p-2 text-white">Answer</th>
                            <th className="p-2 text-white">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {answers.map(answer => (
                            <Answer
                                key={answer.user_id}
                                answer={answer}
                            />
                        ))}
                    </tbody>
                </table>
            ) : ( <p className="text-center mt-10">No answers</p> )}
        </div>
    )
}

export default Answers