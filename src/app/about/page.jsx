// Next JS Approach
'use client'

import React, { version } from "react";
import styles from "./aboutstyle.module.css"
import Menu from "@/components/Menu"
import { useSearchParams } from "next/navigation";

const page = () => {
  const params = useSearchParams();

  return (
    <div>
      <Menu />
      <h1 className={styles.myText}>This is About page</h1>
      <p>param 1: {params.get('name')}</p>
      <p>param 2: {params.get('price') ? params.get('price') : params.get('version')}</p>
      <p>param 2: {params.get('price') || params.get('version')}</p>

    </div>
  )
}

export default page;



/*
import React from 'react';
import styles from './aboutstyle.module.css';
import Menu from '@/components/Menu';

const page = async ({searchParams}) => {
  const params = await searchParams;


  return (
    <div>
      <Menu />
      <h1 className={styles.myText}>This is About Page</h1>
      <h2>Query --- name: {params.name}</h2>
      <h2>Query --- price {params.price}</h2>
    </div>
  );
};

export default page;
*/