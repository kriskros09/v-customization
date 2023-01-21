const path = require('path')
const { promisify } = require('util')
const dateFormat = require('dateformat')
const readFileAsync = promisify(require('fs').readFile)

// Given a `const` variable `TEMPLATE_DIR` which points to "<semantic-release-gitmoji>/lib/assets/templates"
const TEMPLATE_DIR = './release/templates/'
// the *.hbs template and partials should be passed as strings of contents
const template = readFileAsync(path.join(TEMPLATE_DIR, 'default-template.hbs'))
const commitTemplate = readFileAsync(
  path.join(TEMPLATE_DIR, 'commit-template.hbs')
)

module.exports = {
  branches: [
    'main',
    {
      name: 'alpha',
      prerelease: true
    }
  ],
  plugins: [
    [
      'semantic-release-gitmoji',
      {
        releaseRules: {
          major: [':boom:'],
          minor: [':sparkles:'],
          patch: [':bug:', ':ambulance:', ':lock:'],
          prerelease: [':sparkles:', ':bug:', ':ambulance:', ':lock:']
        },
        releaseNotes: {
          template,
          partials: { commitTemplate },
          helpers: {
            datetime: function (format = 'UTC:dd-mm-yyyy') {
              return dateFormat(new Date(), format)
            }
          },
          issueResolution: {
            template: '{baseUrl}/{owner}/{repo}/issues/{ref}',
            baseUrl: 'https://github.com',
            source: 'github.com'
          }
        }
      }
    ],
    '@semantic-release/npm',
    '@semantic-release/github'
  ]
}
