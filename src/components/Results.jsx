export default function Result(props) {
    if (!props.resultShown) return null;
    
    return(
        <div className='flex flex-col items-center bg-[#303a61] text-white rounded-xl max-w-3xl p-7 m-auto shadow-[0_0_10px_rgba(0,0,0,0.8)]'>
            <h1 className='underline text-2xl mb-2 font-semibold'>Results</h1>
            <p className='mb-2'>Based on your input: You are traveling by {props.travelMode}.</p>

            {props.travelMode === 'flight' ? (
            <>
                <p>This route covers an estimated distance of {props.flightDistance} {props.units}.</p>
                <p>Your estimated Carbon Footprint is: {props.carbonResult} grams.</p>
            </>
            ) : (
            <p>Your estimated Carbon Footprint is: {props.carbonResult} grams.</p> )}
        </div>
    )
}