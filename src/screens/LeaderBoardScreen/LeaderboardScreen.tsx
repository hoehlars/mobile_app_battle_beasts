import * as React from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {UserService} from '../../services/userService';
import {User} from '../../models/user';
import {AsyncStorageService} from '../../services/asyncStorage';
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
  loggedInUsername: string;
  loggedInUserToken: string;
}

interface LeaderboardProps {
  user?: User;
}

class LeaderboardScreen extends React.Component<
  LeaderboardProps,
  LeaderboardState
> {
  constructor(props: Readonly<LeaderboardProps>) {
    super(props);
    this.state = {
      userTopTen: [],
      userAroundYourRank: [],
      error: '',
      loggedInUsername: '',
      loggedInUserToken: '',
    };
  }

  async componentDidMount() {
    Orientation.lockToPortrait();
    await this.getLoggedInUser();
    await this.getUsersTopTen();
    await this.getUserAround();
  }

  async getLoggedInUser(): Promise<void> {
    const loggedInUser = await AsyncStorageService.readUser();
    this.setState({
      loggedInUsername: loggedInUser!.username,
      loggedInUserToken: loggedInUser!.token,
    });
  }

  async getUsersTopTen(): Promise<void> {
    const topTenUsersRes = await UserService.getTopTenUsers();
    const topTenUsers = await topTenUsersRes.json();

    this.setState({
      userTopTen: topTenUsers,
    });
    this.roundUserSkill();
  }

  async getUserAround(): Promise<void> {
    const userAroundRes = await UserService.getUsersAroundCurrUsersRank(
      this.state.loggedInUserToken,
    );
    const userAround = await userAroundRes.json();

    this.setState({
      userAroundYourRank: userAround,
    });
    this.roundUserSkill();
  }

  private roundUserSkill() {
    this.state.userTopTen.forEach((value) => {
      value.skill = Math.round(Number.parseInt(value.skill, 10)).toString();
    });
    this.state.userAroundYourRank.forEach((value) => {
      value.skill = Math.round(Number.parseInt(value.skill, 10)).toString();
    });
  }

  private renderUserRow(
    data: ListRenderItemInfo<UserSkillRankAndUsername>,
  ): JSX.Element {
    return (
      <UserRow
        rank={data.item.rank}
        username={data.item.username}
        skill={data.item.skill}
        loggedInUsername={this.state.loggedInUsername}
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
              <Text style={styles.LeaderboardText} testID="topTenTitle">
                Top ten players
              </Text>
              <FlatList
                testID="topTenList"
                data={this.state.userTopTen}
                renderItem={(data) => this.renderUserRow(data)}
                keyExtractor={(data) => data.rank.toString()}
              />
            </View>
            <View style={styles.Ranks}>
              <Text style={styles.LeaderboardText} testID="aroundYourRankTitle">
                Players around you
              </Text>
              <FlatList
                testID="aroundYourRankList"
                data={this.state.userAroundYourRank}
                renderItem={(data) => this.renderUserRow(data)}
                keyExtractor={(data) => data.rank.toString()}
              />
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default LeaderboardScreen;
