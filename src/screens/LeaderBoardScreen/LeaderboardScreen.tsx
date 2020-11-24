import * as React from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {UserService} from '../../services/userService';
import {User} from '../../models/user';
import UserRow from '../../components/UserRow';
import styles from './LeaderboardScreen.style';
import Orientation from 'react-native-orientation-locker';
import Header from '../../components/Header/Header';

interface UserSkillRankAndUsername {
  rank: number;
  username: string;
  skill: string;
}

interface LeaderboardState {
  userTopTen: UserSkillRankAndUsername[];
  userAroundYourRank: UserSkillRankAndUsername[];
  error: string;
}

interface LeaderboardProps {
  user?: User;
}

class LeaderboardScreen extends React.Component<
  LeaderboardProps,
  LeaderboardState
> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      userTopTen: [],
      userAroundYourRank: [],
      error: '',
    };
  }

  async componentDidMount() {
    Orientation.lockToPortrait();
    await this.getUsersTopTen();
    await this.getUserAround();
  }

  async getUsersTopTen(): Promise<void> {
    const topTenUsersRes = await UserService.getTopTenUsers();
    const topTenUsers = await topTenUsersRes.json();

    this.setState({
      userTopTen: topTenUsers,
    });
    this.roundUserSkill();
  }
  /*
  async getUserAround(): Promise<void> {
    const userAroundRes = await UserService.getUsersAroundCurrUsersRank();
    const userAround = await userAroundRes.json();

    this.setState({
      userAroundYourRank: userAround,
    });
    this.roundUserSkill();
  }*/

  private roundUserSkill() {
    this.state.userTopTen.forEach((value) => {
      value.skill = Math.round(value.skill);
    });
    /*
    this.state.userAroundYourRank.forEach((value) => {
      value.skill = Math.round(value.skill);
    });*/
  }

  private renderUserRow(
    data: ListRenderItemInfo<UserSkillRankAndUsername>,
  ): JSX.Element {
    return (
      <UserRow
        rank={data.item.rank}
        username={data.item.username}
        skill={data.item.skill}
      />
    );
  }

  render(): JSX.Element {
    return (
      <>
        <View style={styles.Background}>
          <Header title="Leaderboard" style={styles.HeaderTextBox} />
          <View style={styles.RankBox}>
            <View style={styles.Ranks}>
              <Text style={styles.LeaderboardText}>Top ten players</Text>
              <FlatList
                data={this.state.userTopTen}
                renderItem={(data) => this.renderUserRow(data)}
                keyExtractor={(data) => data.rank}
              />
            </View>
            <View style={styles.Ranks}>
              <Text style={styles.LeaderboardText}>Players around you</Text>
              <FlatList
                data={this.state.userTopTen}
                renderItem={(data) => this.renderUserRow(data)}
                keyExtractor={(data) => data.rank}
              />
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default LeaderboardScreen;
