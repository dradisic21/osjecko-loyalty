import { stepItem } from "../services/steps"
import "../styles/ParticipationSteps.scss"

export function ParticipationSteps() {
    return(
        <div className="steps-container h-full">
            <div className="text-center pt-32p">
                <h2 className="text-28p leading-34p font-bold text-primary-black">Kako sudjelovati?</h2>
            </div>
            <div className="flex flex-wrap pt-32p pb-162p gap-y-24p desktop:gap-x-12p">
                {stepItem.map((step) =>(
                    <div key={step.id} className="shadow-custom flex flex-col justify-center items-center gap-10p mx-auto h-198p bg-white rounded-15p" style={{ width: '100%', maxWidth: '358px' }}>
                        <div className="">
                            <img src={step.icon} alt="" />
                        </div>
                        <div className="text-23p font-bold">
                            <h3>{step.title}</h3>
                        </div>
                        <div className="text-18p text-center px-40p">
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
               
            </div>
        </div>
    )
}