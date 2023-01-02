import face_happy from '../assets/img/Happy.svg'
import face_neutral from '../assets/img/Neutral.svg'
import face_unhappy from '../assets/img/Unhappy.svg'
import face_veryhappy from '../assets/img/VeryHappy.svg'
import face_veryunhappy from '../assets/img/VeryUnhappy.svg'

function Index() {
  return (
    <div className="w-full p-2 flex md:items-center md:justify-center">
        <div className="rounded p-2 bg-white h-fit">
            <p className="text-xl font-bold mb-4">How is your week going?</p>
            <div className="flex align-items-center">
                <button className="btn">
                    <img src={face_veryunhappy} alt="very unhappy" className="img" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Index