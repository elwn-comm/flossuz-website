import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { type CaseStudy, loadCaseStudies, type MDXEntry } from '@/lib/mdx'

import logoXinux from '@/images/clients/xinux/logo-light.svg'
import logoXinuxDark from '@/images/clients/xinux/logo-dark.svg'
import logoRust from '@/images/clients/rust-uzbekistan/logo-light.svg'
import logoDevOps from '@/images/clients/devops-journey/logo-light.svg'
import logoHaskell from '@/images/clients/haskell-uzbekistan/logo-light.svg'
import logoScala from '@/images/clients/scala-uzbekistan/logo-light.svg'
import logoEcma from '@/images/clients/ecma-uzbekistan/logo-light.svg'
import logoUzbekNet from '@/images/clients/uzbek-net/logo-light.svg'
import logoGofer from '@/images/clients/gofer-uzbekistan/logo-light.svg'
import logoPhp from '@/images/clients/php-uzbekistan/logo-light.svg'
import logoUzinfocom from '@/images/clients/uzinfocom-oss/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { getTranslations } from 'next-intl/server'

const clients = [
  ['Xinux', logoXinux, 'https://github.com/xinux-org'],
  ["Rust O'zbekiston", logoRust, 'https://github.com/rust-lang-uz'],
  ["Haskell O'zbekiston", logoHaskell, 'https://github.com/haskelluz'],
  ['Devops Journey', logoDevOps, 'https://github.com/devops-journey-uz'],
  ['Scala Uzbekistan', logoScala, 'https://github.com/scala-uz'],
  ['Ecma Uzbekistan', logoEcma, 'https://github.com/ecma-uz'],
  ['Uzbek Localization', logoUzbekNet, 'https://github.com/uzbek-net'],
  ['Gofer Uzbekistan', logoGofer, 'https://github.com/gofer-uz'],
  ['PHP Uzbekistan', logoPhp, 'https://github.com/phpuzb'],
  ['Uzinfocom Open Source', logoUzinfocom, 'https://github.com/uzinfocom-org'],
]

async function Clients() {
  const t = await getTranslations()

  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {t('Our-Subcommunities')}
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo, link]) => (
              <li key={client}>
                <a href={link}>
                  <FadeIn>
                    <Image src={logo} alt={client} unoptimized />
                  </FadeIn>
                </a>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

async function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  const t = await getTranslations()

  return (
    <>
      <SectionIntro
        title={t('Case-Studies-Title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{t('Case-Studies-Text')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Izlanish</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

async function Services() {
  const t = await getTranslations()

  return (
    <>
      <SectionIntro
        eyebrow={t('Services-Eyebrow')}
        title={t('Services-Title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{t('Services-Text')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title={t('Services-List.Order.Title')}>
              {t('Services-List.Order.Text')}
            </ListItem>

            <ListItem title={t('Services-List.Moderation.Title')}>
              {t('Services-List.Moderation.Text')}
            </ListItem>

            <ListItem title={t('Services-List.Tradition.Title')}>
              {t('Services-List.Tradition.Text')}
            </ListItem>

            <ListItem title={t('Services-List.Culture.Title')}>
              {t('Services-List.Culture.Text')}
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    "Biz hamjamiyatlarni birlashtirgan holda, ularni tartibga keltirib an'analarga shakl beramiz.",
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)
  const t = await getTranslations()

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            {t('Home-Hero-Title')}
          </h1>
          <p className="mt-6 text-xl text-neutral-600">{t('Home-Hero-Text')}</p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Xinux', logo: logoXinuxDark }}
      >
        {t('Testimonial-Text')}
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
