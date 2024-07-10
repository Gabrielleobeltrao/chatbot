function Icon() {
    return (
        <section className="relative w-dvw h-dvh">
            <div className="absolute bottom-5 right-5">
                <img
                    className="relative rounded-full bg-gray-500 w-12 h-12" 
                    src="#"
                    alt=""
                />
                <div className="rounded-full bg-red-600 w-5 h-5 absolute -top-1 -left-1">
                    <h3 className="text-sm text-center text-white">2</h3>
                </div>
            </div>
        </section>
    )
}

export default Icon