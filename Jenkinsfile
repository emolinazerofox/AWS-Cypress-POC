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
    stage("Build") {
      steps {
            env.ECHO_CMD = 'echo $NVM_BIN'
            env.NVM_BIN = sh (
               script: 'bash -l -c "source $HOME/.nvm/nvm.sh 1>&2; nvm use $NODE_VERSION 1>&2 || nvm install $NODE_VERSION 1>&2 && nvm use $NODE_VERSION 1>&2 && $ECHO_CMD "',
               returnStdout: true
            ).trim()
            echo "NVM_BIN: ${env.NVM_BIN}"
            env.PATH = "${env.NVM_BIN}:${env.PATH}"
          
            // do some node stuff in sh commands...
            sh 'node --version'
            sh 'npm --version'
           
        }
      //steps {
        //sh 'ls | grep package-lock'
        //sh 'npm ci'
        //sh "npm run test:ci:record"
     // }
    }
  }
}
