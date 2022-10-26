export default function About() {
  return (
    <section className="pt-5 pb-16">
      <div className="--container ">
        <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5">
          <div className="col-span-1 bg-white flex flex-col justify-center items-center about-shadow py-14 px-5 rounded-lg ">
            <img
              src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
              alt=""
              className="rounded-full mb-5"
            />
            <h6 className="text-getir-purple-200 text-lg mb-3 text-center">
              Her siparişinize bir kampanya
            </h6>
            <p className="text-[#697488] text-center">
              Getir’de vereceğiniz her siparişe uygun bir kampanya
              bulabilirsiniz.
            </p>
          </div>
          <div className="col-span-1 bg-white flex flex-col justify-center items-center about-shadow py-14 px-5 rounded-lg ">
            <img
              src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
              alt=""
              className="rounded-full mb-5"
            />
            <h6 className="text-getir-purple-200 text-lg mb-3 text-center">
              Dakikalar içinde kapınızda
            </h6>
            <p className="text-[#697488] text-center">
              Getir’le siparişiniz dakikalar içinde kapınıza gelir.
            </p>
          </div>
          <div className="col-span-1 bg-white flex flex-col justify-center items-center about-shadow py-14 px-5 rounded-lg ">
            <img
              src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
              alt=""
              className="rounded-full mb-5"
            />
            <h6 className="text-getir-purple-200 text-lg mb-3 text-center">
              Binlerce çeşit mutluluk
            </h6>
            <p className="text-[#697488] text-center">
              Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
