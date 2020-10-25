import {FetchMock} from 'jest-fetch-mock';
import {UserService} from '../../src/services/userService';

describe('UserService', () => {
  const fetchMock = fetch as FetchMock;
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('logs the user in', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        token: 'mytoken',
      }),
    );

    const user = await (
      await UserService.postLogin({username: 'testuser', password: 'abcd1234'})
    ).json();

    expect(user).toEqual({token: 'mytoken'});
    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:5000/api/users/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: 'testuser', password: 'abcd1234'}),
      },
    );
  });

  it('registers a user', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        token: 'mytoken',
      }),
    );

    const user = await (
      await UserService.postRegister({
        username: 'testuser',
        password: 'abcd1234',
      })
    ).json();

    expect(user).toEqual({token: 'mytoken'});
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: 'testuser', password: 'abcd1234'}),
    });
  });

  it('gets topten users', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {skill: 100, username: 'testUser', rank: 2},
        {skill: 200, username: 'testUser2', rank: 1},
      ]),
    );

    const allUsers = await (await UserService.getTopTenUsers()).json();
    expect(allUsers.length).toStrictEqual(2);

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:5000/api/users/topten',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    allUsers.forEach((user: {username: any; skill: any; rank: any}) => {
      expect(user.username).toBeDefined();
      expect(user.skill).toBeDefined();
      expect(user.rank).toBeDefined();
    });
  });

  it('gets users around your rank', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {skill: 100, username: 'testUser', rank: 2},
        {skill: 200, username: 'testUser2', rank: 1},
      ]),
    );

    const allUsers = await (
      await UserService.getUsersAroundCurrUsersRank('mytoken')
    ).json();
    expect(allUsers.length).toStrictEqual(2);

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:5000/api/users/aroundyourrank',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer mytoken',
        },
      },
    );

    allUsers.forEach((user: {username: any; skill: any; rank: any}) => {
      expect(user.username).toBeDefined();
      expect(user.skill).toBeDefined();
      expect(user.rank).toBeDefined();
    });
  });
});
