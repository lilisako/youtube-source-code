import axios from "axios";
const Home = ({ data, error }) => {
  return (
    <div className="bg-hero-img">
      <div className="py-4 px-4 md:px-8 w-full border-b-4 border-black">
        <h1 className="text-2xl font-bold px-4">JessTokyo</h1>
      </div>
      <div className="py-4 px-4 md:px-8">
        <div className="flex flex-wrap w-full">
          {
            [...Array(3)].map((el, index) =>
            <div className="w-full md:w-1/3" key={index}>
              {data.slice(data.length / 3 * index, data.length / 3 * (index + 1)).map(d => (
                <div className="p-3 m-4 border-2 border-black">
                  <h2 className="pb-4 text-lg font-bold">{ d.title }</h2>
                  <p className="text-gray-500">{d.description}</p>
                  <img
                    src={d.urlToImage}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.API_KEY}`)
    const data = res.data.articles
    return { data }
  } catch(error) {
    return { error }
  }
}
export default Home;
