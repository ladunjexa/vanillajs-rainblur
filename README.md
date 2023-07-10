<p align="center"><img src="https://github.com/ladunjexa/Rainblur-Showcase/blob/main/.github/assets/img2.png?raw=true" width="70%" /></p>
<p align="center">
<!-- Badges -->
  <a href="https://github.com/ladunjexa">
    <img src="https://custom-icon-badges.demolab.com/badge/made%20by%20-ladunjexa-556bf2?style=flat-square&logo=github&logoColor=white&labelColor=101827" alt="made by @ladunjexa" />
  </a>
  <a href="https://github.com/ladunjexa/GitHub-Webpage/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license" />
  </a>
  <a href="https://github.com/ladunjexa/GitHub-Webpage/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/ladunjexa/GitHub-Webpage" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/ladunjexa/GitHub-Webpage" alt="last update" />
  </a>
  <a href="https://github.com/ladunjexa/GitHub-Webpage/network/members">
    <img src="https://img.shields.io/github/forks/ladunjexa/GitHub-Webpage" alt="forks" />
  </a>
  <a href="https://github.com/ladunjexa/GitHub-Webpage/stargazers">
    <img src="https://img.shields.io/github/stars/ladunjexa/GitHub-Webpage" alt="stars" />
  </a>
  <a href="https://github.com/ladunjexa/GitHub-Webpage/issues/">
    <img src="https://img.shields.io/github/issues/ladunjexa/GitHub-Webpage" alt="open issues" />
  </a>
  <a href="https://github.com/ladunjexa/GitHub-Webpage/issues/">
    <img src="https://img.shields.io/badge/PRs-welcome-pink.svg" alt="prs welcome" />
  </a>
</p>
<a name="readme-top"></a>

# *Rainblur Showcase*
This is a template for a project showcase website. It is designed to be used as a landing page for a portfolio or to showcase projects built during a course. The website is built using HTML, Tailwind CSS, and JavaScript. It features a hero section and a dialog that displays a list of projects where their respective screenshot are integrated into a MacBook mockup.

#### [View Demo](https://ladunjexa.github.io/Rainblur-Showcase/)

## Table of Contents

- [Introduction](#introduction)
  - [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Customization](#customization)
- [Getting Started](#getting-started)
  - [Running the Project](#running-the-project)
  - [Deploying the Project](#deploying-the-project)
- [Adding Projects](#adding-projects)
- [Adding Technologies](#adding-technologies)
- [Current State of the Project](#current-state-of-the-project)
  - [Disclaimer](#disclaimer)
- [Maintaining the Website](#maintaining-the-website)
- [Additional Resources](#additional-resources)
- [License](#license)

## Introduction

Rainblur Showcase website serve as a platform to exhibit projects completed during a course or for a landing page for a portfolio. The website provides an attractive landing page with a hero section and a dialog that showcases the projects within a MacBook mockup. Users can easily navigate through the projects, and access live versions of the projects.

### Folder Structure

<b>Rainblur Showcase</b> code folder structure is as follows:
```
Rainblur-Portfolio-Showcase/
├── master/
│   └── assets/
│       |── css/
|       |   └── style.css
│       |── js/
|       |   |── data.js
|       |   └── script.js
│       └── media/
|           |── projects/
|           |   └── ...
|           |── tech/
|           |   └── ...
|           |── header.png
|           └── macbook.png
├── index.html
└── README.md
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies Used

Rainblur Showcase website is built using the following technologies:

- HTML: Provides the structure of the website.
- Tailwind CSS: Used for styling and responsive design.
- JavaScript: Manipulates the DOM to dynamically load project details and create the interactive elements.

[![tech](https://skillicons.dev/icons?i=html,css,js,tailwind)](https://skillicons.dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Customization

Rainblur Showcase website can be easily adapted to suit your needs. Here are a few customization options:

1. **Website Title**: Update the website title by modifying the `title` property in the `webData` object within the `data.js` file.

   ```javascript
   export const webData = {
     title: "Your Website Title",
     // ...
   };
   ```

2. **Navbar Links**: Modify the links in the website's navbar by updating the `navbar` object in the `webData` object within the `data.js` file. Adjust the `githubLink` and `udemyLink` properties to link to your own GitHub repository or course page.

   ```javascript
   export const webData = {
     navbar: {
       title: {
         heading1: null,
         span: "Your Website Title",
         heading2: null,
       },
       githubLink: "https://github.com/your-username/your-repo",
       udemyLink: "https://www.udemy.com/your-course",
     },
     // ...
   };
   ```

3. **Hero Section**: Customize the content of the hero section by modifying the `hero` object in the `webData` object within the `data.js` file. Adjust the `title` and `subtitle` properties to reflect your desired text.

   ```javascript
   export const webData = {
     hero: {
       title: {
         // ...
       },
       subtitle: {
         // ...
       },
     },
     // ...
   };
   ```

4. **Dialog and Button**: Customize the dialog and button elements by updating the `dialog` object in the `webData` object within the `data.js` file. You can modify the `headline` property to change the title of the dialog. To customize the button appearance, adjust the `buttonProps` property. Update the class names, text, or other attributes as needed.

   ```javascript
   export const webData = {
     dialog: {
       headline: "Your Dialog Headline",
       buttonProps: {
         // ...
       },
     },
     // ...
   };
   ```

5. **Technologies Images**: Replace the technology icons by updating the `technologiesData` array in the `data.js` file. Add or remove objects within the array to include or exclude technologies. Ensure that the corresponding image files are placed in the `media/tech` folder.

   ```javascript
   export const technologiesData = [
     { name: "HTML", img: "html_icon.svg" },
     { name: "CSS", img: "css_icon.svg" },
     { name: "JS", img: "js_icon.svg" },
     // ...
   ];
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To use the Rainblur Showcase website, follow these steps:

1. Download or clone this repo by using the link below 
```
https://github.com/ladunjexa/Rainblur-Portfolio-Showcase.git
```
2. Open the downloaded folder in your preferred code editor.

### Running the Project

To run the project locally, you have a couple of options:

- Open the `index.html` file directly in your web browser.
- Use a local development server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for Visual Studio Code. Simply right-click on the `index.html` file and choose the "Open with Live Server" option.

### Deploying the Project

To deploy the Rainblur showcase template and showcase your projects, follow these steps:

1. Create a GitHub repository to host your website.
2. Upload the contents of the template, including the `index.html` file and the `master` directory, to the repository.
3. For each project you want to add to the showcase, create a folder with the project files (including the `index.html file`) inside the root directory.
4. In the `data.js` file, update the `projectsData` array with the details of each project.

```javascript
export const projectsData = [
  {
    number: 1,
    name: "Project Name",
    img: `${CONFIG.assets.projects}/project-image.png`,
    to: 'project/PROJECT-NAME',
    href: "https://www.example.com",
  },
  // Add more project objects as needed
];
```

Note: The `href` property can serve as a direct link to the live version of the project. By default, it will go to `https://<your-github-username>.github.io/<your-repo-name>/<project-name>` if not specified.

Note: The `to` property can serve as a local endpoint for the project. By default, it will go to `/<project-name>` if not specified.

Make sure to follow the suggested folder structure for projects to ensure proper rendering and functionality of the showcase.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Adding Projects

To showcase your projects on the website, follow these steps:

1. Create a new directory inside the main project directory.
2. Place the project files for each project inside its own directory within the new directory.
3. Ensure that each project directory contains an `index.html` file as the entry point for that project.
4. Open the `data.js` file in your code editor.
5. Locate the `projectsData` array and add a new object for each project you want to showcase.
6. Each project object should contain the following properties:
   - `number` (optional): A number to represent the project's order (e.g., 1, 2, 3).
   - `name`: The name or title of the project.
   - `img`: The file name of the project's preview image. Ensure the image file is placed in the `media/projects` folder.
   - `to`: The local endpoint for the project. By default, it will go to `/<project-name>` if not specified.
   - `href` (optional): The URL of the version of the project.

```javascript
export const projectsData = [
    {
    number: 1,
    name: "Project Name",
    img: "project_image.jpg",
    to: 'project/PROJECT-NAME',
    href: "https://www.example.com",
    },
    // Add more project objects as needed
];
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Adding Technologies

To add technologies to the website, follow these steps:

1. Open the `data.js` file in your code editor.
2. Locate the `technologiesData` array and add a new object for each technology you want to showcase.
3. Each technology object should contain the following properties:
   - `name`: The name of the technology.
   - `img`: The file name of the technology's icon. Ensure the image file is placed in the `media/tech` folder.

```javascript
export const technologiesData = [
    { name: "HTML", img: "html_icon.svg" },
    { name: "CSS", img: "css_icon.svg" },
    { name: "JS", img: "js_icon.svg" },
    // Add more technology objects as needed
];
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Maintaining the Website

To maintain the *Rainblur Showcase*, keep the following points in mind:

- Ensure that all project preview images are placed in the `media/projects` folder.
- If you make any changes to the file structure or add new directories, update the `assets` object in the `CONFIG` object within the `data.js` file to reflect the correct paths.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Current State of the Project

The Rainlubr Showcase template is designed to help you create a visually appealing and functional SPA that can serve as a platform to display your projects, only by modifying that `data.js` file, you can easily customize the content of the website to showcase your own projects.

It is important to calrify that this template is not a replacement for a personal portfolio website. It is simply a template to showcase your projects and can be used in conjunction with a personal portfolio website.

"50 Projects in 50 Days" udemy course serves as a flexible template during the development of this template to demonstrate its capabilities and functionality. The purpose of using the course as an example was solely to showcase how this template can be used effectively to present various projects.

### Disclaimer

This project is not affiliated with or endorsed by the "50 Projects in 50 Days" Udemy course, Brad Traversy, or Florin Pop. It is solely provided as an example and template for showcasing projects and can be used with any course or personal portfolio.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Additional Resources

For additional resources on working with HTML, Tailwind CSS, and JavaScript, refer to the official documentation.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

<a href="https://github.com/ladunjexa/Rainblur-Portfolio-Showcase/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ladunjexa/Job-Platform-App" />
</a>

Contributions are always welcome!

See [`contributing.md`](https://contributing.md/) for ways to get started.

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## License

The *Rainblur Showcase* is open source and distributed under the [MIT License](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

If you want to contact me, you can reach me at [@ladunjexa](https://t.me/ladunjexa).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
