'use client'
import React, { useEffect, useRef, useState } from "react";
import  Main  from "@/components/Main";
import {Merienda, Poppins, Raleway } from "next/font/google";
import { useAuth } from "@/context/AuthContext";
import {collection, addDoc, doc, setDoc, getDoc} from "firebase/firestore"
import { db } from "@/firebase"
import Loading from "@/components/Loading";

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '700'] });


export default function Upload() {

  const { currentUser } = useAuth()
 
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [type, setType] = useState("")
  const [creationDate, setCreationDate] = useState("")
  const [isAvailableToBuy, setIsAvailableToBuy ] = useState(false)
  const [price, setPrice] = useState(0)
  const [currency, setCurrency] = useState("GEL")
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [mainFormError, setMainFormError ] = useState("")
  const fileInputRef = useRef(null);


  function handleUploadedImg(event){
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);

      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImagePreview(imageUrl)
    }
  };

  function handleClearForm() {
  setTitle("")
  setDesc("")
  setType("")
  setCreationDate("")
  setPrice(0)
  setCurrency("GEL")
  setSelectedImage(null);
  setImagePreview(null);
  fileInputRef.current.value = "";
  }

  function checkSubmitForm() {
    if(title.length < 1) return false
    if(title.length > 50) return false
    if(type == "") return false
    if(selectedImage == null) return false

    return true
  }

  async function handleSubmitForm() {
    if(!checkSubmitForm()) {
      setMainFormError("Some required fields are incomplete. Please try again.");
      return
    }
    if (!currentUser) {
      console.log("No authenticated user found.");
      return;
    }

    try {
      setIsLoading(true);
  
      const userId = currentUser.uid; 

      const counterRef = doc(db, "users", userId, "imgCollection", "counter");
      const counterSnap = await getDoc(counterRef);
  
      let newId = 1; 
  
      if (counterSnap.exists()) {
        newId = counterSnap.data().lastId + 1; 
      }
  
      
      const imageDocRef = doc(db, "users", userId, "imgCollection", newId.toString());
      const existingDocSnap = await getDoc(imageDocRef);
  
      if (existingDocSnap.exists()) {
        console.log(`Document with ID ${newId} already exists. Overwriting...`);
      } else {
        console.log(`Adding new document with ID ${newId}`);
      }
  
      
      const formData = {
        imgId: newId,
        imgInfo: {
          title,
          description: desc,
          type,
          creationDate,
          isAvailableToBuy,
          price: isAvailableToBuy ? price : null,
          currency: isAvailableToBuy ? currency : null,
          imageURL: selectedImage,
        }
      };
  
      
      await setDoc(imageDocRef, formData, { merge: true });
  
      if (!existingDocSnap.exists()) {
        await setDoc(counterRef, { lastId: newId });
      }
  
      console.log(`Successfully stored image with ID: ${newId}`, formData);
  
    handleClearForm()
    } catch(err) {
      console.error("Error adding document to Firestore:", err);
    } finally {
      setIsLoading(false)
    }
  }

  function handleClearImage() {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setImagePreview(null)
  }

  return (
      <Main>
        <div className="flex flex-col items-center py-6 pb-[150px] gap-6 text-black"> 
          <div className="flex flex-col items-center gap-4 bg-pink-300 p-4 rounded py-6 "> 
            <h2 className={`text-lg font-bold ` + poppins.className}> Share Your Creativity with the World <i className="fa-solid fa-earth-americas ml-2 "></i> </h2>
            <p className={` ` + raleway.className}> Vincent van Gogh never lived to see the immense love and recognition his art would receive. 
              Don’t keep it hidden share your creativity now </p> 
          </div> 
          {/* form */}
          <div className=" bg-white flex flex-col p-8 gap-2 rounded w-full max-w-[60%] shadow-xl rounded-2xl min-h-[600px]">
          {mainFormError? <div className="flex justify-center font-bold text-red-600 bg-red-100 border border-red-400 px-4 py-2 rounded-md">
            {mainFormError}
          </div>:""}
            <div className="flex gap-2 my-[10px] "> 
              <div className="bg-black text-white px-[8px] rounded-[62px] ">1</div>
              <div className=""> information </div>
            </div>
              <hr />
            <div className="flex flex-col gap-2 py-4 ">
              <div> 
                <h2 className="text-lg font-bold m-0 "> Title <span className="text-red-700 "> * </span> </h2>
                <p className="mt-[-5px]">1-50 characters </p>
              </div>
              <input 
              className="p-2 border-2 border-black rounded outline-indigo-600"
              placeholder="title"
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
              />
            </div>

            <div className="flex flex-col gap-2 py-4 ">
                <h2 className="text-lg font-bold m-0 "> Description </h2>
              <textarea 
              className="p-2 border-2 border-black rounded max-h-[250px] outline-indigo-600"
              placeholder="Share the story behind your piece (optional) ..."
              value={desc}
              onChange={(e)=>{
                setDesc(e.target.value)
              }}
              />
            </div> 
            
            {/* popular types selection like in espressometer and then others input */}
            <input
            className="p-2 border-2 border-black rounded outline-indigo-600" 
            placeholder="type"
            value={type}
              onChange={(e)=>{
                setType(e.target.value)
              }}
            />
            <label className="block font-semibold my-2">Date of Creation:</label>
            <input 
            className="p-2 border-2 border-black rounded outline-indigo-600"
            type="date"
            placeholder="Year of Creation"
            value={creationDate}
              onChange={(e)=>{
                setCreationDate(e.target.value)
              }}
            />
            <div className="flex gap-2 mb-[10px] mt-[20px]"> 
              <div className="bg-black text-white px-[8px] rounded-[62px] ">2</div>
              <div className=""> Pricing </div>
            </div>
            <hr />
            <div className=""> 
            <div> 
              <h2 className="text-lg font-bold py-2 "> <i className="fa-solid fa-coins text-[#F3C623] text-2xl "></i> <span className="text-red-700 "> * </span> </h2>
            </div>
            <p className="p-2 ">Available to buy?</p>
            <select className="p-2 border-2 border-black rounded" 
            onChange={(e) => {
              if (e.target.value === "available") {
                setIsAvailableToBuy(true);
              } else if (e.target.value === "unavailable") {
                setIsAvailableToBuy(false);
              }
            }}
            >
              <option value="unavailable"
              >Unavailable</option>
              <option 
              value="available"
              >Available</option>
            </select>
            </div>
            
            <div className={`flex gap-5 ${isAvailableToBuy ? "" : "opacity-25"}`}>
              <input
              className={`p-2 border-2 border-black rounded w-[85%] max-w-[85%] outline-indigo-600 + ${isAvailableToBuy?" ":" cursor-not-allowed"}`} 
              type="number"
              placeholder="Price"
              min="0" 
              step="1"
              disabled={!isAvailableToBuy}
              value={price}
              onChange={(e)=>{
                setPrice(e.target.value)
              }}
              />
              <select 
              className={`p-2 border-2 border-black rounded min-w-[5%] ${isAvailableToBuy ? "" : "cursor-not-allowed"}`}
              disabled={!isAvailableToBuy}
              value={currency}
              onChange={(e)=>{
                setCurrency(e.target.value)
              }}>
                <option value="GEL">🇬🇪 GEL</option>
                <option value="USD">🇺🇸 USD$</option>
                <option value="EUR">🇪🇺 EUR</option>
                <option value="GBP">🇬🇧 GBP£</option>
                <option value="JPY">🇯🇵 JPY¥</option>
              </select>
            </div>
            <div className="flex gap-2 mb-[10px] mt-[20px]"> 
              <div className="bg-black text-white px-[8px] rounded-[62px] ">3</div>
              <div className=""> Upload </div>
            </div>
            {/* UPLOADING IMG */}
            <label className="block font-semibold mb-2">Upload an Image:</label>
             <div className="flex border pr-2 justify-between border-gray-500 "> 
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadedImg}
                className="block p-2 rounded"
                ref={fileInputRef}
              /> 
              <button  
                onClick={handleClearImage}
                className="hover:text-red-500 text-xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              </div>
              {imagePreview && <img src={imagePreview} alt="Uploaded Preview"  className="pt-4"/>}
            {isLoading? <Loading />:(<div className="flex justify-evenly pt-[40px]"> 
              <button className="text-red-600 border-2 border-red-600 rounded p-2 px-8"
              onClick={handleClearForm}
              > 
                <i className="fa-solid fa-broom"></i>Clear </button>
              <button className="text-green-600 border-2 border-green-600 rounded p-2 px-8 "
              onClick={handleSubmitForm}>
                 Add <i className="fa-solid fa-map-pin"></i></button>
            </div>)}
          </div>
        </div>
      </Main>
    );
}