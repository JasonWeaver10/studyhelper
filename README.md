# STUDY HElPER README

**StudyHelper** is a quiz / study app originally designed to help new developers learn different languages. The app will have different quizzes for different languages, and each page will have a series of random questions that users can answer. The app will save the high score and show them the answers to questions they missed. The app will allow users to upload their own questions and language preferences. I changed the app to allow topics and questions about anything, so it is no longer only useful to developers.


Explanations of the technologies used

#Technologies Used
**StudyHelper** was created using a Ruby on Rails back end, and a React front end.

#Screen Shot

![image](https://user-images.githubusercontent.com/48182959/109425677-6f681400-79b7-11eb-8e87-e859a322a53c.png)

#StudyHelper original wireframes:
[link](https://drive.google.com/drive/folders/1Qud6myWoadWluiSUYM7kTk8Z2mCICmKY?usp=sharing)

#User Feedback:

Feedback strongly suggested not making the app Language Specific
  -Changed Language to Topic
  -Users can now add any type of questions on any topic that they need to study
Feedback wanted the ability to edit and delete questions and answers
  -Added edit / delete page, and an edit page so they are fully editable
  
 #User Stories: 
 
 Link to your user stories – who your users are, what they want and why

 
 **StudyHelper** is targeted at students of any age, and in any field. The app was designed to help anyone who was willing to utilize it for practice. College students, home schoolers, or even parents looking to supplement their child's education would all benefit from implementing StudyHelper into their schooling. The flexability to add any type of question or topic allows everyone to be included in its user base. Users want the ability to learn new things, and have an application that caters to them. 


A couple paragraphs about the general approach you took
#General 
 I started designing this app by writing down a few key features that a quiz would need. I then started to design wireframes to space out all of the information I wanted to add. After making the wireframes, I wrote a list of the endpoints that I would need, and set up my basic database structure. Once I had my endpoints and database planned, I started coding the Rails portion of my app. After the backend was working, I started installing React, and any dependencies that I needed. Coding the front end was the next step in the process, and I changed my mind multiple times. It was during this time that I decided to implement the hint feature. This feature was not in my wireframes, but I felt that the product would be better overall with hints included. 


#Unsolved Issues: 
 -changing the database structure to allow high scores from individuals, as opposed to one high score for everyone
 -review design (always can be better)

#Installation instructions
 This app was set up to use PostgreSql in production in order to work on Heroku. You need to keep that in mind if you are using it elsewhere. After forkin the app, run 
 ```
 bundle install
 ```
to install any needed depenencies. 
