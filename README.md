# STUDY HElPER README

**StudyHelper** is a quiz / study app originally designed to help new developers learn different languages. The app will have different quizzes for different languages, and each page will have a series of random questions that users can answer. The app will save the high score and show them the answers to questions they missed. The app will allow users to upload their own questions and language preferences. I changed the app to allow topics and questions about anything, so it is no longer only useful to developers.

## Technologies Used

  - [React](https://reactjs.org/) 
    :A front-end library that uses JavaScript to create Apps
  - [Bootstrap](https://getbootstrap.com/)
    :A design system used to easily add styling to apps
  - [Ruby on rails](https://rubyonrails.org/)
    :A technology for creating a back-end API using Ruby
  - database 
    - production  [PostgreSql](https://www.postgresql.org/)
      :A version of SQL used by Heroku for deployment
    - development [Sqlite](https://www.sqlite.org/index.html)
      :A version of SQL used by Rails by default
  - [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt)
    :A gem used with Rails to encrypt passwords and other sensitive data
  - [jbuilder](https://github.com/rails/jbuilder)
    :A gem used with Rails to build JSON 
  


## Screen Shot

![image](https://user-images.githubusercontent.com/48182959/109425677-6f681400-79b7-11eb-8e87-e859a322a53c.png)


## StudyHelper original wireframes:

[link](https://drive.google.com/drive/folders/1Qud6myWoadWluiSUYM7kTk8Z2mCICmKY?usp=sharing)


## User Feedback:
Feedback strongly suggested not making the app Language Specific
  -Changed Language to Topic
  -Users can now add any type of questions on any topic that they need to study
Feedback wanted the ability to edit and delete questions and answers
  -Added edit / delete page, and an edit page so they are fully editable
  
  
 ## User Stories: 
 
 **StudyHelper** is targeted at students of any age, and in any field. The app was designed to help anyone who is looking for an application to assit them in developing their knowledge in a particular area. Traditional students, non-traditional students, or parents looking to supplement their child's education would all benefit from implementing **StudyHelper** into their study routine. The flexability to add any type of question or topic allows the application's userbase to be vast and inclusive. Users wanting the ability to learn new things and have an application that caters to them will find **StudyHelper** to be a wonderful tool in their knowledge arsenal.

## General 

 I started designing this app by writing down a few key features that quizzes contain. I then designed wireframes to space out all of the information I wanted to add. After making the wireframes, I wrote a list of the endpoints that I would need, and set up my basic database structure. Once I had my endpoints and database planned, I started coding the Rails portion of my app. Once the backend was working, I started installing React, and any dependencies that I needed. Coding the front end was the next step in the process, and as the application evolved, I decided to implement the hint feature. This feature was not in my wireframes, but I felt that the product would be better overall with hints included. Once everything was working, I finished the front end design, and completed testing on all of the pages. When I was finished testing, I moved on to my next task, which was making the questions and answers populate in random order. Previously, the first answer was always the correct one, so I adjusted the code to allow it to change. The questions were the same way, and I adjusted the code in the same manner. Now that the questions and answers were displaying in random order, I again tested the app's features while deciding if there was anything more I needed to change. It was during this time that I decided to add the green checkmark to show correct answers, and the red x to show incorrect answers. One of the joys of creating your own app is adding features that you feel your users would enjoy or would enhance their experience. Projects like this morph and transition, and the end result is rarely the same as the original plan. I look forward to continuing to enhance this product, and make it more polished it in the future. 


## Unsolved Issues: 
 -changing the database structure to allow high scores from individuals, as opposed to one high score for everyone
 -review design (always can be better)
 -add high score for all topics
 
 I struggled with how to design this app to protect users from other users. I wanted the ability to use other user's quizzes, without the ability to edit / delete them. This opened up a few issues with my high score component. Originally it was designed for a solo user, and no one would have access to quizzes, topics except for the user that created it. I ultimately decided to allow others to use quizzes, and set the high score for the topic, not an individual user. This approach gives users the ability to strive to reach a new score while studying their chosen topic. 

## Installation instructions
 This app was set up to use PostgreSql in production in order to work on Heroku. You need to keep that in mind if you are using it elsewhere. After forkin the app, run 
 ```
 bundle install
 ```
to install any needed depenencies. 
