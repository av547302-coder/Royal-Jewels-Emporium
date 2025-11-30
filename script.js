
const WHATSAPP_NUMBER = "9129244754 "; // 

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// FAQ toggle
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.parentElement.querySelector(".faq-answer");
    const open = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".faq-question span")
      .forEach((s) => (s.textContent = "+"));

    if (!open) {
      answer.style.display = "block";
      btn.querySelector("span").textContent = "–";
    }
  });
});

// Direct WhatsApp (Hero & Contact button)
function openDirectWhatsApp() {
  const text =
    "Hi, I would like to enquire about your jewellery collections at Royal Jewels Emporium.";
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(text);
  window.open(url, "_blank");
}

// Product inquiry from collection cards
function openProductInquiry(productName) {
  const text =
    "Hi, I am interested in: " +
    productName +
    ". Please share designs and price details.";
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(text);
  window.open(url, "_blank");
}

// Custom jewellery form → WhatsApp
const customForm = document.getElementById("customForm");
if (customForm) {
  customForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("customName").value.trim();
    const phone = document.getElementById("customPhone").value.trim();
    const budget = document.getElementById("customBudget").value.trim();
    const message = document.getElementById("customMessage").value.trim();

    const text =
      "Custom Jewellery Inquiry%0A%0A" +
      "Name: " +
      name +
      "%0APhone (WhatsApp): " +
      phone +
      "%0ABudget: " +
      budget +
      "%0AIdea/Requirements: " +
      message +
      "%0APage: Custom Jewellery";

    const url =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      text;
    window.open(url, "_blank");
  });
}

// General inquiry form → WhatsApp
const inquiryForm = document.getElementById("inquiryForm");
if (inquiryForm) {
  inquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("inqName").value.trim();
    const phone = document.getElementById("inqPhone").value.trim();
    const interest = document.getElementById("inqInterest").value.trim();
    const budget = document.getElementById("inqBudget").value.trim();
    const message = document.getElementById("inqMessage").value.trim();

    const text =
      "Jewellery Inquiry%0A%0A" +
      "Name: " +
      name +
      "%0APhone (WhatsApp): " +
      phone +
      "%0AInterested In: " +
      interest +
      "%0ABudget: " +
      budget +
      "%0AMessage: " +
      message +
      "%0APage: Contact / Quick Inquiry";

    const url =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      text;
    window.open(url, "_blank");
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
  }
