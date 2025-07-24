export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
            <div className="bg-white w-[20rem] h-[15rem] rounded-2xl flex flex-col p-[3rem] text-center items-center justify-center shadow-lg">
                <h1 className="text-black font-semibold">Loading Your Results</h1>
                <div className="mt-[1rem] animate-spin h-8 w-8 border-4 border-t-transparent border-black rounded-full"></div>
            </div>
        </div>
    );
}