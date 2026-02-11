import Image from "next/image";
import bearKiss from "/bear-kiss-bear-kisses.gif"

export default function Yeah() {
    return (
        <div className="yeah">
            <Image
                src={bearKiss}
                alt="image"
                width={236}
                height={233}
                style={{ maxWidth: "100%", height: "auto" }}
            />
            <h1>УРАААААА, ЛЮБЛЮ ТЕБЯ</h1>
        </div>
    );
}