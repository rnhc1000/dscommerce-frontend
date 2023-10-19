import { useState } from 'react';
import './styles.css';
type Props = {
    onSearch: Function;
}
export default function SearchBar({ onSearch }: Props) {

    const [text, setText] = useState("");

    function handleSubmit(event: any) {
        event.preventDefault();
        onSearch(text);
    }

    function handleChange(event: any) {
        setText(event.target.value);
    }

    function resetClick() {
        setText("");
        onSearch(text);
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
            <button type="submit">🔎︎</button>
            <input
                name="text"
                value={text}
                type="text"
                placeholder="Nome do Produto"
                onChange={handleChange}
            />
            <button onClick={resetClick}>&#x2613;</button>
        </form>

    );
}