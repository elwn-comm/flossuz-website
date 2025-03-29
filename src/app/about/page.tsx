import { type Metadata } from "next";
import Image from "next/image";

import { Border } from "@/components/Border";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import { PageIntro } from "@/components/PageIntro";
import { PageLinks } from "@/components/PageLinks";
import { SectionIntro } from "@/components/SectionIntro";
import { StatList, StatListItem } from "@/components/StatList";
import imageAngelaFisher from "@/images/team/angela-fisher.jpg";
import imageBenjaminRussel from "@/images/team/benjamin-russel.jpg";
import imageBlakeReid from "@/images/team/blake-reid.jpg";
import imageChelseaHagon from "@/images/team/chelsea-hagon.jpg";
import imageDriesVincent from "@/images/team/dries-vincent.jpg";
import imageEmmaDorsey from "@/images/team/emma-dorsey.jpg";
import imageJeffreyWebb from "@/images/team/jeffrey-webb.jpg";
import imageKathrynMurphy from "@/images/team/kathryn-murphy.jpg";
import imageLeonardKrasner from "@/images/team/leonard-krasner.jpg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpg";
import imageMichaelFoster from "@/images/team/michael-foster.jpg";
import imageWhitneyFrancis from "@/images/team/whitney-francis.jpg";
import { loadArticles } from "@/lib/mdx";

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Madaniyatimiz"
        title="Ochiq manbali innovatsiyalar orqali o'z ishtiyoqingni kuchaytir."
        invert
      >
        <p>
          Biz ochiq manba tamoyillari va hamkorlik orqali rivojlanishga sodiq
          bo'lgan birdam jamoamiz.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Hamkorlik" invert>
            Biz birgalikda rivojlanishga ishonamiz. Har bir loyiha ochiq
            hamkorlik orqali rivojlanadi.
          </GridListItem>
          <GridListItem title="Ishonch" invert>
            Biz uchun ochiqlik va ishonch asosiy mezondir. Jamoamiz har doim o'z
            bilim va tajribasini ochiq holda baham ko'radi.
          </GridListItem>
          <GridListItem title="Taraqqiyot" invert>
            Innovatsiyalar va yangi bilimlarni izlash orqali doimo oldinga
            intilamiz va jamoamiz a'zolarini qo'llab-quvvatlaymiz.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

const team = [
  {
    title: "Yetakchi Jamoa",
    people: [
      {
        name: "Orzklv",
        role: "Asoschi / Yetakchi",
        link: "https://orzklv.uz",
        image: { src: imageLeslieAlexander },
      },
      {
        name: "Otabek Ismoilov",
        role: "Rais / Yetakchi",
        link: "https://github.com/ismoilovdevml",
        image: { src: imageDriesVincent },
      },
      {
        name: "Kei Lissimus",
        role: "Rais / Yetakchi",
        link: "https://github.com/thelissimus",
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: "Hamjamiyat Boshqarmalari",
    people: [
      {
        name: "Shahzod Qudratov",
        role: "Hamjamiyatlar Boshqaruvi",
        link: "https://shakhzod.me",
        image: { src: imageChelseaHagon },
      },
      {
        name: "Bahrom Rahmatov",
        role: "Mahalliylashtirish Raisi",
        link: "https://bahrom04.github.io",
        image: { src: imageEmmaDorsey },
      },
      {
        name: "Bobomurod Mo'minov",
        role: "'Awesome' Boshqaruvi",
        link: "https://bobomurod.uz",
        image: { src: imageBlakeReid },
      },
      {
        name: "Ahmad Qodirov",
        role: "DevOps Journey",
        link: "https://orzklv.uz",
        image: { src: imageLeonardKrasner },
      },
      {
        name: "Manuchehr Usmonov",
        role: "VP, Human Resources",
        link: "https://manu.uz",
        image: { src: imageKathrynMurphy },
      },
    ],
  },
];

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <a href={person.link}>
                        <FadeIn>
                          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                            <Image
                              alt=""
                              {...person.image}
                              className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                              <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                {person.name}
                              </p>
                              <p className="mt-2 text-sm text-white">
                                {person.role}
                              </p>
                            </div>
                          </div>
                        </FadeIn>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  );
}

export const metadata: Metadata = {
  title: "Biz haqimizda",
  description:
    "We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.",
};

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2);

  return (
    <>
      <PageIntro eyebrow="Biz haqimizda" title="Kuch birlikda!">
        <p>
          O'zbekistonda ochiq dasturiy ta'minot madaniyatini rivojlantirish va
          dasturchilar uchun ijodiy va hamkorlik muhiti yaratishni maqsad qilgan
          tashabbusdir.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Floss O'zbekiston aslida tarixda boshqa nomlar bilan yaralib, yillar
            davomida rivojlanib kelgan, so'ngra hamjamiyat bilan birgalikda
            uning qadriyatlari haqida kelishib olingach, hozirgi nom va holatga
            keltirilgan tashkilot.
          </p>
          <p>
            Bizning asosiy maqsadimiz, biz ochiq manbali dasturiy ta'minot
            tamoyillarini ommalashtirish, bilim almashish hamda dasturchilar
            orasida erkin va ochiq muloqotni rag'batlantirishga intilamiz.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="1323+" label="A'zolar soni" />
          <StatListItem value="4" label="Hamjamiyatlar" />
          <StatListItem value="12+" label="Loyihalar" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Bloglarimizdan"
        intro="Bizning tajribali dasturchi va mutaxassislar jamoamiz doimo ochiq manbali dasturlar va innovatsion yechimlarni rivojlantirish orqali jamiyatimiz rivojiga hissa qo'shishga intiladi. Texnik maqolalar, amaliy maslahatlar va dasturlash sohasidagi yangiliklar bilan sizlarni doimiy ravishda tanishtirib boramiz."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  );
}
