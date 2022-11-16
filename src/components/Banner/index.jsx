import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import Container from "../../layout/Container";
import icons from "./bannerITems";

import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={classes["banner"]}>
      <div className={classes['banner__position']}></div>
      <Container>
        <h1>Shopping with us is easy and convenient</h1>
        <p>
          As is commonly believed, those seeking to displace traditional
          production, nanotechnologies can be verified in a timely manner.
        </p>
        <button>
          Full view <HiOutlineArrowNarrowRight />
        </button>
        <ul>
          {icons.map(({ icon, link }, i) => (
            <li key={i}>
              <a href={link}>{icon}</a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Banner;
