import png1 from "../Assets/Image/phoneLanding.png";

export default function GetirDownload() {
  return (
    <section className="py-4 ">
      <div className="--container download-section rounded-lg">
        <div className="w-full h-[288px] relative flex items-center">
          <div className="absolute left-[15px] md:left-[45px] text-white flex flex-col gap-4">
            <h6 className="font-[700] text-3xl ">Getir'i indirin!</h6>
            <p>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
            <div className="mt-1 flex flex-col gap-1 lg:flex-row">
              <button>
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </button>
              <button>
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </button>
              <button>
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </button>
            </div>
          </div>
          <img
            className="rounded-lg absolute bottom-0 right-0 h-[60%] md:h-[70%] lg:h-[80%] lg:w-2/5"
            src={png1}
          />
        </div>
      </div>
    </section>
  );
}
