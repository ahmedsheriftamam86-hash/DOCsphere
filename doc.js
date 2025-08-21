const slogan = document.querySelector(".slogan");
const messages = [
  "تفقد الاطباء في كل مكان",
  "نحن نشارككم احتياجاتكم"
];

let msgIndex = 0; 
let charIndex = 0; 
let typing = true;

function typeEffect() {
  const currentMessage = messages[msgIndex];

  if (typing) {
    slogan.textContent += currentMessage[charIndex];
    charIndex++;
    if (charIndex === currentMessage.length) {
      typing = false;
      setTimeout(typeEffect, 1000); 
      return;
    }
    setTimeout(typeEffect, 100); 
  } else {
    slogan.textContent = currentMessage.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      typing = true;
      msgIndex = (msgIndex + 1) % messages.length; 
      slogan.textContent = ""; // تفريغ قبل كتابة الرسالة الجديدة
      setTimeout(typeEffect, 500); 
      return;
    }
    setTimeout(typeEffect, 50); 
  }
}

typeEffect();


// زر القائمة (الموبايل)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
   function animateCounters() {
      const counters = document.querySelectorAll(".stat-number");
      counters.forEach(counter => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");
        const increment = target / 200; // سرعة الزيادة

        function updateCounter() {
          const current = +counter.innerText;
          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
          } else {
            counter.innerText = target;
          }
        }
        updateCounter();
      });
    }

    // تشغيل الأنيميشن عند تحميل الصفحة
    window.addEventListener("load", animateCounters);

    const squaresContainer = document.querySelector(".squares");

// توليد مربعات في أماكن عشوائية
for (let i = 0; i < 50; i++) {
  let square = document.createElement("div");
  square.classList.add("square");

  // موقع عشوائي
  square.style.top = Math.random() * 100 + "%";
  square.style.left = Math.random() * 100 + "%";

  // لون عشوائي
  const colors = [ "#00cfff", "#007C91"];
  square.style.borderColor = colors[Math.floor(Math.random() * colors.length)];

  squaresContainer.appendChild(square);
}