import Topbar from "@/components/topbar";

const LandingLayout = (props: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen">
        <Topbar/>
      <main className="max-w-5xl mx-auto">
        {props.children}
      </main>
    </div>
  )
}

export default LandingLayout;
