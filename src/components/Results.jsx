export default function Result(props) {
    return(
        <div className='flex flex-col items-center bg-[#eceae5] text-black rounded-xl max-w-3xl p-7 m-auto'>
            <h1 className='underline text-2xl mb-2 font-semibold'>Results</h1>
            <p>Based on your input: You are traveling by {props.travelMode} and you are 
                traveling {props.distance} {props.units}.
            </p>
        </div>
    )
}