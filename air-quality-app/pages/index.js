import axios from "axios";
const Home = ({ place, aq, error }) => {
  return (
    <div className="flex justify-center">
      <div className={getMainColor(aq) + " p-6 w-full md:w-[600px] h-screen"}>
        <div className="flex justify-center items-center">
          <p className="text-xl uppercase">{place}</p>
        </div>
        <div className="flex relative justify-center items-center w-full h-full">
          <div className="blur-lg">
            <div
              className={
                getSubColor(aq) +
                " w-72 h-72 rounded-full flex items-center justify-center"
              }
            >
              <div
                className={getMainColor(aq) + " w-48 h-48 rounded-full"}
              ></div>
            </div>
          </div>
          <div className="absolute text-center">
            <p className="text-8xl">{aq}</p>
            <p className="pt-4 text-sm">{getTitle(aq)}</p>
            <div className="flex justify-center my-4">
              <p className="w-2/3 text-xs">{getDescription(aq)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    const place = "tokyo";
    const res = await axios.get(
      `https://api.waqi.info/feed/${place}/?token=${process.env.API_KEY}`
    );
    const aq = res.data.data.aqi;
    return { place, aq };
  } catch (error) {
    return { error };
  }
};

function getSubColor(val) {
  if (val <= 50) {
    return "bg-green-500";
  } else if (val <= 100) {
    return "bg-yellow-500";
  } else if (val <= 150) {
    return "bg-orange-500";
  } else if (val <= 200) {
    return "bg-red-500";
  } else if (val <= 300) {
    return "bg-purple-500";
  } else {
    return "bg-pink-500";
  }
}

function getMainColor(val) {
  if (val <= 50) {
    return "bg-green-200";
  } else if (val <= 100) {
    return "bg-yellow-100";
  } else if (val <= 150) {
    return "bg-orange-200";
  } else if (val <= 200) {
    return "bg-red-200";
  } else if (val <= 300) {
    return "bg-purple-200";
  } else {
    return "bg-pink-200";
  }
}

function getTitle(val) {
  if (val <= 50) {
    return "Good";
  } else if (val <= 100) {
    return "Moderate";
  } else if (val <= 150) {
    return "Unhealthy for Sensitive Groups";
  } else if (val <= 200) {
    return "Unhealthy";
  } else if (val <= 300) {
    return "Very Unhealthy";
  } else {
    return "Hazardous";
  }
}

function getDescription(val) {
  if (val <= 50) {
    return "Air quality is considered satisfactory, and air pollution poses little or no risk";
  } else if (val <= 100) {
    return "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
  } else if (val <= 150) {
    return "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
  } else if (val <= 200) {
    return "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects";
  } else if (val <= 300) {
    return "Health warnings of emergency conditions. The entire population is more likely to be affected.";
  } else {
    return "Health alert: everyone may experience more serious health effects";
  }
}
export default Home;
