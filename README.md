# Getting Started with Create React App (WIP)
https://www.figma.com/file/dZsRtG46UAOq9fayRU6ktZ/Card-Templates-(Community)?node-id=0%3A1

## Available Scripts
http://card-templates-community.vercel.app

Usage
ComponentName, light or dark verison can be specified with light flag, light = {false} imply that card uses dark mode. It works only for WideCard as for now.
Some cards have variants, with preapplied images, but all might and could be at some point componentized, might do it when i have time..

      <WideCard variant="jazzman" />
      <WideCard variant="jazzman" light={false} />
      <WideCard variant="girl" />
      <WideCard variant="girl" light={false} />
      <WideCard variant="watering" />
      <WideCard variant="watering" light={false} />
      <BuyNowCard/>
      <BuyNowCard extended/>
