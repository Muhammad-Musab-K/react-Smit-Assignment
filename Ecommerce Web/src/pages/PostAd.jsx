import { PhotoIcon } from '@heroicons/react/24/solid'
import { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { postingAd } from '../Firebase/Firebase'
import { useMapEvents } from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../images/marker.png';



export default function PostAd() {

    const [product, setProduct] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const [location, setLocation] = useState()


    const customIcon = new L.Icon({
        iconUrl: markerIcon,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });



    const [images, setImages] = useState();

    const handleFileChange = (e) => {
        const file = e.target.files;
        setImages(file);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((location) => {
            const { latitude, longitude } = location.coords
            setLocation({ latitude, longitude })
            console.log(location)
        })
    }, [])
    const position = [24.8256, 67.1563];

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }

    const handleUpload = () => {
        if (selectedFile) {
            console.log('Uploading file:', selectedFile);
        } else {
            console.log('No file selected.');
        }
    };

    const addAd = async () => {
        await postingAd({ product, price, description, images ,location })
        alert("Added Successfully!")
    }

    return (
        <>
            <div className="space-y-12 mx-10">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                Cover photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                multiple
                                                className="sr-only"
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Product
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setProduct(e.target.value)}
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setDescription(e.target.value)}
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <MapContainer center={position} zoom={15} style={{ height: '600px', width: '600px' }}>
                                {/* OpenStreetMap Tile Layer */}
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <LocationMarker />

                            </MapContainer>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-6 mx-10 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    onClick={addAd}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </>

    )
}