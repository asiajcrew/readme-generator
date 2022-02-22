
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "none") {
        return ''
    } else {
        return `* [License](#license)`
    }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "none") {
        return ''
    } else {
        return`## License 
This application uses ${license}`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
* [Description](#description) 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
Email me: ${data.email}

[${data.github}](https://github.com/${data.github})
`}

module.exports = generateMarkdown;