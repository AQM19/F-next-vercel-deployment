import React, { FC, PropsWithChildren } from 'react'
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';
import Head from 'next/head';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>

            <Head>
                <title>Home - Aaron</title>
                <meta name="description" content="Home page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    );

}
