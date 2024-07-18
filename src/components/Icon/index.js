import { useState } from "react"
import Chat from "../Chat"

function Icon() {

    const [visible, setVisible] = useState(false)

    return (
        <section className="relative w-dvw h-dvh">
            <div 
                className="absolute bottom-5 right-5"
                onClick={() => setVisible(true)}
            >
                <img
                    className="relative rounded-full bg-gray-500 w-12 h-12" 
                    src="#"
                    alt=""
                />
                <div className="rounded-full bg-green w-5 h-5 absolute -top-1 -left-1">
                    <h3 className="text-sm text-center text-white">2</h3>
                </div>
            </div>
            <Chat 
               visible={visible}
               setVisible={setVisible}
            />
        </section>
    )
}

export default Icon