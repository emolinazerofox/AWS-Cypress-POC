pipeline {
    agent {
        docker { image 'node:20.10.0-alpine3.19' }
    }
    environment {
        npm_config_cache = 'npm-cache'
    }

  stages {
    stage('build and test') {
      environment {
        // we will be recording test results on Cypress Cloud
        // to record we need to set an environment variable
        // we can load the record key variable from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        
        CYPRESS_RECORD_KEY = "293f22266-e8f3-4453-8e2f-6c388b420bf9"
      }

      steps {
        //sh 'npm update'
        sh 'npm install'
        sh 'ls | grep package-lock'
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}
