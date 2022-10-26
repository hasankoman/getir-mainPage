export default function Offers() {
  return (
    <section className="py-5">
      <div className="--container ">
        <h5>Kampanyalar</h5>
        <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-3">
          <div className=" col-span-1 mt-2 cursor-pointer">
            <img
              className="rounded-lg"
              src="https://cdn.getir.com/misc/630902a564bf09d5e8abfdcf_banner_tr_1661579057685.jpeg"
            />
          </div>
          <div className="col-span-1 mt-2 cursor-pointer">
            <img
              className="rounded-lg"
              src="https://cdn.getir.com/misc/6308fa20d6e399d265f17590_banner_tr_1661533883433.jpeg"
            />
          </div>
          <div className="col-span-1 mt-2 ">
            <img
              className="rounded-lg"
              src="https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
