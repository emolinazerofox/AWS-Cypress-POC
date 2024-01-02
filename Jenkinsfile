pipeline {
  agent any
  tools {nodejs "node" }
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
