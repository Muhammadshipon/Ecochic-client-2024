import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Cursor, useTypewriter } from "react-simple-typewriter";


const Discount = () => {
  const [text] = useTypewriter({
    words: ['#ecOchIC'],
    loop: 0,
    typeSpeed:120,
    deleteSpeed:100
  })
  const [countOn,setCountOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
    <div>
      <div className="p-6 py-12 bg-indigo-600 text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-white text-6xl tracking-tighter font-bold">Up to
				<br  className="sm:hidden" /> <span className="text-yellow-400">{countOn&&<CountUp end={30}  duration={2}/>}%</span> Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0 text-white">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg text-yellow-400">{text}  <Cursor cursorColor='white' /></span>
			</div>
			<button className="btn btn-warning font-bold">Show Now</button>
		</div>
	</div>
</div>

    </div>
    </ScrollTrigger>
  );
};

export default Discount;