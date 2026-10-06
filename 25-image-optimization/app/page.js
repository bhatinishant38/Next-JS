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
        <Image width={600} height={400}  src="/mountainImage.jpg" quality={100}></Image>
        
        
      </div>
    </>
  );
};

export default Home;
