import React from "react";
interface PropsIndice {
  index: number | null;
}
const Skeleton = ({ index }: PropsIndice) => {
  return (
    <>
      {/* <pre>{index}</pre> */}

      {Array.from({ length: index }, (_, index) => (
        <div className="border max-w-2xl  mx-auto  p-4  rounded-lg shadow-lg">
          <h1 className="font-mono text-center text-4xl animate-pulse border  bg-slate-200 mb-5 h-[20px] "></h1>
          <div className="animate-pulse border  bg-slate-200 h-[100px]">
            <p className="invisible">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias, voluptas corrupti tempora laboriosam hic voluptatum
              officia consectetur unde doloremque assumenda nemo quasi quae qui,
              consequatur dicta voluptatem. Exercitationem, sequi eos?
            </p>
          </div>
          <button className="bg-slate-200 max w-[100px] animate-pulse  p-2  rounded-md text-white mx-auto mt-4 hover:bg-slate-700">
            {/* Add */}
          </button>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
