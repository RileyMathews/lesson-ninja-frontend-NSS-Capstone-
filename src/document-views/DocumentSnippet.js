import React, { Component } from 'react'
import { Media, MediaLeft, MediaContent, Content, MediaRight, Delete } from 'bloomer'

/*  
    module: document snippet component
    author: riley mathews
    purpose: to represent a document object from the database in a shorter list view
*/


class DocumentSnippet extends Component {


    render() {
        return (
            <React.Fragment>
                <Media>
                    <MediaLeft>
                    </MediaLeft>
                    <MediaContent>
                        <Content>
                            <p>
                                <strong>{this.props.document.name}</strong>
                                <br />
                                <a href={this.props.document.s3_url} target="blank">view</a>
                                <span>   </span>
                                <a href={this.props.document.s3_url} download>download</a>
                            </p>
                        </Content>
                        
                    </MediaContent>
                    <MediaRight><Delete onClick={() => this.props.deleteDocument(this.props.document.s3_key, this.props.document.url)}/></MediaRight>
                </Media>
            </React.Fragment>
        )
    }
}

export default DocumentSnippet
