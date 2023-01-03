import { useState } from 'react'

function Question({question}) {

    const [ comment, setComments ] = useState(false);
    const [ mood, setMood ] = useState('');

    const handdleComments = e => {
        e.preventDefault();
        setComments(true);
    }

    return (
        <div
            className="card rounded p-3 shadow bg-white mb-5">
            <label
                className="font-bold text-xl text-gray-800 mb-2 w-full block"
                htmlFor={question.id}
            >{question.question}</label>
            <select
                className="border-2 border-gray-200 w-full mb-3 p-2"
                value={mood}
                onChange={e => setMood(e.target.value)}
                name={`mood_${question.id}`}
            >
                <option value="">-- select mood --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <div className="w-full text-center">
                { comment === true ? 
                    (
                        <textarea
                            id={`comment_${question?.id}`}
                            className="mt-2 block w-full p-3 bg-gray-50 h-40 border-2 border-emerald-400"
                            placeholder="Anything to add?"
                            name={`comment_${question?.id}`}
                            // defaultValue={question?.comments}
                        />
                    )
                    : ( 
                        <button onClick={handdleComments} className="cursor-pointer text-emerald-400 hover:underline decoration-1">Add comment</button> 
                    )
                }
            </div>
        </div>
    )
}

export default Question