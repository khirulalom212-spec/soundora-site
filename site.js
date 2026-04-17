// আপনার গুগল অ্যাপ স্ক্রিপ্ট ইউআরএল
const scriptURL = 'https://script.google.com/macros/s/AKfycbywyjWuqh63AVAbn6rNGXRR_X3hPeOhSWTRZqYOafp6eBn2AklERjyYYydCJv0t18UKDg/exec';

const bdAddressData = {
  'ঢাকা': {
    districts: ['ঢাকা', 'গাজীপুর', 'নারায়ণগঞ্জ', 'নরসিংদী', 'মানিকগঞ্জ', 'মুন্সীগঞ্জ', 'ফরিদপুর', 'রাজবাড়ী', 'মাদারীপুর', 'গোপালগঞ্জ', 'শরীয়তপুর', 'কিশোরগঞ্জ', 'টাঙ্গাইল'],
    upazilas: {
      'ঢাকা': ['ধামরাই', 'দোহার', 'কেরানীগঞ্জ', 'সাভার', 'মতিঝিল', 'রামপুরা', 'ডেমরা', 'গুলশান', 'বনানী', 'ধানমন্ডি', 'মিরপুর', 'কোতয়ালী', 'মোহাম্মদপুর', 'শ্যামপুর', 'সেগুনবাগিচা', 'হাতিরঝিল', 'দক্ষিণ খান', 'উত্তর খান'],
      'গাজীপুর': ['গাজীপুর সদর', 'কালিয়াকৈর', 'কাপাসিয়া', 'শ্রীনগর', 'নবাবগন্জ', 'শ্রীপুর', 'টঙ্গী'],
      'নারায়ণগঞ্জ': ['আড়াইহাজার', 'নারায়ণগঞ্জ সদর', 'রূপগঞ্জ', 'কালিপুর', 'ফতুল্লা', 'সিদ্বিরগন্জ', 'পাটেরথানা', 'চকবাজার'],
      'নরসিংদী': ['মনোহরদী', 'নরসিংদী সদর', 'পলাশ', 'রায়পুরা', 'শিবপুর'],
      'মানিকগঞ্জ': ['দৌলতদিয়া', 'মানিকগঞ্জ সদর', 'সাতদল', 'ধনবাড়ী', 'সিংগাইর'],
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
    upazilas: {
      'রাজশাহী': ['পবা', 'দুর্গাপুর', 'মোহনপুর', 'চারঘাট', 'পুঠিয়া', 'বাঘা', 'গোদাগাড়ী', 'তানোর', 'বাগমারা'],
      'নাটোর': ['নাটোর সদর', 'সিংড়া', 'বড়াইগ্রাম', 'লালপুর', 'গুরুদাসপুর', 'বাগাতিপাড়া', 'নলডাঙ্গা'],
      'নওগাঁ': ['নওগাঁ সদর', 'আত্রাই', 'রানীনগর', 'মহাদেবপুর', 'পত্নীতলা', 'ধামইরহাট', 'সাপাহার', 'পোরশা', 'মান্দা', 'বদলগাছী', 'নিয়ামতপুর'],
      'চাঁপাইনবাবগঞ্জ': ['চাঁপাইনবাবগঞ্জ সদর', 'শিবগঞ্জ', 'গোমস্তাপুর', 'নাচোল', 'ভোলাহাট'],
      'পাবনা': ['পাবনা সদর', 'ঈশ্বরদী', 'ভাঙ্গুড়া', 'চাটমোহর', 'সাঁথিয়া', 'সুজানগর', 'বেড়া', 'আটঘরিয়া', 'ফরিদপুর'],
      'সিরাজগঞ্জ': ['সিরাজগঞ্জ সদর', 'বেলকুচি', 'চৌহালী', 'কামারখন্দ', 'কাজীপুর', 'রায়গঞ্জ', 'শাহজাদপুর', 'তাড়াশ', 'উল্লাপাড়া'],
      'বগুড়া': ['বগুড়া সদর', 'শেরপুর', 'ধুনট', 'গাবতলী', 'শাজাহানপুর', 'কাহালু', 'নন্দীগ্রাম', 'সারিয়াকান্দি', 'সোনাতলা', 'শিবগঞ্জ', 'আদমদীঘি', 'দুপচাঁচিয়া'],
      'জয়পুরহাট': ['জয়পুরহাট সদর', 'পাঁচবিবি', 'আক্কেলপুর', 'ক্ষেতলাল', 'কালাই']
    }
  },
  'খুলনা': {
    districts: ['খুলনা', 'বাগেরহাট', 'সাতক্ষীরা', 'যশোর', 'নড়াইল', 'মাগুরা', 'কুষ্টিয়া', 'চুয়াডাঙ্গা', 'মেহেরপুর', 'ঝিনাইদহ'],
    upazilas: {
      'খুলনা': ['কয়রা', 'ডুমুরিয়া', 'তেরখাদা', 'দাকোপ', 'দিঘলিয়া', 'পাইকগাছা', 'ফুলতলা', 'বটিয়াঘাটা', 'রূপসা'],
      'বাগেরহাট': ['বাগেরহাট সদর', 'চিতলমারী', 'ফকিরহাট', 'কচুয়া', 'মোল্লাহাট', 'মোংলা', 'মোড়েলগঞ্জ', 'রামপাল', 'শরণখোলা'],
      'সাতক্ষীরা': ['সাতক্ষীরা সদর', 'আশাশুনি', 'কলারোয়া', 'কালিগঞ্জ', 'দেবহাটা', 'শ্যামনগর', 'তালা'],
      'যশোর': ['যশোর সদর', 'অভয়নগর', 'কেশবপুর', 'চৌগাছা', 'ঝিকরগাছা', 'বাঘেরপাড়া', 'মণিরামপুর', 'শার্শা'],
      'নড়াইল': ['নড়াইল সদর', 'লোহাগড়া', 'কালিয়া'],
      'মাগুরা': ['মাগুরা সদর', 'শ্রীপুর', 'শালিখা', 'মোহাম্মদপুর'],
      'কুষ্টিয়া': ['কুষ্টিয়া সদর', 'কুমারখালী', 'খোকসা', 'মিরপুর', 'ভেড়ামারা', 'দৌলতপুর'],
      'চুয়াডাঙ্গা': ['চুয়াডাঙ্গা সদর', 'আলমডাঙ্গা', 'দামুড়হুদা', 'জীবননগর'],
      'মেহেরপুর': ['মেহেরপুর সদর', 'গাংনী', 'মুজিবনগর'],
      'ঝিনাইদহ': ['ঝিনাইদহ সদর', 'শৈলকুপা', 'হরিণাকুণ্ডু', 'কালীগঞ্জ', 'কোটচাঁদপুর', 'মহেশপুর']
    }
  },
  'বরিশাল': {
    districts: ['বরিশাল', 'ভোলা', 'পটুয়াখালী', 'পিরোজপুর', 'ঝালকাঠি', 'বরগুনা'],
    upazilas: {
      'বরিশাল': ['বরিশাল সদর', 'বাকেরগঞ্জ', 'বাবুগঞ্জ', 'উজিরপুর', 'বানারীপাড়া', 'গৌরনদী', 'আগৈলঝাড়া', 'মেহেন্দীগঞ্জ', 'মুলাদী', 'হিজলা'],
      'ভোলা': ['ভোলা সদর', 'বোরহানউদ্দিন', 'দৌলতখান', 'লালমোহন', 'তজুমদ্দিন', 'চরফ্যাশন', 'মনপুরা'],
      'পটুয়াখালী': ['পটুয়াখালী সদর', 'বাউফল', 'দশমিনা', 'গলাচিপা', 'কলাপাড়া', 'মির্জাগঞ্জ', 'দুমকী', 'রাঙ্গাবালী'],
      'পিরোজপুর': ['পিরোজপুর সদর', 'নাজিরপুর', 'নেছারাবাদ', 'কাউখালী', 'ভাণ্ডারিয়া', 'মঠবাড়িয়া', 'ইন্দুরকানী'],
      'ঝালকাঠি': ['ঝালকাঠি সদর', 'নলছিটি', 'রাজাপুর', 'কাঠালিয়া'],
      'বরগুনা': ['বরগুনা সদর', 'আমতলী', 'তালতলী', 'বেতাগী', 'বামনা', 'পাথরঘাটা']
    }
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
    upazilas: {
      'রংপুর': ['রংপুর সদর', 'গঙ্গাচড়া', 'তারাগঞ্জ', 'বদরগঞ্জ', 'মিঠাপুকুর', 'পীরগাছা', 'কাউনিয়া', 'পীরগঞ্জ'],
      'দিনাজপুর': ['দিনাজপুর সদর', 'বিরামপুর', 'বীরগঞ্জ', 'বোচাগঞ্জ', 'ফুলবাড়ী', 'চিরিরবন্দর', 'ঘোড়াঘাট', 'হাকিমপুর', 'কাহারোল', 'খানসামা', 'নবাবগঞ্জ', 'পার্বতীপুর', 'বিরল'],
      'কুড়িগ্রাম': ['কুড়িগ্রাম সদর', 'নাগেশ্বরী', 'ভুরুঙ্গামারী', 'ফুলবাড়ী', 'রাজারহাট', 'উলিপুর', 'চিলমারী', 'রৌমারী', 'চর রাজিবপুর'],
      'গাইবান্ধা': ['গাইবান্ধা সদর', 'সাদুল্লাপুর', 'ফুলছড়ি', 'সাঘাটা', 'সুন্দরগঞ্জ', 'পলাশবাড়ী', 'গোবিন্দগঞ্জ'],
      'নীলফামারী': ['নীলফামারী সদর', 'সৈয়দপুর', 'জলঢাকা', 'কিশোরগঞ্জ', 'ডোমার', 'ডিমলা'],
      'পঞ্চগড়': ['পঞ্চগড় সদর', 'তেঁতুলিয়া', 'দেবীগঞ্জ', 'আটোয়ারী', 'বোদা'],
      'ঠাকুরগাঁও': ['ঠাকুরগাঁও সদর', 'পীরগঞ্জ', 'রানিশংকৈল', 'বালিয়াডাঙ্গী', 'হরিপুর'],
      'লালমনিরহাট': ['লালমনিরহাট সদর', 'কালীগঞ্জ', 'আদিতমারী', 'হাতীবান্ধা', 'পাটগ্রাম']
    }
  },
  'ময়মনসিংহ': {
    districts: ['ময়মনসিংহ', 'জামালপুর', 'শেরপুর', 'নেত্রকোনা'],
    upazilas: {
      'ময়মনসিংহ': ['ময়মনসিংহ সদর', 'মুক্তাগাছা', 'ফুলবাড়িয়া', 'ত্রিশাল', 'ভালুকা', 'গফরগাঁও', 'নন্দাইল', 'ঈশ্বরগঞ্জ', 'গৌরীপুর', 'ফুলপুর', 'তারাকান্দা', 'হালুয়াঘাট', 'ধোবাউড়া'],
      'জামালপুর': ['জামালপুর সদর', 'সরিষাবাড়ী', 'মেলান্দহ', 'ইসলামপুর', 'মাদারগঞ্জ', 'দেওয়ানগঞ্জ', 'বকশীগঞ্জ'],
      'শেরপুর': ['শেরপুর সদর', 'নালিতাবাড়ী', 'শ্রীবরদী', 'নকলা', 'ঝিনাইগাতী'],
      'নেত্রকোনা': ['নেত্রকোনা সদর', 'কেন্দুয়া', 'মদন', 'খালিয়াজুরী', 'কলমাকান্দা', 'দুর্গাপুর', 'পূর্বধলা', 'বারহাট্টা', 'আটপাড়া', 'মোহনগঞ্জ']
    }
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
});

function saveOrder(event) {
  event.preventDefault();

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  let newOrder = {
    name: document.querySelector('input[name="name"]').value,
    phone: document.querySelector('input[name="phone"]').value,
    division: document.getElementById("division").value,
    district: document.getElementById("district").value,
    upazila: document.getElementById("upazila").value,
    address: document.querySelector('textarea[name="address"]').value,
    quantity: document.querySelector('select[name="quantity"]').value,
    product: "Premium Airphone",
    price: "990৳"
  };

  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  // redirect to summary page
  window.location.href = "order-summary.html";
}

function loadSummary() {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length > 0) {
    let lastOrder = orders[orders.length - 1];

    document.getElementById("name").innerText = lastOrder.name;
    document.getElementById("phone").innerText = lastOrder.phone;
    document.getElementById(" district").innerText = lastOrder.district;
    document.getElementById("upazila").innerText = lastOrder.upazila;
    document.getElementById("address").innerText = lastOrder.address;
    document.getElementById("product").innerText = lastOrder.product;
    document.getElementById("price").innerText = lastOrder.price;
  }
}
const PRODUCTS = [
  { id: 'p1', name: 'Premium Wireless Airphone', price: 990, image: 'file_00000000d5dc71fab880da618d7aafe5.png', description: 'Deep bass + 6 months warranty' },
  { id: 'p2', name: 'Soundora Neckband X2', price: 1250, image: 'airphone.jpg', description: 'Long battery backup for daily use' },
  { id: 'p3', name: 'Gaming Earbuds Pro', price: 1490, image: 'file_00000000d5dc71fab880da618d7aafe5.png', description: 'Low latency mode for gaming' },
  { id: 'p4', name: 'Studio Headphone Lite', price: 1890, image: 'airphone.jpg', description: 'Clear vocal and comfort cushions' },
  { id: 'p5', name: 'Soundora Smart Speaker Mini', price: 2190, image: 'file_00000000d5dc71fab880da618d7aafe5.png', description: 'Compact smart audio speaker' },
  { id: 'p6', name: 'USB-C Fast Charger 25W', price: 650, image: 'airphone.jpg', description: 'Fast and safe charging' }
];

const bdAddressData = {
  'ঢাকা': { districts: ['ঢাকা', 'গাজীপুর'], upazilas: { 'ঢাকা': ['মিরপুর', 'গুলশান', 'মোহাম্মদপুর'], 'গাজীপুর': ['টঙ্গী', 'শ্রীপুর'] } },
  'চট্টগ্রাম': { districts: ['চট্টগ্রাম', 'কুমিল্লা'], upazilas: { 'চট্টগ্রাম': ['পটিয়া', 'রাউজান'], 'কুমিল্লা': ['সদর', 'দেবিদ্বার'] } },
  'রাজশাহী': { districts: ['রাজশাহী', 'বগুড়া'], upazilas: { 'রাজশাহী': ['পবা', 'চারঘাট'], 'বগুড়া': ['সদর', 'শিবগঞ্জ'] } },
  'খুলনা': { districts: ['খুলনা', 'যশোর'], upazilas: { 'খুলনা': ['দাকোপ', 'ডুমুরিয়া'], 'যশোর': ['সদর', 'কেশবপুর'] } },
  'বরিশাল': { districts: ['বরিশাল', 'ভোলা'], upazilas: { 'বরিশাল': ['সদর', 'উজিরপুর'], 'ভোলা': ['সদর', 'চরফ্যাশন'] } },
  'সিলেট': { districts: ['সিলেট', 'হবিগঞ্জ'], upazilas: { 'সিলেট': ['সদর', 'জৈন্তাপুর'], 'হবিগঞ্জ': ['সদর', 'মাধবপুর'] } },
  'রংপুর': { districts: ['রংপুর', 'দিনাজপুর'], upazilas: { 'রংপুর': ['সদর', 'মিঠাপুকুর'], 'দিনাজপুর': ['সদর', 'বিরামপুর'] } },
  'ময়মনসিংহ': { districts: ['ময়মনসিংহ', 'জামালপুর'], upazilas: { 'ময়মনসিংহ': ['সদর', 'ত্রিশাল'], 'জামালপুর': ['সদর', 'ইসলামপুর'] } }
};

const ORDER_KEY = 'soundoraOrders';
const USERS_KEY = 'soundoraUsers';
const CURRENT_USER_KEY = 'soundoraCurrentUser';

const byId = (id) => document.getElementById(id);
const getOrders = () => JSON.parse(localStorage.getItem(ORDER_KEY) || '[]');
const setOrders = (orders) => localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
const setUsers = (users) => localStorage.setItem(USERS_KEY, JSON.stringify(users));
const getCurrentUser = () => JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || 'null');

function renderProducts() {
  const productList = byId('product-list');
  if (!productList) return;

  productList.innerHTML = PRODUCTS.map((p) => `
    <article class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <strong>${p.price.toLocaleString('bn-BD')}৳</strong>
      <button type="button" onclick="selectProduct('${p.id}')">এইটি অর্ডার করুন</button>
    </article>
  `).join('');
}

function selectProduct(productId) {
  const selected = PRODUCTS.find((p) => p.id === productId);
  if (!selected) return;

  byId('productId').value = selected.id;
  byId('productName').value = selected.name;
  byId('price').value = String(selected.price);
  byId('selected-product-text').textContent = `সিলেক্টেড প্রোডাক্ট: ${selected.name} (${selected.price.toLocaleString('bn-BD')}৳)`;
  byId('checkout-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.selectProduct = selectProduct;

function fillSelect(selectEl, options, placeholder) {
  selectEl.innerHTML = `<option value="">${placeholder}</option>`;
  options.forEach((item) => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    selectEl.appendChild(option);
  });
}

function setupAddressSelectors() {
  const divisionSelect = byId('division');
  const districtSelect = byId('district');
  const upazilaSelect = byId('upazila');
  if (!divisionSelect || !districtSelect || !upazilaSelect) return;

  fillSelect(divisionSelect, Object.keys(bdAddressData), 'বিভাগ পছন্দ করুন');

  divisionSelect.addEventListener('change', () => {
    const division = divisionSelect.value;
    if (!division) {
      districtSelect.disabled = true;
      upazilaSelect.disabled = true;
      fillSelect(districtSelect, [], 'আগে বিভাগ নির্বাচন করুন');
      fillSelect(upazilaSelect, [], 'আগে জেলা নির্বাচন করুন');
      return;
    }

    fillSelect(districtSelect, bdAddressData[division].districts, 'জেলা পছন্দ করুন');
    districtSelect.disabled = false;
    upazilaSelect.disabled = true;
    fillSelect(upazilaSelect, [], 'আগে জেলা নির্বাচন করুন');
  });

  districtSelect.addEventListener('change', () => {
    const division = divisionSelect.value;
    const district = districtSelect.value;
    if (!division || !district) {
      upazilaSelect.disabled = true;
      fillSelect(upazilaSelect, [], 'আগে জেলা নির্বাচন করুন');
      return;
    }

    fillSelect(upazilaSelect, bdAddressData[division].upazilas[district] || ['সদর'], 'উপজেলা পছন্দ করুন');
    upazilaSelect.disabled = false;
  });
}

function createTrackingId() {
  return `SD-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 900 + 100)}`;
}

function setupCheckout() {
  const form = byId('checkout-form');
  const btn = byId('submit-btn');
  if (!form || !btn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const currentUser = getCurrentUser();

    if (!form.productId.value) {
      alert('দয়া করে আগে একটি প্রোডাক্ট সিলেক্ট করুন।');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'অর্ডার প্রসেস হচ্ছে...';

    const qty = Math.max(1, Math.min(5, Number.parseInt(form.quantity.value, 10) || 1));
    const unitPrice = Number.parseInt(form.price.value, 10) || 0;
    const newOrder = {
      id: crypto.randomUUID(),
      trackingId: createTrackingId(),
      status: 'Pending',
      createdAt: new Date().toISOString(),
      userEmail: currentUser?.email || null,
      customerName: form.name.value.trim(),
      phone: form.phone.value.trim(),
      division: form.division.value,
      district: form.district.value,
      upazila: form.upazila.value,
      address: form.address.value.trim(),
      productId: form.productId.value,
      productName: form.productName.value,
      unitPrice,
      quantity: qty,
      totalPrice: unitPrice * qty
    };

    const orders = getOrders();
    orders.push(newOrder);
    setOrders(orders);
    localStorage.setItem('soundoraOrderSummary', JSON.stringify(newOrder));

    window.location.href = 'order-summary.html';
  });
}

function setupAuth() {
  const signupForm = byId('signup-form');
  const loginForm = byId('login-form');
  const logoutBtn = byId('logout-btn');

  signupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(signupForm);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim().toLowerCase();
    const password = String(form.get('password') || '');

    const users = getUsers();
    if (users.some((u) => u.email === email)) {
      alert('এই ইমেইল দিয়ে ইতোমধ্যে অ্যাকাউন্ট আছে।');
      return;
    }

    users.push({ id: crypto.randomUUID(), name, email, password });
    setUsers(users);
    alert('Signup সফল। এখন Login করুন।');
    signupForm.reset();
  });

  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(loginForm);
    const email = String(form.get('email') || '').trim().toLowerCase();
    const password = String(form.get('password') || '');

    const user = getUsers().find((u) => u.email === email && u.password === password);
    if (!user) {
      alert('ইমেইল বা পাসওয়ার্ড সঠিক নয়।');
      return;
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: user.name, email: user.email }));
    loginForm.reset();
    renderUserState();
    renderMyOrders();
  });

  logoutBtn?.addEventListener('click', () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    renderUserState();
    renderMyOrders();
  });
}

function renderUserState() {
  const userBox = byId('current-user');
  const logoutBtn = byId('logout-btn');
  const currentUser = getCurrentUser();

  if (!userBox || !logoutBtn) return;

  if (currentUser) {
    userBox.textContent = `লগইন আছেন: ${currentUser.name} (${currentUser.email})`;
    logoutBtn.style.display = 'inline-block';
  } else {
    userBox.textContent = 'আপনি গেস্ট হিসেবে আছেন।';
    logoutBtn.style.display = 'none';
  }
}

function renderMyOrders() {
  const container = byId('my-orders');
  const currentUser = getCurrentUser();
  if (!container) return;

  if (!currentUser) {
    container.innerHTML = '<p class="muted">অর্ডার হিস্ট্রি দেখতে Login করুন।</p>';
    return;
  }

  const orders = getOrders()
    .filter((o) => o.userEmail === currentUser.email)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!orders.length) {
    container.innerHTML = '<p class="muted">আপনার এখনো কোনো অর্ডার নেই।</p>';
    return;
  }

  container.innerHTML = orders.map((o) => `
    <div class="order-item">
      <h4>${o.productName}</h4>
      <p>Tracking: <strong>${o.trackingId}</strong></p>
      <p>Status: <strong>${o.status}</strong></p>
      <p>মোট: ${o.totalPrice.toLocaleString('bn-BD')}৳ | Qty: ${o.quantity}</p>
      <p>তারিখ: ${new Date(o.createdAt).toLocaleString('bn-BD')}</p>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupAddressSelectors();
  setupCheckout();
  setupAuth();
  renderUserState();
  renderMyOrders();
});
