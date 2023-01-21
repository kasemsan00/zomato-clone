import MenuItem from "@/components/Menu/MenuItem";
import GetAppItem from "@/components/Menu/GetAppItem";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menuLeft">
        <GetAppItem />
      </div>
      <div className="menuRight">
        <MenuItem title={"Investor Relations"} />
        <MenuItem title={"Add restaurant"} />
        <MenuItem title={"Log in"} />
        <MenuItem title={"Sign up"} />
      </div>
    </div>
  );
}
