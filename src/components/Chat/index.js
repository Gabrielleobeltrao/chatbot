import MenssageBot from "../MessageBot"
import MenssageClient from "../MessageClient"

function Chat() {
    return (
        <div className="flex flex-col w-72 h-[550px] fixed right-5 bottom-0 bg-gray-300 rounded-t-3xl">
            <div className="flex py-3 px-4 justify-between">
                <div className="flex">
                    <img
                        className="relative rounded-full bg-gray-500 w-12 h-12" 
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
                    src="#"
                    alt=""
                />
            </div>
            <div className="flex flex-col flex-1 bg-gray-400 rounded-t-xl px-4 py-4 overflow-y-auto gap-2.5">
            <MenssageBot />
            <MenssageClient />
            </div>
            <div className='flex-none px-4'>
                <textarea
                className="w-full p-2 rounded-xl mt-4 mb-3 bg-white resize-none overflow-hidden self-end text-sm"
                rows="2"
                placeholder="Mensagem..."
                />
            </div>
        </div>
    )
}

export default Chat