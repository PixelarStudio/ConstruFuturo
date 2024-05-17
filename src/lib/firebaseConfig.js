// src/lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {getFirestore,  } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };


async function fetchServicios(db) {
    const serviciosSnapshot = await getDocs(collection(db, "Servicios"));
    return serviciosSnapshot.docs.map((doc) => doc.data());
  }

  const servicios = await fetchServicios();
