import './styles.css';

type Props = {
   text: string
}

export default function ButtonBlue({ text }: Props) {

    return (
        <div className="dsc-btn dsc-btn-blue">
            { text }
        </div>
    );
}