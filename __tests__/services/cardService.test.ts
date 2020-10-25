import { FetchMock } from 'jest-fetch-mock';
import { CardService } from '../../src/services/cardService'

describe('CardService', () => {
  const fetchMock = fetch as FetchMock;
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('returns a single card', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'TestAnimal',
        type: 'Herbivore',
      }),
    );

    const card = await CardService.getCard(1);

    expect(card).toEqual({ name: 'TestAnimal', type: 'Herbivore' });
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:5000/api/cards/id/1', undefined);
  });

  it('returns multiple cards', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          name: 'TestAnimal',
          type: 'Herbivore',
        },
        {
          name: 'TestAnimal2',
          type: 'Herbivore',
        },
      ]),
    );

    const card = await (await CardService.getCards()).json();

    expect(card).toEqual([
      {
        name: 'TestAnimal',
        type: 'Herbivore',
      },
      {
        name: 'TestAnimal2',
        type: 'Herbivore',
      },
    ]);
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:5000/api/cards', undefined);
  });

  it('returns owned cards', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          name: 'TestAnimal',
          type: 'Herbivore',
        },
        {
          name: 'TestAnimal2',
          type: 'Herbivore',
        },
      ]),
    );

    const card = await (await CardService.getOwnedCards('mytoken')).json();

    expect(card).toEqual([
      {
        name: 'TestAnimal',
        type: 'Herbivore',
      },
      {
        name: 'TestAnimal2',
        type: 'Herbivore',
      },
    ]);
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:5000/api/cards/owned', {
      headers: { Accept: 'application/json', Authorization: 'Bearer mytoken', 'Content-Type': 'application/json' },
    });
  });
});
