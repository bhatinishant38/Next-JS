import Image from "next/image";
import styles from "./home.module.css";
import styles2 from "./home.module.scss";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-gray-400">Home Page</h1>

        <img width={600} height={400}  src="/mountainImage.jpg" alt="MountainImage" />
        <br />
        <Image width={600} height={400}  src="/mountainImage.jpg" quality={100} alt="image"></Image>
        <br />
        <Image width={600} height={400}  src="https://as1.ftcdn.net/v2/jpg/03/52/56/64/1000_F_352566405_yNd8g7CTRNMQFpqEraaKmXgebT1jrIDf.jpg" quality={100}alt="image" ></Image>
        
        
      </div>
    </>
  );
};

export default Home;
