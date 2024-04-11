import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola soy Daniel </h1>
        <p className={styles.description}>
        Experto en crear interfaces web atractivas y funcionales con 1 año de experiencia. Dominio de tecnologías front-end y back-end para experiencias web completas.!
        </p>
        <a href="mailto:dapt030304@gmail.com" className={styles.contactBtn}>
          Contactanos
        </a>
      </div>
      <img
        src={getImageUrl("hero/yo.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg} // Asegúrate de que esta línea aplique la clase correcta
        />  

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
