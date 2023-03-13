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
