import { useLoaderData } from 'react-router-dom'
import { getAnswers } from '../data/data'
import Answer from '../components/Answer'

export function loader() {
  const questions = getAnswers()
  return questions
}

function Answers() {

    const answers = useLoaderData()
  
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