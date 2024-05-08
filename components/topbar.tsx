import {cn} from "@/lib/utils";
import Logo from "@/components/logo";

const Topbar = () => {
    return (
        <div className={cn(
            "flex items-center p-4 justify-between sticky top-0 z-30",
            "lg:hidden"
        )}>
            <Logo/>
        </div>
    )
}

export default Topbar