import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';


class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
   
    return (
      <div>
        {this.props.posts.reverse().map(post => {
          return(
            <div className='row' key={post._id}>
              <div className='col s12 m12'>
                <div className='card'>
                  <div className='card-title' style={{padding: '24px', margin: 0}}>
                    <h4 style={{margin: 0}}>{post.title}</h4>
                    <p style={{margin: 0}}>{post.author}</p>
                  </div>
                  <div className='card-content' style={{paddingTop:0}}>
                    <p>{post.body}</p>
                    <p className='right'>{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = ({ posts }) => posts;

export default connect(mapStateToProps, { fetchPosts })(PostsList);
