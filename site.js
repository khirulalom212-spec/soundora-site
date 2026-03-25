// আপনার গুগল অ্যাপ স্ক্রিপ্ট ইউআরএল
const scriptURL = 'https://script.google.com/macros/s/AKfycby5eppAZG-FRbzrxDiEjeTt-_RJ8pYX0Y-PXjZjvBQzMYG4loWge_737C17Md3wCmNinw/exec'; 

const form = document.getElementById('checkout-form');
const btn = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // বাটন ইনঅ্যাক্টিভ করা যাতে বারবার ক্লিক না হয়
    btn.disabled = true;
    btn.innerText = "অর্ডার প্রসেস হচ্ছে...";

    // ডাটা গুগল শিটে পাঠানো
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form),
        mode: 'no-cors' 
    })
    .then(response => {
        // যেহেতু no-cors মুড, তাই সরাসরি সাকসেস মেসেজ দেখানো হচ্ছে
        alert("ধন্যবাদ! আপনার অর্ডারটি সফলভাবে জমা হয়েছে।\nআমরা শীঘ্রই আপনার মোবাইল নম্বরে কল দেব।");
        
        // ফর্মটি খালি করে দেওয়া
        form.reset();
        
        // বাটন আবার সচল করা
        btn.disabled = false;
        btn.innerText = "অর্ডার কনফার্ম করুন";
    })
    .catch(error => {
        alert("দুঃখিত, কোনো টেকনিক্যাল সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।");
        console.error('Error!', error.message);
        btn.disabled = false;
        btn.innerText = "অর্ডার কনফার্ম করুন";
    });
});