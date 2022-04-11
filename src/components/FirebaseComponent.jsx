import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

const FirebaseComponent = () => {
  useEffect(() => {
    const getData = async () => {
      const query = collection(db, "items");
      const response = await getDocs(query);
      console.log(response);
      const dataItems = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log(dataItems);
    };
    getData();
  }, []);

  return <div>firebase</div>;
};

export default FirebaseComponent;
