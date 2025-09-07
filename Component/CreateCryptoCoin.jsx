import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./CardSlicer";
import { useEffect } from "react";
import CryptoCoin from "./CryptoCoin";

export default function CreateCryptoCoin() {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.cryptoCard);

    useEffect(() => {
        dispatch(fetchData(20));
    }, [dispatch]);

    if (loading) {
        return (
            <div className="loading-container">
                <h1 className="loading-text">Data is LOADING...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <h1 className="error-text">Error Occurred: {error}</h1>
            </div>
        );
    }

    return (
        <div className="crypto-grid">
            {data.map((value) => (
                <CryptoCoin key={value.id} data={value} />
            ))}
        </div>
    );
}
