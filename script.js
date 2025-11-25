

    // سنة الفوتر
    document.getElementById("year").textContent = new Date().getFullYear();

    // موبايل منيو
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Scroll to top
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        scrollBtn.style.display = "flex";
      } else {
        scrollBtn.style.display = "none";
      }
    });
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // FAQ toggle
    document.querySelectorAll(".faq-question").forEach((q) => {
      q.addEventListener("click", () => {
        const item = q.parentElement;
        item.classList.toggle("open");
      });
    });

    // إرسال نموذج الحجز السريع إلى واتساب (فتح رسالة جاهزة)
    document.getElementById("quickForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("q_name").value.trim();
      const phone = document.getElementById("q_phone").value.trim();
      const type = document.getElementById("q_type").value;
      const msg =
        "السلام عليكم،\n" +
        "الاسم: " + name +
        "\nرقم الجوال: " + phone +
        "\nنوع الحجز المطلوب: " + type +
        "\n\nأرسل الطلب من نموذج الحجز السريع على موقع بكّه ترافيل.";
      const waUrl = "https://wa.me/201000000000?text=" + encodeURIComponent(msg);
      window.open(waUrl, "_blank");
    });

    // نموذج الاتصال الرئيسي -> واتساب أيضًا (ممكن تغيره لإرسال بريد)
    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const type = document.getElementById("tripType").value;
      const fromCity = document.getElementById("fromCity").value.trim();
      const startDate = document.getElementById("startDate").value;
      const people = document.getElementById("peopleCount").value;
      const msgText = document.getElementById("message").value.trim();

      let msg =
        "السلام عليكم، أريد حجز/استفسار عن رحلة.\n\n" +
        "الاسم: " + name +
        "\nرقم الجوال: " + phone +
        (email ? "\nالبريد الإلكتروني: " + email : "") +
        "\nنوع الرحلة: " + type +
        (fromCity ? "\nمدينة المغادرة: " + fromCity : "") +
        (startDate ? "\nتاريخ السفر المبدئي: " + startDate : "") +
        "\nعدد الأفراد: " + people +
        (msgText ? "\n\nملاحظات إضافية:\n" + msgText : "") +
        "\n\nأُرسلت هذه الرسالة من صفحة الهبوط Bakkah Travel.";

      const waUrl = "https://wa.me/201000000000?text=" + encodeURIComponent(msg);
      window.open(waUrl, "_blank");
    });
