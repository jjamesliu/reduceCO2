export default function AirForm(props) {
    return (
        <>  
            <div className='flex flex-row gap-10 mt-5'>

                <div className='mb-5 text-center flex-1'>
                    <label className='block'>AIRPORT CODE Depart</label>
                    <input className='border border-gray-400 rounded-lg px-2 py-2 w-full'
                    placeholder="e.g. SFO"/>
                </div>

                <div className='text-center flex-1'>
                    <label className='block'>AIRPORT CODE Arrive</label>
                    <input className='border border-gray-400 rounded-lg px-2 py-2 w-full'
                    placeholder="e.g. SFO"/>
                </div>

            </div>
        </>
    )
}