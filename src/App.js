import { Fragment, useState } from "react";
import NavBar from "./Components/NavBar";
import PhoneNavOption from "./Components/PhoneNavOption";
import HomeMain from "./Components/HomeMain";
import { ImageBackground } from "./Styles/NavBarStyle";
import FoodSelection from "./Components/FoodSelection";
import Reservations from "./Components/Reservations";
function App() {
  const [mobileView, setMobileView] = useState(false);
  return (
    <Fragment>
      <ImageBackground>
        <NavBar setMobileView={setMobileView} />
        {mobileView && <PhoneNavOption setMobileView={setMobileView} />}
        <HomeMain />
      </ImageBackground>
      <FoodSelection />
      <Reservations />
    </Fragment>
  );
}

export default App;
