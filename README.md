# Cartoon Cars Quiz

The **Cartoon Cars Quiz** is a fully responsive and interactive website that entertains users with a fun and engaging quiz about cars from various cartoons. Built with HTML, CSS, and JavaScript, the site delivers a seamless and dynamic user experience. It tests users' knowledge by presenting a series of questions about iconic cartoon cars, incorporating audio feedback and responsive design to enhance engagement and usability.

![All screens website](README%20Images/responsivenesstest1.png)
![All screens website](README%20Images/responsivenesstes2.png)

---

## Features

### Quiz Functionality
- **Question Flow**: Users answer one question at a time.
  - Correct answers automatically proceed to the next question with a **positive sound**.
  - Incorrect answers display a "Next Question" button and play a **negative sound**, allowing manual progression.
  - Regardless of whether the answer is correct or incorrect, the user always sees a **fun fact** about the question after answering. **Works as expected.**

- **Audio Feedback**:
  - Correct sound: Played when the user selects the correct answer.
  - Incorrect sound: Played when the user selects the wrong answer.

- **User Feedback**:
  - Shows the user's selected answer.
  - Provides personalized feedback at the end of the quiz based on the user's score:
    - **Below 5**: Encouraging and funny message.
    - **Less than 8**: Motivational message to improve.
    - **Less than 10**: Positive feedback with a suggestion for perfection.
    - **Perfect Score (10/10)**: A congratulatory message.

- **Logo Functionality**:
  - Clicking on the logo in the navbar correctly navigates to the homepage, working as expected.

---

## Responsive Design
The website is fully responsive, ensuring compatibility with devices of all sizes. It has been tested on desktop, tablet, and mobile devices to confirm responsiveness and usability.

---

## Accessibility
- **Keyboard Navigation**: Users can navigate the quiz using the keyboard.
- **Screen Reader Compatibility**: Elements include appropriate ARIA labels to assist visually impaired users.

---

## User Experience (UX)

### User Stories

#### First-time Visitor Goals
1. I want to understand the purpose of the site and easily navigate it.
2. I want clear instructions on how to play the quiz.
3. I want feedback on my performance to see how well I did.

#### Returning Visitor Goals
1. I want to improve my score and track my progress.
2. I want a smooth and fast experience while playing the quiz.

---

## Design

### Colour Scheme
Vibrant and playful colors were chosen to resonate with the theme of cartoons and cars.

### Typography
Fonts were selected to enhance readability while maintaining a fun and engaging style.

---

## Technologies Used

### Languages
- **HTML5**
- **CSS3**
- **JavaScript**

## Wireframes

Here are the wireframes for the website:

![Home and Quiz Page on laptop](README%20Images/pwf.png)
![Home and Quiz Page on Tablet](README%20Images/tabletwf.png)
![Home and Quiz Page on mobile](README%20Images/wpwf.png)

### Frameworks, Libraries, and Tools
- **Jest**: Used for unit testing JavaScript functionality.
- **JSHint**: Used to validate JavaScript code for errors.
- **Google Fonts**: Used to import stylish fonts for the quiz.
- **Git**: Version control system for managing changes.
- **GitHub Pages**: Used to host the live website.
- **Browser Developer Tools**: Used to debug and test responsiveness and performance.

---

## Testing

### Internal and External Link Testing
| Link                | Action                     | Result          |
|---------------------|----------------------------|-----------------|
| Start Quiz Button   | Starts the quiz            | Works as expected |
| Navbar Logo         | Navigates to homepage      | Works as expected |

### Quiz Functionality Testing
- **Question Buttons**:
  - When the user clicks the correct answer, they hear the correct sound and automatically proceed to the next question. **Works as expected.**
  - When the user clicks the wrong answer, they hear the wrong sound, and the "Next Question" button appears for manual progression. **Works as expected.**
  - Regardless of whether the answer is correct or incorrect, the user always sees a **fun fact** about the question after answering. **Works as expected.**

- **Audio Feedback**:
  - Correct sound plays when the user selects the correct answer.
  - Incorrect sound plays when the user selects the wrong answer. **Both work as expected.**

- **Logo Functionality**:
  - Clicking on the logo in the navbar correctly navigates the user to the homepage. **Works as expected.**

---

## Lighthouse Performance and Accessibility Scores
![Lighthouse Performance Report](README%20Images/pagespeedtest.png)
- **Performance**: 98%
- **Accessibility**: 100%
- **Best Practices**: 100%
- **SEO**: 91%

---

## Validation

- **HTML Validation**: Passed with no syntax errors.
- **CSS Validation**: Passed using the W3C CSS Validator.
- **JavaScript Testing**: Validated with JSHint, ensuring no critical errors.

### Sample Validation Screenshots
![HTML Home Page Validation Screenshot](README%20Images/homehtmltest.png)
![HTML Quiz Page Validation Screenshot](README%20Images/quizhtmltest.png)
![CSS Validation Screenshot](README%20Images/csstest.png)
![JS Validation Screenshot](README%20Images/jstest.png)
![JS Validation Screenshot](README%20Images/jstest2.png)

---

## Debugging
- Fixed an issue where incorrect answers were not providing feedback.
- Resolved a bug where sounds overlapped on repeated clicks.
- Addressed responsiveness issues for smaller screens.

---

## Deployment

The site is hosted on GitHub Pages. To deploy:
1. Log in to GitHub and navigate to the repository.
2. Go to **Settings > Pages**.
3. Select the main branch as the source and save changes.

The live link for the website is available [here](https://martiiann.github.io/milestone-project-2/).

---

## Credits

- **Code & Content**: Inspired by various quiz tutorials and forums.
- **Media**: Images and sounds sourced from free asset libraries.
- **Testing Tools**: Jest and JSHint were invaluable for debugging.

---

## Acknowledgments
- Special thanks to my mentors **Marko** and **Moritz** for their invaluable guidance throughout my project.
- I would like to thank the tutor support team at **Code Institute** for their assistance.
- A big thank you to the entire **Code Institute** for providing me with the opportunity to attend this course and work on this project.

