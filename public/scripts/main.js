const quotes = document.getElementById('quotes');
const error = document.getElementById('error');

const firebaseConfig = {
  apiKey: 'AIzaSyCOSReL-Db0dpWey_LtWsjFfmmNTKDXmuE',
  authDomain: 'happy-task-50fd9.firebaseapp.com',
  projectId: 'happy-task-50fd9',
  storageBucket: 'happy-task-50fd9.appspot.com',
  messagingSenderId: '1001458767378',
  appId: '1:1001458767378:web:d9ddc447e38e5d200b6acb',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

const displayQuotes = (allQuotes) => {
  let html = '';
  for (const quote of allQuotes) {
    html += `<blockquote class="wp-block-quote">
                <p>${quote.quote}. </p><cite>${quote.character}</cite>
            </blockquote>`;
  }
  return html;
};
