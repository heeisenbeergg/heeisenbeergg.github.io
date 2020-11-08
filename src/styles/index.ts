import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.main`
  .first {
    /* background: red; */

    border-radius: 4px;

    overflow: hidden;

    .offset {
      height: 100%;
      width: 100%;
    }

    .a {
      height: 100%;

      background: #f5f1ea;

      display: flex;
      align-items: flex-end;

      .left-side {
        height: 100%;
        width: 50%;

        background: #7dbb91;
      }

      .right-side {
        height: 100%;
        width: 50%;

        .right-image {
          height: 100%;
          width: 100%;

          border-radius: 50%;
          border: 15px solid #fff;

          background: #7dbb91;

          /* transition: 0.5s;

            :hover {
              box-shadow: 0 0 5px 2px rgba(0, 140, 186, 0.5);
            } */
        }
      }
    }

    .b {
      height: 100%;
      width: 100%;

      background: #582534;
    }

    .c {
      height: 100%;
      width: 100%;

      background-image: url('https://data.1freewallpapers.com/download/helix-nebula-space-stars-explosion-brilliance.jpg');
    }
  }

  .second {
    height: 100vh;
    width: 100%;

    /* position: relative; */

    background: red;

    img.universi {
      height: 100vh;
      width: 100%;

      position: absolute;

      /* filter: blur(1px); */
      background-repeat: no-repeat;
    }
  }

  .third {
    background: yellow;
  }

  .fourth {
    background: blue;
  }
`

export const Section = styled.div`
  position: relative;
`

export const Sticky = styled(motion.div)`
  height: 100vh;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`
