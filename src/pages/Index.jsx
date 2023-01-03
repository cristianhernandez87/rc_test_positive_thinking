import { Link } from 'react-router-dom'

import face_happy from '../assets/img/Happy.svg'
import face_neutral from '../assets/img/Neutral.svg'
import face_unhappy from '../assets/img/Unhappy.svg'
import face_veryhappy from '../assets/img/VeryHappy.svg'
import face_veryunhappy from '../assets/img/VeryUnhappy.svg'

function Index() {

    return (
        <div className="w-full p-2 flex md:items-center md:justify-center">
            <div className="rounded p-3 bg-white h-fit mb-4">
                <p className="text-xl font-bold mb-4">How is your week going?</p>
                <div className="flex align-items-center justify-between mb-3">
                    <Link 
                        to="/questions"
                        id="very_unhappy"
                        className="btn">
                        <img src={face_veryunhappy} alt="very unhappy" className="img" />
                    </Link>
                    <Link 
                        to="/questions"
                        id="unhappy"
                        className="btn">
                        <img src={face_unhappy} alt="unhappy" className="img" />
                    </Link>
                    <Link 
                        to="/questions"
                        id="neutral"
                        className="btn">
                        <img src={face_neutral} alt="neutral" className="img" />
                    </Link>
                    <Link 
                        to="/questions"
                        id="happy"
                        className="btn">
                        <img src={face_happy} alt="happy" className="img" />
                    </Link>
                    <Link 
                        to="/questions"
                        id="very_harry"
                        className="btn">
                        <img src={face_veryhappy} alt="very happy" className="img" />
                    </Link>
                </div>
                <hr className="my-3" />
                <p className="">Powered by Cristian Herndandez</p>
            </div>
        </div>
    )
}

export default Index