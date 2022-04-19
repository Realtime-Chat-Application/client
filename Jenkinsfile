pipeline {
  agent any 
  stages {
    stage("build") {
      steps {
        echo 'building'
      }
    }
    stage("test") {
      when {
        expression {
          BRANCH_NAME == 'development'
        }
      }
      steps {
        echo 'testing'
      }
    }
  }
  post {
    always {

    }
    success {
       
    }
  }
}