mongo:
image: 'tutum/mongodb:latest'
environment:
- MONGODB_PASS=<your-password-here>
ports:
- '27017:27017'
- '28017:28017'