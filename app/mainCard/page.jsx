"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
  "/images/9.jpeg",
  "/images/10.jpeg",
  "/images/11.jpeg",
  "/images/12.jpeg",
  "/images/13.jpeg",
  "/images/14.jpeg",
  "/images/15.jpeg",
];
const Maincard = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [showFlower, setShowFlower] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const storedName = localStorage.getItem("name") || "";
    const storedGender = localStorage.getItem("gender") || "";
    setName(storedName);
    setGender(storedGender);
  }, []);

  const checkGen = () => {
    return gender === "Male" ? "Mr" : "Miss";
  };
  // --------------------------------Date and time------------------------------
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetDate = new Date(2026, 4, 5, 11, 0, 0);
  const format = (num) => String(num).padStart(2, "0");
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      // ✅ Time complete → sab 0
      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      // ✅ Days → sirf 12 AM pe change honge
      const todayMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );

      const targetMidnight = new Date(
        targetDate.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate()
      );

      const days = Math.floor(
        (targetMidnight - todayMidnight) / (1000 * 60 * 60 * 24)
      );

      // ✅ Timer
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  // ----------------flower show effect-----------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlower(true);
    }, 52000); // 35 seconds

    return () => clearTimeout(timer);
  }, []);
  // ----------------------------------------------------------------
  return (
    <div
      className="w-full bg-no-repeat bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/bg4.jpeg')",
        minHeight: "100vh",
        height: "100%",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex  items-center">
        <div>
          <Image
            src="/images/g2.png"
            alt="ganesha1"
            width={120}
            height={120} />
        </div>
        <div>
          <p className="tangerine text-amber-950 font-bold text-[2rem]">Wedding Invitation</p>
          <div className="w-50 overflow-hidden">
            <motion.p
              className="text-pink-800 whitespace-nowrap text-lg"
              initial={{ x: "100%" }}
              animate={{ x: "-230%" }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            >
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </motion.p>
          </div>
          {/* ------------------------Date and time---------------------------------------- */}
          <div className="flex flex-col justify-center items-center mt-1 -ml-10 ">
            <p className="text-[1.2rem]  text-amber-950 pacifico mb-0.5">
              {timeLeft.days} Days to Go
            </p>
            <p className="text-[1rem] shadow-lg shadow-gray-800 text-white bg-gray-950/60 px-3 rounded-2xl 
            min-w-[180px] text-center font-mono">
              {format(timeLeft.hours)} Hrs:{format(timeLeft.minutes)} Min:{format(timeLeft.seconds)} Sec
            </p>
          </div>
        </div>
      </div>
      {/* ----------------------------------Mehandi and haldi date time-------------------------------- */}
      <div className="flex justify-evenly items-center w-full mt-5">
        <div className="flex flex-col justify-center items-center">
          <p className="pacifico text-green-700">Mehandi</p>
          <Image src="/images/m1.png" alt="mehandi" width={45} height={45} />
          <p className="pacifico">8pm</p>
          <p className="pacifico">08/05/2026</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="pacifico text-amber-500">Haldi</p>
          <Image src="/images/h1.png" alt="haldi" width={50} height={50} />
          <p className="pacifico">4pm</p>
          <p className="pacifico">04/05/2026</p>
        </div>
      </div>
      {/* --------------------------------Groom and bride name with image---------------------------------- */}
      <div className="w-full flex justify-center items-center -mt-5">
        <Image src="/images/dd.png" alt="garland brid groom" width={80} height={80} />
      </div>
      <div className="w-full flex flex-col justify-center items-center ">
        <p className="tangerine text-[1.5rem] shadow-lg shadow-pink-900 text-white bg-pink-800/65 px-2 rounded-2xl ">Kuldip Weds Madhuri</p>
        <p className="pacifico text-pink-800">Wedding Date: 10/05/2026</p>
        <p className="pacifico text-pink-800">Time: 6:56pm</p>
      </div>
      {/* ------------------------------------Latter animation----------------------------------- */}
      <motion.div
        initial={{ height: 45 }}
        animate={{ height: 320 }}
        transition={{ delay: 0.8, duration: 3 }}
        className="relative flex justify-center overflow-hidden"
      >
        {/* Image Wrapper */}
        <div className="relative w-[350px] h-[315px]">
          <Image
            src="/images/latter1.png"
            alt="letter"
            fill
            className="object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 text-amber-100">
            <p className="tangerine text-[20px]">Namashkar</p>

            <p className="tangerine text-[25px]">
              {checkGen()}. {name}
            </p>

            <p className="text-[1.3rem] mt-2 w-40 tangerine">
              You are warmly invited to our wedding celebration 💍
              Please join us and bless the couple on their special day.
            </p>

            <p className="tangerine">Thank you</p>

            <p className="tangerine text-[1rem]">
              Madhuri Premsinh pawar
            </p>
          </div>
        </div>
      </motion.div>
 
      <div className="w-full flex flex-col items-center">
        <div className="relative w-[205px] h-[250px] overflow-hidden shadow-lg border-[0.5rem] border-b-gray-700">
          <Image
            src={images[current]}
            alt="carousel"
            fill
            className="object-cover transition-all duration-700"
          />
        </div>
      </div>

      <motion.div className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 3 }}>
        <div className="bg-gray-900/60 flex flex-col justify-center items-center rounded-2xl px-4">
          <p className="tangerine text-amber-50 text-[1rem]">Location</p>
          {/* <p className="text-amber-50"></p> */}
        </div>
        <div className="w-fit p-2 bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29766.28111047787!2d72.83245576117748!3d21.16094732554659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fd03eec0ec1%3A0x7a915c898d59a7d5!2sSapna%20Pan%20Center!5e0!3m2!1sen!2sin!4v1777648810124!5m2!1sen!2sin"
            width="305"
            height="120"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"

          />
        </div>
      </motion.div>
      {/* ----------------------------flower shawer----------------------------- */}
      {showFlower && (
        <DotLottieReact
          src="https://lottie.host/577a639a-d5d6-4107-9f6b-8a601b772fe5/hEXNKn4fUY.lottie"
          loop
          autoplay
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 50,
            pointerEvents: "none",
            opacity: 0.8,
          }}
        />
      )}
    </div>
  )
};

export default Maincard;