import { EverDuesClient } from 'everdues-sdk'
import { useEffect } from 'react'

export const WidgetSDKUsageExample = () => {
  useEffect(() => {
    void (async function () {
      const additionalParams = {
        windowSize: { w: 500, h: 700 },
        redirect: 'https://my_site_success_page',
        theme: 'light',
      }
      await EverDuesClient.widget.init('#widget_trigger', '0:00000000000000000000', '1', additionalParams)
    })()
  }, [])

  const openWidget = () => {
    console.log('Widget is opened.')
  }

  return (
    <>
      <button onClick={openWidget} id="widget_trigger">
        Subscribe
      </button>
    </>
  )
}

export const WidgeURLUsageExample = () => {
  // URL example
  const widgetUrl =
    'https://subscribe.everdues.com/?service=<service_id>&tariff=<tariff>&redirect=https://my_site_success_page&theme=<light|dark>'

  return (
    <div>
      <span>Pro</span>
      <span>Price 1$</span>
      <span>Period 1 mounth</span>
      <a href="https://subscribe.everdues.com/?service=<service_id>&tariff=<tariff>&redirect=https://my_site_success_page&theme=<light|dark>">
        Subscribe
      </a>
    </div>
  )
}

export const CheckIfUserSubscribed = () => {
  
  const service = '0:0000000000000000000'
  const email = 'example@mail.com'
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    void (async function () {
      const subscribed = await EverDuesClient.subscription.checkIfSubscribedByEmail(service, email)
      setIsSubscribed(subscribed)
    })()
  }, [])

  return (
    <div>
      <span>Pro</span>
      <span>Price 1$</span>
      <span>Period 1 mounth</span>
      {isSubscribed ? (
        <a href="https://subscribe.everdues.com/?service=<service_id>&tariff=<tariff>&redirect=https://my_site_success_page&theme=<light|dark>">
          Subscribe
        </a>
      ) : (
        <>User already subscribed</>
      )}
    </div>
  )
}
