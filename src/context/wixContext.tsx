"use client"


import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";

import Cookies from "js-cookie"
import { createContext, ReactNode } from "react";
import { Children } from "react";


const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}") 

const myWixClient = createClient({
        modules: {
        products,
        // currentCart,
        collections,
    
        },
        auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: {
            refreshToken, accessToken : {value:"", expiresAt:0}
        },
        }),
    });

export type WixClient = typeof myWixClient 

export const WixClientContext = createContext<typeof myWixClient>(myWixClient) 

export const WixClientContextProvider = ({
    children,
    }:
    {
        children:ReactNode; 
    })=>{
    return <WixClientContext.Provider value={myWixClient}>
                {children}
            </WixClientContext.Provider>
}
