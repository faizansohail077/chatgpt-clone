import { SunIcon ,BoltIcon, ExclamationCircleIcon} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="text-white h-screen flex flex-col justify-center items-center px-2" >
      <h1 className='text-2xl font-bold mb-20' >Chatgpt</h1>

      <div className='flex space-x-5 text-center ' >
        <div>
          <div className='flex flex-col justify-center items-center mb-5' >
            {/* icon */}
            <SunIcon className="h-8 w-8" />

            <h2>Examples</h2>
          </div>
          <div className="space-y-2" >
            <p className="infoText" >Explain Something To Me</p>
            <p className="infoText" >What is a difference between cat and a dog</p>
            <p className="infoText" >What is the color of the sun</p>
          </div>
        </div>

        {/*  */}
        <div>
          <div className='flex flex-col justify-center items-center mb-5' >
            {/* icon */}
            <BoltIcon className="h-8 w-8" />

            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2" >
            <p className="infoText" >Remembers what user said earlier in the conversation</p>
            <p className="infoText" >Allows user to provide follow-up corrections</p>
            <p className="infoText" >Trained to decline inappropriate requests</p>
          </div>
        </div>

        {/*  */}
        <div>
          <div className='flex flex-col justify-center items-center mb-5' >
            {/* icon */}
            <ExclamationCircleIcon className="h-8 w-8" />

            <h2>Limitation</h2>
          </div>
          <div className="space-y-2" >
            <p className="infoText " >May occasionally generate incorrect information</p>
            <p className="infoText" >May occasionally produce harmful instructions or biased content</p>
            <p className="infoText" >Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>


    </div >
  )
}
