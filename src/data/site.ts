export const phone = {
  label: "+38 (050) 111 - 22 - 33",
  href: "tel:+380501112233",
};

export const contactPhone = {
  label: "+38050 111-22-33",
  href: "tel:+380501112233",
};

export const email = {
  label: "dental@medic.ua",
  href: "mailto:dental@medic.ua",
};

export const navigation = [
  { label: "Головна", href: "#top" },
  { label: "Про нас", href: "#about" },
  { label: "Послуги та ціни", href: "#services" },
  { label: "Наші лікарі", href: "#doctors" },
  { label: "Вакансії", href: "#contact" },
  { label: "Контакти", href: "#contact" },
];

export const advantages = [
  "Сучасне обладнання",
  "Безкоштовна консультація",
  "Лікування під мікроскопом",
  "Особливий підхід до кожного",
];

export const services = [
  {
    title: "Естетична стоматологія",
    image: "/images/service-aesthetic.jpg",
    alt: "Підбір відтінку емаль для естетичної реставрації",
  },
  {
    title: "Імплантація",
    image: "/images/service-implant.jpg",
    alt: "Діагностичне сканування перед імплантацією",
  },
  {
    title: "Лікування під мікроскопом",
    image: "/images/service-microscope.jpg",
    alt: "Лікар працює з дентальним мікроскопом",
  },
  {
    title: "Ортодонтологія",
    image: "/images/service-ortho.jpg",
    alt: "Огляд пацієнта з брекет-системою",
  },
  {
    title: "Професійна гігієна",
    image: "/images/service-hygiene.jpg",
    alt: "Робота з моделлю зубного ряду",
    tall: true,
  },
];

export const doctors = [
  {
    name: "Наумова Вікторія Олегівна",
    role: "Стоматолог-терапевт",
    image: "/images/doctor-naumova.png",
  },
  {
    name: "Петрова Анна Миколаївна",
    role: "Стоматолог-ортодонт",
    image: "/images/doctor-petrova.png",
  },
  {
    name: "Жмих Ілля Ігоревич",
    role: "Доктор медичних наук",
    image: "/images/doctor-zhmykh.png",
  },
  {
    name: "Волкова Алліна Павлівна",
    role: "Ортодонт",
    image: "/images/doctor-volkova.png",
  },
];

export const reviews = [
  {
    name: "Олена К.",
    text: "Неймовірна клініка відтепер тільки сюди ходитиму лікарі максимально чуйні та турботливі взагалі нічого не відчула під час лікування хоча з дитинства панічно боялася стоматологів тепер усім рекомендую!",
    avatar: "/images/avatar-olena.png",
  },
  {
    name: "Сергій Т.",
    text: "Сервіс просто на найвищому рівні зубки полікували під мікроскопом дуже швидко та якісно персонал привітний пригостили смачною кавою а інтер'єр такий затишний що забуваєш де знаходишся",
    avatar: "/images/avatar-serhii.png",
  },
  {
    image: "/images/smile.png",
    alt: "Посмішка пацієнтки",
  },
  {
    name: "Таісія Ф",
    text: "Дуже задоволена результатом робила тут професійну чистку та відбілювання посмішка тепер просто сяє ціни повністю прозорі без жодних прихованих доплат щиро дякую за таку красу та комфорт",
    avatar: "/images/avatar-taisia.png",
  },
];

export const steps = [
  {
    title: "Крок 1. Запис",
    text: "запис онлайн або по телефону",
    image: "/images/step-booking.png",
    alt: "Адміністратор клініки біля стійки реєстрації",
    tone: "light" as const,
  },
  {
    title: "Крок 2. Огляд",
    text: "Діагностика та складання плану лікування",
    image: "/images/service-microscope.jpg",
    alt: "Огляд пацієнта в стоматологічному кабінеті",
    tone: "brand" as const,
    cover: true,
  },
  {
    title: "Крок 3. Лікування",
    text: "Лікування до повного одужання",
    image: "/images/offer-hygiene.png",
    alt: "Лікар під час прийому",
    tone: "light" as const,
    cover: true,
  },
  {
    title: "Крок 4. Дотримання гігієни",
    text: "Дотримання рекомендацій лікаря по догляду",
    image: "/images/step-hygiene.png",
    alt: "Доглянуті зуби крупним планом",
    tone: "brand" as const,
  },
];

export const schedule = [
  { label: "Графік роботи", muted: true },
  { label: "Понеділок - Пʼятниця", light: true },
  { label: "8:00 - 18:00", strong: true },
  { label: "Субота - Неділя", light: true },
  { label: "9:00 - 15:00", strong: true },
];
