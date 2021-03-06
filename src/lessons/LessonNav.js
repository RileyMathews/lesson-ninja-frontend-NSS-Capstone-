import React, { Component } from 'react'
import {Tabs, TabList, Tab, TabLink} from 'bloomer'

/*  
    module: lesson nav component
    author: riley mathews
    purpose: to generate a lesson sub nav that lets the user navigate within the lesson view
*/


class LessonNav extends Component {


    render() {
        return (
            <React.Fragment>
                <Tabs>
                    <TabList>
                        <Tab>
                            <TabLink onClick={this.props.setLocalView} className="lesson-nav" id="lesson_nav__list">
                                <span>List</span>
                            </TabLink>
                        </Tab>
                        <Tab>
                            <TabLink onClick={this.props.setLocalView} className="lesson-nav" id="lesson_nav__add">
                                <span>Add</span>
                            </TabLink>
                        </Tab>
                    </TabList>
                </Tabs>
            </React.Fragment>
        )
    }
}

export default LessonNav
