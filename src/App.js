import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Html, useProgress } from "@react-three/drei";
// components
import { db } from "./firebase-config";
// styling
import "./App.css";

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

const App = () => {
  const [planets, setPlanets] = useState([]);
  const planetsCollectionRef = collection(db, "planets");

  useEffect(() => {
    const getPlanets = async () => {
      const data = await getDocs(planetsCollectionRef);
      setPlanets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPlanets();
  }, []);

  console.log(planets);
  return (
    <div className="App">
      <p>test</p>
    </div>
  );
}

export default App;
