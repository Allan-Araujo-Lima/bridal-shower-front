import { Outlet } from "react-router-dom"
import { Header } from "../../components/header/index"
import { Footer } from "../../components/footer/index"

export const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}