import { FetchMock } from 'jest-fetch-mock';
import { DeckService } from '../../src/services/deckService';

describe('DeckService', () => {
  const fetchMock = fetch as FetchMock;
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('gets a users deck', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'TestDeck',
        cards: [],
      }),
    );

    const deck = await (await DeckService.getDeck('mytoken')).json();

    expect(deck).toEqual({
      name: 'TestDeck',
      cards: [],
    });
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:5000/api/deck', {
      method: 'GET',
      headers: { Authorization: 'Bearer mytoken' },
    });
  });

  it('updates a deck', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'TestDeck2',
        cards: [],
      }),
    );

    const deck = await (await DeckService.patchDeck('mytoken', 'TestDeck2', [])).json();

    expect(deck).toEqual({
      name: 'TestDeck2',
      cards: [],
    });
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:5000/api/deck', {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer mytoken',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'TestDeck2',
        cards: [],
      }),
    });
  });

  it('creates a deck', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'TestDeck3',
        cards: [],
      }),
    );

    const deck = await (await DeckService.postDeck('mytoken', 'TestDeck3', [])).json();

    expect(deck).toEqual({
      name: 'TestDeck3',
      cards: [],
    });
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:5000/api/deck', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer mytoken',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'TestDeck3',
        cards: [],
      }),
    });
  });

  it('gets deckspaces', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        used: 1,
        owned: 3,
      }),
    );

    const deck = await (await DeckService.getDeckSpaces('mytoken')).json();

    expect(deck).toEqual({
      used: 1,
      owned: 3,
    });
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:5000/api/deck/spaces', {
      method: 'GET',
      headers: { Authorization: 'Bearer mytoken' },
    });
  });
});
