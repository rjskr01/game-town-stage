import { auth, storage } from "./initFirebase";
import {getDownloadURL, ref, uploadBytes } from "firebase/storage";


const uploadImage = async (image : File | undefined) => {

    try {
        const storageRef = ref(storage,`profiles/${auth.currentUser?.uid}`);
        if(image) {
            const snapshot = await uploadBytes(storageRef, image);
            console.log("Image uploaded successfully...");
            return snapshot;
        }
        
    } catch (error) {
        console.error("Error uploading image..");
        throw error;
    }
}

const getImageUrl = async() => {
    try {
        const storageRef = ref(storage, `profiles/${auth.currentUser?.uid}`);
        const url = await getDownloadURL(storageRef);
        console.log("Image URL:", url);
        return url;
      } catch (error) {
        console.error("Error getting image URL:", error);
        throw error;
      }
}

export { uploadImage, getImageUrl };
