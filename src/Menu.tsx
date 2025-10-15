import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from "./components/ui/menubar.tsx";
import navioLogo from "./../public/navio.png";
import { BiExit } from 'react-icons/bi';
import {Link} from "react-router-dom";

export default function Menu() {
    return (<Menubar className={"justify-center bg-transparent backdrop-blur-sm sticky top-0"}>
        <MenubarMenu>
            <Link to={`${import.meta.env.BASE_URL}`}>
                <img src={navioLogo} className="logo h-[85%]" alt="Vite logo" />
            </Link>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>
                <a href={"/"}>
                    Services
                </a>
            </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>
                <a href={"/"}>
                    About us
                </a>
            </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>
                <a href={"/"}>
                    Contact
                </a>
            </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>
                <Link to={`${import.meta.env.BASE_URL}preview`}>
                    Preview
                </Link>
            </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Profile</MenubarTrigger>
            <MenubarContent>
                <MenubarItem>
                    My account
                </MenubarItem>
                <MenubarItem>
                    Settings
                </MenubarItem>
                <MenubarItem className={"text-red-700 hover:!bg-red-400 hover:!text-red-950"}>
                    <div>Logout</div>
                    <BiExit/>
                </MenubarItem>

            </MenubarContent>
        </MenubarMenu>
    </Menubar>)
}