import React from 'react';
import TalentPath from './TalentPath';
import PointsDisplay from './PointsDisplay';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      pointsSpent: 0,
      talent1Points: 0,
      talent2Points: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  //For all event handlers:
  //talentNum = id number of talent path (1 or 2)
  //level = number representing where the target item is in its talent path order
  handleClick(talentNum, level) {
    if (
      this.state.pointsSpent < 6 &&
      level === this.state[`talent${talentNum}Points`] + 1
    ) {
      this.setState({
        [`talent${talentNum}Points`]: level,
        pointsSpent: this.state.pointsSpent + 1,
      });
    }
  }

  handleContextMenu(talentNum, level, event) {
    event.preventDefault();
    if (level === this.state[`talent${talentNum}Points`]) {
      this.setState({
        [`talent${talentNum}Points`]: level - 1,
        pointsSpent: this.state.pointsSpent - 1,
      });
    }
  }

  //allows for full functionality on a touch screen
  handleTouchEnd(talentNum, level, event) {
    this.handleClick(talentNum, level);
    this.handleContextMenu(talentNum, level, event);
  }

  render() {
    const { pointsSpent, talent1Points, talent2Points } = this.state;
    return (
      <div id="main">
        <div id="title">
          TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
        </div>
        <div id="paths">
          <TalentPath
            talentNum={1}
            points={talent1Points}
            pointsSpent={pointsSpent}
            handleClick={this.handleClick}
            handleContextMenu={this.handleContextMenu}
            handleTouchEnd={this.handleTouchEnd}
          />
          <TalentPath
            talentNum={2}
            points={talent2Points}
            pointsSpent={pointsSpent}
            handleClick={this.handleClick}
            handleContextMenu={this.handleContextMenu}
            handleTouchEnd={this.handleTouchEnd}
          />
        </div>
        <PointsDisplay spent={pointsSpent} />
      </div>
    );
  }
}
