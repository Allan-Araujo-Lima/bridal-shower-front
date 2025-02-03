import { Header } from "@/components/header"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Outlet />
        </div>
    )
}