import React.{useState} from 'react'

const Toggle = () => {
    const [toggle, settoggle] = useState(0)
    return (
       <div className="flex justify-center items-center">

    <div className="relative rounded-full w-12 h-6 transition duration-200 ease-linear"
        :class="[toggle === '1' ? 'bg-green-400' : 'bg-gray-400']">
        <label for="toggle"
            className="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"
            :class="[toggle === '1' ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400']"></label>
        <input type="checkbox" id="toggle" name="toggle"
            className="appearance-none w-full h-full active:outline-none focus:outline-none"
            onClick="toggle === '0' ? toggle = '1' : toggle = '0'"/>
    </div>
</div>
    )
}

export default Toggle
