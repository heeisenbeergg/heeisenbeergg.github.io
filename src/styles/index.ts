import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.main`
  .first {
    background: red;

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

          background: #7dbb91;
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

      background: #0a7397;
    }
  }

  .second {
    background: green;
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
