import React from "react";
import { useParams, useNavigate } from "react-router-dom";

type CoffeeDetailsType = {
    [key: number]: {
        name: string;
        taste: string;
        cafe: string;
    };
};

const coffeeDetails: CoffeeDetailsType = {
    1: { name: "エチオピア イルガチェフェ", taste: "フルーティー", cafe: "Blue Bottle Coffee" },
    2: { name: "ケニア AA", taste: "リッチで甘い", cafe: "Starbucks Reserve" },
};

interface Params {
    id: string;
}

const CoffeeDetail: React.FC<Params> = () => {
    const { id } = useParams<{ id: string }>();
    const coffee = coffeeDetails[Number(id)];

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    if (!coffee) return <p>コーヒーが見つかりません</p>;

    return (
        <div>
            <h2>{coffee.name}</h2>
            <p>味の特徴: {coffee.taste}</p>
            <p>購入したカフェ: {coffee.cafe}</p>
            <button onClick={handleGoBack} style={{ padding: "5px 10px", cursor: "pointer" }}>
                戻る
            </button>
        </div>
    );
};

export default CoffeeDetail;
