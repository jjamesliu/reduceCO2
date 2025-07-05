import {useEffect} from 'react'
import AirForm from './AirForm.jsx'
import airportData from '../airports.json'

export default function Form(props) {
    useEffect(()=>{
        props.setError(null);
        props.setDistance("")
        props.setUnits("mi")
        props.setDepartAirport("")
        props.setArrivalAirport("")
    }, [props.travelMode])

    const api = import.meta.env.VITE_CARBON_API;

    const travelModeMap = {
        'Gas-Powered Car': 'vehicle',
        'Electric-Powered Car': 'vehicle',
        'Hybrid Car': 'vehicle',
        'flight': 'flight'
    }
    const apiTravelMode = travelModeMap[props.travelMode]

    function isValidAirportCode(code) {
        const upper = code.toUpperCase();
        const isFormatCorrect = /^[A-Z]{3}$/.test(upper);
        const existsInData = Object.values(airportData).some(entry => entry.iata === upper);
        return isFormatCorrect && existsInData;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('button clicked')

        const isEmpty = props.distance.trim() === '';
        const isNotNumber = isNaN(props.distance);
        const checker = isEmpty || isNotNumber;


        const arrivalAirportisEmpty = props.arrivalAirport.trim() === '';
        const departAirportisEmpty = props.departAirport.trim() === '';
        const airportChecker = arrivalAirportisEmpty || departAirportisEmpty;

        if (checker && apiTravelMode === 'vehicle') {
            props.setError('Input valid numbers.');
            return;
        }

        if (airportChecker && apiTravelMode === 'flight') {
            props.setError('Input a valid 3 letter airport code.')
            return;
        } else if (apiTravelMode === 'flight'){
            if (!isValidAirportCode(props.departAirport) || !isValidAirportCode(props.arrivalAirport)) {
                props.setError("Please enter valid 3-letter IATA airport codes.")
                return;
            }
        }

        props.setError(null);
        let response;

        if (apiTravelMode === 'vehicle') {
            response = await fetch("https://www.carboninterface.com/api/v1/estimates", {
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
        } else if (apiTravelMode === 'flight') {
            response = await fetch("https://www.carboninterface.com/api/v1/estimates", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${api}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: apiTravelMode,
                passengers: 100,
                legs: [{
                    departure_airport: props.departAirport,
                    destination_airport: props.arrivalAirport
                }],
                distance_unit: props.units
            })
            });
        }
      

        const data = await response.json();
        console.log(data);
        console.log(data.data.attributes.distance_value);
        const flight_distance = data.data.attributes.distance_value;
        props.setFlightDistance(flight_distance);
        const data_grams = data.data.attributes.carbon_g;
        props.setCarbonResult(data_grams)
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
                        <option value='flight'>Air</option>
                    </select>

                    {props.travelMode === 'Gas-Powered Car' ||
                    props.travelMode === 'Electric-Powered Car' ||
                    props.travelMode === 'Hybrid Car'           
                    ? (
                    <>
                    <label className='block mb-2 mt-4'>Distance</label>
                    <div className='flex items-center border border-gray-400 rounded-lg px-2 py-1.5 mb-5'>
                        <input type='text'
                        placeholder='1'
                        name='distance'
                        className='outline-none w-full'
                        onChange={ (e) => props.setDistance(e.target.value)}></input>

                        <select className='ml-2 text-white border border-gray-400 px-[2.5px] rounded-md outline-none'
                        value={props.units}
                        onChange={(e)=>props.setUnits(e.target.value)}> 
                            <option value='mi'>miles</option>
                            <option>km</option>
                        </select>
                    </div>
                    </> ) : null
                    }

                    {props.travelMode === 'flight' ? 
                    <AirForm departAirport={props.departAirport}
                    arrivalAirport={props.arrivalAirport}
                    setDepartAirport={props.setDepartAirport}
                    setArrivalAirport={props.setArrivalAirport}
                    /> : null}

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