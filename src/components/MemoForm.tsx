import { useState } from 'react';

const MemoForm = () => {
  const [place, setPlace] = useState('');
  const [memo, setMemo] = useState('');

  const handleSave = () => {
    if (!place || !memo) {
      alert("場所とメモを入力してください。");
      return;
    }

    const savedMemos = JSON.parse(localStorage.getItem('memos') || '[]');
    savedMemos.push({ place, memo });
    localStorage.setItem('memos', JSON.stringify(savedMemos));

    alert("メモを保存しました！");
    setPlace('');
    setMemo('');
  };

  return (
    <div>
      <label>場所名：</label>
      <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
      
      <label>メモ：</label>
      <textarea value={memo} onChange={(e) => setMemo(e.target.value)} />

      <button onClick={handleSave}>保存</button>
    </div>
  );
};

export default MemoForm;
