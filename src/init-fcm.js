import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: "1062881024656"
});

const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  "BD6n7ebJq...rP-ytiqlsj4AcNNeQcbes"
);

export { messaging };
