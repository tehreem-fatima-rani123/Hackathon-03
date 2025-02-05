import Categories from "@/components/Topcategories";
import Featuredproduct from "@/components/featured-product";
import HotProducts from "@/components/hotProducts";
import Logo from "@/components/Logo";
import Ourproduct from "@/components/ourProducts";
import Section01 from "@/components/Herosection";
import Hero from "./hero/page";
import { LogIn } from "lucide-react";
import LoginPage from "@/components/loginpage";
export default async function Home() {
  
  return (
    <>
    <Hero/>
    <Section01/>
    <Logo/>
    <Featuredproduct/>
    <Categories/>
    <HotProducts/>
    <Ourproduct/>
   
    </>
        )}
        