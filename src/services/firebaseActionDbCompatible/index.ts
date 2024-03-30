import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { DataPhone } from "../../interfaces";

export function getObeserver(
  model: string,
  setListModel: React.Dispatch<React.SetStateAction<DataPhone[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  const modelsCollectionRef = collection(db, "brand", model, "model");

  const unsubscribe = onSnapshot(modelsCollectionRef, (querySnapshot) => {
    const models: DataPhone[] = [];
    querySnapshot.forEach((doc) => {
      const { model, brand } = doc.data();
      models.push({ id: doc.id, brandOrModel: model, brand: brand });
    });
    setListModel(models);
    setIsLoading(false);
  });
}

export async function readDbCompatible(
  callback: React.Dispatch<React.SetStateAction<DataPhone[]>>,
  phoneBrand: string,
  phoneModel: string
) {
  const models: DataPhone[] = [];
  const modelsCollectionRef = collection(
    db,
    "compatible",
    phoneBrand,
    phoneModel
  );

  const querySnapshot = await getDocs(modelsCollectionRef);

  querySnapshot.forEach((doc) => {
    const { model, brand } = doc.data();
    models.push({ id: doc.id, brandOrModel: model, brand: brand });
  });

  callback(models);
}
