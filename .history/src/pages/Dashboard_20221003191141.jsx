import React from "react"
import Sidebar from "../components/Sidebar"
import Portfolio from "../portfolio/Portfolio"

export default function Dashboard() {
    return (
        <div className="grid grid-cols-3">
        
           <Sidebar />
            <Portfolio />

        </div>
    )
}
