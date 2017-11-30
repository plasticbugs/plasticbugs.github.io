import React from 'react';
import Modal from './Modal.jsx';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          title: 'JavaScript ES6',
          codeSnippet: `
          const mergeSort = function(array) {
            if(array.length === 1) {
              return array;
            }
            let middle = Math.floor(array.length / 2);
            let left = array.slice(0, middle);
            let right = array.slice(middle);
          
            return merge(mergeSort(left), mergeSort(right));
          }
          
          const merge = function(left, right) {
            let solution = [];
            while(left.length && right.length) {
              if(left[0] > right[0]) {
                solution.push(right.shift());
              } else {
                solution.push(left.shift());
              }
            }
          
            while(left.length) {
              solution.push(left.shift());
            }
          
            while(right.length) {
              solution.push(right.shift());
            }
            return solution;
          }`,
          showModal: false
        },
        {
          title: 'React',
          codeSnippet: `
          const hello = "I'm some react code!"
          `,
          showModal: false

        },
        {
          title: 'Node.js',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'React Router',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'Redux',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'Express.js',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'MySQL/PostgreSQL',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'MongoDB',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'Redis',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'Webpack',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'Jest & Enzyme',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'Mocha & Chai',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'Ruby on Rails',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'HTML5',
          codeSnippet: ``,
          showModal: false

        },
        {
          title: 'CSS3',
          codeSnippet: ``,
          showModal: false
        }
      ]
    }
  }

  toggleModal(index) {
    console.log(index);
    let skillsCopy = this.state.skills.map(skill=> {return Object.assign({}, skill )});
    skillsCopy[index].showModal = !skillsCopy[index].showModal
    this.setState({skills: skillsCopy});
  }

  render() {
    return (
      <div className="skills-container"><div className="skills" id="skills">
        <div className="title heading">{`{...code}`}</div>
        <p>Click these topics to see code examples</p>
        <ul>
          {this.state.skills.map( ( skill, index ) => {
            let modal;
            if(skill.showModal) {
              modal = < Modal title={skill.title} codeSnippet={skill.codeSnippet} />
            }
            return <li key={index} onClick={()=>{this.toggleModal(index)}}>{skill.title}{modal}</li>
          })}
        </ul>
      </div></div>
    )
  }
}

module.exports = Skills;