import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword  , signOut ,updatePassword  ,sendEmailVerification  } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, setDoc, getDoc, doc } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyC69kQc49aWKEAUvxHpUo3AYHuMp6jghz0",
  authDomain: "ecommerce-899ad.firebaseapp.com",
  projectId: "ecommerce-899ad",
  storageBucket: "ecommerce-899ad.appspot.com",
  messagingSenderId: "105773076101",
  appId: "1:105773076101:web:555a8ef99fd3cebcb4a3ec",
  measurementId: "G-E6YME5VW56"
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


  // export  async function postingAd(ad) {
  //   for(i = 0;i<ad.image.length;i++){
  //     const storageRef = ref(storage, `ads/${ad.image[i].name}`);
  
  //     await uploadBytes(storageRef, ad.image[i])
  //   }
    
  //   const url = await getDownloadURL(storageRef)
  
  //   ad.image = url
  
  //   await addDoc(collection(db, "ads"), ad)
  //   alert('Data added successfully!')
  
  // }

  export async function postingAd(ad) {
    const imageUrls = [];

    // Upload each image to Firebase Storage
    for (const image of ad.images) {
        const storageRef = ref(storage, `ads/${image.name}`);
        await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(storageRef);
        imageUrls.push(imageUrl); // Store the URL of each image
    }

    ad.images = imageUrls;

    await addDoc(collection(db, "ads"), ad);

    alert('Data added successfully!');
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