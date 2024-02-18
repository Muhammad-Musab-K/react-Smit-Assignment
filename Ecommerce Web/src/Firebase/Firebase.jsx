import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword  , signOut ,updatePassword  ,sendEmailVerification  } from "firebase/auth";
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

  export {auth}

  // singOut

  export const signout = ()=>{
    signOut(auth).then(() => {
       alert("signOut Successfully")
    }).catch((error) => {
      console.log(error)
    })
  }
  


  //forgot password
  export const forgotPassword =()=>{
    updatePassword(user, newPassword).then(() => {
      alert("something is wrong")
    }).catch((error) => {
      alert("passowrd changed successfully")
    });
  }
  


  //FIREBASE AUTHNETICATION ,, OnAuthStateChanged

  //first onstatechanged ka function firebase se lgao
  //second phr login or logout wala scene bnao
  //third phr login or logout pr jo jo pages dikhane ho wha jaoo

  //  third wale ka code me yaha likh rha hoon


  // useEffect(()=>{
  //   onAuthStateChanged(auth , (user)=>{
  //     setUser(user)
  //     setLoading(false)
  //   })
  // } , [])

  // useEffect(()=>{
  //   const path = window.location.pathname
  //   if(user){
  //     if(path === '/register' || path === '/login'){
  //       Navigate("/")
  //     }
  //     else{
  //       if(path === '/' || or jo jo pages add krne hen krdo){
  //         Navigate('/')
  //       }
  //     }
  //   }  

  // },[window.location.pathname , user])