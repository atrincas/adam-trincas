# [Adam Trincas](https://adamtrincas.netlify.app/) &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/63a938a2-ca72-4953-a5c3-e6a0e35076d0/deploy-status)](https://app.netlify.com/sites/adamtrincas/deploys)

> Personal website with resume.

This is the source code of my personal website. Build in React with typescript. The data for the
resume component is fetched from Google Firebase.

## Installation & development setup

OS X & Linux:

```sh
git clone git@github.com:atrincas/personal-website.git
cd personal-website/
yarn install
```

For the resume component you need to setup a database with [Firebase](https://firebase.google.com/).

The data should have the following structure (You can also find the type definitions in
/types/index.ts):

```json
{
  "resume": [
    {
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
  ]
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

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
