export default function Form(props) {
    const api = import.meta.env.VITE_CLIMATIQ_API;

    const travelModeMap = {
        'Gas-Powered Car': 'car',
        'Electric-Powered Car': 'car',
        'Hybrid Car': 'car',
        'Train': 'rail',
        'Air': 'air'
    }
    const apiTravelMode = travelModeMap[props.travelMode]

    function handleSubmit(e) {
        e.preventDefault();

        const isEmpty = props.distance.trim() === '';
        const isNotNumber = isNaN(props.distance);
        if (isEmpty || isNotNumber) {
            props.setError('Please enter a valid number for distance.');
            return;
        }
        props.setError(null);
        console.log('apiTravelMode: ', apiTravelMode);
    }

    return (
        <>
        <div className='flex flex-col justify-center rounded-2xl p-6 shadow-[0_0_15px_rgba(0,0,0,0.8)] max-w-lg mx-auto bg-[#1f1f38] mb-30'>
            <div className='w-auto'>
                <h1 className='text-center text-[1.3rem] font-semibold pb-1'>Eco Travel Planner 🌱</h1>
                <p className='text-center font-light opacity-80'>Calculate the Carbon Emissions for your trip.</p>

                <form className='mt-4'
                onSubmit={handleSubmit}>
                    <label>Travel Type</label>
                    <select className='flex flex-col border border-gray-400 my-2 rounded-lg p-1.5 w-full'
                    name='travelType' 
                    value={props.travelMode}
                    onChange={ (e) => props.setTravelMode(e.target.value)}>
                        <option>Gas-Powered Car</option>
                        <option>Electric-Powered Car</option>
                        <option>Hybrid Car</option>
                        <option>Train</option>
                        <option>Air</option>
                    </select>

                    <label className='block mb-2'>Distance</label>
                    <div className='flex items-center border border-gray-400 rounded-lg px-2 py-1.5 mb-7'>
                    <input type='text'
                    placeholder='0'
                    name='distance'
                    className='outline-none w-full'
                    value={props.distance}
                    onChange={ (e) => props.setDistance(e.target.value)}></input>
                    <span>miles</span>
                    </div>

                    <div className='flex flex-row text-center'>
                        <div>
                            <label>Origin Latitude</label>
                            <input className='mt-2 outline-none px-2 py-1.5 border border-gray-400 rounded-md'></input>
                        </div>
                        <div>
                            <label>Origin Longitude</label>
                            <input className='mt-2 outline-none px-2 py-1.5 border border-gray-400 rounded-md'></input>
                        </div>
                    </div>

                    <div className='flex flex-row text-center mt-2'>
                        <div>
                            <label>Destination Latitude</label>
                            <input className='mt-2 outline-none px-2 py-1.5 border border-gray-400 rounded-md'></input>
                        </div>
                        <div>
                            <label>Destination Longitude</label>
                            <input className='mt-2 outline-none px-2 py-1.5 border border-gray-400 rounded-md'></input>
                        </div>
                    </div>

                    <h3 className='mt-10 text-center text-red-500 font-semibold'>{props.error}</h3>

                    <button type='submit'
                     className='font-medium mx-auto w-30 flex justify-center mt-10 b p-2 rounded-lg cursor-pointer bg-white text-black shadow-[0_0_20px_rgba(0,0,0,200)] '>
                    Submit</button>
                </form>
            </div>
        </div>


        <div className='bg-blue-300'>
            <h1>How You Can Reduce Your Carbon Footprint</h1>
            <p>Based on your input: You are traveling by {props.travelMode} and you are 
                traveling {props.distance} mles.</p>
        </div>
        </>
    )
}