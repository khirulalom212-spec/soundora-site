// আপনার গুগল অ্যাপ স্ক্রিপ্ট ইউআরএল
const scriptURL = 'https://script.google.com/macros/s/AKfycby5eppAZG-FRbzrxDiEjeTt-_RJ8pYX0Y-PXjZjvBQzMYG4loWge_737C17Md3wCmNinw/exec';

const bdAddressData = {
  'ঢাকা': {
    districts: ['ঢাকা', 'গাজীপুর', 'নারায়ণগঞ্জ', 'নরসিংদী', 'মানিকগঞ্জ', 'মুন্সীগঞ্জ', 'ফরিদপুর', 'রাজবাড়ী', 'মাদারীপুর', 'গোপালগঞ্জ', 'শরীয়তপুর', 'কিশোরগঞ্জ', 'টাঙ্গাইল'],
    upazilas: {
      'ঢাকা': ['ধামরাই', 'দোহার', 'কেরানীগঞ্জ', 'নবাবগঞ্জ', 'সাভার'],
      'গাজীপুর': ['গাজীপুর সদর', 'কালীগঞ্জ', 'কালিয়াকৈর', 'কাপাসিয়া', 'শ্রীপুর'],
      'নারায়ণগঞ্জ': ['আড়াইহাজার', 'বন্দর', 'নারায়ণগঞ্জ সদর', 'রূপগঞ্জ', 'সোনারগাঁ'],
      'নরসিংদী': ['বেলাব', 'মনোহরদী', 'নরসিংদী সদর', 'পলাশ', 'রায়পুরা', 'শিবপুর'],
      'মানিকগঞ্জ': ['দৌলতপুর', 'ঘিওর', 'হরিরামপুর', 'মানিকগঞ্জ সদর', 'সাটুরিয়া', 'শিবালয়', 'সিংগাইর'],
      'মুন্সীগঞ্জ': ['গজারিয়া', 'লৌহজং', 'মুন্সীগঞ্জ সদর', 'শ্রীনগর', 'সিরাজদিখান', 'টঙ্গীবাড়ি'],
      'ফরিদপুর': ['আলফাডাঙ্গা', 'ভাঙ্গা', 'বোয়ালমারী', 'চরভদ্রাসন', 'ফরিদপুর সদর', 'মধুখালী', 'নগরকান্দা', 'সদরপুর', 'সালথা'],
      'রাজবাড়ী': ['বালিয়াকান্দি', 'গোয়ালন্দ', 'পাংশা', 'রাজবাড়ী সদর', 'কালুখালী'],
      'মাদারীপুর': ['কালকিনি', 'মাদারীপুর সদর', 'রাজৈর', 'শিবচর', 'ডাসার'],
      'গোপালগঞ্জ': ['গোপালগঞ্জ সদর', 'কাশিয়ানী', 'কোটালীপাড়া', 'মুকসুদপুর', 'টুঙ্গিপাড়া'],
      'শরীয়তপুর': ['ভেদরগঞ্জ', 'ডামুড্যা', 'গোসাইরহাট', 'নড়িয়া', 'শরীয়তপুর সদর', 'জাজিরা'],
      'কিশোরগঞ্জ': ['অষ্টগ্রাম', 'বাজিতপুর', 'ভৈরব', 'হোসেনপুর', 'ইটনা', 'করিমগঞ্জ', 'কটিয়াদি', 'কিশোরগঞ্জ সদর', 'কুলিয়ারচর', 'মিঠামইন', 'নিকলী', 'পাকুন্দিয়া', 'তাড়াইল'],
      'টাঙ্গাইল': ['বাসাইল', 'ভুয়াপুর', 'দেলদুয়ার', 'ঘাটাইল', 'গোপালপুর', 'কালিহাতী', 'মধুপুর', 'মির্জাপুর', 'নাগরপুর', 'সখীপুর', 'টাঙ্গাইল সদর', 'ধনবাড়ী']
    }
  },
  'চট্টগ্রাম': {
    districts: ['চট্টগ্রাম', 'কুমিল্লা', 'কক্সবাজার', 'ব্রাহ্মণবাড়িয়া', 'চাঁদপুর', 'ফেনী', 'লক্ষ্মীপুর', 'নোয়াখালী', 'খাগড়াছড়ি', 'রাঙ্গামাটি', 'বান্দরবান'],
    upazilas: {
      'চট্গ্রাম': ['আনোয়ারা', 'বাঁশখালী', 'বোয়ালখালী', 'চন্দনাইশ', 'ফটিকছড়ি', 'হাটহাজারী', 'লোহাগাড়া', 'মিরসরাই', 'পটিয়া', 'রাঙ্গুনিয়া', 'রাউজান', 'সন্দ্বীপ', 'সাতকানিয়া', 'সীতাকুণ্ড'],
      'কুমিল্লা': ['বরুড়া', 'ব্রাহ্মণপাড়া', 'বুড়িচং', 'চান্দিনা', 'চৌদ্দগ্রাম', 'দাউদকান্দি', 'দেবিদ্বার', 'হোমনা', 'লাকসাম', 'মনোহরগঞ্জ', 'মেঘনা', 'মুরাদনগর', 'নাঙ্গলকোট', 'সদর', 'সদর দক্ষিণ', 'তিতাস'],
      'কক্সবাজার': ['চকরিয়া', 'কক্সবাজার সদর', 'কুতুবদিয়া', 'মহেশখালী', 'পেকুয়া', 'রামু', 'টেকনাফ', 'উখিয়া'],
      'ব্রাহ্মণবাড়িয়া': ['আখাউড়া', 'বাঞ্ছারামপুর', 'ব্রাহ্মণবাড়িয়া সদর', 'কসবা', 'নবীনগর', 'নাসিরনগর', 'সরাইল', 'আশুগঞ্জ', 'বিজয়নগর'],
      'চাঁদপুর': ['চাঁদপুর সদর', 'ফরিদগঞ্জ', 'হাইমচর', 'হাজীগঞ্জ', 'কচুয়া', 'মতলব দক্ষিণ', 'মতলব উত্তর', 'শাহরাস্তি'],
      'ফেনী': ['ছাগলনাইয়া', 'দাগনভূঞা', 'ফেনী সদর', 'পরশুরাম', 'সোনাগাজী', 'ফুলগাজী'],
      'লক্ষ্মীপুর': ['কমলনগর', 'লক্ষ্মীপুর সদর', 'রামগঞ্জ', 'রামগতি', 'রায়পুর'],
      'নোয়াখালী': ['বেগমগঞ্জ', 'চাটখিল', 'কোম্পানীগঞ্জ', 'হাতিয়া', 'কবিরহাট', 'সেনবাগ', 'সুবর্ণচর', 'সোনাইমুড়ী', 'নোয়াখালী সদর'],
      'খাগড়াছড়ি': ['দিঘীনালা', 'খাগড়াছড়ি সদর', 'লক্ষ্মীছড়ি', 'মহালছড়ি', 'মানিকছড়ি', 'মাটিরাঙ্গা', 'পানছড়ি', 'রামগড়', 'গুইমারা'],
      'রাঙ্গামাটি': ['বাঘাইছড়ি', 'বরকল', 'বিলাইছড়ি', 'জুরাছড়ি', 'কাপ্তাই', 'কাউখালী', 'লংগদু', 'নানিয়ারচর', 'রাজস্থলী', 'রাঙ্গামাটি সদর'],
      'বান্দরবান': ['আলীকদম', 'বান্দরবান সদর', 'লামা', 'নাইক্ষ্যংছড়ি', 'রোয়াংছড়ি', 'রুমা', 'থানচি']
    }
  },
  'রাজশাহী': {
    districts: ['রাজশাহী', 'নাটোর', 'নওগাঁ', 'চাঁপাইনবাবগঞ্জ', 'পাবনা', 'সিরাজগঞ্জ', 'বগুড়া', 'জয়পুরহাট'],
    upazilas: {}
  },
  'খুলনা': {
    districts: ['খুলনা', 'বাগেরহাট', 'সাতক্ষীরা', 'যশোর', 'নড়াইল', 'মাগুরা', 'কুষ্টিয়া', 'চুয়াডাঙ্গা', 'মেহেরপুর', 'ঝিনাইদহ'],
    upazilas: {}
  },
  'বরিশাল': {
    districts: ['বরিশাল', 'ভোলা', 'পটুয়াখালী', 'পিরোজপুর', 'ঝালকাঠি', 'বরগুনা'],
    upazilas: {}
  },
  'সিলেট': {
    districts: ['সিলেট', 'মৌলভীবাজার', 'হবিগঞ্জ', 'সুনামগঞ্জ'],
    upazilas: {
      'সিলেট': ['সিলেট সদর', 'বালাগঞ্জ', 'বিশ্বনাথ', 'কোম্পানীগঞ্জ', 'ফেঞ্চুগঞ্জ', 'গোলাপগঞ্জ', 'গোয়াইনঘাট', 'জৈন্তাপুর', 'কানাইঘাট', 'জকিগঞ্জ', 'বিয়ানীবাজার', 'দক্ষিণ সুরমা', 'ওসমানীনগর'],
      'মৌলভীবাজার': ['মৌলভীবাজার সদর', 'বড়লেখা', 'জুড়ী', 'কুলাউড়া', 'কমলগঞ্জ', 'রাজনগর', 'শ্রীমঙ্গল'],
      'হবিগঞ্জ': ['হবিগঞ্জ সদর', 'আজমিরীগঞ্জ', 'বানিয়াচং', 'চুনারুঘাট', 'মাধবপুর', 'লাখাই', 'নবীগঞ্জ', 'বাহুবল', 'শায়েস্তাগঞ্জ'],
      'সুনামগঞ্জ': ['সুনামগঞ্জ সদর', 'ছাতক', 'দিরাই', 'ধর্মপাশা', 'দোয়ারাবাজার', 'জগন্নাথপুর', 'জামালগঞ্জ', 'শাল্লা', 'তাহিরপুর', 'দক্ষিণ সুনামগঞ্জ', 'বিশ্বম্ভরপুর', 'মধ্যনগর']
    }
  },
  'রংপুর': {
    districts: ['রংপুর', 'দিনাজপুর', 'কুড়িগ্রাম', 'গাইবান্ধা', 'নীলফামারী', 'পঞ্চগড়', 'ঠাকুরগাঁও', 'লালমনিরহাট'],
    upazilas: {}
  },
  'ময়মনসিংহ': {
    districts: ['ময়মনসিংহ', 'জামালপুর', 'শেরপুর', 'নেত্রকোনা'],
    upazilas: {}
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('checkout-form');
  const btn = document.getElementById('submit-btn');
  const divisionSelect = document.getElementById('division');
  const districtSelect = document.getElementById('district');
  const upazilaSelect = document.getElementById('upazila');

  // যদি index page না হয়, তাহলে এই script আর run করবে না
  if (!form || !btn || !divisionSelect || !districtSelect || !upazilaSelect) return;

  function fillSelect(selectEl, options, placeholder) {
    selectEl.innerHTML = '';

    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = placeholder;
    selectEl.appendChild(defaultOpt);

    options.forEach((item) => {
      const option = document.createElement('option');
      option.value = item;
      option.textContent = item;
      selectEl.appendChild(option);
    });
  }

  function initDivisionSelect() {
    const divisions = Object.keys(bdAddressData);
    fillSelect(divisionSelect, divisions, 'বিভাগ পছন্দ করুন');
  }

  divisionSelect.addEventListener('change', () => {
    const selectedDivision = divisionSelect.value;

    if (!selectedDivision) {
      districtSelect.disabled = true;
      upazilaSelect.disabled = true;
      fillSelect(districtSelect, [], 'আগে বিভাগ নির্বাচন করুন');
      fillSelect(upazilaSelect, [], 'আগে জেলা নির্বাচন করুন');
      return;
    }

    const districts = bdAddressData[selectedDivision].districts || [];
    fillSelect(districtSelect, districts, 'জেলা পছন্দ করুন');
    districtSelect.disabled = false;

    fillSelect(upazilaSelect, [], 'আগে জেলা নির্বাচন করুন');
    upazilaSelect.disabled = true;
  });

  districtSelect.addEventListener('change', () => {
    const selectedDivision = divisionSelect.value;
    const selectedDistrict = districtSelect.value;

    if (!selectedDivision || !selectedDistrict) {
      fillSelect(upazilaSelect, [], 'আগে জেলা নির্বাচন করুন');
      upazilaSelect.disabled = true;
      return;
    }

    const mappedUpazilas = (bdAddressData[selectedDivision].upazilas || {})[selectedDistrict] || ['সদর'];
    fillSelect(upazilaSelect, mappedUpazilas, 'উপজেলা পছন্দ করুন');
    upazilaSelect.disabled = false;
  });

  initDivisionSelect();

  form.addEventListener('submit', (e) => {
  e.preventDefault();

  btn.disabled = true;
  btn.innerText = 'অর্ডার প্রসেস হচ্ছে...';

  const selectedQuantity = Number.parseInt(form.elements.quantity.value, 10);

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors'
  })
  .then(() => {
    const orderSummary = {
      name: form.elements.name.value.trim(),
      phone: form.elements.phone.value.trim(),
      division: form.elements.division.value,
      district: form.elements.district.value,
      upazila: form.elements.upazila.value,
      address: form.elements.address.value.trim(),
      quantity: Number.isNaN(selectedQuantity) ? 1 : Math.max(1, Math.min(5, selectedQuantity)),
    };

    localStorage.setItem('soundoraOrderSummary', JSON.stringify(orderSummary));
    window.location.href = 'order-summary.html';
  })
  .catch((error) => {
    alert('দুঃখিত, কোনো টেকনিক্যাল সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।');
    console.error('Error!', error.message);
    btn.disabled = false;
    btn.innerText = 'অর্ডার কনফার্ম করুন';
  });
});
