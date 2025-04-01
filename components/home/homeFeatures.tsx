export default function HomeFeatures() {
  return (
    <>
      <main>
        <div className="h-full w-full overflow-hidden">
          <section
            className="w-full h-screen overflow-hidden relative flex flex-col "
            style={{
              background: `radial-gradient(circle, ${{
                gradientColor: "black",
              }} 0%, transparent 100%)`,
            }}
          >
            <div className="absolute  inset-0 pointer-events-none z-[4] bg-[length:250px]"></div>
            <h2 className="flex justify-center items-center w-full mt-[200px] text-8xl font-bold">
              How it works
            </h2>
            <p className="flex items-center w-[800px] h-[200px] text-2xl p-10 mt-[120px] bg-papaya-whip text-barn-red rounded-r-3xl tracking-[1px] text-justify">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p className="flex items-center w-[800px] h-[200px] place-self-end text-2xl p-10 mb-[120px] bg-barn-red text-papaya-whip rounded-l-3xl tracking-[1px] text-justify">
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>
          <div className="bg-[url(.././assets/curry.jpg)] bg-fixed h-[100px]"></div>
          <section className="">
            <h2 className="relative flex justify-center items-center w-full mt-[200px] text-8xl font-bold">
              Why NextLevel Food?
            </h2>
            <p className="flex items-center w-[800px] h-[200px] text-2xl p-10 mt-[120px] bg-barn-red text-papaya-whip rounded-r-3xl tracking-[1px] text-justify">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p className="flex items-center w-[800px] h-[200px] place-self-end  text-2xl p-10 mb-[120px] bg-papaya-whip text-barn-red rounded-l-3xl tracking-[1px] text-justify">
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
