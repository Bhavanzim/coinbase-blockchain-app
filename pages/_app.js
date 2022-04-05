import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

const supportedChainIDs = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
  <ThirdwebWeb3Provider
  supportedChainIDs={supportedChainIDs}
  connectors={connectors}
  >
  return <Component {...pageProps} />
  </ThirdwebWeb3Provider>
  )
}

export default MyApp
