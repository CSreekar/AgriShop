"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  ShoppingCart,
  Settings,
  Search,
  Package,
  Sprout,
  Bug,
  LogOut,
  Home
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";


const products = [
  {
    id: 1,
    name: "Crystal Crop Protection Azoxystrobin 23% SC - 1 Liter",
    category: "Pesticides",
    price: 1250.00,
    imageUrl: "/azoxystrobin.jpg",
    description: "Azoxystrobin 23% SC is a broad-spectrum systemic fungicide used for the control of many important plant diseases."
  },
  {
    id: 2,
    name: "UPL Ulala Insecticide (Flonicamid 50% WG) - 150 G",
    category: "Pesticides",
    price: 980.00,
    imageUrl: "/ulala.jpg",
    description: "Ulala is a world-class insecticide containing Flonicamid 50% WG, effective for controlling Aphids, Thrips &amp; Whiteflies in various crops."
  },
  {
    id: 3,
    name: "Bayer Confidor Insecticide (Imidacloprid 17.8% SL) - 250 ml",
    category: "Pesticides",
    price: 720.00,
    imageUrl: "/confidor.jpg",
    description: "Confidor is a popular systemic insecticide containing Imidacloprid 17.8% SL, very effective against sucking insects."
  },
  {
    id: 4,
    name: "Nunhems Tejas Hybrid Chilli Seeds, High Yielding",
    category: "Seeds",
    price: 850.00,
    imageUrl: "/tejas_chilli.jpg",
    description: "Tejas is a high-yielding hybrid chilli variety known for its disease resistance and fruit quality."
  },
  {
    id: 5,
    name: "Mahyco Hybrid Okra Seeds (Bhindi), High Germination",
    category: "Seeds",
    price: 600.00,
    imageUrl: "/mahyco_okra.jpg",
    description: "Mahyco okra seeds are known for their high germination rate and yield, suitable for various climates."
  },
  {
    id: 6,
    name: "Syngenta Isabion Plant Biostimulant - 1 Liter",
    category: "Fertilizers",
    price: 1500.00,
    imageUrl: "/syngenta_isabion.jpg",
    description: "Isabion is a plant biostimulant that enhances plant growth, nutrient uptake, and stress tolerance."
  },
  {
    id: 7,
    name: "IFFCO Urban Gardens - Organic Vermicompost Fertilizer - 1 Kg",
    category: "Fertilizers",
    price: 450.00,
    imageUrl: "/iffco_vermicompost.jpg",
    description: "IFFCO vermicompost is an organic fertilizer rich in nutrients, ideal for home gardens and sustainable farming."
  },
  {
    id: 8,
    name: "Handheld Manual Seed Drill Planter",
    category: "Tools",
    price: 1800.00,
    imageUrl: "/seed_drill.jpg",
    description: "A manual seed drill planter for efficient and precise seed sowing in small to medium-sized farms."
  },
  {
    id: 9,
    name: "Agriculture Tool Kit with Essential Implements",
    category: "Tools",
    price: 2200.00,
    imageUrl: "/agriculture_toolkit.jpg",
    description: "A comprehensive agriculture tool kit with essential implements for various farming tasks."
  }
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { toast } = useToast();

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to cart!",
      description: `${productName} has been added to your shopping cart.`,
    });
  };

  return (
    <SidebarProvider>
      <Sidebar
        collapsible="icon"
      >
        <SidebarHeader>
          <div className="pb-3">
            <Avatar className="mx-auto">
              <AvatarImage src="https://picsum.photos/id/11/200/200" alt="AgriShop User" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
          <Input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Home</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    <span>Cart</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Categories</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <Sprout className="mr-2 h-4 w-4" />
                    <span>Seeds</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <Package className="mr-2 h-4 w-4" />
                    <span>Fertilizers</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <Bug className="mr-2 h-4 w-4" />
                    <span>Pesticides</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <Sprout className="mr-2 h-4 w-4" />
                    <span>Agriculture Tools</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Button variant="ghost" className="justify-start">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail>
          <SidebarTrigger />
        </SidebarRail>
      </Sidebar>
      <SidebarInset>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Welcome to AgriShop</h1>
          <p className="text-muted-foreground">Find the best products for your farm.</p>
          <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map(product => (
              <Card key={product.id}>
                <CardHeader className="p-0">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-md" />
                </CardHeader>
                <CardContent>
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <CardDescription>{product.category}</CardDescription>
                  <p>{product.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span>₹{product.price.toFixed(2)}</span>
                  <Button onClick={() => handleAddToCart(product.name)}>Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

