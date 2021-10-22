# Note Taker

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#code-snippet">Code Snippet</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="./develop/public/assets/images/webpage.png" alt="Webpage screenshot">

For this application, I had to finsh the provided files to create a note taker webpage. The user will be able to make notes and save them while also going back to them! Per usual, this tested my knowledge with node.js and made me do a bunch of research to deliver the best application to the user. Of course, this was a fun to make and quite the challenge!

The websites I used to help create the application are listed below in the <a href="#acknowledgements">acknowledgements</a>.

### Built With

I used <a href="https://code.visualstudio.com/">Visual Studio Code</a> to finish creating the application. The files were provided by the professor and I just had to finish the build.


<!-- GETTING STARTED -->
## Getting Started

Go to the deployed link below in <a href="#project-link">Project Link</a> tab.


<!-- USAGE EXAMPLES -->
## Code Snippets

Below is the function I used to generate a readme markdown file. The code snippets starts with the prompt from inquirer and the response from that will console.log the report and then create a markdown called "README.md". The next part is the 'generateMarkdown' where it is a template literal for creating the template for the README.
```
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile("README.md", generateMarkdown(response));
    });
}
```


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact
Sami Khawja: Skhawja11@gmail.com


## Project Links
Project Link: [GitHub](https://github.com/samikhawja/note_taker)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* Taylor Hackbart
* [W3Schools](https://www.w3schools.com/)
* [StackOverflow](https://stackoverflow.com/)
* [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JQuery](https://jquery.com/)