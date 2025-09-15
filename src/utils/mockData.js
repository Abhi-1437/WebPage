// Mock data for development
export const mockBotResponses = {
  en: {
    greeting: "Hello! I'm Campus Assistant. How can I help you today?",
    admission: "For admission information, please visit the admissions office or check our website. The application deadline is usually in June.",
    fees: "Fee structure varies by course. Engineering courses: ₹1,50,000/year, Arts: ₹50,000/year. Scholarships are available.",
    hostel: "We have separate hostels for boys and girls with modern amenities. Hostel fees: ₹80,000/year including meals.",
    library: "The library is open from 8 AM to 10 PM on weekdays and 9 AM to 6 PM on weekends. We have over 50,000 books and digital resources.",
    default: "I understand you're asking about campus-related queries. Could you please be more specific so I can help you better?"
  },
  hi: {
    greeting: "नमस्ते! मैं कैंपस असिस्टेंट हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
    admission: "प्रवेश की जानकारी के लिए, कृपया प्रवेश कार्यालय में जाएं या हमारी वेबसाइट देखें।",
    fees: "फीस संरचना कोर्स के अनुसार अलग है। इंजीनियरिंग: ₹1,50,000/वर्ष, कला: ₹50,000/वर्ष।",
    hostel: "हमारे पास आधुनिक सुविधाओं के साथ लड़कों और लड़कियों के लिए अलग हॉस्टल हैं।",
    library: "पुस्तकालय सप्ताह के दिनों में सुबह 8 बजे से रात 10 बजे तक और सप्ताहांत में सुबह 9 बजे से शाम 6 बजे तक खुला रहता है।",
    default: "मैं समझ गया कि आप कैंपस से संबंधित प्रश्न पूछ रहे हैं। कृपया अधिक स्पष्ट रूप से बताएं।"
  },
  te: {
    greeting: "నమస్కారం! నేను క్యాంపస్ అసిస్టెంట్. ఈరోజు మీకు ఎలా సహాయం చేయగలను?",
    admission: "ప్రవేశ సమాచారం కోసం, దయచేసి ప్రవేశ కార్యాలయాన్ని సందర్శించండి లేదా మా వెబ్‌సైట్‌ను చూడండి।",
    fees: "ఫీజు నిర్మాణం కోర్సు ప్రకారం మారుతుంది. ఇంజనీరింగ్: ₹1,50,000/సంవత్సరం, కళలు: ₹50,000/సంవత్సరం।",
    hostel: "మేము ఆధునిక సౌకర్యాలతో అబ్బాయిలు మరియు అమ్మాయిలకు వేర్వేరు హాస్టళ్లను కలిగి ఉన్నాము।",
    library: "లైబ్రరీ వారం రోజుల్లో ఉదయం 8 గంటల నుండి రాత్రి 10 గంటల వరకు మరియు వారాంతాల్లో ఉదయం 9 గంటల నుండి సాయంత్రం 6 గంటల వరకు తెరిచి ఉంటుంది।",
    default: "మీరు క్యాంపస్ సంబంధిత ప్రశ్నలు అడుగుతున్నారని నేను అర్థం చేసుకున్నాను. దయచేసి మరింత స్పష్టంగా చెప్పండి."
  }
};

export const mockFAQs = [
  { id: 1, question: "Admission Process", category: "admission" },
  { id: 2, question: "Fee Structure", category: "fees" },
  { id: 3, question: "Hostel Information", category: "hostel" },
  { id: 4, question: "Library Timings", category: "library" },
  { id: 5, question: "Academic Calendar", category: "academic" }
];