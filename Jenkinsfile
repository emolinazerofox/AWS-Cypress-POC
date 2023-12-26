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
         sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'
         nvm(nvmInstallURL: 'https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh', 
             nvmIoJsOrgMirror: 'https://iojs.org/dist',
             nvmNodeJsOrgMirror: 'https://nodejs.org/dist', 
             version: '8.1.2') {
                    sh "npm install"
                    echo "Build main site distribution"
                    sh "npm run build:dist"
              }        sh 'npm config get prefix'
        sh 'nvm install node'
        //sh 'ls | grep package-lock'
        //sh 'npm ci'
        //sh "npm run test:ci:record"
      }
    }
  }
}
