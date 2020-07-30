# [Personal Resume](https://adamtrincas.netlify.app/) &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/63a938a2-ca72-4953-a5c3-e6a0e35076d0/deploy-status)](https://app.netlify.com/sites/adamtrincas/deploys)

> Personal resume page written with React.

This is the source code of my personal resume. It contains a simple welcome page with a link to my
resume. The app can can be displayed in different languages. Data for the resume component is stored
inside a database.

## Technologies Used

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [i18next](https://www.i18next.com/)
- [Firebase](https://firebase.google.com/)

## Installation & development setup

OS X & Linux:

```sh
git clone git@github.com:atrincas/personal-website.git
cd personal-website/
yarn install
```

For the resume component you need to setup a database with [Firebase](https://firebase.google.com/).

The data for my personal details has the following structure (You can also find the type definitions
in /types/index.ts):

```json
{
  "resume": {
    "personalDetails": {
      "fullName": "",
      "profession": "",
      "email": "",
      "github": {
        "title": "",
        "link": ""
      },
      "linkedIn": {
        "title": "",
        "link": ""
      },
      "location": ""
    }
  }
}
```

The translations json has the following structure:

```json
{
  "translations": {
    "en": {
      "headers": {
        "languages": "",
        "workExperience": "",
        "education": ""
      }
    },
    "languages": ["", ""],
    "frameworksLibraries": ["", ""],
    "softSkills": ["", ""],
    "education": [
      {
        "mainTitle": "",
        "subTitle": "",
        "period": ""
      }
    ],
    "jobExperience": [
      {
        "mainTitle": "",
        "subTitle": "",
        "period": "",
        "tasks": ["", ""]
      }
    ]
  }
}
```

To ensure a connection with the Firebase database create an .env file and fill in your
creditentials:

```env
API_KEY=<your_api_key>
AUTH_DOMAIN=<your_app_name.firebaseapp.com>
DATABASE_URL=<your_app_name.firebaseio.com>
PROJECT_ID=<your_app_name>
STORAGE_BUCKET=<your_app_name.appspot.com>
MESSAGING_SENDER_ID=<your_app_sender_id>
APP_ID=<your_app_id>
MEASUREMENT_ID=<your_app_measurement_id>
```

You can add your own profile picture in the src/images directory and change the import line in
src/components/Resume/styles.ts:

```ts
import profilePicture from '../../images/<your_file_name>.jpeg'
```

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
