"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [userName, setUsername] = useState("")
  const [userGender, setUsergender] = useState("")
  const router = useRouter()
  const handleform = (e) => {
    e.preventDefault();
    if(!userName || !userGender){
      alert("Please Enter Your Name and Choose Gender")
      return
    }
    localStorage.setItem("name", userName);
    localStorage.setItem("gender", userGender);

    const audio = new Audio("/music/mangalashtak.mp3");
    audio.play();
    
    router.push("/mainCard");
  }
  return (
    <div className="bg-orange-50 flex flex-col items-center min-h-screen gap-2">
      <div>
        <Image src="/images/g1.png" alt="ganeshji pic" width={150} height={150}></Image>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="tangerine text-pink-700 text-[32px] font-bold">Smart Wedding Invitation</p>
        <p className="tangerine text-pink-700 text-[32px] font-bold">Kuldip Weds Madhuri  </p>
      </div>
      <div className="border-4 border-amber-950 rounded-[5px] shadow-2xl shadow-amber-950">
        <Image src="/images/7.jpeg" alt="ganeshji pic" width={240} height={160}></Image>
      </div>

      <form onSubmit={handleform}
        className="flex flex-col gap-2">
        <input
          className="border-[1.5px] border-b-amber-800"
          placeholder="Enter you name"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="flex gap-5 justify-center">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={userGender === "Male"}
              onChange={(e) => setUsergender(e.target.value)} />
            Male</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={userGender === "Female"}
              onChange={(e) => setUsergender(e.target.value)} />
            Female
          </label>
        </div>
        <button className="bg-yellow-500 rounded-2xl p-2">Open Invitation</button>
      </form>
    </div>
  )
}
