import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import { url } from "../api/url";

const DetailUMKM = () => {
  const kodeParams = useRef();
  kodeParams.current = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    console.log(kodeParams.current);
    const getDetail = async () => {
      try {
        const { data } = await url.get(`umkm/${kodeParams.current.id}`);
        setDetail(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDetail();
  }, []);
  return (
    <>
      <Navbar />
      <section
        id="list UMKM"
        className="w-full min-h-screen bg-primary font-poppins"
      >
        <div className="w-full h-[500px]">
          <img
            src={detail.gambar}
            alt=""
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="w-5/6 py-16 mx-auto">
          <div className="text-secondary flex flex-col gap-4">
            <h1 className="font-semibold text-[44px]">{detail.nama}</h1>
            <h2 className="text-[26px]">Alamat : {detail.alamat}</h2>
            <h2 className="text-[26px]">Kontak : {detail.kontak}</h2>
            <hr />
            <p className="text-[22px] text-justify indent-16">{detail.deskripsi}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailUMKM;
