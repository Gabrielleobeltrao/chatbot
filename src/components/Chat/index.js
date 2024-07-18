import MenssageBot from "../MessageBot"
import MenssageClient from "../MessageClient"
import xIcon from "../../assets/x.svg"

function Chat({visible, setVisible}) {
    return (
        <div 
            className={`flex flex-col w-72 h-[550px] fixed right-5 bottom-0 bg-green rounded-t-3xl transform transition-transform duration-700 ${visible ? 'translate-y-0' : 'translate-y-dvh'}`}
        >
            <div className="flex py-3 px-4 justify-between">
                <div className="flex">
                    <img
                        className="relative rounded-full w-12 h-12" 
                        src="#"
                        alt=""
                    />
                    <div className="flex flex-col justify-center pl-2">
                        <h3 className="text-sm font-bold">Gabriel Beltrao</h3>
                        <h4 className="text-xs">Especialista em design</h4>
                    </div>
                </div>
                <img
                    className="h-5"
                    onClick={() => setVisible(false)}
                    src={xIcon}
                    alt=""
                />
            </div>
            <div className="flex flex-col flex-1 bg-light-gray rounded-t-xl px-4 py-4 overflow-y-auto gap-2.5">
            <MenssageBot />
            <MenssageClient />
            </div>
            <div className='flex-none px-4 bg-light-gray'>
                <textarea
                className="w-full p-2 rounded-xl mt-4 mb-3 bg-white resize-none overflow-hidden self-end text-sm border-green outline outline-2 outline-green placeholder:text-black focus:outline focus:outline-3"
                rows="2"
                placeholder="Mensagem..."
                />
            </div>
        </div>
    )
}

export default Chat