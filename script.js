// Firebase Konfiguration (ersetze mit deinen Daten!)
const firebaseConfig = {
    apiKey: "DEIN_API_KEY",
    authDomain: "DEIN_PROJEKT.firebaseapp.com",
    projectId: "DEIN_PROJEKT_ID",
    storageBucket: "DEIN_PROJEKT.appspot.com",
    messagingSenderId: "DEINE_SENDER_ID",
    appId: "DEINE_APP_ID"
};

// Firebase initialisieren
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Daten aus Firestore abrufen
db.collection("users").doc("user1").get()
  .then((doc) => {
      if (doc.exists) {
          document.getElementById("output").innerHTML = `
              <p><strong>Name:</strong> ${doc.data().name}</p>
              <p><strong>Telefon:</strong> ${doc.data().phone}</p>
              <p><strong>Email:</strong> ${doc.data().email}</p>
          `;
      } else {
          document.getElementById("output").innerHTML = "Benutzer nicht gefunden.";
      }
  })
  .catch((error) => {
      document.getElementById("output").innerHTML = "Fehler: " + error;
  });
