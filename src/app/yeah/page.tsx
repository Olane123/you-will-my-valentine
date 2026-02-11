import Image from "next/image";

export default function Yeah() {
    return (
        <div className="yeah">
            <Image
                src="/bear-kiss-bear-kisses.gif"
                alt="image"
                width={236}
                height={233}
                style={{ maxWidth: "100%", height: "auto" }}
            />
            <h1>УРАААААА, ЛЮБЛЮ ТЕБЯ</h1>
        </div>
    );
}