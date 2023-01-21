import Image from "next/image";

export default function MainSearch() {
  return (
    <>
      <Image
        className="search-image-background"
        src={require("@/assets/images/zomato-search-image-background.png")}
        alt={"logo"}
        width={1435}
        height={701}
      />
      <div className="search-title">
        <label className="zomato-title">zomato</label>
        <label className="zomato-description">Discover the best food & drinks in Port Blair</label>
        <input className="search-input" type={"text"} />
      </div>
    </>
  );
}
