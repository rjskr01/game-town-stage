import { error } from "console";
import { getFirestore, collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";

const firestore = getFirestore();
const usersCollection = collection(firestore,"users");

const addUser = async (user: any) => {
    const documentReference = doc(usersCollection);

    setDoc(documentReference, user)
        .then(()=>{
            console.log("Document successfully written");
        })
        .catch((error)=> {
            console.log(`Error on adding user - ${error}`);
        });
}

const getUser = async (userId : string) => {
    
    try {
        const querySnapshot = await getDocs(query(usersCollection, where("uid", "==", userId)));

        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            return userData;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}

export { addUser, getUser };