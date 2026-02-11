"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import bearImage from "./Bear.gif"

export default function Main() {
    const router = useRouter();
    const [scale, setScale] = useState(1);

    const handleNoClick = () => {
        setScale(prev => prev + 0.2);
    };

    const handleYesClick = () => {
        router.push("/yeah");
    };

    return (
        <>
            <header>
                <Image
                    src={bearImage}
                    alt="image"
                    width={247}
                    height={200}
                    style={{ maxWidth: "100%", height: "auto" }}
                />
                <h1>Ты будешь моей валентинкой?</h1>
            </header>
            <div className="inputs__container">
                <button
                    type="submit"
                    id="button__yes"
                    onClick={handleYesClick}
                    style={{ transform: `scale(${scale})` }}
                >
                    Yes
                </button>
                <button
                    type="submit"
                    id="button__no"
                    onClick={handleNoClick}
                >
                    No
                </button>
            </div>
        </>
    );
}