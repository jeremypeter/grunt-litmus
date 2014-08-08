# grunt-litmus [![Build Status](https://travis-ci.org/jeremypeter/grunt-litmus.png?branch=master)](https://travis-ci.org/jeremypeter/grunt-litmus)

> Send email tests to Litmus

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-litmus --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-litmus');
```

## The "litmus" task

### Overview
In your project's Gruntfile, add a section named `litmus` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  litmus: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.username
Type: `String`
Default value: `''`
Required: `yes`

Litmus username

#### options.password
Type: `String`
Default value: `''` 
Required: `yes`

Litmus password

#### options.url
Type: `String`
Default value: `https://yourcompany.litmus.com`
Required: `yes`

Litmus account url. `yourcompany` name can be found in **_Account Settings_** > **_Profile_** > _**Subdomain for API**_

#### options.clients
Type: `Array`
Default value: `[]`
Required: `yes`

Array of email clients to test. Can be found at https://yourcompany.litmus.com/clients.xml. The `<application_code>` tags contain the name e.g. Gmail Chrome: `<application_code> chromegmailnew </application_code>`

#### options.subject
Type: `String`
Default value: `title of email`
Required: `no`

Adds subject line to Litmus test. If not set, then defaults to `<title>TITLE</title>`. If title not set, then defaults to `yyyy/mm/dd`

#### options.delay
Type: `Number`
Default value: `3500`
Required: `no`

Change the delay between tests if multiple files are being sent. 

### Usage Examples

```js
grunt.initConfig({
  litmus: {
    test: {
      src: ['email.html'],
      options: {
        username: 'username',
        password: 'password',
        url: 'https://yourcompany.litmus.com',
        clients: ['gmailnew', 'ffgmailnew', 'chromegmailnew']
      }
    }
  },
})
```

## Troubleshooting

If you're having issues with Litmus taking forever to load a test or the title of the test is showing up as "No Subject", it is most likely an issue with the Litmus API. You can check the [Litmus status](http://status.litmus.com) page to find out if their having any issues. If that's not the case, submit an issue and we'll look into further.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.6 - Fixed a bug with cli-table dependency and on duplicate tests' subjects.  
0.1.5 - Added more logging information about a test. Fixes [#16](https://github.com/yargalot/Email-Builder/issues/16)  
0.1.4 - Added options.delay  
0.1.3 - Add +1 to each duplicate title   
0.1.0 - Initial release
