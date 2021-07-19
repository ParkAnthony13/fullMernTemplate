# CREATING A MERN APPLICATION

## FRONT-END(REACT) terminal should be inside CLIENT
 - npx create-react-app client
 - npm install axios
 - npm install @reach/router

## BACK-END(EXPRESS, MONGOOSE) terminal should be inside server folder
 - npm init -y
 - npm install express
 - npm install mongoose
 - npm install cors
    # since express is the only one sending requests, it needs to be able to accept information from a whole different source (from react app i think)


## FOLDER STRUCTURE
[
    FULLmern_DEMO [
        CLIENT[
            src [
                app.js
                componenets
            ]
            public
            package.json
            package.lock.json
        ]

        SERVER[
            config
            models
            controllers
            routes
            server.js
        ]
    ]
]