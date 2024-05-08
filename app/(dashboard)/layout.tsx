import Topbar from "@/components/topbar";
const DashboardLayout = async (props: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <header>
        <Topbar/>
      </header>
          {props.children}
    </div>
  )
}

export default DashboardLayout;
