import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, setDoc, getDoc, doc } from 'firebase/firestore';






const firebaseConfig = {
    apiKey: "AIzaSyCDsw4bInfKQjLE1cAUcxOIDegZ2CA7ofo",
    authDomain: "e-commerce-c3aa1.firebaseapp.com",
    projectId: "e-commerce-c3aa1",
    storageBucket: "e-commerce-c3aa1.appspot.com",
    messagingSenderId: "364514558945",
    appId: "1:364514558945:web:c2d2acf3e85dc4e251c8a0",
    measurementId: "G-1DBBTK63LW"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage();


export const register = async (userInfo) => {
    const { email, password, number } = userInfo
    const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
    alert("Succesfully Registered!")

}


export const login = async (userInfo) => {

    const { email, password } = userInfo
    await signInWithEmailAndPassword(auth, email, password)
    alert("successfully login!")

}


  export  async function postingAd(ad) {
    const storageRef = ref(storage, `ads/${ad.image.name}`);
  
    await uploadBytes(storageRef, ad.image)
    const url = await getDownloadURL(storageRef)
  
    ad.image = url
  
    await addDoc(collection(db, "ads"), ad)
    alert('Data added successfully!')
  
  }


  // get ads from database,firestore
 export async function getData() {

    const querySnapshot = await getDocs(collection(db, "ads"));
    const ads = []
    querySnapshot.forEach((doc) => {
      const ad = { id: doc.id, ...doc.data() }
      ads.push(ad)
  
    });
  
    return ads
  }