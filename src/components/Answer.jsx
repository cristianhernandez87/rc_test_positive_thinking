function Answer({answer}) {
    
    
    return (
        <tr className="border-b">
            <td className="px-6 py-3 w-1/12">
                <p className="text-xl text-gray-600 mb-1">{answer.user_id}</p>
            </td>
            <td className="px-6 py-3 w-1/2">
                {answer.questions.map(e => (
                    <div
                        key={e.id}
                        className="px-6 py-3">
                        <p className="text-gray-600 font-bold mb-1">{e.question}</p>
                        <p className="m-0">Ranking: {e.ranking}</p>
                        <p className="m-0">Answer: {e.answer_q}</p>
                    </div>
                ))}
            </td>

            <td className="px-6 py-3 w-3/12">
                <p className="m-0">{answer.comments}</p>
            </td>
        </tr>
    )
}

export default Answer