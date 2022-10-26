import Menu from "./Menu";
import png1 from "../Assets/Image/etbis.png";

export default function Footer() {
  const footerItems = [
    {
      title: "Getir'i keşfedin",
      links: [
        "Hakkımızda",
        "Kariyer",
        "Teknoloji Kariyerleri",
        "İletişim",
        "Sosyal Sorumluluk Projeleri",
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      links: [
        "Sıkça Sorulan Sorular",
        "Kişisel Verilerin Korunması",
        "Gizlilik Politikası",
        "Kullanım Koşulları",
        "Çerez Politikası",
      ],
    },
    {
      title: "İş Ortağımız Olun",
      links: [
        "Bayimiz Olun",
        "Deponuzu Kiralayın",
        "GetirYemek Restoranı Olun",
        "GetirÇarşı İşletmesi Olun",
        "Zincir Restoranlar",
      ],
    },
  ];
  return (
    <footer className="bg-white py-10">
      <div className="--container flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-9 lg:grid-rows-1 gap-4 border-b-2 border-neutral-100 pb-5">
        <div className="md:col-span-1 lg:col-span-2">
          <h6 className="text-[18px] text-getir-purple-100">
            Getir'i indirin!
          </h6>
          <div className="mt-4 flex flex-col gap-3">
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

        {footerItems.map((item, index) => (
          <Menu {...item} key={index} />
        ))}

        <div className="hidden md:col-span-1 lg:block">
          <a
            href="!#"
            className="bg-white inline-block p-4 rounded-lg about-shadow float-right"
          >
            <figure className="w-[72px] h-[84px] m-auto ">
              <img src={png1} />
            </figure>
          </a>
        </div>
      </div>
      <div className="py-5 --container flex flex-row justify-between">
        <div className="flex flex-row gap-8 items-center text-[13px]">
          <span>© 2022 Getir</span>
          <ul>
            <li className="list-disc text-getir-purple-100">
              <a href="!#">Bilgi Toplumu Hizmetleri</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row gap-3">
            <li className="group cursor-pointer">
              <div className="p-2 group-hover:bg-[#f3f0fe] transition-all rounded-md">
                <svg
                  data-testid="icon"
                  className=" group-hover:text-[#7849f7] text-[#697488]"
                  name="facebook"
                  size="20"
                  color="currentColor"
                  version="1.1"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  class="style__Icon-sc-__sc-hqksj3-1 vgDWr"
                >
                  <path
                    fill="currentcolor"
                    d="M32 16.097c0-8.838-7.163-16-16-16s-16 7.162-16 16c0 7.987 5.85 14.606 13.5 15.806v-11.181h-4.063v-4.625h4.063v-3.525c0-4.009 2.387-6.225 6.044-6.225 1.75 0 3.581 0.313 3.581 0.313v3.938h-2.019c-1.987 0-2.606 1.234-2.606 2.5v3h4.437l-0.709 4.625h-3.728v11.181c7.65-1.2 13.5-7.819 13.5-15.806z"
                    class="style__Path-sc-__sc-hqksj3-2"
                  ></path>
                </svg>
              </div>
            </li>
            <li className="group cursor-pointer">
              <div className="p-2 group-hover:bg-[#f3f0fe] transition-all rounded-md">
                <svg
                  data-testid="icon"
                  name="twitter"
                  size="20"
                  color="currentColor"
                  version="1.1"
                  className=" group-hover:text-[#7849f7] text-[#697488]"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  class="style__Icon-sc-__sc-hqksj3-1 vgDWr"
                >
                  <path
                    fill="currentcolor"
                    d="M32.062 5.334c-1.217 0.567-2.515 0.942-3.848 1.111 1.417-0.908 2.463-2.294 2.947-3.906-1.293 0.793-2.728 1.377-4.254 1.699-0.609-0.7-1.36-1.261-2.204-1.647s-1.759-0.587-2.687-0.591c-3.698 0-6.697 3.164-6.697 7.058 0 0.56 0.061 1.097 0.173 1.615-5.565-0.28-10.5-3.099-13.804-7.359-0.581 1.034-0.905 2.24-0.905 3.551 0 2.452 1.183 4.611 2.977 5.88-1.069-0.037-2.111-0.34-3.033-0.882v0.084c0 3.423 2.305 6.281 5.371 6.93-0.98 0.276-2.011 0.318-3.010 0.121 0.859 2.805 3.327 4.846 6.265 4.905-1.362 1.138-2.943 1.985-4.645 2.488s-3.489 0.652-5.251 0.438c3.033 2.062 6.615 3.166 10.283 3.171 12.325 0 19.059-10.759 19.059-20.076 0-0.303 0-0.604-0.023-0.905 1.307-0.989 2.45-2.238 3.348-3.656l-0.063-0.028z"
                    class="style__Path-sc-__sc-hqksj3-2"
                  ></path>
                </svg>
              </div>
            </li>
            <li className="group cursor-pointer">
              <div className="p-2 group-hover:bg-[#f3f0fe] transition-all rounded-md">
                <svg
                  data-testid="icon"
                  name="instagram"
                  size="20"
                  width="20"
                  height="20"
                  color="currentColor"
                  className=" group-hover:text-[#7849f7] text-[#697488]"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  class="style__Icon-sc-__sc-hqksj3-1 vgDWr"
                >
                  <path
                    fill="currentcolor"
                    d="M16 2.883c4.272 0 4.778 0.016 6.465 0.093 1.56 0.071 2.407 0.332 2.971 0.551 0.747 0.29 1.28 0.637 1.84 1.197s0.907 1.093 1.197 1.84c0.219 0.564 0.48 1.411 0.551 2.971 0.077 1.687 0.093 2.193 0.093 6.465s-0.016 4.778-0.093 6.465c-0.071 1.56-0.332 2.407-0.551 2.971-0.29 0.747-0.637 1.28-1.197 1.84s-1.093 0.907-1.84 1.197c-0.564 0.219-1.411 0.48-2.971 0.551-1.687 0.077-2.193 0.093-6.465 0.093s-4.778-0.016-6.465-0.093c-1.56-0.071-2.407-0.332-2.971-0.551-0.747-0.29-1.28-0.637-1.84-1.197s-0.907-1.093-1.197-1.84c-0.219-0.564-0.48-1.411-0.551-2.971-0.077-1.687-0.093-2.193-0.093-6.465s0.016-4.778 0.093-6.465c0.071-1.56 0.332-2.407 0.551-2.971 0.29-0.747 0.637-1.28 1.197-1.84s1.093-0.907 1.84-1.197c0.564-0.219 1.411-0.48 2.971-0.551 1.687-0.077 2.193-0.093 6.465-0.093zM16 0c-4.345 0-4.89 0.018-6.597 0.096-1.703 0.078-2.866 0.348-3.884 0.744-1.052 0.409-1.944 0.956-2.834 1.845s-1.437 1.782-1.845 2.834c-0.396 1.018-0.666 2.181-0.744 3.884-0.078 1.707-0.096 2.251-0.096 6.597s0.018 4.89 0.096 6.597c0.078 1.703 0.348 2.866 0.744 3.884 0.409 1.052 0.956 1.944 1.845 2.834s1.782 1.437 2.834 1.845c1.018 0.396 2.181 0.666 3.884 0.744 1.707 0.078 2.251 0.096 6.597 0.096s4.89-0.018 6.597-0.096c1.703-0.078 2.866-0.348 3.884-0.744 1.052-0.409 1.944-0.956 2.834-1.845s1.436-1.782 1.845-2.834c0.396-1.018 0.666-2.181 0.744-3.884 0.078-1.707 0.096-2.251 0.096-6.597s-0.018-4.89-0.096-6.597c-0.078-1.703-0.348-2.866-0.744-3.884-0.409-1.052-0.956-1.944-1.845-2.834s-1.782-1.437-2.834-1.845c-1.018-0.396-2.181-0.666-3.884-0.744-1.706-0.078-2.251-0.096-6.597-0.096zM16 7.784c-4.538 0-8.216 3.679-8.216 8.216s3.679 8.216 8.216 8.216c4.538 0 8.216-3.679 8.216-8.216s-3.679-8.216-8.216-8.216zM16 21.333c-2.946 0-5.333-2.388-5.333-5.333s2.388-5.333 5.333-5.333c2.945 0 5.333 2.388 5.333 5.333s-2.388 5.333-5.333 5.333zM26.461 7.459c0 1.060-0.86 1.92-1.92 1.92s-1.92-0.86-1.92-1.92 0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92z"
                    class="style__Path-sc-__sc-hqksj3-2"
                  ></path>
                </svg>
              </div>
            </li>
            <li className="group cursor-pointer">
              <button className="h-full flex items-center justify-center gap-2 border px-2 py-1 rounded-lg border-[#e5e7ec] text-[#697488] text-[14px] leading-4 bg-transparent group-hover:bg-getir-purple-100 group-hover:bg-opacity-10">
                <svg
                  data-testid="icon"
                  name="global"
                  size="16"
                  width="16"
                  height="16"
                  version="1.1"
                  color="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="text-[#697488] group-hover:text-getir-purple-200"
                >
                  <path
                    fill="currentcolor"
                    d="M16 0c-8.873 0-16 7.127-16 16s7.127 16 16 16c8.873 0 16-7.127 16-16s-7.127-16-16-16zM28.945 14.545h-5.818c-0.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zM20.218 14.545h-8.436c0.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zM12.655 3.345c-2.182 3.345-3.491 7.127-3.782 11.2h-5.818c0.582-5.382 4.509-9.891 9.6-11.2zM3.055 17.455h5.818c0.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-0.436 3.927-1.891 7.709-4.364 10.764zM19.345 28.655c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-0.727 5.382-4.655 9.891-9.745 11.2z"
                    className="style__Path-sc-__sc-hqksj3-2 lcjQMU"
                  ></path>
                </svg>
                <span className="group-hover:text-getir-purple-200">
                  Türkçe(TR)
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
