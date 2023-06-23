import React from "react";
import Card from "./ui/Card";
import anna from "../assets/anna.jpg";
import leonor from "../assets/leonor.jpg";
import peter from "../assets/peter.jpg";

import classes from "./Hightlights.module.css";

export default function Hightlights() {
  return (
    <section className={classes.Hightlights}>
      <div>
        <div className={classes.titleContainer}>
          <h1>Testimonials</h1>
        </div>
      </div>

      <div className={classes.cardContainer}>
        <Card
          image={anna}
          name="Anna Thompson"
          title="Anna Thompson"
          description="I really love this restaurant. I like to come here frequently. The food is so rich!"
        />
        <Card
          image={peter}
          name="Petter yamaha"
          title="Petter Yamaha"
          description="This restaurant is wonderful!, the food, the customer service. Everything is wonderful!"
        />
        <Card
          image={leonor}
          name="Leonor Smith"
          title="Leonor Smith"
          description="My family and I really love this restaurant. We eat here very frequently! We recommend it!"
        />
      </div>
    </section>
  );
}
