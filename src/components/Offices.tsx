import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  const t = useTranslations()

  return (
    <ul role="list" {...props}>
      <li>
        {/* <Office name="Uzinfocom" invert={invert}>
          Muminova 7/1
          <br />
          Tashkent Uzbekistan
        </Office> */}
        <Office name={t('Contact-Location-Title')} invert={invert}>
          {t('Contact-Location-Text')}
        </Office>
      </li>
    </ul>
  )
}
