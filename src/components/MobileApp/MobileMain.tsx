import Image from "next/image";
import React, { useRef, useState } from "react";

export default function MobileMain() {
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("Email" as string);
  const [input, setInput] = useState({
    email: "",
    phone: "",
  });

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "Email") {
      emailRef.current?.classList.remove("hidden");
      mobileRef.current?.classList.add("hidden");
    } else {
      emailRef.current?.classList.add("hidden");
      mobileRef.current?.classList.remove("hidden");
    }
    setValue(event.target.value);
  };

  const handleChangeText = (
    event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>,
  ) => {
    const name = (event.target as HTMLInputElement).name;
    setInput({ ...input, [name]: (event.target as HTMLInputElement).value });
  };

  return (
    <>
      <Image
        src={require("@/assets/images/zomato-mobile-app.png")}
        alt="zomato-mobile-app"
        width={270}
        height={330}
      />
      <div className="mobile-detail">
        <div className="mobile-title">Get the Zomato app</div>
        <div className="mobile-description">
          We will send a link, open it on your phone to download the app
        </div>
        <div className="mobile-radio-group">
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="Email"
            checked={value === "Email"}
            onChange={handleChangeRadio}
          />
          <label className="mobile-radio-title" htmlFor="html">
            Email
          </label>
          <input
            className={"demo"}
            type="radio"
            id="css"
            name="fav_language"
            value="Phone"
            checked={value === "Phone"}
            onChange={handleChangeRadio}
          />
          <label className="mobile-radio-title" htmlFor="css">
            Phone
          </label>
        </div>
        <div>
          <input
            name="email"
            ref={emailRef}
            className="mobile-input-email"
            type="email"
            placeholder="Email"
            onChange={handleChangeText}
          />
          <input
            name="phone"
            ref={mobileRef}
            className="mobile-input-email hidden"
            type="text"
            placeholder="type here..."
            onClick={handleChangeText}
          />
          <button className="mobile-click-share-link">Share App Link</button>
        </div>
        <div className="download">Download app from</div>
      </div>
    </>
  );
}
