/* ==========================================================================
   MAHMOUD ELMASRY PORTFOLIO - script.js (version 2)
   Plain JavaScript, no libraries. Every feature is its own function and is
   wrapped in safe(), so one broken feature cannot stop the others.
   ========================================================================== */
"use strict";

/* ==========================================================================
   1. SETTINGS - edit your details here, in ONE place
   ========================================================================== */
const CONFIG = {
  // WhatsApp number in international format: country code + number, digits only,
  // no "+" and no leading 0. (Egypt: 20 + 1276615502)
  whatsappNumber: "201276615502",
  whatsappDisplay: "+20 127 661 5502",   // how the number is shown on the page

  // Instagram username WITHOUT the @
  instagramUser: "IAM_ELMASRYY",

  // Contact form limits
  nameMin: 2, nameMax: 60, messageMin: 10, messageMax: 600,
};

/* ==========================================================================
   2. TEXT IN TWO LANGUAGES - English (en) and Arabic (ar)
   Every piece of text on the page lives here. To change a sentence, change it
   here. The keys (like "hero.intro") match data-i18n="..." in index.html.
   ========================================================================== */
const DICT = {
  en: {
    "meta.title": "Mahmoud Elmasry | Web Creator from Egypt",
    "meta.desc": "Mahmoud Elmasry, 21, from Egypt. I build beautiful websites with HTML, CSS, JavaScript and AI, and I create professional portfolio websites for other people.",
    "skip": "Skip to main content",
    "aria.nav": "Main navigation", "aria.logo": "Mahmoud Elmasry, go to top", "aria.palette": "Open quick menu",
    "aria.lang": "Language", "aria.dots": "Page sections", "aria.facts": "Quick facts",
    "aria.scrollHint": "Scroll to the About section", "aria.marquee": "Skill keywords", "aria.social": "Social links",
    "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.services": "Your Portfolio", "nav.contact": "Contact",
    "hero.name": "Mahmoud Elmasry", "hero.hello": "Hi, I'm",
    "hero.rolesSr": "Video editor, AI website builder, web developer, portfolio designer.",
    "hero.intro": "A 21-year-old web creator from Egypt, building beautiful, fast websites with clean code and AI.",
    "hero.ctaWhatsApp": "Contact Me on WhatsApp", "hero.ctaSkills": "View My Skills",
    "roles": ["Video Editor", "AI Website Builder", "HTML, CSS & JS Developer", "Portfolio Designer"],
    "fact.age": "Age", "fact.nationality": "Nationality", "fact.nationalityVal": "Egyptian",
    "fact.country": "Country", "fact.countryVal": "Egypt", "fact.name": "Name",
    "fact.languages": "Languages", "fact.languagesVal": "Arabic, English",
    "photo.alt": "Portrait of Mahmoud Elmasry",
    "mq.1": "Web Design", "mq.2": "AI Websites", "mq.3": "Portfolio Websites", "mq.4": "Video Editing", "mq.5": "Clean Code", "mq.6": "English",
    "about.title": "About me",
    "about.lead": "I'm Mahmoud, a 21-year-old web creator from Egypt. I combine clean HTML, CSS, and JavaScript with AI tools to build websites that look polished and feel alive.",
    "about.p2": "I also edit videos, and I help other people launch a personal portfolio website of their own.",
    "about.years": "Years old", "about.skillsCount": "Core skills",
    "skills.title": "What I can do",
    "s1.title": "Visually beautiful websites with AI", "s1.text": "I use AI tools to design and build websites that look modern, feel smooth, and work on every screen.",
    "s2.title": "HTML, CSS & JavaScript", "s2.text": "Clean, readable code for layouts, animations, and interactive features.",
    "s3.title": "Portfolio websites for other people", "s3.text": "I build a personal portfolio website that shows you off, tailored to your skills and style.",
    "s4.title": "Video editing", "s4.text": "Intermediate level. I cut and shape clips into clear, good-looking videos.",
    "s5.title": "Fluent, confident English", "s5.text": "I speak English clearly and confidently, so working together is easy.",
    "svc.title": "Want a portfolio like this for yourself?",
    "svc.lead": "I'll build you a professional portfolio website with your photo, your details, and your skills. Anything you want on it, I'll add it.",
    "svc.c1": "Your photo", "svc.c2": "Your details", "svc.c3": "Your skills", "svc.c4": "Anything you want",
    "svc.cta": "Order your portfolio on WhatsApp",
    "steps.title": "How it works",
    "step1.title": "Message me", "step1.text": "Tell me about yourself on WhatsApp.",
    "step2.title": "Share your details", "step2.text": "Send your photo, skills, and anything you want on it.",
    "step3.title": "I build it", "step3.text": "I design and code your portfolio.",
    "step4.title": "You launch", "step4.text": "You get your finished website, ready to share.",
    "contact.title": "Get in touch", "contact.lead": "The fastest way to reach me is WhatsApp or Instagram.",
    "contact.whatsapp": "WhatsApp", "contact.instagram": "Instagram", "contact.copy": "Copy phone number",
    "form.title": "Send me a message",
    "form.note": "Pressing the button opens WhatsApp with your message ready to send. Nothing is sent until you press send inside WhatsApp.",
    "form.name": "Your name", "form.namePh": "e.g. Sara Ahmed", "form.msg": "Your message", "form.msgPh": "Tell me what you need",
    "form.btn": "Open WhatsApp", "form.loading": "Opening WhatsApp…",
    "form.fix": "Please fix the highlighted fields.",
    "form.badNumber": "The WhatsApp number in script.js is not set up correctly.",
    "form.success": "WhatsApp opened in a new tab. Press send there to deliver your message.",
    "form.blocked": "Your browser blocked the new tab. Allow pop-ups for this page and try again, or use the WhatsApp button next to this form.",
    "err.nameRequired": "Please enter your name.",
    "err.nameShort": "Your name needs at least {n} characters.",
    "err.nameLong": "Your name can be at most {n} characters.",
    "err.nameLetter": "Your name needs at least one letter.",
    "err.msgRequired": "Please write a message.",
    "err.msgShort": "Please write at least {n} characters so I understand what you need.",
    "err.msgLong": "Your message can be at most {n} characters.",
    "msg.default": "Hi Mahmoud, I saw your portfolio.",
    "msg.order": "Hi Mahmoud, I'd like a portfolio website like yours.",
    "msg.intro": "Hi Mahmoud, my name is {name}.",
    "footer.rights": "All rights reserved.", "footer.top": "Back to top",
    "fab.wa": "Chat on WhatsApp", "ui.top": "Back to top", "ui.menuOpen": "Open menu", "ui.menuClose": "Close menu",
    "toast.copied": "Number copied", "toast.copyFail": "Could not copy. Please copy it by hand.",
    "palette.title": "Quick menu", "palette.ph": "Type to search...", "palette.empty": "No matches found.",
    "palette.hint": "Use the arrow keys and Enter. Press Esc to close.",
    "kind.go": "Go to", "kind.action": "Action",
    "cmd.wa": "Open WhatsApp", "cmd.ig": "Open Instagram", "cmd.copy": "Copy phone number", "cmd.lang": "Switch to Arabic (عربي)",
  },

  ar: {
    "meta.title": "محمود المصري | مبدع ويب من مصر",
    "meta.desc": "محمود المصري، 21 سنة، من مصر. أبني مواقع جميلة بـ HTML وCSS وJavaScript والذكاء الاصطناعي، وأصنع مواقع بورتفوليو احترافية للآخرين.",
    "skip": "انتقل إلى المحتوى الرئيسي",
    "aria.nav": "التنقل الرئيسي", "aria.logo": "محمود المصري، العودة إلى الأعلى", "aria.palette": "فتح القائمة السريعة",
    "aria.lang": "اللغة", "aria.dots": "أقسام الصفحة", "aria.facts": "معلومات سريعة",
    "aria.scrollHint": "انتقل إلى قسم عني", "aria.marquee": "كلمات المهارات", "aria.social": "روابط التواصل",
    "nav.home": "الرئيسية", "nav.about": "عني", "nav.skills": "مهاراتي", "nav.services": "بورتفوليو لك", "nav.contact": "تواصل",
    "hero.name": "محمود المصري", "hero.hello": "أهلاً، أنا",
    "hero.rolesSr": "مونتير فيديو، منشئ مواقع بالذكاء الاصطناعي، مطوّر ويب، مصمم بورتفوليو.",
    "hero.intro": "مبدع ويب عمره 21 سنة من مصر، أبني مواقع جميلة وسريعة بكود نظيف وبالذكاء الاصطناعي.",
    "hero.ctaWhatsApp": "تواصل معي على واتساب", "hero.ctaSkills": "شاهد مهاراتي",
    "roles": ["مونتير فيديو", "منشئ مواقع بالذكاء الاصطناعي", "مطوّر ويب", "مصمم بورتفوليو"],
    "fact.age": "العمر", "fact.nationality": "الجنسية", "fact.nationalityVal": "مصري",
    "fact.country": "الدولة", "fact.countryVal": "مصر", "fact.name": "الاسم",
    "fact.languages": "اللغات", "fact.languagesVal": "العربية، الإنجليزية",
    "photo.alt": "صورة شخصية لمحمود المصري",
    "mq.1": "تصميم مواقع", "mq.2": "مواقع بالذكاء الاصطناعي", "mq.3": "مواقع بورتفوليو", "mq.4": "مونتاج فيديو", "mq.5": "كود نظيف", "mq.6": "الإنجليزية",
    "about.title": "عني",
    "about.lead": "أنا محمود، مبدع ويب عمري 21 سنة من مصر. أجمع بين HTML وCSS وJavaScript وأدوات الذكاء الاصطناعي لأبني مواقع تبدو أنيقة وتنبض بالحياة.",
    "about.p2": "كما أقوم بمونتاج الفيديو، وأساعد الآخرين على إطلاق موقع بورتفوليو شخصي خاص بهم.",
    "about.years": "سنة من العمر", "about.skillsCount": "مهارات أساسية",
    "skills.title": "ما أستطيع فعله",
    "s1.title": "مواقع جميلة بصريًا بالذكاء الاصطناعي", "s1.text": "أستخدم أدوات الذكاء الاصطناعي لتصميم وبناء مواقع عصرية وسلسة وتعمل على كل الشاشات.",
    "s2.title": "HTML وCSS وJavaScript", "s2.text": "كود نظيف وسهل القراءة للتصميمات والحركات والميزات التفاعلية.",
    "s3.title": "مواقع بورتفوليو للآخرين", "s3.text": "أبني موقع بورتفوليو شخصي يُظهر مهاراتك ويناسب أسلوبك.",
    "s4.title": "مونتاج الفيديو", "s4.text": "مستوى متوسط. أقصّ المقاطع وأرتبها لتصبح فيديوهات واضحة وجميلة.",
    "s5.title": "إنجليزية بطلاقة وثقة", "s5.text": "أتحدث الإنجليزية بوضوح وثقة، فيكون التعاون معي سهلًا.",
    "svc.title": "هل تريد بورتفوليو مثل هذا لنفسك؟",
    "svc.lead": "سأبني لك موقع بورتفوليو احترافي بصورتك وبياناتك ومهاراتك. وأي شيء تريده فيه سأضيفه لك.",
    "svc.c1": "صورتك", "svc.c2": "بياناتك", "svc.c3": "مهاراتك", "svc.c4": "أي شيء تريده",
    "svc.cta": "اطلب البورتفوليو الخاص بك على واتساب",
    "steps.title": "كيف أعمل",
    "step1.title": "راسلني", "step1.text": "عرّفني بنفسك على واتساب.",
    "step2.title": "أرسل بياناتك", "step2.text": "أرسل صورتك ومهاراتك وأي شيء تريده فيه.",
    "step3.title": "أبنيه لك", "step3.text": "أصمم وأبرمج البورتفوليو الخاص بك.",
    "step4.title": "تنطلق", "step4.text": "تستلم موقعك جاهزًا للمشاركة.",
    "contact.title": "تواصل معي", "contact.lead": "أسرع طريقة للوصول إليّ هي واتساب أو إنستجرام.",
    "contact.whatsapp": "واتساب", "contact.instagram": "إنستجرام", "contact.copy": "نسخ رقم الهاتف",
    "form.title": "أرسل لي رسالة",
    "form.note": "الضغط على الزر يفتح واتساب ورسالتك جاهزة للإرسال. لا يُرسل شيء حتى تضغط إرسال داخل واتساب.",
    "form.name": "اسمك", "form.namePh": "مثال: سارة أحمد", "form.msg": "رسالتك", "form.msgPh": "أخبرني بما تحتاجه",
    "form.btn": "افتح واتساب", "form.loading": "جارٍ فتح واتساب…",
    "form.fix": "من فضلك صحّح الحقول المحددة.",
    "form.badNumber": "رقم واتساب في ملف script.js غير مضبوط بشكل صحيح.",
    "form.success": "تم فتح واتساب في تبويب جديد. اضغط إرسال هناك ليصلني طلبك.",
    "form.blocked": "المتصفح منع فتح التبويب الجديد. اسمح بالنوافذ المنبثقة لهذه الصفحة وحاول مرة أخرى، أو استخدم زر واتساب بجانب هذا النموذج.",
    "err.nameRequired": "من فضلك اكتب اسمك.",
    "err.nameShort": "اسمك يحتاج إلى {n} أحرف على الأقل.",
    "err.nameLong": "اسمك يجب ألا يزيد عن {n} حرفًا.",
    "err.nameLetter": "اسمك يحتاج إلى حرف واحد على الأقل.",
    "err.msgRequired": "من فضلك اكتب رسالة.",
    "err.msgShort": "من فضلك اكتب {n} أحرف على الأقل حتى أفهم ما تحتاجه.",
    "err.msgLong": "رسالتك يجب ألا تزيد عن {n} حرفًا.",
    "msg.default": "مرحبًا محمود، شاهدت البورتفوليو الخاص بك.",
    "msg.order": "مرحبًا محمود، أريد موقع بورتفوليو مثل موقعك.",
    "msg.intro": "مرحبًا محمود، اسمي {name}.",
    "footer.rights": "جميع الحقوق محفوظة.", "footer.top": "العودة إلى الأعلى",
    "fab.wa": "تحدث على واتساب", "ui.top": "العودة إلى الأعلى", "ui.menuOpen": "فتح القائمة", "ui.menuClose": "إغلاق القائمة",
    "toast.copied": "تم نسخ الرقم", "toast.copyFail": "تعذّر النسخ. من فضلك انسخه يدويًا.",
    "palette.title": "القائمة السريعة", "palette.ph": "اكتب للبحث...", "palette.empty": "لا توجد نتائج.",
    "palette.hint": "استخدم الأسهم وزر Enter. اضغط Esc للإغلاق.",
    "kind.go": "انتقال", "kind.action": "إجراء",
    "cmd.wa": "فتح واتساب", "cmd.ig": "فتح إنستجرام", "cmd.copy": "نسخ رقم الهاتف", "cmd.lang": "التبديل إلى الإنجليزية (English)",
  },
};

/* ==========================================================================
   3. HELPERS
   ========================================================================== */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

let currentLang = "en";
const languageHooks = [];   // functions that run again whenever the language changes

// Runs a feature; if it fails, only a warning is logged and the rest keeps working
function safe(feature, name) {
  try { feature(); }
  catch (error) { console.warn("Feature failed: " + (name || feature.name), error); }
}

// Gets text in the current language. {n} style placeholders are replaced from "vars".
function t(key, vars) {
  let value = DICT[currentLang] && DICT[currentLang][key];
  if (value === undefined) value = DICT.en[key];
  if (value === undefined) return key;
  if (typeof value !== "string") return value;     // e.g. the roles list
  if (vars) Object.keys(vars).forEach((k) => { value = value.split("{" + k + "}").join(String(vars[k])); });
  return value;
}

// Builds a WhatsApp link from CONFIG. Returns null if the number looks wrong.
function buildWhatsAppLink(message) {
  const number = String(CONFIG.whatsappNumber).replace(/\D/g, "");
  if (number.length < 8 || number.length > 15) return null;
  let url = "https://wa.me/" + number;
  if (message) url += "?text=" + encodeURIComponent(message);   // encodes spaces, line breaks, Arabic letters
  return url;
}
const instagramValid = () => /^[A-Za-z0-9._]{1,30}$/.test(CONFIG.instagramUser);

function openWhatsApp(message) {
  const url = buildWhatsAppLink(message);
  if (url) window.open(url, "_blank", "noopener,noreferrer");
}
function openInstagram() {
  if (instagramValid()) window.open("https://instagram.com/" + CONFIG.instagramUser, "_blank", "noopener,noreferrer");
}
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
}

/* ----- Small message ("Number copied") ----- */
let toastTimer = 0;
function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

/* ----- Copy text to the clipboard (works with a fallback for older browsers) ----- */
function fallbackCopy(text) {
  const previous = document.activeElement;
  const box = document.createElement("textarea");
  box.value = text;
  box.setAttribute("readonly", "");
  box.style.cssText = "position:fixed;top:-1000px;opacity:0";
  document.body.appendChild(box);
  box.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch (error) { ok = false; }
  box.remove();
  if (previous && previous.focus) previous.focus();
  return ok;
}
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => fallbackCopy(text));
  }
  return Promise.resolve(fallbackCopy(text));
}
function copyNumber() {
  const number = "+" + String(CONFIG.whatsappNumber).replace(/\D/g, "");
  return copyText(number).then((ok) => {
    showToast(ok ? t("toast.copied") : t("toast.copyFail"));
    return ok;
  });
}

/* ==========================================================================
   4. LANGUAGE - switch the whole page between English and Arabic
   ========================================================================== */
function applyLanguage(lang) {
  if (!DICT[lang]) lang = "en";
  currentLang = lang;

  // Direction: Arabic reads right-to-left, English left-to-right
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";

  // Text: every element with data-i18n="key" (textContent = safe, never HTML)
  $$("[data-i18n]").forEach((el) => {
    const value = DICT[lang][el.dataset.i18n];
    if (typeof value === "string") el.textContent = value;
  });

  // Attributes: data-i18n-attr="aria-label:key;placeholder:key"
  $$("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const cut = pair.indexOf(":");
      if (cut < 1) return;
      const value = DICT[lang][pair.slice(cut + 1).trim()];
      if (typeof value === "string") el.setAttribute(pair.slice(0, cut).trim(), value);
    });
  });

  // Browser tab title and description
  document.title = t("meta.title");
  const meta = $('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("meta.desc"));

  // Language buttons
  $$(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  try { localStorage.setItem("portfolio-lang", lang); } catch (error) { /* storage may be blocked: ignore */ }
  languageHooks.forEach((hook) => safe(hook, "language hook"));
}

function initLanguage() {
  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
  let saved = "en";
  try { saved = localStorage.getItem("portfolio-lang") || "en"; } catch (error) { saved = "en"; }
  applyLanguage(saved === "ar" ? "ar" : "en");
}

/* ==========================================================================
   5. LOADER
   ========================================================================== */
function initLoader(onDone) {
  const loader = $("#loader");
  const startedAt = performance.now();
  let finished = false;

  // Percent counter shown under the bar (counts 0 to 100 while the bar fills)
  const percent = $("#loader-percent");
  if (percent && !reducedMotion) {
    const begin = performance.now();
    (function countPercent(now) {
      const p = Math.min(1, (now - begin) / 1100);
      percent.textContent = Math.round(p * 100) + "%";
      if (p < 1 && !finished) requestAnimationFrame(countPercent);
    })(begin);
  }

  function finish() {
    if (finished) return;
    finished = true;
    if (percent) percent.textContent = "100%";
    if (loader) {
      loader.classList.add("is-hidden");
      setTimeout(() => loader.remove(), 900);
    }
    document.body.classList.add("is-ready");
    onDone();
  }

  const minTime = reducedMotion ? 0 : 1200;
  const whenLoaded = () => setTimeout(finish, Math.max(0, minTime - (performance.now() - startedAt)));
  if (document.readyState === "complete") whenLoaded();
  else window.addEventListener("load", whenLoaded, { once: true });

  setTimeout(finish, 3500);   // safety net: never leave visitors stuck on the loader
}

/* ==========================================================================
   6. CONTACT LINKS
   ========================================================================== */
function refreshContactLinks() {
  // WhatsApp links use the message for the current language
  $$("[data-wa]").forEach((link) => {
    const url = buildWhatsAppLink(t(link.dataset.waKey || "msg.default"));
    if (url) link.href = url;
  });
  $$("[data-phone-display]").forEach((el) => { el.textContent = CONFIG.whatsappDisplay; });

  if (instagramValid()) {
    $$("[data-ig]").forEach((link) => { link.href = "https://instagram.com/" + CONFIG.instagramUser; });
    $$("[data-ig-display]").forEach((el) => { el.textContent = "@" + CONFIG.instagramUser; });
  }
}

function initContactLinks() {
  refreshContactLinks();
  languageHooks.push(refreshContactLinks);
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Copy-number button
  const copyBtn = $("#copy-number");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      copyNumber().then((ok) => {
        if (!ok) return;
        copyBtn.classList.add("is-copied");
        setTimeout(() => copyBtn.classList.remove("is-copied"), 1800);
      });
    });
  }
}

/* ==========================================================================
   7. PROFILE PHOTO FALLBACK
   ========================================================================== */
function initPhotoFallback() {
  const img = $("#profile-photo");
  const frame = $("#photo-frame");
  if (!img || !frame) return;
  const showFallback = () => frame.classList.add("photo-missing");
  img.addEventListener("error", showFallback);
  if (img.complete && img.naturalWidth === 0) showFallback();   // the error may have happened before this ran
}

/* ==========================================================================
   8. MOBILE MENU
   ========================================================================== */
function initMenu() {
  const toggle = $("#nav-toggle");
  const menu = $("#nav-menu");
  if (!toggle || !menu) return;
  const isOpen = () => menu.classList.contains("is-open");
  const syncLabel = () => toggle.setAttribute("aria-label", t(isOpen() ? "ui.menuClose" : "ui.menuOpen"));

  function setOpen(open, returnFocus) {
    menu.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
    syncLabel();
    if (!open && returnFocus) toggle.focus();
  }

  toggle.addEventListener("click", () => setOpen(!isOpen()));
  $$("a", menu).forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen()) setOpen(false, true); });
  document.addEventListener("click", (e) => {
    if (isOpen() && !menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  const wide = window.matchMedia("(min-width: 860px)");
  if (wide.addEventListener) wide.addEventListener("change", (e) => { if (e.matches) setOpen(false); });

  languageHooks.push(syncLabel);
  syncLabel();
}

/* ==========================================================================
   9. SCROLL - progress bar, sticky header, back-to-top, background depth
   ========================================================================== */
function initScroll() {
  const header = $("#site-header");
  const toTop = $("#to-top");
  const shapes = $("#bg-shapes");
  const root = document.documentElement;
  let waiting = false;

  function update() {
    const y = window.scrollY;
    const max = root.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
    root.style.setProperty("--progress", progress.toFixed(4));       // top bar + back-to-top ring
    if (header) header.classList.toggle("is-scrolled", y > 20);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
    if (shapes && !reducedMotion) shapes.style.setProperty("--scroll", String(Math.round(y)));  // depth effect
    waiting = false;
  }
  const onScroll = () => { if (!waiting) { waiting = true; requestAnimationFrame(update); } };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
}

/* Highlights the menu link AND the side dot of the section you are looking at */
function initActiveNav() {
  const targets = $$(".nav-link, .dot");
  if (!targets.length || !("IntersectionObserver" in window)) return;

  const sections = new Map();   // section element -> the links/dots that point to it
  targets.forEach((link) => {
    const id = (link.getAttribute("href") || "").replace("#", "");
    const section = id ? document.getElementById(id) : null;
    if (!section) return;
    if (!sections.has(section)) sections.set(section, []);
    sections.get(section).push(link);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      targets.forEach((l) => { l.classList.remove("is-active"); l.removeAttribute("aria-current"); });
      (sections.get(entry.target) || []).forEach((l) => { l.classList.add("is-active"); l.setAttribute("aria-current", "true"); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach((links, section) => observer.observe(section));
}

/* ==========================================================================
   10. SCROLL REVEAL AND COUNTERS
   ========================================================================== */
function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
  items.forEach((el) => observer.observe(el));
}

function initCounters() {
  const counters = $$("[data-count]");
  if (!counters.length || reducedMotion || !("IntersectionObserver" in window)) return;

  function countUp(el, target) {
    const duration = 1400, start = performance.now();
    function step(now) {
      const p = Math.min(1, (now - start) / duration);
      el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));   // fast start, slow end
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const target = parseInt(entry.target.dataset.count, 10);
      if (Number.isFinite(target)) countUp(entry.target, target);
    });
  }, { threshold: 0.6 });
  counters.forEach((el) => {
    if (Number.isFinite(parseInt(el.dataset.count, 10))) { el.textContent = "0"; observer.observe(el); }
  });
}

/* ==========================================================================
   11. HERO TEXT - name scramble, typing roles, code window
   ========================================================================== */

/* Name scramble: English only (Arabic letters join together, so they must not be split apart) */
function initNameScramble() {
  const heading = $("#hero-name");
  if (!heading || reducedMotion || currentLang !== "en") return;

  const fullName = heading.textContent.trim();
  const readable = document.createElement("span");      // screen readers read this
  readable.className = "sr-only";
  readable.textContent = fullName;
  const visual = document.createElement("span");        // animated letters, hidden from screen readers
  visual.setAttribute("aria-hidden", "true");

  const letters = [];
  fullName.split(" ").forEach((word, index, all) => {
    const wordEl = document.createElement("span");
    wordEl.className = "word";
    Array.from(word).forEach((ch) => {
      const charEl = document.createElement("span");
      charEl.className = "char";
      charEl.textContent = ch;
      wordEl.appendChild(charEl);
      letters.push({ el: charEl, finalChar: ch });
    });
    visual.appendChild(wordEl);
    if (index < all.length - 1) visual.appendChild(document.createTextNode(" "));
  });
  heading.textContent = "";
  heading.append(readable, visual);

  letters.forEach((l) => { l.width = l.el.getBoundingClientRect().width; });      // read all first
  letters.forEach((l) => { l.el.style.width = l.width + "px"; });                 // then write all

  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&*+";
  const startedAt = performance.now();
  let frameCount = 0;

  function frame(now) {
    const elapsed = now - startedAt;
    let allDone = true;
    frameCount++;
    letters.forEach((l, i) => {
      if (elapsed >= 500 + i * 70) {
        if (l.el.textContent !== l.finalChar) l.el.textContent = l.finalChar;
      } else {
        allDone = false;
        if (frameCount % 3 === 0) l.el.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
    });
    if (allDone) letters.forEach((l) => { l.el.style.width = ""; });
    else requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* Typing effect: cycles through the roles of the current language */
let typingTimer = 0;
function startTyping() {
  const target = $("#typing-text");
  const roles = t("roles");
  if (!target || !Array.isArray(roles) || !roles.length) return;
  clearTimeout(typingTimer);
  if (reducedMotion) { target.textContent = roles[0]; return; }

  let roleIndex = 0, charCount = 0, deleting = false;
  target.textContent = "";
  function tick() {
    const word = roles[roleIndex];
    charCount += deleting ? -1 : 1;
    target.textContent = word.slice(0, charCount);
    let delay = deleting ? 45 : 85;
    if (!deleting && charCount === word.length) { deleting = true; delay = 1600; }
    else if (deleting && charCount === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 400; }
    typingTimer = setTimeout(tick, delay);
  }
  tick();
}
function initTyping() {
  startTyping();
  languageHooks.push(startTyping);   // restart with the new language's words
}

/* Code window: types a few lines of code, then shows the tiny "live result" */
function initCodeWindow() {
  const code = $("#code-typing");
  const preview = $("#code-preview");
  const box = code && code.closest(".code-window");
  if (!code || !box) return;

  // Each line is a list of [css-class, text] pieces (the classes color the code)
  const LINES = [
    [["tk-tag", "<section "], ["tk-attr", "class"], ["tk-tag", "="], ["tk-str", '"hero"'], ["tk-tag", ">"]],
    [["tk-txt", "  "], ["tk-tag", "<h1>"], ["tk-txt", "Hello, world"], ["tk-tag", "</h1>"]],
    [["tk-tag", "</section>"]],
  ];
  const showPreview = () => { if (preview) preview.classList.add("is-live"); };

  // Hidden on small screens, or reduced motion: no typing, show the result straight away
  if (reducedMotion || getComputedStyle(box).display === "none") { showPreview(); return; }

  code.textContent = "";
  let line = 0, piece = 0, chars = 0, span = null;
  function step() {
    if (line >= LINES.length) { showPreview(); return; }
    const parts = LINES[line];
    if (piece >= parts.length) {
      if (line < LINES.length - 1) code.appendChild(document.createTextNode("\n"));
      line++; piece = 0; chars = 0; span = null;
      setTimeout(step, 180);
      return;
    }
    const cls = parts[piece][0], text = parts[piece][1];
    if (!span) { span = document.createElement("span"); span.className = cls; code.appendChild(span); }
    chars++;
    span.textContent = text.slice(0, chars);
    if (chars >= text.length) { piece++; chars = 0; span = null; }
    setTimeout(step, 45);
  }
  step();
}

/* ==========================================================================
   12. MOUSE EFFECTS
   ========================================================================== */
function initSpotlight() {
  $$(".spot").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", (e.clientX - rect.left) + "px");
      el.style.setProperty("--my", (e.clientY - rect.top) + "px");
    }, { passive: true });
  });
}

function initTilt() {
  if (!hasMouse || reducedMotion) return;
  $$(".tilt").forEach((card) => {
    let frameId = 0;
    card.addEventListener("pointermove", (e) => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        frameId = 0;
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        card.style.transform = `perspective(900px) rotateX(${((0.5 - py) * 10).toFixed(2)}deg) rotateY(${((px - 0.5) * 12).toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
        card.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
      });
    }, { passive: true });
    card.addEventListener("pointerleave", () => { cancelAnimationFrame(frameId); frameId = 0; card.style.transform = ""; });
  });
}

function initPhotoTilt() {
  const hero = $("#home");
  const photo = $("#photo-tilt");
  if (!hero || !photo || !hasMouse || reducedMotion) return;
  let frameId = 0;
  hero.addEventListener("pointermove", (e) => {
    if (frameId) return;
    frameId = requestAnimationFrame(() => {
      frameId = 0;
      const rect = hero.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      photo.style.transform = `rotateY(${(px * 16).toFixed(2)}deg) rotateX(${(-py * 16).toFixed(2)}deg)`;
    });
  }, { passive: true });
  hero.addEventListener("pointerleave", () => { cancelAnimationFrame(frameId); frameId = 0; photo.style.transform = ""; });
}

function initMagnetic() {
  if (!hasMouse || reducedMotion) return;
  $$(".magnetic").forEach((btn) => {
    let offsetX = 0, offsetY = 0;
    btn.addEventListener("pointermove", (e) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2 - offsetX;     // subtract the current shift to find the real center
      const centerY = rect.top + rect.height / 2 - offsetY;
      offsetX = (e.clientX - centerX) * 0.25;
      offsetY = (e.clientY - centerY) * 0.35;
      btn.style.transform = `translate(${offsetX.toFixed(1)}px, ${offsetY.toFixed(1)}px)`;
    }, { passive: true });
    btn.addEventListener("pointerleave", () => { offsetX = 0; offsetY = 0; btn.style.transform = ""; });
  });
}

function initRipple() {
  if (reducedMotion) return;
  $$(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const fromKeyboard = e.detail === 0;
      const x = (fromKeyboard ? rect.width / 2 : e.clientX - rect.left) - size / 2;
      const y = (fromKeyboard ? rect.height / 2 : e.clientY - rect.top) - size / 2;
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });
}

/* ==========================================================================
   13. CUSTOM CURSOR (mouse devices only)
   ========================================================================== */
function initCursor() {
  const dot = $("#cursor-dot");
  const ring = $("#cursor-ring");
  if (!hasMouse || !dot || !ring) return;
  document.documentElement.classList.add("has-cursor");

  const trails = [];
  const trailCount = reducedMotion ? 0 : 8;
  for (let i = 0; i < trailCount; i++) {
    const el = document.createElement("div");
    el.className = "cursor-trail";
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);
    trails.push({ el, x: 0, y: 0 });
  }

  let mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;
  let visible = false, frameId = 0;
  const ease = reducedMotion ? 1 : 0.18;
  const place = (el, x, y) => { el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`; };

  function loop() {
    ringX += (mouseX - ringX) * ease;
    ringY += (mouseY - ringY) * ease;
    place(dot, mouseX, mouseY);
    place(ring, ringX, ringY);
    let targetX = mouseX, targetY = mouseY;
    trails.forEach((tr, i) => {
      tr.x += (targetX - tr.x) * 0.35;
      tr.y += (targetY - tr.y) * 0.35;
      place(tr.el, tr.x, tr.y);
      tr.el.style.opacity = visible ? (0.4 * (1 - i / trailCount)).toFixed(2) : "0";
      targetX = tr.x; targetY = tr.y;
    });
    frameId = requestAnimationFrame(loop);
  }
  function setVisible(show) {
    visible = show;
    dot.classList.toggle("is-visible", show);
    ring.classList.toggle("is-visible", show);
    if (!show) trails.forEach((tr) => { tr.el.style.opacity = "0"; });
  }

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    if (!visible) {
      ringX = mouseX; ringY = mouseY;
      trails.forEach((tr) => { tr.x = mouseX; tr.y = mouseY; });
      setVisible(true);
      if (!frameId) frameId = requestAnimationFrame(loop);
    }
  }, { passive: true });
  document.documentElement.addEventListener("mouseleave", () => setVisible(false));

  const clickable = "a, button, input, textarea, label, summary, [role='option']";
  document.addEventListener("mouseover", (e) => {
    ring.classList.toggle("is-hover", e.target instanceof Element && Boolean(e.target.closest(clickable)));
  }, { passive: true });
  document.addEventListener("mousedown", () => ring.classList.add("is-down"));
  document.addEventListener("mouseup", () => ring.classList.remove("is-down"));
}

/* ==========================================================================
   14. PARTICLE NETWORK (hero background canvas)
   ========================================================================== */
function initParticles() {
  const canvas = $("#hero-canvas");
  const hero = $("#home");
  if (!canvas || !hero || !canvas.getContext || reducedMotion) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0, height = 0, particles = [], frameId = 0, heroVisible = true;
  const mouse = { x: 0, y: 0, active: false };
  const LINK_DISTANCE = 120, MOUSE_DISTANCE = 160;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth; height = canvas.clientHeight;
    if (!width || !height) return;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(80, Math.max(25, Math.floor((width * height) / 17000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.6 + 0.8,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      if (mouse.active) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, dist = Math.hypot(dx, dy);
        if (dist < MOUSE_DISTANCE && dist > 0) {
          p.x += (dx / dist) * 0.8; p.y += (dy / dist) * 0.8;
          ctx.strokeStyle = `rgba(45, 125, 255, ${((1 - dist / MOUSE_DISTANCE) * 0.5).toFixed(3)})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }

      ctx.fillStyle = "rgba(40, 224, 208, 0.8)";
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < LINK_DISTANCE) {
          ctx.strokeStyle = `rgba(40, 224, 208, ${((1 - dist / LINK_DISTANCE) * 0.35).toFixed(3)})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
    }
    frameId = requestAnimationFrame(draw);
  }

  // Only animate while the hero is on screen AND the tab is visible (saves battery)
  function updateRunning() {
    const shouldRun = heroVisible && !document.hidden;
    if (shouldRun && !frameId) frameId = requestAnimationFrame(draw);
    if (!shouldRun && frameId) { cancelAnimationFrame(frameId); frameId = 0; }
  }

  resize();
  let resizeTimer = 0;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); }, { passive: true });
  document.addEventListener("visibilitychange", updateRunning);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => { heroVisible = entries[0].isIntersecting; updateRunning(); }).observe(hero);
  }
  hero.addEventListener("pointermove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top; mouse.active = true;
  }, { passive: true });
  hero.addEventListener("pointerleave", () => { mouse.active = false; });
  updateRunning();
}

/* ==========================================================================
   15. QUICK MENU (Ctrl+K or Cmd+K)
   ========================================================================== */
function initPalette() {
  const palette = $("#palette");
  const input = $("#palette-input");
  const list = $("#palette-list");
  const empty = $("#palette-empty");
  const openBtn = $("#palette-open");
  if (!palette || !input || !list) return;

  let shown = [], active = 0, lastFocus = null;
  const SECTIONS = [["home", "nav.home"], ["about", "nav.about"], ["skills", "nav.skills"],
                    ["services", "nav.services"], ["contact", "nav.contact"]];

  // All commands in the current language
  function allCommands() {
    const go = t("kind.go"), action = t("kind.action");
    const commands = SECTIONS.map(([id, key]) => ({ label: t(key), kind: go, run: () => scrollToSection(id) }));
    commands.push(
      { label: t("cmd.wa"), kind: action, run: () => openWhatsApp(t("msg.default")) },
      { label: t("cmd.ig"), kind: action, run: openInstagram },
      { label: t("cmd.copy"), kind: action, run: copyNumber },
      { label: t("cmd.lang"), kind: action, run: () => applyLanguage(currentLang === "en" ? "ar" : "en") }
    );
    return commands;
  }

  function setActive(index) {
    if (!shown.length) { input.removeAttribute("aria-activedescendant"); return; }
    active = (index + shown.length) % shown.length;          // wraps around at both ends
    $$(".palette-item", list).forEach((li, i) => li.setAttribute("aria-selected", String(i === active)));
    const current = list.children[active];
    input.setAttribute("aria-activedescendant", current.id);
    current.scrollIntoView({ block: "nearest" });
  }

  function render() {
    const query = input.value.trim().toLowerCase();
    shown = allCommands().filter((c) => c.label.toLowerCase().includes(query));
    list.textContent = "";
    shown.forEach((cmd, i) => {
      const li = document.createElement("li");
      li.className = "palette-item";
      li.id = "palette-item-" + i;
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", "false");
      const label = document.createElement("span");
      label.textContent = cmd.label;
      const kind = document.createElement("span");
      kind.className = "palette-kind";
      kind.textContent = cmd.kind;
      li.append(label, kind);
      li.addEventListener("click", () => run(i));
      li.addEventListener("mousemove", () => { if (active !== i) setActive(i); });
      list.appendChild(li);
    });
    if (empty) empty.hidden = shown.length > 0;
    setActive(0);
  }

  function run(index) {
    const cmd = shown[index];
    if (!cmd) return;
    close(false);
    cmd.run();                                               // runs inside the click/Enter, so pop-ups are allowed
  }

  function open() {
    if (!palette.hidden) return;
    lastFocus = document.activeElement;
    palette.hidden = false;
    document.body.classList.add("palette-open");
    input.value = "";
    render();
    input.focus();
  }
  function close(returnFocus) {
    if (palette.hidden) return;
    palette.hidden = true;
    document.body.classList.remove("palette-open");
    if (returnFocus !== false && lastFocus && lastFocus.focus) lastFocus.focus();
  }

  input.addEventListener("input", render);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
    else if (e.key === "Enter") { e.preventDefault(); run(active); }
    else if (e.key === "Tab") { e.preventDefault(); }       // keep focus inside the menu
  });
  palette.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) close(); });
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); palette.hidden ? open() : close(); }
    else if (e.key === "Escape" && !palette.hidden) close();
  });
  if (openBtn) openBtn.addEventListener("click", open);

  languageHooks.push(() => { if (!palette.hidden) render(); });
}

/* ==========================================================================
   16. CONTACT FORM
   ========================================================================== */
function initForm() {
  const form = $("#contact-form");
  const nameInput = $("#contact-name");
  const messageInput = $("#contact-message");
  const nameError = $("#name-error");
  const messageError = $("#message-error");
  const counter = $("#message-count");
  const submitBtn = $("#submit-btn");
  const submitLabel = $("#submit-label");
  const status = $("#form-status");
  if (!form || !nameInput || !messageInput || !nameError || !messageError || !submitBtn || !submitLabel || !status) return;

  let submitting = false;
  const touched = { name: false, message: false };

  // Cleaning: remove hidden control characters and extra spaces
  const cleanName = (v) => v.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
  const cleanMessage = (v) => v.replace(/\r\n?/g, "\n").replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, "").trim();

  // Checking: return an error message, or "" if the value is fine
  function checkName() {
    const v = cleanName(nameInput.value);
    if (!v) return t("err.nameRequired");
    if (v.length < CONFIG.nameMin) return t("err.nameShort", { n: CONFIG.nameMin });
    if (v.length > CONFIG.nameMax) return t("err.nameLong", { n: CONFIG.nameMax });
    if (!/\p{L}/u.test(v)) return t("err.nameLetter");
    return "";
  }
  function checkMessage() {
    const v = cleanMessage(messageInput.value);
    if (!v) return t("err.msgRequired");
    if (v.length < CONFIG.messageMin) return t("err.msgShort", { n: CONFIG.messageMin });
    if (v.length > CONFIG.messageMax) return t("err.msgLong", { n: CONFIG.messageMax });
    return "";
  }

  function showError(input, errorEl, message) {
    errorEl.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
  }
  function setStatus(message, kind) {
    status.textContent = "";                         // clear first so screen readers announce the new text
    status.className = "form-status" + (kind ? " is-" + kind : "");
    if (message) status.textContent = message;
  }
  function setLoading(isLoading) {
    submitting = isLoading;
    submitBtn.disabled = isLoading;
    submitBtn.classList.toggle("is-loading", isLoading);
    submitBtn.setAttribute("aria-busy", String(isLoading));
    submitLabel.textContent = isLoading ? t("form.loading") : t("form.btn");
  }
  function updateCounter() { if (counter) counter.textContent = messageInput.value.length + " / " + CONFIG.messageMax; }

  // Live feedback while typing
  nameInput.addEventListener("blur", () => { touched.name = true; showError(nameInput, nameError, checkName()); });
  nameInput.addEventListener("input", () => { if (touched.name) showError(nameInput, nameError, checkName()); });
  messageInput.addEventListener("blur", () => { touched.message = true; showError(messageInput, messageError, checkMessage()); });
  messageInput.addEventListener("input", () => { updateCounter(); if (touched.message) showError(messageInput, messageError, checkMessage()); });
  updateCounter();

  // When the language changes, show any visible errors in the new language
  languageHooks.push(() => {
    if (touched.name) showError(nameInput, nameError, checkName());
    if (touched.message) showError(messageInput, messageError, checkMessage());
    if (!submitting) submitLabel.textContent = t("form.btn");
    setStatus("", "");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (submitting) return;
    setStatus("", "");

    touched.name = touched.message = true;
    const nameProblem = checkName();
    const messageProblem = checkMessage();
    showError(nameInput, nameError, nameProblem);
    showError(messageInput, messageError, messageProblem);
    if (nameProblem || messageProblem) {
      (nameProblem ? nameInput : messageInput).focus();
      setStatus(t("form.fix"), "error");
      return;
    }

    const text = t("msg.intro", { name: cleanName(nameInput.value) }) + "\n\n" + cleanMessage(messageInput.value);
    const url = buildWhatsAppLink(text);
    if (!url) { setStatus(t("form.badNumber"), "error"); return; }

    setLoading(true);
    // Open right now (inside the click) so pop-up blockers allow it
    const newTab = window.open(url, "_blank");
    if (newTab) { try { newTab.opener = null; } catch (error) { /* ignore */ } }

    setTimeout(() => {                               // short pause so the loading state is visible
      setLoading(false);
      if (newTab) {
        setStatus(t("form.success"), "success");
        form.reset();
        touched.name = touched.message = false;
        showError(nameInput, nameError, "");
        showError(messageInput, messageError, "");
        updateCounter();
      } else {
        setStatus(t("form.blocked"), "error");
      }
    }, 600);
  });
}

/* ==========================================================================
   17. START EVERYTHING
   ========================================================================== */
// Language first, so every other feature reads the right text
safe(initLanguage, "language");

safe(initContactLinks, "contact links");
safe(initPhotoFallback, "photo fallback");
safe(initMenu, "mobile menu");
safe(initScroll, "scroll effects");
safe(initActiveNav, "active nav link");
safe(initSpotlight, "spotlight");
safe(initTilt, "card tilt");
safe(initPhotoTilt, "photo tilt");
safe(initMagnetic, "magnetic buttons");
safe(initRipple, "button ripple");
safe(initCursor, "custom cursor");
safe(initParticles, "particles");
safe(initPalette, "quick menu");
safe(initForm, "contact form");

// Features that start once the loader has faded out
initLoader(() => {
  safe(initReveal, "scroll reveal");
  safe(initNameScramble, "name scramble");
  safe(initTyping, "typing effect");
  safe(initCodeWindow, "code window");
  safe(initCounters, "counters");
});