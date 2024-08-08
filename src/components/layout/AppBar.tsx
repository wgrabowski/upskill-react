import {Link} from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu.tsx";


export const AppBar = () => {
    return <header>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to={"/invoices"} >
Invoices</Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </header>
}
