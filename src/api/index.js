import { getApps, getApp,initializeApp } from "firebase/app";
import { getFirestore , collection , addDoc, setDoc ,getDocs,doc ,deleteDoc, orderBy ,query } from "firebase/firestore";
import "firebase/auth";
import products from "../json/products.json";
//import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID
}
const app_length = getApps().length > 0;
const app = app_length ? getApp() : initializeApp(firebaseConfig);


const db = getFirestore(app);
// REFERENCE COLLECTION

const productsCollection = collection(db, "products");
const q =  query(productsCollection,orderBy('name', 'asc'))
// export const getProductById = async(id)=>{
//     const docRef = await doc(db,"products",id);
//     const docSnap = await getDoc(docRef);
//     return docSnap.data();
// };

export const feedProducts = async () => {
    //DELETE ALL EXISTING DOCS
    const querySnapshot = await getDocs(productsCollection);
    querySnapshot.forEach(async (product) => {
        await deleteDoc(doc(db, "products", product.id));
    });
    //ADD NEW DOCS
    products.forEach(async (product) => {
        const docRef = await doc(productsCollection);
        await setDoc(docRef, { ...product, id: docRef.id });
        
    });
};
// products.forEach(async (doc) => {
//     await addDoc(productsCollection, doc);
// })

export const getProducts = async()=>{
    const querySnapshot = await getDocs(q);
    //convert thr query to a json array.
    let result = [];
    querySnapshot.forEach(async(product)=>{
        await result.push(product.data());
    });
    return result;
}

// export const authenticateAnonymously = () => {
//     return firebase.auth().signInAnonymously();
//   };