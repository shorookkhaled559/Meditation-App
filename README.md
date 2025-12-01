# Meditation App

This project is an **interactive meditation app** that allows users to **select calming sounds and meditation durations**. It aims to provide a **relaxing and visually appealing experience** entirely in the browser.

------------------------------------------------------------------------

## Live Demo

You can view the live version of the project here:  
**[Live Demo Link](http://shorookkhaled559.github.io/Meditation-App/)**


------------------------------------------------------------------------

## Features

- **Multiple Sounds** --- Includes rainforest rain and morning birds.  
- **Custom Meditation Duration** --- Users can select 2, 5, or 10 minutes.  
- **Animated Timer Circle** --- Progress circle updates in real-time.  
- **Responsive Design** --- Works on desktop, tablet, and mobile.  
- **Lightweight** --- Fully frontend, no backend required.  

------------------------------------------------------------------------

## Technologies Used

- **HTML5** --- Page structure and audio embedding  
- **CSS3 / Tailwind CSS** --- Styling, layout, and responsive design  
- **JavaScript (ES6)** --- Handles audio playback, timer, and circle animation  
- **Font Awesome** --- Icons for play/pause and sound buttons  

------------------------------------------------------------------------

## Project Structure

```
Meditation-App/
    │
    ├── css/style.css
    ├── js/script.js
    └── index.html
```

------------------------------------------------------------------------

## How It Works

1. On page load:  
    - The app initializes the audio element and progress circle.  
    - Default meditation duration is set to 10 minutes.  
2. Users can select a sound (rain or birds).  
3. Users can select a meditation duration (2, 5, 10 minutes).  
4. Clicking the play button starts the sound and timer.  
5. The circle outline animates according to elapsed time.  
6. When the timer ends, the audio pauses and resets.  

------------------------------------------------------------------------

## Getting Started

1. **Clone or download** this repository.  
2. Open `index.html` directly in your browser.  
3. Select a sound and duration, then click play to start meditating.  
4. Customize CSS for colors, backgrounds, or icons if desired.  

------------------------------------------------------------------------

## Folder Details

  File / Folder     Description
  ----------------- -----------------------------------
  `index.html`      Main structure of the clock
  `css/style.css`   Layout, styling, and animation rules
  `js/script.js`    Calculates time and generates dynamic CSS keyframes

------------------------------------------------------------------------

## Future Improvements

- Add **more sound options** (forest, ocean, white noise).  
- Support **auto-switching videos/backgrounds** with each sound.  
- Add **pause/resume session feature**.  
- Include **session history** to track meditation time.  
- Add **custom timer input** for user-defined durations.  

------------------------------------------------------------------------

## License

This project is **open-source** and free to use, modify, or share for  
educational and non-commercial purposes.  
Developed by **Shorouk Khaled**.

