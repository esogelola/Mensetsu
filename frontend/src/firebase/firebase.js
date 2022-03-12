import { initializeApp } from "firebase/app";

import {
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
} from "@firebase/auth";

import { config } from "./config";

class Firebase {
  constructor() {
    console.log("This ran");
    initializeApp(config);
  }

  async register(name, email, password) {
    const newUser = await signInWithEmailAndPassword(email, password);
    return updateProfile({
      displayName: name,
    });
  }

  login(email, password) {
    return signInWithEmailAndPassword(email, password);
  }
  logout() {
    return signOut();
  }

  resetPassword(email) {
    return sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
