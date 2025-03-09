import React from "react";

type BeansDetailsType = {
    [key: number]: {
        name: string;
        taste: string;
        cafe: string;
    };
};

const beansDetails: BeansDetailsType = {
    1: { name: "エチオピア イルガチェフェ", taste: "フルーティー", cafe: "Blue Bottle Coffee" },
    2: { name: "ケニア AA", taste: "リッチで甘い", cafe: "Starbucks Reserve" },
};

type Params = {
    id: string;
};

const BeansDetail: React.FC<Params> = ({ id }) => {
    const beans = beansDetails[Number(id)];

    if (!beans) return <p>コーヒーが見つかりません</p>;

    return (
        <div>
            <h2>{beans.name}</h2>
            <p>味の特徴: {beans.taste}</p>
            <p>購入したカフェ: {beans.cafe}</p>
        </div>
    );
};

export default BeansDetail;
