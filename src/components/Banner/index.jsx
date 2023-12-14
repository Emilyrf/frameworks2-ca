export default function Banner() {
  return (
    <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4 bg-base-200">
      <div className="flex items-center justify-center">
        <main className="max-w-screen-xl px-4 lg:px-16">
          <div className="text-left">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Welcome to
              <br />
              <span className="text-primary">Mercado</span>!
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Here you will find everything you need with the prices you ever wanted.
            </p>
          </div>
        </main>
      </div>
      <img className="w-full object-cover h-72 md:h-screen bg-cover bg-center" src="/assets/hero.jpeg" alt="Woman with shopping bags and celphone." />
    </div>
  );
}