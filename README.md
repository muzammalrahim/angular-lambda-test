# For frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

Clone the code from `main` branch with command `git clone https://github.com/muzammalrahim/angular-lambda-test.git` 

Run `npm install` to install all required pakages 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Backend

# AWS Lambda

1. go to API Gatway section and make api with REST API
2. Then give the name of your API and submit with default actions
3. After creating API click on action button and select create resource and give the name of resource (e.g user)
4. Select the created source and then click on the actions button and select the create methods from dropdown list and then select method post from list.
5. A new Form will be open. Select lambda fuction for integration type.
6. Go to lambda panel and create new function with any name and select latest python version for lambda function 
7. A file will be open with some defualt code.
8. remove the defualt code and put this code

 def lambda_handler(event, context):
    
    message = '{} {} {} {} '.format(event['displayName'],event['email'],event['token'],event['message'])  
    return { 
        'message' : message
    }

9. Click on deploy button 
10. go to api gatway. In post method give the name of created lambda fuction.
11. test your api gatway
12. Deploy your API 
13. create a new lambda fuction for authorization give any name and select python latest version for runtime environment
14. In created lambda fuction for auth, put the following code.
    
    def lambda_handler(event, context):

    auth = 'Deny'
    if event['Authorization']:
        auth = 'Allow'
    else:
        auth = 'Deny'

    authResponse = {"principalId": "abc123",
                    "policyDocument": {"Version": "2012-10-17",
                                        "Statement": [{"Action": "execute-api:Invoke", "Resource": [
                                            "arn:aws:execute-api:us-east-2:YOUR_ID:YOUR_API_GATWAY_ID/*/*"],
                                              "Effect": auth}]},}
    return authResponse

15. go to api gateway handler and select your fuction and then go to Authorizers
16. click on create new authorizer
17. give the name of authorizer and select the lambda functon that is created for authorization and give the token source name and click on submit
18. then go resources and click on post and add autherizer name in Authorization
19. save the changes and test on browser and in postman and with frontend
20. for help use this link
https://www.youtube.com/watch?v=al5I9v5Y-kA&ab_channel=BeABetterDev
