import { Cross, HelpCircle, MetamaskRounded, WalletConnectRounded } from 'assets/icons'
import { PaymentType } from '../utils'

const WalletTypeToIcon: any = {
  [PaymentType.METAMASK]: MetamaskRounded,
  [PaymentType.WALLETCONNECT]: WalletConnectRounded,
}

const WalletTypeToLabel: any = {
  [PaymentType.METAMASK]: 'Metamask',
  [PaymentType.WALLETCONNECT]: 'Wallet Connect',
}

interface WalletTriggerProps {
  paymentType: any
  walletAddress: string
  handleConnectWalletClick: () => void
  handleDisconnect: () => void
}

export const WalletTrigger = ({
  paymentType,
  walletAddress,
  handleConnectWalletClick,
  handleDisconnect,
}: WalletTriggerProps) => {
  if (![PaymentType.METAMASK, PaymentType.WALLETCONNECT].includes(paymentType))
    return (
      <button
        type="button"
        className="flex items-center justify-center relative bg-blue-600/75 border-blue-600/75 text-white font-medium py-2 px-4 rounded shadow hover:shadow-lg"
        onClick={handleConnectWalletClick}
      >
        {/* <span>Connect wallet</span> */}
        <>
          Connect wallet
          <div className="ml-3 flex">
            <WalletConnectRounded stroke="white" className="z-[1]"></WalletConnectRounded>
            <MetamaskRounded stroke="white" className="-ml-3"></MetamaskRounded>
          </div>
        </>
      </button>
    )

  const WalletIcon = WalletTypeToIcon[paymentType]
  const walletLabel = WalletTypeToLabel[paymentType]

  return (
    <div className="flex items-center justify-between space-x-2 bg-blue-500/50 border-blue-500/50 text-white font-medium py-2 px-4 rounded shadow hover:shadow-lg">
      <div className="flex items-center space-x-2">
        <WalletIcon stroke={'#3b82f6bf'} />
      </div>
      <button type="button" onClick={handleDisconnect} className="">
        Disconnect
      </button>
    </div>
  )
}
