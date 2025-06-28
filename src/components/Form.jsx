export default function Form() {
    return (
        <div className='flex flex-col justify-center rounded-2xl p-6 shadow-[0_0_15px_rgba(0,0,0,0.8)] max-w-lg mx-auto bg-[#1f1f38] mb-30'>
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

                    <label className='block mb-2'>Distance</label>
                    <div className='flex items-center border border-gray-400 rounded-lg px-2 py-1.5'>
                    <input type='text'
                    placeholder='0'
                    name='distance'
                    className='outline-none w-full'></input>
                    <span>miles</span>
                    </div>

                    <button type='submit' className='font-medium mx-auto w-30 flex justify-center mt-10 b p-2 rounded-lg cursor-pointer bg-white text-black shadow-[0_0_20px_rgba(0,0,0,200)] '>Submit</button>
                </form>
            </div>

        </div>
    )
}