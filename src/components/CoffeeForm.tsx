import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CoffeeForm: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [name, setName] = useState("");
    const [taste, setTaste] = useState("");
    const [cafe, setCafe] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, taste, cafe, image });
    };

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                コーヒーの名前:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                味の特徴:
                <input type="text" value={taste} onChange={(e) => setTaste(e.target.value)} />
            </label>
            <label>
                購入したカフェ:
                <input type="text" value={cafe} onChange={(e) => setCafe(e.target.value)} />
            </label>
            <label>
                写真をアップロード:
                <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} />
            </label>
            <button type="submit" style={{ padding: "5px 10px", cursor: "pointer" }}>
                保存
            </button>
            <button onClick={handleGoBack} style={{ padding: "5px 10px", cursor: "pointer" }}>
                戻る
            </button>
        </form>
    );
};

export default CoffeeForm;
