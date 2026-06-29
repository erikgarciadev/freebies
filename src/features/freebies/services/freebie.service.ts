import { db } from "@/shared/lib/firebase";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { Freebie } from "../types";

const mapFreebie = (doc: DocumentData) => {
  const { updatedAt, createdAt, ...rest } = doc.data();
  return {
    id: doc.id,
    ...rest,
  };
};

const getDataFirebase = async () => {
  try {
    const COLLECTION = "freebies";

    const q = query(collection(db, COLLECTION), where("visible", "==", true));

    const snapshot = await getDocs(q);
    let data = snapshot.docs.map(mapFreebie) as Freebie[];

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const freebieService = {
  getDataFirebase,
};

export default freebieService;
