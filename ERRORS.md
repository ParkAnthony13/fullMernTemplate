# net::ERR_SSL_PROTOCOL_ERROR
	can't submit cat from react front
	doesn't seem like server side issue
	console log in module create method we see if anything wrong coming
		from react front side.
	
	const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/cats", formState)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    	}

	SOLUTION:
		axios url is not secure, needs to be http not https

# backend server is coming back as a 200 status when we send in empty input
    status 200 is an okay response.
    It should come back as a bad error if we try to submit nothing (fail validations)
    we can go directly to the CREATE CAT controller method and set the error code

    FROM THIS:
        module.exports.createCat = (req,res) => {
            console.log("HITTING THE CREATE CAT CONTROLLER")
            console.log(req.body)
            Cat.create(req.body)
                .then(newCat => res.json({newCat}))
 - change is on line 28 and line 37
                .catch(err => res.json({err}))
        }
    CHANGE TO -->
        module.exports.createCat = (req,res) => {
            console.log("HITTING THE CREATE CAT CONTROLLER")
            console.log(req.body)
            Cat.create(req.body)
                .then(newCat => res.json({newCat}))
 - change is on line 28 and line 37
                .catch(err => res.status(400).json({err}))
        }

# error message will be more simple if we remove { }
    module.exports.createCat = (req,res) => {
    console.log("HITTING THE CREATE CAT CONTROLLER")
    console.log(req.body)
    Cat.create(req.body)
        .then(newCat => res.json({newCat}))

        .catch(err => res.status(400).json(err))

    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/cats", formState) // we need to send to a defined (create) url from cat.routes
            .then(res => console.log(res))
            .catch(err => {
                console.log(err.response.data)
                const {errors} = err.response.data
                for(let [key, value] of Object.entries(errors)){
                    console.log(key,value.message)
                }
            })
    }