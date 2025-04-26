"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  ShoppingCart,
  Settings,
  Search,
  Home,
  Package,
  Sprout,
  Bug,
  LogOut
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInput } from "@/components/ui/sidebar";

const products = [
  {
    id: 1,
    name: "Pesticide X",
    category: "Pesticides",
    price: 25.99,
    imageUrl: "https://picsum.photos/200/150",
    description: "Effective pesticide for crop protection."
  },
  {
    id: 2,
    name: "Hybrid Seeds Y",
    category: "Seeds",
    price: 15.50,
    imageUrl: "https://picsum.photos/200/150",
    description: "High-yield hybrid seeds for better harvests."
  },
  {
    id: 3,
    name: "Fertilizer Z",
    category: "Fertilizers",
    price: 35.00,
    imageUrl: "https://picsum.photos/200/150",
    description: "Rich fertilizer to enhance plant growth."
  },
  {
    id: 4,
    name: "Agriculture Tool A",
    category: "Tools",
    price: 45.00,
    imageUrl: "https://picsum.photos/200/150",
    description: "Durable agriculture tool for farming."
  },
  {
    id: 5,
    name: "Organic Pesticide",
    category: "Pesticides",
    price: 29.99,
    imageUrl: "https://picsum.photos/200/150",
    description: "Organic pesticide for safe crop protection."
  },
  {
    id: 6,
    name: "Improved Seeds",
    category: "Seeds",
    price: 19.99,
    imageUrl: "https://picsum.photos/200/150",
    description: "Improved seeds for faster growth."
  },
  {
    id: 7,
    name: "Liquid Fertilizer",
    category: "Fertilizers",
    price: 39.99,
    imageUrl: "https://picsum.photos/200/150",
    description: "Liquid fertilizer for easy application."
  },
  {
    id: 8,
    name: "Harvesting Tool",
    category: "Tools",
    price: 55.00,
    imageUrl: "https://picsum.photos/200/150",
    description: "Efficient harvesting tool for farmers."
  },
  {
    id: 9,
    name: "Neem Pesticide",
    category: "Pesticides",
    price: 31.50,
    imageUrl: "https://picsum.photos/200/150",
    description: "Neem-based pesticide for natural protection."
  },
  {
    id: 10,
    name: "Premium Seeds",
    category: "Seeds",
    price: 22.50,
    imageUrl: "https://picsum.photos/200/150",
    description: "Premium quality seeds for best results."
  },
  {
    id: 11,
    name: "Granular Fertilizer",
    category: "Fertilizers",
    price: 42.00,
    imageUrl: "https://picsum.photos/200/150",
    description: "Granular fertilizer for sustained release."
  },
  {
    id: 12,
    name: "Tilling Tool",
    category: "Tools",
    price: 62.00,
    imageUrl: "https://picsum.photos/200/150",
    description: "Robust tilling tool for soil preparation."
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
          <SidebarInput placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
                    {/*  Remove this component if not defined, or ensure it's imported */}
                    {/*  <SidebarMenuBadge>5</SidebarMenuBadge> */}
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
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover rounded-md mb-2" />
                  <p>{product.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span>${product.price.toFixed(2)}</span>
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
