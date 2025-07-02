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
        console.log('button clicked')

        const isEmpty = props.distance.trim() === '' ||
        props.originLat.trim() === '' ||
        props.originLong.trim() === '' ||
        props.destinationLat.trim() === '' ||
        props.destinationLong.trim() === '';

        const isNotNumber = isNaN(props.distance) ||
        isNaN(props.originLat) ||
        isNaN(props.originLong) ||
        isNaN(props.destinationLat) ||
        isNaN(props.destinationLong);

        if (isEmpty || isNotNumber) {
            props.setError('Input valid numbers.');
            return;
        }
        props.setError(null);
        console.log('apiTravelMode: ', apiTravelMode);
        console.log('km traveled:', props.distance)
        console.log('origin lat and long:', props.originLat, '/' , props.originLong )
        console.log('destination lat and long:', props.destinationLat, '/' , props.destinationLong )
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
                    <div className='flex items-center border border-gray-400 rounded-lg px-2 py-1.5 mb-5'>
                    <input type='text'
                    placeholder='1'
                    name='distance'
                    className='outline-none w-full'
                    value={props.distance}
                    onChange={ (e) => props.setDistance(e.target.value)}></input>
                    <span>km</span>
                    </div>

                    <div className='flex flex-row text-center mb-5'>
                        <div>
                            <label>Origin Latitude</label>
                            <input className='mt-2 outline-none px-2 py-1.5 border border-gray-400 rounded-md'
                            value={props.originLat}
                            placeholder='ex: 41.40338'
                            name='originLat'
                            onChange={(e) => props.setOriginLat(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Origin Longitude</label>
                            <input className='mt-2 outline-none px-2 py-1.5 border border-gray-400 rounded-md'
                            value={props.originLong}
                            placeholder='ex: 11.50327'
                            onChange={(e) => props.setOriginLong(e.target.value)}></input>
                        </div>
                    </div>

                    <div className='flex flex-row text-center mt-2'>
                        <div>
                            <label>Destination Latitude</label>
                            <input className='mt-2 outline-none px-2 py-1.5 border border-gray-400 rounded-md'
                            value={props.destinationLat}
                            placeholder='ex: 21.41228'
                            onChange={(e) => props.setDestinationLat(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Destination Longitude</label>
                            <input className='mt-2 outline-none px-2 py-1.5 border border-gray-400 rounded-md'
                            value={props.destinationLong}
                            placeholder='ex: 51.52238'
                            onChange={(e) => props.setDestinationLong(e.target.value)}></input>
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