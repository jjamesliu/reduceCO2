export default function Form() {
    return (
        <div className='flex flex-col justify-center items-center rounded-2xl p-6 shadow-[0_0_15px_rgba(0,0,0,0.8)] max-w-lg mx-auto bg-[#1f1f38] mb-30'>
            <div className='w-auto'>
            <h1 className='text-center text-[1.3rem] font-semibold pb-1'>Eco Travel Planner 🌱</h1>
            <p className='text-center font-light opacity-80'>Calculate the Carbon Emissions for your trip.</p>

            <form className='mt-4'>
                <label>Travel Type</label>
                <select className='flex flex-col border border-gray-400 my-2 rounded-lg p-1.5 w-full'>
                    <option>Gas-Powered Car</option>
                    <option>Electric-Powered Car</option>
                    <option>Hybrid Car</option>
                    <option>Train</option>
                    <option>Bus</option>
                </select>

                <label className='block'>Distance</label>
                <input type='text'
                placeholder='0'
                name='distance'
                className='border rounded-lg mt-2 w-full p-[6px]'></input>
            </form>
            </div>

        </div>
    )
}