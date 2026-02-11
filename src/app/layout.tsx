import React from "react";

import "./styles/style.css"

export default function DashboardLayout({children,}:
{
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}