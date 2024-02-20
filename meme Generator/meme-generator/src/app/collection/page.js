"use client"
import Card from '@/components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { memes } from '../redux/action'
import { useEffect } from 'react'
import Link from 'next/link'


function page() {

    const dispatch = useDispatch()
    const data = useSelector(state => state?.memes?.memes)
    useEffect(() => {
        dispatch(memes())
    }, [])

    return (
        <>
            <div
                style={{ backgroundImage: "url(https://img.freepik.com/free-vector/flat-comics-style-background_23-2148794906.jpg?w=900&t=st=1708422390~exp=1708422990~hmac=bb4f5a7f30c00dc87c444d0c4f6c168f99cbe7a148f2ea32df052f19cb57369b)" }}
                className='fixed top-0 z-[-1] w-full h-screen bg-cover bg-no-repeat'>
            </div>
            <div className='w-full p-4 bg-yellow-400 text-red-600 text-5xl font-bold italic '>
                <h1>GENERATE YOUR OWN MEME</h1>
            </div>
            <div className='mt-10 w-full flex justify-center  flex-wrap gap-4'>
                {data?.map(meme => <Link href={`/detail/${meme.id}`}><Card key={meme.id} title={meme.name} image={meme.url} /></Link>)}
            </div>

        </>
    )
}

export default page
