import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Essays from './Essays.jsx';


const Homework = () => {

    // ... functional component logic

    return (
        <HomeworkStyled>
            <Essays essays={ essays } />
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div`

padding: 20px;

`;

const essays = [
    {
        title: '01',
        question: 'What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Single page app differs from traditional multipage website in a way that SPA does not involved navigating to an entirely new page, while traditional multipage website navigates to a new page. </p>
            <p>In other words, SPA pages load within the same page while traditional multipage websites do not and go to an entirely new page. </p>
            </div>
            )
        }
    },
    {
        title: '02',
        question: 'In React, what does Prop Drillng mean? Why do they say that React has a Unidirectional Data Flow? What are the pros and cons of this feature?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Prop Drilling means in React is the process of getting data to parts of the React Component tree.</p>
            <p>Unidirectional data flow means that the parents component passes the state information down to its child components. The concept of this is that data has one way to be transferred to other parts of application. </p>
            <p>Pros of the unidirectional data flow is that it has less error because I have more control over my data and is easier to debug because I know what is coming from where. </p>
            </div>
            )
        }
    },
    {
        title: '03',
        question: 'In React, what is Redux? Why do we need Redux? Is Redux the only option?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Redux is a state container for JavaScript applications. In React. Redux is UI binding library for React. </p>
            <p>Redux helps to write applications and run in different environments, such as client or server, and that is easy to test. </p>
            <p>We need Redux because Redux in React is kept up to date with any API changes from library to make sure that React components behave as expected.</p>
            <p>Also, Redux in React implements several optimizations to make sure the component only re-renders when actually necessary.</p>
            </div>
            )
        }
    },
    {
        title: '04',
        question: 'What is middleware? What does the Thunk Middleware do for Redux?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Middleware is software which is in the middle of an operating system and the applications, and allows them to communicate with each other. </p>
            <p>Redux Thunk middleware allows you to write action creators that return a function instead of an action. Thunk middleware is the way to extend Redux with custom functionality.</p>
            <p>However, the thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.</p>
            </div>
            )
        }
    },
    {
        title: '05',
        question: 'In Redux, what does mutating state mean? Why is this something we would like to avoid?',
        AnswerComponent: () => {
            return (
            <div>
            <p>In Redux, mutating state means the process of changing the value of a variable or an object, which means is to mutate the state. </p>
            <p>If a Redux reducer directly mutates, and returns, the state object passed into it, the values of the root state object will change, but the object itself will not.</p>
            <p>We would like to avoid this is because reducers in redux are pure functions, which means they have no side effects. If you mutate the state, those functions are no longer pure, which causes bugs or errors. </p>
            </div>
            )
        }
    },
    {
        title: '06',
        question: 'What are the ingredients of a code review in Web Development?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Code review in web development is fellow programmers to check each other's code for mistakes.</p>
            </div>
            )
        }
    },
    {
        title: '07',
        question: 'What is the difference between Action Types, Action Creators and Reducers?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Action Type is how the action to be performed which is the reducer responds to, and dispatch these from action creators to change the state of your store.</p>
            <p>Action Creator is a function that returns an action object. </p>
            <p>Reducer is a function that determines changes to an application's state.</p>
            </div>
            )
        }
    },
    {
        title: '08',
        question: 'What does the spread operator do in JavaScript? How does this help Redux reducers keep the state from mutating?',
        AnswerComponent: () => {
            return (
            <div>
            <p>The spread operator makes shallow copies of JS objects. Using this operator makes the code concise and enhances its readability.</p>
            <p>The spread operator helps Redux reducers because it creates copies of objects with new or updated values.</p>
            </div>
            )
        }
    },
    {
        title: '09',
        question: 'What are some of the challenges of loading Redux state from a webserver and some of the solutions.',
        AnswerComponent: () => {
            return (
            <div>
            <p>The challenges of loading Redux state from a webserver is that content cannot be shown until it's loaded.</p>
            </div>
            )
        }
    },
    {
        title: '10',
        question: 'In JavaScript, what is the difference between const, let and var?',
        AnswerComponent: () => {
            return (
            <div>
            <p>const variables cannot be updated or cannot be redeclared.</p>
            <p>let variables are made to be updated, but cannot be redeclared like const.</p>
            <p>var variables can be updated and redeclared within its scope.</p>
            </div>
            )
        }
    },
    {
        title: '11',
        question: 'What does JavaScript Destructuring do?',
        AnswerComponent: () => {
            return (
            <div>
            <p>JavaScript destructuring remove properties/values from objects and bind them to variables.</p>
            <p>This can also remove multiple properties in one statement.</p>
            </div>
            )
        }
    },
    {
        title: '12',
        question: 'In React, what is a controlled input?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Controlled input is an input that gets its value from a single source of truth, which we cannot change or update the element.</p>
            </div>
            )
        }
    },
    {
        title: '13',
        question: 'Which is more important, Server-Side or Client-Side validation and why?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Server-side validation takes whatever is sent by the clients/users and does addition checks. </p>
            <p>However, Client-side validation does not require a round trip to the server, and clients/users perform the validation in their browser. </p>
            <p>So, it is better to validate user input on Server Side because it can protect from computer virus or malicious users.</p>
            </div>
            )
        }
    },
    {
        title: '14',
        question: 'In React components, what are life cycle methods?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Components are created, grow by updating, and then die which are referred to as a component lifecycle.  </p>
            <p>It is categorized in three: creating is Mounting, growing is Updating and dying is Unmounting.  </p>
            <p>The render() is the most used lifecycle method, and It is a pure function.</p>
            </div>
            )
        }
    },
    
]

