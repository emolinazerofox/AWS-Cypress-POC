pipeline {
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/emolinazerofox/AWS-Cypress-POC.git'
      }
    }
    stage('Build') {
       steps {
         sh 'echo "Hello"'
       }
    }
    stage('Test') {
      steps {
        sh 'echo "Hello"'
      }
    }
  }
}
