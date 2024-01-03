pipeline{
agent any
stages{
    stage('test'){
        steps{
            script{
                    def image = docker.image('mhart/alpine-node:8.11.3')
                    image.pull()
                    image.inside() {
                        sh 'id'
                        sh 'ls -lrt'
                        sh 'npm install --global yarn'
                        
                    }
              }
          }
      }
    }
}
