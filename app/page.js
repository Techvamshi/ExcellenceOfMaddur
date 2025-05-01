import Footer from "@/components/Footer";
import HomeBody from "@/components/Home";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          marginTop: "-15px",
          zIndex: 1,
        }}
      >
        {/* Background Image */}
        <img
          src="/Vector_2.png"
          alt="Background Vector"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "900px",
            objectFit: "cover",
            zIndex: -1,
            pointerEvents: "none",
            marginTop: "-35px",
            opacity: "0.85",
          }}
        />

        {/* Page Components */}
        <Navbar />
        <HomeBody />
        <Footer />
      </div>
    </>
  );
}
