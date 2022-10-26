export default function Categories() {
  const categoriesItem = [
    {
      name: "Su & İçecek",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/f66f92ea-f680-4dd4-808b-8f8a71709a86.jpeg",
    },
    {
      name: "Meyve & Sebze",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/d43a0396-b588-4666-ac43-af4b3159fee2.jpeg",
    },

    {
      name: "Fırından",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/6814548a-24f2-4ba2-9762-7ca3e96a3d40.jpeg",
    },
    {
      name: "Temel Gıda",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/4c2530e6-d2d2-4a77-96a0-917f16165f57.jpeg",
    },
    {
      name: "Atıştırmalık",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/8393d053-6478-410a-a234-d1a914185b35.jpeg",
    },
    {
      name: "Dondurma",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/0f329100-f339-4503-bf56-095ab4c11c98.jpeg",
    },
    {
      name: "Süt Ürünleri",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/afee33f9-93fe-4b87-8094-6e5c7f13c064.jpeg",
    },
    {
      name: "Kahvaltılık",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/35640646-a603-4b9a-96db-96918025fb61.jpeg",
    },
    {
      name: "Yiyecek",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/b01619f2-e12e-4777-85a2-5727abb62d51.jpeg",
    },
    {
      name: "Fit & Form",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/c594be17-998d-475e-91a5-89924798a27d.jpeg",
    },
    {
      name: "Kişisel Bakım",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/d7b76064-6334-43a4-aafe-ace887ec2da6.jpeg",
    },
    {
      name: "Ev Bakım",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/29bcb34e-ae77-46f8-b27c-d36e50275709.jpeg",
    },
    {
      name: "Ev & Yaşam",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/d737c0bd-538c-486c-9485-46aff62856d1.jpeg",
    },
    {
      name: "Teknoloji",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/d6e1fc47-6dbe-4be0-9e21-8b3a3f9cfecd.jpeg",
    },
    {
      name: "Evcil Hayvan",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/907cbf21-00b7-4f94-b257-9fd8b104cf02.jpeg",
    },
    {
      name: "Bebek",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/517efd09-95b6-466a-980e-55db579ebddc.jpeg",
    },
    {
      name: "Cinsel Sağlık",
      imgUrl:
        "https://market-product-images-cdn.getirapi.com/category/34e1cf54-bf96-498b-ba55-680b960cfcfc.jpeg",
    },
  ];
  return (
    <section className="shadow py-5">
      <div className="--container ">
        <h5 className="mb-2">Kategoriler</h5>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-2 lg:gap-3 text-[16px]">
          {categoriesItem.map((item, index) => (
            <div className="categories-item transition-all ease-in" key={index}>
              <button className="flex flex-col items-center justify-center h-full w-full group">
                <img
                  className="rounded-md h-[48px] w-[48px] img-border"
                  src={item.imgUrl}
                />
                <span className="mt-2 min-h-[32px] font-[500] group-hover:text-getir-purple-200 leading-4">
                  {item.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
