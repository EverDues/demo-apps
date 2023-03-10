import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './index.css'
import { EverDuesClient } from 'everdues-sdk'
import { useLogin } from './hooks/useLogin'
import { planMap, Plans, plans } from './model'
import { Card, TariffCard } from './components/Card'
import { GoogleLogin } from './components/Login'

const service: string = process.env.REACT_APP_SERVICE as string
const widgetUrl = process.env.REACT_APP_WIDGET_URL
const demoUrl = process.env.REACT_APP_DEMO_URL

function App() {
  const { login, logOut, email } = useLogin()

  const [isSubscribed, setIsSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fetched, setFethed] = useState(false)
  const [currentPlan, setCurrentPlan] = useState(Plans.Free)

  useEffect(() => {
    void (async function () {
      try {
        await EverDuesClient.init(process.env.REACT_APP_SDK_ENV as any)
        await EverDuesClient.metadata.bindMetadata()
      } catch (e: any) {
        console.log(e)
      }
    })()
  }, [])

  const getUserSubcriptions = async () => {
    const { subscriptionPlans } = await EverDuesClient.service.retrieveServiceDetails(service)
    const subscriptions = await EverDuesClient.service.retrieveServiceSubscriptions(service)
    const userSub = subscriptions.find((s) => s.identificator === email)
    const plan = subscriptionPlans.findIndex((i: any) => i.period === userSub.subscription.period)
    setCurrentPlan(plan)
  }

  const fetchSubscriptionData = async () => {
    try {
      setLoading(true)
      const subscribed = await EverDuesClient.subscription.checkIfSubscribedByEmail(service, email)
      setIsSubscribed(subscribed)
      subscribed && (await getUserSubcriptions())
    } catch (e: any) {
      console.log(e)
    } finally {
      setFethed(true)
      setLoading(false)
    }
  }
  useEffect(() => {
    if (!email) return
    fetchSubscriptionData()
  }, [email])

  return (
    <div className="bg-white bg-neutral-800  overflow-hidden">
      <div id="conteiner" className="flex flex-col  text-black max-w-7xl mx-auto pt-10">
        <div className="space-y-10">
          <h1 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            Everdues SDK usage demo
          </h1>

          <div className="flex justify-center">
            <GoogleLogin onClick={!email ? login : logOut}>{!email ? 'Sign in with Google' : email}</GoogleLogin>
          </div>
          <div>
            <div className="text-center font-semibold text-xl md:text-xl lg:text-3xl 2xl:text-4xl">Plans</div>

            <div className="flex justify-center">
              {plans.map((c, index) => (
                <TariffCard key={index} plan={c}>
                  {currentPlan == c.tariff ? (
                    <div className="flex items-end grow">
                      <button className="w-full disabled:opacity-70 disabled:cursor-not-allowed tracking-wider tracking-wider font-medium border bg-blue-600/75 border-blue-600/75 text-white px-4 rounded-2xl leading-4 h-13 inline-flex justify-center items-center space-x-3 w-full  h-12 rounded-2xl">
                        Current
                      </button>
                    </div>
                  ) : (
                    <div className="w-full space-y-2">
                      {/* <div className="font-bold text-violet-700 text-center">Subscribe by EverDues:</div> */}
                      <div className="relative group grid grid-cols-1 md:grid-cols-1 gap-2">
                        {!email && (
                          <p className="absolute flex flex-col items-center w-full bottom-full z-[10] left-0 text-center bg-white p-3 border border-gray-700/20 text-gray-700 text-sm rounded-lg font-semibold leading-5 shadow-2xl hidden group-hover:flex">
                            <span className="p-2">Please login first</span>
                            <GoogleLogin onClick={login}>{!email ? 'Login' : email}</GoogleLogin>
                          </p>
                        )}
                        <a
                          href={
                            email
                              ? `${widgetUrl}?service=${service}&tariff=${c.tariff}&redirect=${demoUrl}&theme=light`
                              : 'javascript:void(0)'
                          }
                          className={`disabled:opacity-70 disabled:cursor-not-allowed tracking-wider tracking-wider font-medium border border-blue-600/75 text-blue-600/75 px-6 rounded-2xl leading-4 h-13 inline-flex justify-center items-center space-x-3 w-full h-12 rounded-2xl hover:bg-blue-600/75 hover:text-white ${
                            (!email || isSubscribed) &&
                            'opacity-70 cursor-not-allowed !hover:border-blue-600/75 !hover:text-blue-600/75 !hover:bg-white '
                          }`}
                          id={`subscription-tariff-${index}`}
                        >
                          Subscribe
                        </a>
                      </div>
                    </div>
                  )}
                </TariffCard>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="text-center font-semibold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mt-5 p-5">
              Articles
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-8 mt-5 p-5">
              {Array.from({ length: 10 }).map((c, index) => (
                <Card key={c} index={index} blur={planMap[currentPlan] <= index}></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
