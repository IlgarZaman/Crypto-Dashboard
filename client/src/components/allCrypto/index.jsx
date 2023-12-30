import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import {
  allCrypto,
  searchProducts,
  selectCryptoData,
  selectSearchTerm,
} from "../../redux/slice/crypto";
import { selectDarkMode } from "../../redux/slice/darkModeSlice";
import { useEffect, useState } from "react";
import BtcLogo from "../../assets/bitcoin-btc-logo.png";
import BnbLogo from "../../assets/source.png";
import EthLogo from "../../assets/Ethereum.jpg";
import PositiveCard from "../cards/positiveCard";
import NegativeCard from "../cards/negativeChart";
const AllCrypto = () => {
  const dispatch = useDispatch();
  const initialProducts = useSelector(selectCryptoData);
  const isDarkModeEnabled = useSelector(selectDarkMode);
  useEffect(() => {
    dispatch(allCrypto());
  }, []);
  const [visibleProducts, setVisibleProducts] = useState(3);
  const loadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  };
  const formatNumber = (number, decimalPlaces) => {
    return parseFloat(number).toFixed(decimalPlaces);
  };
  const filteredProducts = initialProducts.filter(
    (product) => product.id.toLowerCase() !== "tether"
  );
  const searchTerm = useSelector(selectSearchTerm);
  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    dispatch(searchProducts(newSearchTerm));
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="allCrypto" data-aos="zoom-in">
      <div className="mainDiv">
        <div className={isDarkModeEnabled ? "darkMode" : "lightMode"}>
          <div className="headSec">
            <div className="headName">
              <h3>Market</h3>
            </div>
            <div className="search">
              <input
                type="text"
                className="searchInput"
                placeholder="Search..."
                onChange={handleSearch}
                value={searchTerm}
              />
            </div>
          </div>
          <div className="tabSec">
            <table>
              <thead>
                <tr>
                  <th>Market</th>
                  <th>Price</th>
                  <th>24H Change</th>
                  <th>24H Lowest</th>
                  <th>24H Volume</th>
                  <th>24H Value</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.slice(0, visibleProducts).map((product) => (
                  <tr key={product.id}>
                    <td className="name">
                      <img
                        style={{
                          display:
                            product.symbol === "BTC" ||
                            product.symbol === "ETH" ||
                            product.symbol === "BNB"
                              ? "block"
                              : "none",
                        }}
                        src={
                          (product.symbol === "BTC" ? BtcLogo : "") ||
                          (product.symbol === "ETH" ? EthLogo : "") ||
                          (product.symbol === "BNB" ? BnbLogo : "")
                        }
                        alt={product.symbol}
                      />
                      {`${product.name}(${product.symbol})`}
                    </td>
                    <td>{`${(product.supply / 1000).toFixed(2)}K`}</td>
                    <td>
                      {product.changePercent24Hr > 0 ? "+" : ""}
                      {formatNumber(product.changePercent24Hr, 2)}
                    </td>
                    <td>
                      {product.vwap24Hr > 1000
                        ? `${(product.vwap24Hr / 1000).toFixed(2)}`
                        : formatNumber(product.vwap24Hr, 2)}
                    </td>
                    <td>{`${(product.volumeUsd24Hr / 100000).toFixed(
                      0
                    )} BTC`}</td>
                    <td>{(product.marketCapUsd / 1000000).toFixed(0)} BTC</td>
                    <td>
                      {product.changePercent24Hr > 0 ? (
                        <PositiveCard />
                      ) : (
                        <NegativeCard />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* {visibleProducts < initialProducts.length && (
            <button onClick={loadMore}>Load More</button>
          )} */}
    </div>
  );
};

export default AllCrypto;
