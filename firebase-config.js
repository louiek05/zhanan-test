// Firebase 配置
const firebaseConfig = {
    apiKey: "AIzaSyBWDJ7iZXKdRdNRicGGUh4zK4RMCjWbzz8",
    authDomain: "zhanan-test.firebaseapp.com",
    databaseURL: "https://zhanan-test-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "zhanan-test",
    storageBucket: "zhanan-test.firebasestorage.app",
    messagingSenderId: "333048139377",
    appId: "1:333048139377:web:f869b7c74624f5854055d0"
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);

// 獲取數據庫引用
const database = firebase.database(); 