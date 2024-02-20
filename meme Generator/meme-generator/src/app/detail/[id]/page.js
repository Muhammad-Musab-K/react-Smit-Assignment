"use client"
import { useState, useEffect } from "react"
import { fetchingMeme } from "@/app/redux/action"
import { useDispatch, useSelector } from "react-redux"
import { newMeme } from "@/app/redux/action"
import { saveAs } from "file-saver"


function page({ params }) {


    const dispatch = useDispatch()
    const getmeme = useSelector(state => state?.memes?.meme)
    const getUrl = useSelector(state => state?.memes?.newMeme)
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    useEffect(() => {
        dispatch(fetchingMeme(params.id))
    }, [])

    const yourMeme = async () => {
        dispatch(newMeme({ id: params.id, text1, text2 }))
        console.log(text1, text2)
    }


    const handleClick = () => {
        saveAs(getUrl, "meme");
    }
    return (
        <div style={{ backgroundImage: "url(https://img.freepik.com/free-vector/abstract-halftone-wallpaper_23-2148585559.jpg?t=st=1708429349~exp=1708429949~hmac=588b8ac9d8bca5d1c467deac75d0e16998cd47e5b87d8256959bbbb3c561b440)" }}
            className=" flex justify-center items-center w-full h-screen bg-cover"
        >
            <div className=" bg-gray-700 flex gap-5 p-4">
                <div className="flex flex-col gap-2">
                    <img className="h-48 object-contain" src={getmeme?.url} alt="" />
                    {getmeme ? <> <img className="h-48 object-contain" src={getUrl} alt="" /> 
                    <button
                      className="p-2 bg-blue-600 text-white"
                     onClick={handleClick}>
                        Click to download
                    </button> </>
                        : <div>Loading....</div>}
                </div>
                <div className="flex flex-col gap-5">

                    <input
                        className="p-3 w-52 text-black"
                        type="text"
                        value={text1}
                        placeholder="Text1"
                        onChange={(e) => setText1(e.target.value)} />

                    <input
                        className="p-3 w-52 text-black"
                        type="text"
                        value={text2}
                        placeholder="Text2"
                        onChange={(e) => setText2(e.target.value)} />

                    <button
                        onClick={yourMeme}
                        className="bg-red-600 text-white p-4 active:scale-75 duration-300">
                        Generate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
