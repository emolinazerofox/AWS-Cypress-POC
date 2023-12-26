pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:20.9.0'
    }
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
        sh 'npm config get prefix'
        sh 'npm update'
        //sh 'ls | grep package-lock'
        //sh 'npm ci'
        //sh "npm run test:ci:record"
      }
    }
  }
}
