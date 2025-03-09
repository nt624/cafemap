import React from "react";
import { Link, useNavigate } from "react-router-dom";

const coffeeData = [
    { id: 1, name: "エチオピア イルガチェフェ", image: "/images/coffee1.jpg" },
    { id: 2, name: "ケニア AA", image: "/images/coffee2.jpg" },
];

const CoffeeList: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            {coffeeData.map((coffee) => (
                <div key={coffee.id}>
                    <img src={coffee.image} alt={coffee.name} width="150" />
                    <h3>{coffee.name}</h3>
                    <Link to={`/coffees/${coffee.id}`}>詳細を見る</Link>
                </div>
            ))}
            <button onClick={handleGoBack} style={{ padding: "5px 10px", cursor: "pointer" }}>
                戻る
            </button>
        </div>
    );
};

export default CoffeeList;
