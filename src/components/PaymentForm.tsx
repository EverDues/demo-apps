import { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'

import { Cross, MetamaskRounded, WalletConnectRounded } from 'assets/icons'

interface ConnectWalletDialogProps {
  show: boolean
  handleClose: () => void
  tariff: any
}

export const PaymentForm = ({ show, handleClose, tariff }: ConnectWalletDialogProps) => {
  return (
    <Transition appear show={show}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex min-h-full items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-lg text-center transform overflow-hidden rounded-2xl  shadow-xl transition-all">
              <div className="flex flex-col bg-white rounded-2xl p-10 text-left text-black space-y-6 border border-neutral-200/50">
                {/* <div className="flex items-center space-x-2 text-violet-500">
                  <Wallet />
                  <h3 className="text-xl font-semibold text-white">Connect wallet</h3>
                </div> */}
                <div className="flex  w-full justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-semibold text-black">Payment</h3>
                  </div>
                  <button type="button" className="text-neutral-400" onClick={handleClose}>
                    <Cross />
                  </button>
                </div>
                <p>
                  {/* Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase
                  securely. Never share them with anyone. */}
                </p>
                <ul className="grid md:grid-cols-2 gap-6">
                  <li>
                    {/* <button type="button" onClick={handleMetamaskConnect} className="flex items-center space-x-2">
                      <MetamaskRounded stroke="black" />
                      <span className="text-lg font-semibold">Metamask</span>
                    </button> */}
                  </li>

                  <li>
                    {/* <button type="button" onClick={handleWalletConnect} className="flex items-center space-x-2">
                      <WalletConnectRounded stroke="white" />
                      <span className="text-lg font-semibold">WalletConnect</span>
                    </button> */}
                  </li>
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
