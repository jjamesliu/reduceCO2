export default function Form(props) {

    const api = import.meta.env.VITE_CARBON_API;

    const travelModeMap = {
        'Gas-Powered Car': 'vehicle',
        'Electric-Powered Car': 'vehicle',
        'Hybrid Car': 'vehicle',
        'Air': 'flight'
    }
    const apiTravelMode = travelModeMap[props.travelMode]

    async function handleSubmit(e) {
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

        const response = await fetch("https://www.carboninterface.com/api/v1/estimates", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${api}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            type: apiTravelMode,
            distance_unit: props.units,
            distance_value: props.distance,
            vehicle_model_id: "7268a9b7-17e8-4c8d-acca-57059252afe9"
        })
        });

        const data = await response.json();
        const data_grams = data.attributes.carbon_g;
        const data_lb = data.attributes.carbon_lb;
        const data_kg = data.attributes.carbon_kg;
        const data_mt = data.attributes.carbon_mt;
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
                    <select className='flex flex-col border border-gray-400 my-2 rounded-lg p-1.5 w-full outline-none'
                    name='travelType' 
                    value={props.travelMode}
                    onChange={ (e) => props.setTravelMode(e.target.value)}>
                        <option>Gas-Powered Car</option>
                        <option>Electric-Powered Car</option>
                        <option>Hybrid Car</option>
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

                    <select className='ml-2 text-white border border-gray-400 px-[2.5px] rounded-md outline-none'
                    value={props.units}
                    onChange={(e)=>props.setUnits(e.target.value)}> 
                        <option>miles</option>
                        <option>km</option>
                    </select>

                    </div>
                    
                    <h3 className='mt-10 text-center text-red-500 font-semibold'>{props.error}</h3>

                    <button type='submit'
                     className='font-medium mx-auto w-30 flex justify-center mt-10 b p-2 rounded-lg cursor-pointer bg-white text-black shadow-[0_0_20px_rgba(0,0,0,200)] '>
                    Submit</button>
                </form>
            </div>

        </div>


        </>
    )
}