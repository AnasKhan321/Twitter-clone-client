

import type { Metadata } from "next";
import "./globals.css";
import { Inter   } from "next/font/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Toaster}  from "react-hot-toast" 

import ReactQueryClient from "@/Components/ReactQueryClient/index" ; 


export const metadata: Metadata = {
  title: "X.com",
  description: "A twitter clone made by anas Khan",
};


const inter = Inter({subsets : ["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <ReactQueryClient> 
    <GoogleOAuthProvider clientId="628059584467-83ngjfflop94rascrq2flsjcea5nn3td.apps.googleusercontent.com">
      <html lang="en">
     
        <body className={`${inter.className} antialiased`}>
        <Toaster />
          {children}
        </body>
      </html>

    </GoogleOAuthProvider>
    </ReactQueryClient>


  );
}
