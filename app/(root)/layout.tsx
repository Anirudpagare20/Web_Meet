import StreamVideoProvider from '@/providers/StreamClientProviders'
import { Metadata } from 'next';

import React, { Children, ReactNode } from 'react'

export const metadata: Metadata = {
    title: "Meet-X by Anirud",
    description: "Video Conferencing Website",
    icons: '/icons/logo.svg'
  };
  

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>

        </main>
    )
}

export default RootLayout
