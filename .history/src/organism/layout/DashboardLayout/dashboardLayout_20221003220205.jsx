import Sidebar from "../../../components/Sidebar";

export const DashboardLayout = () => {
   return (
      <section className="dashboard">
           <div className="dashboard_sidebar">
               <Sidebar
         </div>
         <div className="dashboard_body">
            <header className="dashboard_header"></header>
            <main className="dashboard_content"></main>
         </div>
      </section>
   );
};
