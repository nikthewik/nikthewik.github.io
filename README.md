# NikTheWik's Personal Website

This is my first personal website, complete and fully responsive,
built for the HTML and CSS exam on [start2impact University](https://www.start2impact.it/).

## Table of Contents

- [Overview](#overview)
  - [The assignment](#the-assignment)
  - [Technologies used](#technologies-used)
  - [Link](#link)
- [My process](#my-process)
- [Author](#author)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

### The assignment

Creating a complete and fully responsive personal website to show my projects and my skills.

### Technologies used

- Semantic HTML
- CSS
- SASS/SCSS
- JS (just a little bit)
- Flexbox
- Responsive design
- Mobile-first workflow

### Link

- NikTheWik's Personal Website - [Click here](https://nikthewik.github.io/).

## My process

The idea was to write a main HTML page containing several sections:

- **HOME** - A navbar, a title, a caption with a typewriter effect and a button to the next section;
- **ABOUT ME** - A brief description of who I am and how I work, interspersed with spatial-themed illustrations;
- **SKILLS** - A list of soft and hard skills decorated by an animation;
- **PROJECTS** - My personal projects represented as scrollable cards, divided by sector;
- **CONTACTS** - Links to my socials and a form to message me.

For my photo project I decided to create a separate HTML file as a sort of standalone portfolio.

Then I created a last HTML file of thanks for those who would send a message with the form.

To better manage all this workflow I used SCSS.
I started with creating a CSS reset file (`_reset.scss`) and writing general CSS code (`_base.scss`) in the base folder.

Then I created the style of each section of my website in the pages folder. When I noticed some common code, I moved it all to the CSS base file.

For some items, I created a components folder containing files like `_buttons.scss`, `_nav.scss` and `_hamburger.scss`.

In order to manage the colors of the site in a smart way, I used variables, declared in the `_colors.scss` file in the abstracts folder.

Finally, I put the mobile and desktop code into the `_media.scss` file in the media-queries folder.

## Author

- GitHub - [nikthewik](https://github.com/nikthewik)
- LinkedIn - [in/nikthewik](https://linkedin.com/in/nikthewik)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Acknowledgments

- [Kevin Powell](https://www.youtube.com/@KevinPowell) - Hands down, the best CSS instructor on YouTube from which I learned a lot: from the `clamp()` property to the responsive design;
- [ChatGPT](https://openai.com/blog/chatgpt) - An artificial intelligence chatbot (developed by OpenAI), which I mainly used to better understand JavaScript code;
- [Stack Overflow](https://stackoverflow.com/) - A wonderful community where you can find a solution to every Front-End Development problem and not only.