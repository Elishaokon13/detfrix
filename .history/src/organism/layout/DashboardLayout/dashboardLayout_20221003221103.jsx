import Sidebar from "../../../components/Sidebar";
import Header from "../../base/dashboardHeader";

export const DashboardLayout = ({children}) => {
   return (
      <section className="dashboard">
         <div className="dashboard_sidebar">
            <Sidebar />
         </div>
         <div className="dashboard_body">
            <header className="dashboard_header">
               <Header />
            </header>
               <main className="dashboard_content">
                   
            </main>
         </div>
      </section>
   );
};
