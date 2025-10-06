import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Kashf qilish" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Biz jamiyat a'zolarimiz, dasturchilar va ochiq manba muhitidagi
          hamkorlarimiz bilan yaqin hamkorlikda ishlaymiz. Ularning
          ehtiyojlarini chuqur tushunish, faoliyatini o‘rganish va ular duch
          kelayotgan{' '}
          <strong className="font-semibold text-neutral-950">
            texnik yoki tashkiliy muammolarni
          </strong>
          {'  '}
          aniqlash biz uchun muhim.
        </p>
        <p>
          Tahliliy bosqichda biz ochiq manbali infratuzilma, mavjud loyihalar va
          hamjamiyat faolligi ustida ishlaymiz. Maqsad — mavjud imkoniyatlar va
          resurslarni aniqlash, shuningdek, ularni qanday{' '}
          <strong className="font-semibold text-neutral-950">yaxshilash</strong>{' '}
          mumkinligini aniqlash.
        </p>
        <p>
          Bu bosqich tugagach, biz tahliliy hisobot, taklif etilgan yechimlar va
          hamjamiyatga qo‘shilishni soddalashtiruvchi aniq reja bilan{' '}
          <strong className="font-semibold text-neutral-950">hamjamiyat</strong>{' '}
          a'zolari orasida xoh ovoz berish, xoh suhbat darajasida muhokama qilib
          olamiz.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Ushbu bosqich quyidagilarni o‘z ichiga oladi:
      </h3>
      <TagList className="mt-4">
        <TagListItem>Chuqur suhbatlar va intervyular</TagListItem>
        <TagListItem>Hamjamiyat ehtiyojlarini tahlil qilish</TagListItem>
        <TagListItem>Foydalanuvchi so‘rovnomalari</TagListItem>
        <TagListItem>Texnik imkoniyatlar bahosi</TagListItem>
        <TagListItem>Prototip g‘oyalar ishlab chiqish</TagListItem>
        <TagListItem>Loyihalarning ochiqlik darajasini tekshirish</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Qurish" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          "Kashf qilish" bosqichidan so‘ng, har bir tashabbus uchun batafsil
          yo‘l xaritasi ishlab chiqiladi va ishlar bosqichma-bosqich amalga
          oshiriladi. Bu xarita loyihaning texnik asoslarini puxta
          rejalashtirish va imkon qadar aniq yo‘nalishda harakat qilish imkonini
          beradi.
        </p>
        <p>
          Har bir loyiha uchun alohida koordinatsion mas'ul tayinlanadi (rais) —
          ular loyiha jarayonini kuzatib borish, hamjamiyat bilan doimiy aloqa
          o‘rnatish va rivojlanishni hujjatlashtirish uchun javobgardir. Texnik
          jamoamiz esa kod yozish, mavjud ochiq manbali loyihalarni tahlil
          qilish va yangi funksionalliklarni ishlab chiqish ustida ishlaydi.
        </p>
        <p>
          Loyihani har doim oshkora olib boramiz, muntazam yangilanishlar
          beriladi, shuningdek, barcha ishtirokchilar jarayonning har bir
          bosqichida ishtirok etishadi.
        </p>
      </div>

      <Blockquote
        author={{
          name: 'Manuchehr Usmonov',
          role: 'Uzinfocom dan Texnik Muhandis',
        }}
        className="mt-12"
      >
        Floss jamoasi loyihaning har bir bosqichida yangilanishlar berib
        borishdi – ular go‘yo avtomatlashtirilgandek tez va tartibli harakat
        qilishdi!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Yetkazib berish" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          "Qurish" bosqichi yakuniga yetgach, biz ishlab chiqilgan yechimni
          hamjamiyatga taqdim etamiz. Bu bosqichda asosiy e'tibor{' '}
          <strong className="font-semibold text-neutral-950">
            funksionallik,
          </strong>{' '}
          barqarorlik va foydalanishga tayyorlikni ta'minlashga qaratiladi.
        </p>
        <p>
          Jamoa barcha muhim sahifalar va funksiyalarni ishga tushirishdan oldin
          sinovdan o‘tkazadi, texnik jihatdan tayyorlash va yakuniy sozlamalarni
          amalga oshiradi. Biz foydalanuvchilar tomonidan haqiqiy foydalanishni
          nazorat qilish uchun monitoring tizimlarini ham yo‘lga qo‘yamiz.
        </p>
        <p>
          Yechimlar to‘liq ishlayotganidan so‘ng, biz ularni hujjatlashtirib,
          texnik yordam va xizmat ko‘rsatish rejasi bilan birgalikda taqdim
          etamiz.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Ushbu bosqich quyidagilarni o‘z ichiga oladi:
      </h3>
      <List className="mt-8">
        <ListItem title="Testlash">
          Testdan o‘tkazish va sifat nazorati
        </ListItem>
        <ListItem title="Infratuzilma">
          Infratuzilmani barqarorlashtirish (masalan, server konfiguratsiyasi)
        </ListItem>
        <ListItem title="Qo'llab-quvvatlash">
          Foydalanuvchi qo‘llanmalari va hujjatlar va hamda hamjamiyatga e’lon
          qilish va taqdimotlar.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Bizning qadriyatlarimiz"
        title="Ishonchlilik va innovatsiyani muvozanatlash"
      >
        <p>
          Biz har doim texnologik yangiliklar va zamonaviy yondashuvlar
          markazida bo‘lishga intilamiz. Shu bilan birga, harakatlarimiz ochiq
          manbali qadriyatlar, foydalanuvchi manfaatlari va jamiyat
          ehtiyojlariga tayangan holda shakllanadi.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Aniqlik">
            Har bir hamkorlikka puxta tayyorgarlik bilan yondashamiz: dizayn,
            texnik konfiguratsiya va yakuniy sinovlar izchil amalga oshiriladi.
          </GridListItem>
          <GridListItem title="Samaradorlik">
            Vaqtni qadrlaymiz va natijaga yo‘naltirilgan ish yuritamiz — har bir
            bosqich puxta rejalashtiriladi.
          </GridListItem>
          <GridListItem title="Moslashuvchanlik">
            Har bir loyiha o‘ziga xos; biz har doim foydalanuvchi ehtiyojlariga
            moslashishga tayyormiz.
          </GridListItem>
          <GridListItem title="Halollik">
            Jarayonlarimizda ochiqlikni ta’minlaymiz, barcha ma’lumotlar shaffof
            va tushunarli tarzda taqdim etiladi.
          </GridListItem>
          <GridListItem title="Sadoqat">
            Uzoq muddatli hamkorlikni qadrlaymiz; ishonch asosida qurilgan
            aloqalar biz uchun ustuvor ahamiyatga ega.
          </GridListItem>
          <GridListItem title="Innovatsiya">
            Yangi texnologiyalarni o‘rganamiz, sinaymiz va ochiq manbali
            ekotizimga o‘z hissamizni qo‘shamiz.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Bizning jarayonimiz',
  description:
    'Samarali, innovatsion va ochiq manbaga asoslangan yechimlar bilan jamiyatimizga maksimal qiymat yaratamiz.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Jarayon" title="Biz qanday ishlaymiz">
        <p>
          Biz samaradorlik va ochiq manbali dasturlar orqali resurslarimizdan
          maksimal foydalanishga ishonamiz. Bizning asosiy yondashuvimiz
          innovatsion g'oyalarni doimiy ravishda rivojlantirish va hamjamiyat
          bilan ochiq muloqot orqali yangiliklar yaratishdir.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
