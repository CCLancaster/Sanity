# Sanity: A Mental Health Web App

# Live Site: here

# User Story: 
  As an overwhelmed bootcamp student, I want to use a web app to help me de-stress.
  ## User: 
  The intended audience for this application is fellow overwhelmed and stressed out bootcamp students who have to combat mental health issues such as anxiety, stress and imposter syndrom while taking on an intensive courseload 
  ## Problem: 
  The problem I am tryin to solve with this application is how to help us all de-stress from a given day, problem or life emergency. I do this by utilizing tried and true anti-anxiety and de-stressing techniques to meet each student where they are and what they may need most in the moment.
    * These techniques include (but are not limited to):
        * block breathing exercises
        * positive self affirmations
        * random and rediculous jokes 
        * TO COME - movement suggestions such as yoga poses and stretches
        * resources to reach out to when more help is needed than this app can provide
  
# Scope:
  ## MVP Includes:
    * auth sign up/login functionality
    * two working sections (laugh & affirmations)
    * three working databases/models which tie to at least one join table
    * two API calls (dad jokes & chuck norris jokes)
    * calm and relaxing visual styling
    * as few poin points to the user as possible
    * wireframes of intended sight
    * readme file
    * RESTful routing
        * GET
        * POST
        * PUT
        * DELETE
    * utilize an ORM to create a db table structure
    * be deployed online 

  ## Stretch Goals Include:
    * a working breathe application to include:
      * an option for 4x4 square breathing
      * an option for 6x6 square breathing
      * links to more information about square breathing
    * a working move section to include:
      * a list of yoga stretches with both written and visual instructions
          * visual instructions on destressing stretches via embeded videos
    * update to laugh to include:
      * a way to share your favorite jokes via Slack
    * update to affirm to include:
      * selecting a random affirmation to populate at loading page (when user has entered more than one affirmation into the db)

# How To: A Guide To Sanity
  ## laugh
    * Need a pick me up? In this section, you can select from a choice of horrendously delightful dad jokes or impossibly ridiculous Chuck Norris jokes by selecting the appropriate radial buttons and clicking "Get Joke".
      * You'll bust a seam (or at least gufaw) in no time as the jokes randomly populate with each click!
      * Save your favorites! By clicking the "+" button, you can catalogue the jokes that made you laught the hardest.
          * Joke overplayed? Just click "delete" to remove it from your faves list.
  ## affirmations
    * Need to cultivate postive thoughts? Affirmations is the perfect place to squirrel away those nuggets of advice, can do quotes and notes to self for a rainy (or just low motivation) day!
      * If you do not have any affirmations yet, you'll be prompted to create a new one right away.
      * Once you've entered an affirmation or two (or twenty!) you can view, edit and delete them when you feel like it. A positive affirmation that you've written will greet you when you navigate to this section.
  ## breathe
    * Let's take a breath. Breathing is the best way to calm down from a high anxiety, super angry or even just sad moment. This section leads you gently through the square breathing technique.
      * What is square breathing?
          * Square breathing asks you to inhale, hold, exhale, and hold your breath for a designated count. It is suggested to take at least three of these super calming breaths to bring you back to center.
      * When you're ready, simply click "start" and follow the visual on the screen.
      * When you're feeling calmer, click "stop" to get back to the main breathing page.
  ## move
    * TO COME - functionality to come, but in the meantime, there are a few links to stretches that can help de-stress in a quiet location or even at your desk. As well, there is a 30min yoga routine provided specifically for stress and anxiety that you are welcome to practice at anywhere you have space.
  ## help
    * Need more? Help is a resource section to help you find advice, helplines and more information on how to help cope with what you're feeling. There are even podcasts and apps for the tech savvy to explore!


# Wireframes: The Design Template for Sanity
  * UX Feedack: 
    * I had the great privelage to garner time from a User Experience Cohort student, Jen as well as the instructor Chad. Their guidence  has made my user story, flow and overall design so much better! While there is still more to learn, implement and leverage from their advice, I have provided below two versions of my wireframs, the before and after of sitting down to recieve their expertise. 

  ## sanity
![homepage](https://github.com/CCLancaster/sanity/blob/master/public/img/IMG_5737.HEIC)
  
  ## laugh
![landing page](https://github.com/CCLancaster/sanity/blob/master/public/img/laugh.png)

  ## affirmations
![landing page](https://github.com/CCLancaster/sanity/blob/master/public/img/affirmations.png)

  ## breathe, help & more
![rest of the website](https://github.com/CCLancaster/sanity/blob/master/public/img/rest.png)

# Technology Used: 

  ## Express Authentication
    An express authentication template using Passport + flash messages + custom middleware
     * please see the package.json for a full list of dependencies 

## Getting Started

#### Scaffold w/tests (see `master` branch)

* Run `npm install` to install dependencies
* Use `npm test` to run tests
* Setup the databases
  * Change the database names in `config/config.json` to reflect your project
  * Run `createdb project_name_development` to create the development database
  * Run `createdb project_name_test` to create the test database

#### Finished version (see `brian-finished` branch)

* Run `npm install` to install dependencies
  * Use `npm run lint:js` to lint your JS
  * Use `npm run lint:css` to lint your CSS
  * Use `npm test` to run tests
* Setup the databases
  * Run `createdb express_auth_development` to create the development database
  * Run `createdb express_auth_test` to create the test database
  * Run `sequelize db:migrate` to run migrations
