# PianoRoll Frontend Task Challenge

### Part 1: Display

Implement an interface following the design similar to YouTube. There are two states need to implement:

#### Grid layout

1. **Implement Grid Layout**: Display the Piano Rolls in a responsive grid layout on the main page.
2. **Implement Interactive Selection**: Make each Piano Roll in the grid clickable. Upon clicking an item, it should become the main element on the page, enlarging for better visibility.
3. **List Display**: Simultaneously, display the rest of the Piano Rolls in a vertical list on the right side of the page, similar to how videos are listed on YouTube’s watch page. Ensure that the list is scrollable if there are more items than can fit on the screen.
4. **Styling**: Apply styling to make the grid and its items visually appealing. Ensure that Piano Rolls are identifiable and have a consistent size across different screen resolutions.

### Part 2: Interactive Selection Tool

Your task is to implement a tool or an overlay on the piano roll that allows users to click and drag to select a range. The tool should be able to:

1. **Start Selection**: Initiate a selection when the user clicks on a point.
2. **Show Visual Feedback**: Provide real-time visual feedback as the user drags to extend the selection.
3. **Capture Selection Data**: Once a selection is made, capture the data regarding the start and end points of the selection. It's enough to `console.log` the selection. Bonus points if you can get the number of notes within the selection.
4. **Visual Representation of Selection**: Ensure that the selected range is clearly represented on the piano roll. You could change the color, add a border, or use any other visual cue to show the selection.

[Full description of challenge here](https://github.com/Nospoko/pianoroll-frontend-challenge)

# Outcome

Main technologies used: React, Next, Redux.

#### Grid layout
<img width="1120" alt="Screenshot 2023-11-02 214354" src="https://github.com/AlAstapchyk/piano-roll/assets/104316850/108c498c-dddd-4334-bfee-2ffb6af26ef9">

#### RWD and skeleton loading
<img width="370" alt="Screenshot 2023-11-02 220118" src="https://github.com/AlAstapchyk/piano-roll/assets/104316850/335381d7-7d22-411c-a0c1-7c503ab49f7b">

#### Main View
<img width="1120" alt="Screenshot 2023-11-03 034058" src="https://github.com/AlAstapchyk/piano-roll/assets/104316850/a71e6104-717d-4188-9c39-88cc0eb2bb9c">

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
