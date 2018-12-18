import * as React from 'react';
import { connect } from 'react-redux';
import { createAction } from 'redux-actions';
import { Input, Checkbox } from 'antd';
import { ADD_TODO_THINGS } from 'constants/actionTypes/home';
import './index.less';

interface IProps {
  thingsList: any;
  addTodoThings(payload: any): any
}

class Home extends React.Component<IProps, any> {

  public handlePressEnter = (e: any) => {
    const { addTodoThings } = this.props;
    addTodoThings({
      content: e.target.value,
      hasDone: false,
      time: new Date().getTime()
    });
  }

  public handleChange = () => {
    console.log('tdo');
  }

  public render() {
    const {
      thingsList
    } = this.props;
    return (
      <div className="home-page">
        <div>
          <Input size="large" placeholder="things todo" onPressEnter={this.handlePressEnter} />
        </div>
        <div className="content">
          {
            thingsList.map((things: any) => {
              return <div key={things.time} className="hp-row"><Checkbox onChange={this.handleChange}>{things.content}</Checkbox></div>
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any, props: any) => {
  return {
    thingsList: state.home.thingsList
  }
};
const mapDispatchToProps = {
  addTodoThings: createAction<any>(ADD_TODO_THINGS),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);