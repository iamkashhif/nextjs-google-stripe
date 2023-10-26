import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-100 items-center ">
      <div className=" mt-10 text-6xl font-black gradientText">Welcome</div>

      <div className="leading-tight text-center text-8xl font-black bg-[url('https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png')] bg-clip-text text-transparent">
        Learning Diaries
      </div>

      <div className="text-center leading-tight mt-5 text-4xl font-black bg-[url('https://cdn.pixabay.com/photo/2016/05/22/20/13/background-1409125_1280.png')] bg-clip-text text-transparent">
        "Wisdom is the harvest of a lifetime of learning."
      </div>

      <div className="leading-tight	mt-5 text-center text-4xl font-black bg-[url('https://cdn.pixabay.com/photo/2017/09/07/10/09/triangle-2724449_1280.png')] bg-clip-text text-transparent">
        "Learning is the compass that guides us <br />through the map of life.""
      </div>
    </main>
  );
}

const gradient =
  "bg-gradient-to-r from-purple-500 to-yellow-500 bg-clip-text text-transparent";
