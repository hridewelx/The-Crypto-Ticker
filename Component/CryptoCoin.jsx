export default function Cryptodata({ data }) {
    return (
        <div className="crypto-card">
            <div className="crypto-header">
                <img 
                    src={data.image} 
                    alt={data.name} 
                    className="crypto-image"
                />
                <h3 className="crypto-name">{data.name}</h3>
            </div>
            <h4 className="crypto-price">Price: ${data.current_price}</h4>
            <p className="crypto-rank">Market Cap Rank: {data.market_cap_rank}</p>
        </div>
    );
}
