import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    
    const error = useRouteError()
    
    return (
        <div className="space-y-8">
            <p className="text-center text-4xl font-light mt-10 mb-5">Questions</p>
            <p className="text-center">{error?.statusText || error?.message}</p>
        </div>
    )
}

export default ErrorPage