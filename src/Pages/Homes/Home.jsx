import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet";
const Home = () => {
      return (
            <div>
                  <Helmet>
  <title>Food Connect</title>
</Helmet>
               <Banner></Banner>
               <Services></Services>
            </div>
      );
};

export default Home;