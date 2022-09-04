import {
  AppHeader,
  Video,
  Overlay,
  NavDiv,
  Charts,
  CoinCharts,
  CoinTable,
  StyledForm,
  StyledInput,
  CoinList,
  CoinContainer,
  CoinDiv
} from './components/app.styles'
import APPTITLE from './components/APPTITLE';
import LISTHEADER from './components/LISTHEADER';
import COINHEADER from './components/COINHEADER';
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'
import Coin from './routes/Coin'
import ShowChart from './charts/Chart'
import Toggle from './components/toggle/index'
import LightVideo from './assets/lightmode.mp4'
import DarkVideo from './assets/darkmode.mp4'

const LIST = ({ search, handleChange, handleChangeCurrency, handleSort, isSorted, filteredCoinList, symbol, coinId, toggled }) => {
  return (
    <>
      <LISTHEADER value={search} />
      <StyledForm>
        <StyledInput onChange={handleChange} placeholder='Search Crypto Here...' />
      </StyledForm>
      <select onChange={handleChangeCurrency}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
      </select>
      <COINHEADER handleSort={handleSort} isSorted={isSorted} />
      <CoinList>
        {filteredCoinList?.map(coin => {
          return (
            <Link to={`/coin/${coin.id}`} coinId={coin.id} key={coin.id}>
              <CoinContainer key={coin.id} dark={toggled ? '#60c9ec' : '#bf2bff'}>
                <CoinDiv>
                  {coin.market_cap_rank}
                </CoinDiv>
                <CoinDiv>
                  <img src={coin.image} alt="Crypto" />
                </CoinDiv>
                <CoinDiv>
                  {coin.name}
                </CoinDiv>
                <CoinDiv>
                  ({coin.symbol.toUpperCase()})
                </CoinDiv>
                <CoinDiv>
                  <h4>
                    {symbol}
                    {coin.current_price.toLocaleString()}
                  </h4>
                </CoinDiv>
                <CoinDiv>
                  <div className={coin.price_change_percentage_24h > 0 ? 'green' : 'red'} >
                    {coin.price_change_percentage_24h?.toFixed(2)} %
                  </div>
                </CoinDiv>
              </CoinContainer>
            </Link>
          )
        })}
      </CoinList>
    </>
  )
}

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [isSorted, setSort] = useState(null)
  const [currency, setCurrency] = useState("usd");
  const [symbol, setSymbol] = useState("$");
  const [coinClicked, setCoinClicked] = useState('bitcoin')
  const [toggled, setToggled] = useState(true)
  const [open, setOpen] = useState(true)

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`

  async function GetData() {
    await axios.get(url).then(res => setCoins(res.data)).catch(err => console.log(err))
  }

  useEffect(() => {
    GetData()
  }, [currency])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSymbol = (currency) => {
    if (currency === "usd") {
      setSymbol("$");
    }
    if (currency === "eur") {
      setSymbol("€");
    }
    if (currency === "jpy") {
      setSymbol("¥");
    }
    if (currency === "btc") {
      setSymbol("₿");
    }
    if (currency === "eth") {
      setSymbol("Ξ");
    }
  };

  const handleChangeCurrency = (e) => {
    const { value } = e.target;
    setCurrency(value.toLowerCase());
    handleSymbol(value.toLowerCase());
  };

  const handleSort = () => {
    switch (isSorted) {
      case null:
        setSort(false);
        break;
      case false:
        setSort(true);
        break;
      case true:
        setSort(null);
        break;
      default:
        setSort(null);
        break;
    }
  };

  const filteredCoinList = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())).sort(!isSorted && isSorted !== false ? (a, b) => a.market_cap_rank - b.market_cap_rank : isSorted ? (a, b) => a.current_price - b.current_price : (b, a) => a.current_price - b.current_price)

  const handleToggle = () => {
    setToggled(!toggled)
  }

  const handleClick = (id) => {
    setCoinClicked(id)
    setSearch('')
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  const pathname = window.location.pathname
  console.log(pathname)

  return (
    <>
      <div className={toggled ? 'App' : 'App dark'}>
        <Overlay className="overlay">
          <Video src={toggled ? LightVideo : DarkVideo} autoPlay muted loop preload />
        </Overlay>
        <AppHeader>
          <APPTITLE></APPTITLE>
        </AppHeader>
        <NavDiv>
          <Toggle onClicked={handleToggle} toggled={toggled} />
        </NavDiv>
        <CoinCharts>
          <Charts>
            <ShowChart coinClicked={coinClicked} />
          </Charts>
        </CoinCharts>
        <CoinTable>
          <Routes>
            <Route path='/' element={<LIST filteredCoinList={filteredCoinList} symbol={symbol} toggled={toggled} search={search} handleChange={handleChange} handleChangeCurrency={handleChangeCurrency} handleSort={handleSort} isSorted={isSorted} />} />
            <Route path='/coin/:coinId' element={<Coin handleClick={handleClick} handleOpen={handleOpen} />} />
          </Routes>
        </CoinTable>
      </div>
    </>
  )
}

export default App; 