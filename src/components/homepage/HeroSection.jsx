import image from "../../assets/fuse machines.jpeg";
const HeroSection = () => {
  return (
    <section id="home" className="bg-[#0A192F] px-6 py-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-8 py-1 text-slate-200">
          <h3 className="text-xl">
            Hello, we are <br />
            <span className="text-2xl font-bold">
              Fullstack Development Interns at
            </span>
            <br />
            <span className="text-3xl font-bold">Fuse Machines Nepal </span>
          </h3>
          <p className="text-xl text-slate-300 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            rem vel natus quasi pariatur modi dolorum tenetur nesciunt omnis,
            veniam debitis corrupti, aperiam distinctio quibusdam cumque tempora
            accusantium inventore ut. In similique dolores deserunt, iure nam
            magni a quaerat cum neque, maiores reprehenderit asperiores enim
            magnam consectetur ea error necessitatibus dolor aspernatur
            temporibus quia! Vel sint saepe impedit at quibusdam.
          </p>
          {/* buttons */}
          <button className="border-none bg-[#6F54EF] rounded-md w-fit py-2 px-2 ">
            Our Projects
          </button>
        </div>
        {/* hero-picture */}
        <figure>
          <img src={image} alt="fuse machines nepal" className="rounded-md " />
          <figcaption className="text-left italic text-xs ">
            Fuse machines Nepal
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
