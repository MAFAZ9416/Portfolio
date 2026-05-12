const AuroraBackground = () => {

    return (

        <div className="fixed inset-0 overflow-hidden -z-10">

            {/* Purple Blob */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-blob"></div>

            {/* Blue Blob */}
            <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

            {/* Pink Blob */}
            <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>

        </div>

    )

}

export default AuroraBackground