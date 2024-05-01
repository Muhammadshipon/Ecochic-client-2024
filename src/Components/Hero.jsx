

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
  
    <div className="rounded-lg" data-aos="flip-right"  data-aos-duration="3000"  data-aos-delay="1000">
    <img src="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2014/08/saha-9-748x1024.jpg" className="md:w-[1000px] rounded-lg md:h-[500px] px-10" />
    </div>
    <div className="p-10 space-y-5" data-aos="fade-left"  data-aos-duration="3000"  data-aos-delay="1000">
      <p className="text-yellow-400">MORE NATURE IN MORE HOMES</p>
      <h1 className="text-5xl font-bold">Handmade with patience and love for the artisanal craft</h1>
       <div>
        <h3 className="font-bold text-xl text-indigo-600">High quality product</h3>
        <p className="text-gray-600">Each item is made with care and attention to detail.</p>
       </div>
       <div>
        <h3 className="font-bold text-xl text-indigo-600">Natural fibers</h3>
        <p className="text-gray-600">Each item is made with care and attention to detail.</p>
       </div>
      <button className="btn bg-yellow-400 font-bold">Shop Now</button>
    </div>
  </div>

  );
};

export default Hero;