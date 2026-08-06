import { tickerItems } from '../../data/portfolioData'

const Ticker = () => (
  <div className="ticker" aria-label="Technical skills">
    <svg className="ticker-wave" viewBox="0 0 1440 28" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 20c128-18 236 5 364-6 154-14 253-17 410-2 145 14 256-8 390-5 103 2 183 13 276 2v19H0Z" />
    </svg>
    <div className="ticker-track">
      {[...tickerItems, ...tickerItems].map((item, index) => (
        <span key={`${item}-${index}`}>
          {item}<i aria-hidden="true">/</i>
        </span>
      ))}
    </div>
  </div>
)

export default Ticker
