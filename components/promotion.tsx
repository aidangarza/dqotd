import promotionStyles from './promotion-styles.module.css'

const PROMOTIONS = [
  {
    name: 'acorns_a',
    url: 'https://share.acorns.com/aidangarza9',
    text: "Walt wasn't good with money. His big brother Roy always came to his rescue. If you don't have a Roy, consider building your saving habits with Acorns.",
    cta: 'Click here to learn more.',
  },
]

export default function Promotion() {
  const promotion = PROMOTIONS[0]

  return (
    <aside className={promotionStyles['promotion']}>
      <a href={promotion.url} target="_blank">
        <img src="/assets/images/Acorns-Logo.svg" alt="Acorns Logo" />
        <p>
          {promotion.text}
          <br />
          <span>{promotion.cta}</span>
        </p>
      </a>
    </aside>
  )
}
