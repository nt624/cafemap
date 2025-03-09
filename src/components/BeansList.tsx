import React from "react";

const beansData = [
    { id: 1, name: "エチオピア イルガチェフェ", image: "/images/coffee1.jpg" },
    { id: 2, name: "ケニア AA", image: "/images/coffee2.jpg" },
];

const BeansList: React.FC = () => {

    return (
        <div>
            {beansData.map((beans) => (
                <div key={beans.id}>
                    <img src={beans.image} alt={beans.name} width="150" />
                    <h3>{beans.name}</h3>
                    <a href={`/beans/${beans.id}`}>詳細を見る</a>
                </div>
            ))}
        </div>
    );
};

export default BeansList;